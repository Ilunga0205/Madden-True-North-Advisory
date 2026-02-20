import { subscribeToMailchimp } from "@/lib/mailchimp";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const result = await subscribeToMailchimp(
      email,
      "", // no name on newsletter form
      ["Newsletter"]
    );

    if (!result.success) {
      return Response.json({ error: result.error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}