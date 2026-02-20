import { google } from 'googleapis';
import { client } from '@/sanity/lib/client';
// Updated: uses blockedDates array in availability doc (no separate vacation doc needed)

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
      return Response.json({ 
        error: 'Availability not configured. Please set up in Sanity.' 
      }, { status: 500 });
    }

    const tz = settings.timezone || 'Africa/Johannesburg';

    // ── Check blockedDates from availability settings ──
    if (settings.blockedDates && settings.blockedDates.includes(date)) {
      console.log('🚫 Date is blocked via blockedDates');
      return Response.json({ slots: [], message: 'This date is not available' });
    }

    // ── Check max advance booking days ──
    const selectedDate = new Date(date + 'T00:00:00');
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + (settings.maxAdvanceBookingDays || 90));
    
    if (selectedDate > maxDate) {
      return Response.json({ 
        slots: [], 
        message: `Bookings only available up to ${settings.maxAdvanceBookingDays} days in advance` 
      });
    }

    // ── Check if it's a work day ──
    // Use date + T12:00:00 to avoid any timezone day-shift when getting day name
    const dayCheck = new Date(date + 'T12:00:00');
    const dayName = dayCheck.toLocaleDateString('en-US', { weekday: 'long' });
    console.log('📋 Day name:', dayName, '| Work days:', settings.workDays);
    
    if (!settings.workDays.includes(dayName)) {
      return Response.json({ slots: [], message: 'Not available on this day' });
    }

    // ── Setup Google Calendar ──
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // ── Fetch Google Calendar events for the day ──
    // Use explicit timezone-aware boundaries to avoid day-shift bug
    const [startHour, startMin] = settings.startTime.split(':').map(Number);
    const [endHour, endMin] = settings.endTime.split(':').map(Number);

    // Build time boundaries in the correct timezone using the date string directly
    const timeMin = new Date(`${date}T00:00:00`);
    const timeMax = new Date(`${date}T23:59:59`);

    console.log('📅 Fetching Google Calendar events between:', timeMin.toISOString(), '-', timeMax.toISOString());

    const eventsResponse = await calendar.events.list({
      calendarId: 'primary',
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      timeZone: tz,
    });

    const googleEvents = eventsResponse.data.items || [];
    console.log('📊 Google Calendar events found:', googleEvents.length);
    googleEvents.forEach(e => console.log(' -', e.summary, e.start.dateTime || e.start.date));

   // Only block slots for events marked as 'busy' (ignore 'free' events)
const bookedSlots = googleEvents
  .filter(event => event.transparency !== 'transparent') // 'transparent' = Free in Google
  .map(event => ({
    start: new Date(event.start.dateTime || event.start.date + 'T00:00:00'),
    end: new Date(event.end.dateTime || event.end.date + 'T00:00:00'),
  }));

    // ── Also fetch confirmed bookings from Sanity as a fallback ──
    const sanityBookings = await client.fetch(`
      *[_type == "booking" && bookingDate == $date && status == "confirmed"]{
        bookingTime
      }
    `, { date });

    console.log('📊 Sanity bookings found:', sanityBookings.length);

    // ── Generate available time slots ──
    const slots = [];
    const now = new Date();

    let currentTime = new Date(`${date}T${settings.startTime}:00`);
    const endTime = new Date(`${date}T${settings.endTime}:00`);

    while (currentTime < endTime) {
      const slotEnd = new Date(currentTime.getTime() + settings.slotDuration * 60000);

      if (slotEnd > endTime) break;

      const timeStr = currentTime.toTimeString().slice(0, 5); // e.g. "09:00"

      // Check against Google Calendar events
      const blockedByGoogle = bookedSlots.some(booked =>
        (currentTime >= booked.start && currentTime < booked.end) ||
        (slotEnd > booked.start && slotEnd <= booked.end) ||
        (currentTime <= booked.start && slotEnd >= booked.end)
      );

      // Check against Sanity bookings
      const blockedBySanity = sanityBookings.some(b => b.bookingTime === timeStr);

      // Check if slot is in the past
      const isPast = currentTime <= now;

      if (!blockedByGoogle && !blockedBySanity && !isPast) {
        slots.push({
          time: timeStr,
          display: currentTime.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          }),
          available: true
        });
      }

      currentTime = new Date(currentTime.getTime() + (settings.slotDuration + (settings.bufferTime || 0)) * 60000);
    }

    console.log('✅ Available slots generated:', slots.length);
    return Response.json({ slots });

  } catch (error) {
    console.error('💥 Error getting slots:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}