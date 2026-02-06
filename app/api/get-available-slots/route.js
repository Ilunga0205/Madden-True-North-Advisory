import { google } from 'googleapis';
import { client } from '@/sanity/lib/client';

export async function POST(request) {
  try {
    const { date } = await request.json();
    console.log('📅 Fetching slots for date:', date);

    // Fetch availability settings from Sanity
    const settings = await client.fetch(`
      *[_type == "availability"][0]{
        workDays,
        startTime,
        endTime,
        slotDuration,
        bufferTime,
        timezone,
        blockedDates,
        maxAdvanceBookingDays
      }
    `);

    console.log('⚙️ Sanity settings:', settings);

    if (!settings) {
      console.error('❌ No availability settings found in Sanity');
      return Response.json({ 
        error: 'Availability not configured. Please set up in Sanity.' 
      }, { status: 500 });
    }

    // Check if date is blocked
    if (settings.blockedDates && settings.blockedDates.includes(date)) {
      console.log('🚫 Date is blocked');
      return Response.json({ slots: [], message: 'This date is blocked' });
    }

    // Check if date is too far in advance
    const selectedDate = new Date(date);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + settings.maxAdvanceBookingDays);
    
    if (selectedDate > maxDate) {
      console.log('📆 Date too far in advance');
      return Response.json({ 
        slots: [], 
        message: `Bookings only available up to ${settings.maxAdvanceBookingDays} days in advance` 
      });
    }

    // Check if date is a work day
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    console.log('📋 Day name:', dayName);
    console.log('📋 Work days:', settings.workDays);
    
    if (!settings.workDays.includes(dayName)) {
      console.log('❌ Not a work day');
      return Response.json({ slots: [], message: 'Not available on this day' });
    }

    console.log('🔐 Setting up Google OAuth...');

    // Setup Google Calendar
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    console.log('📅 Fetching Google Calendar events...');

    // Get existing events for that day
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log('📊 Found events:', events.data.items.length);

    const bookedSlots = events.data.items.map(event => ({
      start: new Date(event.start.dateTime || event.start.date),
      end: new Date(event.end.dateTime || event.end.date),
    }));

    // Generate all possible time slots
    const slots = [];
    const [startHour, startMin] = settings.startTime.split(':').map(Number);
    const [endHour, endMin] = settings.endTime.split(':').map(Number);

    console.log('⏰ Start time:', settings.startTime, '→', startHour, startMin);
    console.log('⏰ End time:', settings.endTime, '→', endHour, endMin);

    let currentTime = new Date(date);
    currentTime.setHours(startHour, startMin, 0, 0);

    const endTime = new Date(date);
    endTime.setHours(endHour, endMin, 0, 0);

    while (currentTime < endTime) {
      const slotEnd = new Date(currentTime.getTime() + settings.slotDuration * 60000);
      
      // Check if slot conflicts with existing bookings
      const isBooked = bookedSlots.some(booked => 
        (currentTime >= booked.start && currentTime < booked.end) ||
        (slotEnd > booked.start && slotEnd <= booked.end) ||
        (currentTime <= booked.start && slotEnd >= booked.end)
      );

      // Check if slot is in the past
      const isPast = currentTime < new Date();

      if (!isBooked && !isPast && slotEnd <= endTime) {
        slots.push({
          time: currentTime.toTimeString().slice(0, 5),
          display: currentTime.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          }),
          available: true
        });
      }

      // Move to next slot (including buffer time)
      currentTime = new Date(currentTime.getTime() + (settings.slotDuration + settings.bufferTime) * 60000);
    }

    console.log('✅ Generated slots:', slots.length);

    return Response.json({ slots });

  } catch (error) {
    console.error('💥 Error getting slots:', error);
    console.error('💥 Error stack:', error.stack);
    return Response.json({ error: error.message }, { status: 500 });
  }
}