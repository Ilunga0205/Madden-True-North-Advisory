import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    // Check all availability documents
    const allDocs = await client.fetch(`*[_type == "availability"]`);
    
    console.log('📄 All availability documents:', allDocs);
    console.log('📊 Total documents found:', allDocs.length);

    return Response.json({ 
      count: allDocs.length,
      documents: allDocs 
    });

  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}