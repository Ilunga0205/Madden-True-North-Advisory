import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    console.log('🔍 Testing Sanity connection...');
    console.log('Project ID:', client.config().projectId);
    console.log('Dataset:', client.config().dataset);
    console.log('API Version:', client.config().apiVersion);
    
    // Get ALL documents
    const allDocs = await client.fetch(`*[]`);
    console.log('Total documents:', allDocs.length);
    
    // Get all document types
    const types = [...new Set(allDocs.map(d => d._type))];
    console.log('Document types:', types);
    
    // Get insights specifically
    const insights = await client.fetch(`*[_type == "insight"]`);
    console.log('Insights found:', insights.length);
    console.log('Insights:', insights);
    
    // Get bookings for comparison
    const bookings = await client.fetch(`*[_type == "booking"]`);
    console.log('Bookings found:', bookings.length);
    
    return Response.json({
      totalDocuments: allDocs.length,
      documentTypes: types,
      insightsCount: insights.length,
      insights: insights,
      bookingsCount: bookings.length,
      config: {
        projectId: client.config().projectId,
        dataset: client.config().dataset
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}