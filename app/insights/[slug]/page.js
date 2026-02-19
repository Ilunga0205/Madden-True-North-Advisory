// app/insights/[slug]/page.js
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function getYouTubeVideoId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function getVideoFileUrl(videoFile) {
  if (!videoFile?.asset?._ref) return null;
  const ref = videoFile.asset._ref;
  const [, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
}

async function getInsight(slug) {
  const query = `*[_type == "insight" && slug.current == $slug][0] {
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
    body
  }`;
  return client.fetch(query, { slug });
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) notFound();

  const formattedDate = format(new Date(insight.date), 'MMMM d, yyyy');
  const imageUrl = insight.image
    ? urlFor(insight.image).width(1200).height(630).url()
    : null;

  const youtubeId = insight.videoSource === 'youtube'
    ? getYouTubeVideoId(insight.videoUrl)
    : null;

  const uploadedVideoUrl = insight.videoSource === 'upload'
    ? getVideoFileUrl(insight.videoFile)
    : null;

  return (
    <main className="bg-white min-h-screen">
     

      {/* Back link */}
      <div className="bg-warm-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-4">
          <Link
            href="/insights"
            className="inline-flex items-center font-body text-sm text-stone-600 hover:text-brand transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-brand text-white font-body text-xs font-semibold rounded-full">
              {insight.category}
            </span>
            <span className="font-body text-sm text-stone-500">{formattedDate}</span>
            {insight.type === 'video' && insight.duration && (
              <span className="inline-flex items-center gap-1 font-body text-sm text-stone-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {insight.duration}
              </span>
            )}
            {insight.type === 'article' && insight.readTime && (
              <span className="font-body text-sm text-stone-500">{insight.readTime}</span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
            {insight.title}
          </h1>

          <p className="font-body text-xl text-stone-600 leading-relaxed max-w-3xl">
            {insight.excerpt}
          </p>
        </div>
      </section>

      {/* Video Player — YouTube */}
      {insight.type === 'video' && youtubeId && (
        <section className="bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={insight.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Video Player — Uploaded file */}
      {insight.type === 'video' && uploadedVideoUrl && (
        <section className="bg-black">
          <div className="max-w-5xl mx-auto">
            <video
              className="w-full"
              controls
              poster={imageUrl || undefined}
            >
              <source src={uploadedVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}

      {/* Cover image — articles only */}
      {insight.type === 'article' && imageUrl && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-sm">
            <Image
              src={imageUrl}
              alt={insight.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* Article body */}
      {insight.type === 'article' && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <div className="prose-insight max-w-3xl">
            {insight.body ? (
              // If you have @portabletext/react installed:
              // <PortableText value={insight.body} />
              // Otherwise a temporary fallback:
              <p className="font-body text-stone-600 italic">
                Article body will render here — install @portabletext/react and add the PortableText component.
              </p>
            ) : (
              <p className="font-body text-stone-600 italic">No content yet.</p>
            )}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-warm-white border-t border-stone-200 py-20 mt-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
            Explore more insights
          </h2>
          <p className="font-body text-lg text-stone-600 mb-8">
            More perspectives on leadership, strategy, and governance.
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center px-8 py-4 bg-brand text-white font-body font-semibold hover:bg-brand/90 transition-all"
          >
            View all insights
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}