import { google } from 'googleapis';
import { client } from '@/sanity/lib/client';

export async function POST(request) {
  try {
    const { name, email, date, time } = await request.json();

    // Fetch settings from Sanity
    const settings = await client.fetch(`
      *[_type == "availability"][0]{
        timezone,
        slotDuration
      }
    `);

    // 🆕 CHECK 1: Is this exact slot already booked?
    const existingSlotBooking = await client.fetch(`
      *[_type == "booking" && bookingDate == $date && bookingTime == $time && status == "confirmed"][0]
    `, { date, time });

    if (existingSlotBooking) {
      return Response.json({ 
        error: 'This time slot is already booked. Please select another time.' 
      }, { status: 400 });
    }

    // 🆕 CHECK 2: Does this email already have a booking on this date?
    const existingEmailBooking = await client.fetch(`
      *[_type == "booking" && clientEmail == $email && bookingDate == $date && status == "confirmed"][0]
    `, { email, date });

    if (existingEmailBooking) {
      return Response.json({ 
        error: `You already have a booking on ${date} at ${existingEmailBooking.bookingTime}. Please choose a different date or cancel your existing booking first.` 
      }, { status: 400 });
    }

    // 🆕 CHECK 3 (OPTIONAL): Limit one booking per email per week/month
    // Uncomment if you want stricter limits
    /*
    const oneWeekFromDate = new Date(date);
    oneWeekFromDate.setDate(oneWeekFromDate.getDate() + 7);
    
    const recentBooking = await client.fetch(`
      *[_type == "booking" 
        && clientEmail == $email 
        && bookingDate >= $date 
        && bookingDate <= $weekEnd
        && status == "confirmed"][0]
    `, { 
      email, 
      date,
      weekEnd: oneWeekFromDate.toISOString().split('T')[0]
    });

    if (recentBooking) {
      return Response.json({ 
        error: 'You already have a booking scheduled within the next 7 days. Please wait until after your appointment to book again.' 
      }, { status: 400 });
    }
    */

    // Setup OAuth client with refresh token
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Parse date and time
    const startDateTime = new Date(`${date}T${time}`);
    const duration = settings?.slotDuration || 60;
    const endDateTime = new Date(startDateTime.getTime() + duration * 60 * 1000);

    // Create calendar event
    const event = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
        summary: `Consultation with ${name}`,
        description: `Client: ${name}\nEmail: ${email}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: settings?.timezone || 'Africa/Johannesburg',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: settings?.timezone || 'Africa/Johannesburg',
        },
        attendees: [
          { email: email }
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 },
          ],
        },
      },
      sendUpdates: 'all',
    });

    // Save booking to Sanity
    const sanityBooking = await client.create({
      _type: 'booking',
      clientName: name,
      clientEmail: email,
      bookingDate: date,
      bookingTime: time,
      status: 'confirmed',
      googleEventId: event.data.id,
      createdAt: new Date().toISOString()
    });

    console.log('✅ Booking created in Sanity:', sanityBooking._id);

    return Response.json({ 
      success: true, 
      eventId: event.data.id,
      link: event.data.htmlLink,
      bookingId: sanityBooking._id
    });

  } catch (error) {
    console.error('Booking error:', error);
    return Response.json({ 
      error: error.message 
    }, { status: 500 });
  }
}