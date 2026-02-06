import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    const settings = await client.fetch(`
      *[_type == "availability"][0]{
        workDays,
        maxAdvanceBookingDays
      }
    `);

    return Response.json(settings || {});
  } catch (error) {
    console.error('Error fetching settings:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}