import { google } from 'googleapis';
import { client } from '@/sanity/lib/client';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';

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

    if (!settings) {
      return Response.json({ 
        error: 'Availability not configured. Please set up in Sanity.' 
      }, { status: 500 });
    }

    const tz = settings.timezone || 'Africa/Johannesburg';

    // ── Check blockedDates ──
    if (settings.blockedDates && settings.blockedDates.includes(date)) {
      return Response.json({ slots: [], message: 'Not available on this date' });
    }

    // ── Check max advance booking days ──
    const selectedDate = new Date(date + 'T12:00:00');
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + (settings.maxAdvanceBookingDays || 90));
    if (selectedDate > maxDate) {
      return Response.json({ 
        slots: [], 
        message: `Bookings only available up to ${settings.maxAdvanceBookingDays} days in advance` 
      });
    }

    // ── Check if it's a work day ──
    const dayCheck = new Date(date + 'T12:00:00');
    const dayName = dayCheck.toLocaleDateString('en-US', { weekday: 'long' });
    console.log('📋 Day:', dayName, '| Work days:', settings.workDays);

    if (!settings.workDays.includes(dayName)) {
      return Response.json({ slots: [], message: 'Not available on this day' });
    }

    // ── Setup Google Calendar ──
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // ── Fetch Google Calendar events ──
    // fromZonedTime converts SAST time to UTC for the API query
    const dayStartUTC = fromZonedTime(`${date}T00:00:00`, tz);
    const dayEndUTC = fromZonedTime(`${date}T23:59:59`, tz);

    console.log('📅 Querying Google between:', dayStartUTC.toISOString(), '->', dayEndUTC.toISOString());

    const eventsResponse = await calendar.events.list({
      calendarId: 'primary',
      timeMin: dayStartUTC.toISOString(),
      timeMax: dayEndUTC.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      timeZone: tz,
    });

    const googleEvents = eventsResponse.data.items || [];
    console.log('📊 Google events found:', googleEvents.length);
    googleEvents.forEach(e => console.log(' -', e.summary, '|', e.start.dateTime || e.start.date, '| transparency:', e.transparency || 'busy'));

    // Only block slots marked as busy (filter out 'Free' events)
    const bookedSlots = googleEvents
      .filter(event => event.transparency !== 'transparent')
      .map(event => ({
        start: new Date(event.start.dateTime || event.start.date + 'T00:00:00'),
        end: new Date(event.end.dateTime || event.end.date + 'T00:00:00'),
      }));

    // ── Fetch confirmed Sanity bookings as fallback ──
    const sanityBookings = await client.fetch(`
      *[_type == "booking" && bookingDate == $date && status == "confirmed"]{
        bookingTime
      }
    `, { date });

    console.log('📊 Sanity bookings:', sanityBookings.length);

    // ── Generate slots in SAST using date-fns-tz ──
    const slots = [];
    const now = new Date();

    // fromZonedTime: converts SAST slot times to UTC for accurate comparison
    let currentUTC = fromZonedTime(`${date}T${settings.startTime}:00`, tz);
    const endUTC = fromZonedTime(`${date}T${settings.endTime}:00`, tz);

    while (currentUTC < endUTC) {
      const slotEnd = new Date(currentUTC.getTime() + settings.slotDuration * 60000);

      if (slotEnd > endUTC) break;

      // toZonedTime: converts UTC back to SAST for display
      const localTime = toZonedTime(currentUTC, tz);
      const timeStr = `${String(localTime.getHours()).padStart(2, '0')}:${String(localTime.getMinutes()).padStart(2, '0')}`;

      const blockedByGoogle = bookedSlots.some(booked =>
        (currentUTC >= booked.start && currentUTC < booked.end) ||
        (slotEnd > booked.start && slotEnd <= booked.end) ||
        (currentUTC <= booked.start && slotEnd >= booked.end)
      );

      const blockedBySanity = sanityBookings.some(b => b.bookingTime === timeStr);
     // Minimum 24 hours lead time required
      const minimumNotice = new Date(now.getTime() + (24 * 60 * 60 * 1000));
      const isPast = currentUTC <= minimumNotice;

      if (!blockedByGoogle && !blockedBySanity && !isPast) {
        slots.push({
          time: timeStr,
          display: localTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
          available: true
        });
      }

      currentUTC = new Date(currentUTC.getTime() + (settings.slotDuration + (settings.bufferTime || 0)) * 60000);
    }

    console.log('✅ Available slots:', slots.length);
    return Response.json({ slots });

  } catch (error) {
    console.error('💥 Error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}