import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    const query = `*[_type == "insight"] | order(date desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      type,
      image,
      date,
      readTime,
      duration,
      videoSource,
      videoUrl,
      videoFile,
      isFeatured,
      order
    }`;
    
    const data = await client.fetch(query);
    
    return Response.json({ insights: data });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}