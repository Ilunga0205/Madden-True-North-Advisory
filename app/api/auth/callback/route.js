import { google } from 'googleapis';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return Response.json({ error: 'No code provided' }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    // 🚨 IMPORTANT: Copy this refresh_token and add it to your .env
    console.log('\n\n🔐🔐🔐 COPY THIS REFRESH TOKEN 🔐🔐🔐');
    console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
    console.log('🔐🔐🔐 ADD IT TO YOUR .env.local FILE 🔐🔐🔐\n\n');

    return new Response(`
      <html>
        <body style="font-family: sans-serif; padding: 40px; max-width: 600px; margin: 0 auto;">
          <h1>✅ Authorization Successful!</h1>
          <p>Check your terminal/console for the refresh token.</p>
          <p>Copy the <code>GOOGLE_REFRESH_TOKEN</code> line and add it to your <code>.env.local</code> file.</p>
          <p>Then restart your dev server.</p>
          <hr>
          <p><a href="/contact">Go to Contact Page</a></p>
        </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
    
  } catch (error) {
    console.error('Auth error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}