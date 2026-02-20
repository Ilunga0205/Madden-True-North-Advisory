// app/api/og-image/route.js

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return Response.json({ error: 'No URL provided' }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        // Pretend to be a browser so sites don't block the request
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
      },
      next: { revalidate: 86400 }, // cache for 24 hours
    });

    const html = await res.text();

    // Extract og:image
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);

    // Extract og:title as fallback info
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);

    const image = ogImageMatch?.[1] || null;
    const title = ogTitleMatch?.[1] || null;

    if (!image) {
      return Response.json({ image: null, title }, { status: 200 });
    }

    // Resolve relative URLs
    const resolvedImage = image.startsWith('http') ? image : new URL(image, url).href;

    return Response.json({ image: resolvedImage, title });
  } catch (error) {
    return Response.json({ error: error.message, image: null }, { status: 200 });
  }
}