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
    articleSource,
    articleUrl,
    isFeatured,
    body
  }`;
  return client.fetch(query, { slug });
}

async function getRelated(slug, category) {
  const query = `*[_type == "insight" && slug.current != $slug && category == $category] | order(date desc)[0..2] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    type,
    date,
    readTime,
    duration,
  }`;
  return client.fetch(query, { slug, category });
}

// Fetch OG image server-side — runs at request time, cached for 24h
async function getOgImage(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
      next: { revalidate: 86400 },
    });
    const html = await res.text();

    const match =
      html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);

    const image = match?.[1] || null;
    if (!image) return null;

    // Resolve relative URLs
    return image.startsWith('http') ? image : new URL(image, url).href;
  } catch {
    return null;
  }
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) notFound();

  const formattedDate = format(new Date(insight.date), 'MMMM d, yyyy');

  const isExternalArticle = insight.type === 'article' && insight.articleSource === 'link' && insight.articleUrl;

  // For external articles: use Sanity image if uploaded, otherwise auto-fetch OG image
  let imageUrl = insight.image
    ? urlFor(insight.image).width(1200).height(630).url()
    : null;

  if (isExternalArticle && !imageUrl) {
    imageUrl = await getOgImage(insight.articleUrl);
  }

  const youtubeId = insight.videoSource === 'youtube'
    ? getYouTubeVideoId(insight.videoUrl)
    : null;

  const uploadedVideoUrl = insight.videoSource === 'upload'
    ? getVideoFileUrl(insight.videoFile)
    : null;

  const related = await getRelated(slug, insight.category);

  return (
    <main className="bg-white min-h-screen">

      {/* Font definitions */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
        @font-face {
          font-family: 'The Seasons';
          src: url('https://assets.codepen.io/6060109/TheSeasons-Bd.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        .font-display { font-family: 'The Seasons', serif; letter-spacing: -0.02em; font-weight: 700; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Back navigation */}
      <div className="bg-[#F6F4F1] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <Link
            href="/insights"
            className="inline-flex items-center font-body text-sm text-stone-500 hover:text-[#8FA89A] transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Hero header */}
      <section className="bg-[#F6F4F1] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-block px-3 py-1 bg-[#8FA89A] text-white font-body text-xs font-semibold rounded-full">
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
            {isExternalArticle && (
              <span className="inline-flex items-center gap-1 font-body text-xs text-stone-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                External article
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-[1.1] mb-6">
            {insight.title}
          </h1>

          <div className="border-l-4 border-[#8FA89A] pl-6 mb-10">
            <p className="font-body text-lg md:text-xl text-stone-600 leading-relaxed">
              {insight.excerpt}
            </p>
          </div>

          {/* External article CTA */}
          {isExternalArticle && (
            <div>
              <a
                href={insight.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#8FA89A] text-white font-body font-semibold hover:bg-[#7a9284] transition-all"
              >
                <span>Read full article</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="font-body text-xs text-stone-400 mt-3">
                Opens in a new tab · {new URL(insight.articleUrl).hostname.replace('www.', '')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cover image — auto OG or manually uploaded */}
      {imageUrl && (
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
          <div className="relative h-[400px] md:h-[520px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={insight.title}
              fill
              className="object-cover object-top"
              priority
              // OG images come from external domains — unoptimized avoids Next.js domain config
              unoptimized={isExternalArticle && !insight.image}
            />
          </div>
        </section>
      )}

      {/* Video — YouTube */}
      {insight.type === 'video' && youtubeId && (
        <section className="bg-[#1F1F1F]">
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

      {/* Video — Uploaded file */}
      {insight.type === 'video' && uploadedVideoUrl && (
        <section className="bg-[#1F1F1F]">
          <div className="max-w-5xl mx-auto">
            <video className="w-full" controls poster={imageUrl || undefined}>
              <source src={uploadedVideoUrl} type="video/mp4" />
            </video>
          </div>
        </section>
      )}

      {/* Written article body */}
      {insight.type === 'article' && !isExternalArticle && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <div className="max-w-3xl">
            {insight.body ? (
              <p className="font-body text-stone-600 italic">
                Article body will render here — install @portabletext/react and add the PortableText component.
              </p>
            ) : (
              <p className="font-body text-stone-600 italic">No content yet.</p>
            )}
          </div>
        </section>
      )}

      {/* Related insights */}
      {related?.length > 0 && (
        <section className="border-t border-stone-200 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-10">
              <span className="inline-block text-[#8FA89A] font-body text-xs font-semibold tracking-wider uppercase mb-2">
                More in {insight.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#1F1F1F]">
                Related insights
              </h2>
            </div>
            <div className="space-y-4">
              {related.map((item) => (
                <Link
                  key={item._id}
                  href={`/insights/${item.slug}`}
                  className="group block bg-[#F6F4F1] p-6 sm:p-8 border-l-4 border-[#8FA89A] hover:bg-[#E8EDE9] transition-all"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 bg-[#8FA89A] text-white font-body text-xs font-semibold rounded-full">
                          {item.category}
                        </span>
                        <span className="font-body text-sm text-stone-500">
                          {format(new Date(item.date), 'MMMM yyyy')}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl text-[#1F1F1F] group-hover:text-[#8FA89A] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-stone-600 leading-relaxed">{item.excerpt}</p>
                    </div>
                    <svg className="w-5 h-5 text-[#8FA89A] flex-shrink-0 group-hover:translate-x-2 transition-transform mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative py-32 overflow-hidden bg-[#8FA89A]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm font-medium rounded-full mb-8">
            Explore more
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            More perspectives
            <br />
            <span className="italic">worth reading</span>
          </h2>
          <p className="font-body text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            Articles and videos on leadership, strategy, and navigating complexity.
          </p>
          <Link
            href="/insights"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#8FA89A] font-body font-semibold hover:bg-white/90 transition-all"
          >
            <span>View all insights</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}