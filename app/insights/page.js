"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import { format } from "date-fns";

// Image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url) {
  if (!url) return null;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : null;
}

// Helper function to get video file URL from Sanity
function getVideoFileUrl(videoFile) {
  if (!videoFile?.asset?._ref) return null;
  
  const [, id, extension] = videoFile.asset._ref.split('-');
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
}

const categories = ["All", "Leadership", "Strategy", "Governance", "Finance"];
const contentTypes = ["All", "Articles", "Videos"];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch insights from Sanity
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const query = `*[_type == "insight"] | order(date desc) {
          _id,
          title,
          slug,
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
        console.log("Fetched insights:", data);
        console.log("Total insights:", data.length);
        setInsights(data);
        setFilteredInsights(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching insights:", error);
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredInsights]);

  // Filter insights
  useEffect(() => {
    let filtered = insights;

    console.log("Starting filter with insights:", insights.length);
    console.log("Selected category:", selectedCategory);
    console.log("Selected type:", selectedType);

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
      console.log("After category filter:", filtered.length);
    }

    if (selectedType !== "All") {
      const typeMap = { Articles: "article", Videos: "video" };
      filtered = filtered.filter((item) => item.type === typeMap[selectedType]);
      console.log("After type filter:", filtered.length);
    }

    console.log("Final filtered insights:", filtered.length);
    setFilteredInsights(filtered);
  }, [selectedCategory, selectedType, insights]);

  const featuredInsight = insights.find(i => i.isFeatured) || insights[0];

  return (
    <main className="bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

        .font-display {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .font-body {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slideDown {
          opacity: 0;
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .bg-brand {
          background-color: #8FA89A;
        }

        .text-brand {
          color: #8FA89A;
        }

        .border-brand {
          border-color: #8FA89A;
        }

        .bg-warm-white {
          background-color: #F6F4F1;
        }

        .bg-charcoal {
          background-color: #1F1F1F;
        }

        .text-charcoal {
          color: #1F1F1F;
        }

        .filter-btn {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-btn.active {
          background-color: #8FA89A;
          color: white;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-warm-white overflow-hidden py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Insights & Perspectives
            </span>
          </div>

          <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              Thoughts on leadership, <span className="text-brand italic">strategy</span>, and growth
            </h1>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Articles, videos, and reflections on navigating complexity, strengthening governance, 
              and leading with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {!loading && featuredInsight && (
        <section className="py-16 scroll-reveal bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-4">
                Featured
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                Latest thinking
              </h2>
            </div>

            <FeaturedInsight insight={featuredInsight} />
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 scroll-reveal bg-warm-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Category Filters */}
            <div>
              <p className="font-body text-sm text-stone-600 mb-3 font-medium">Filter by topic:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-btn px-4 py-2 font-body text-sm font-medium rounded-full border ${
                      selectedCategory === cat
                        ? "active border-brand"
                        : "bg-white border-stone-300 text-stone-700 hover:border-brand"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Type Filters */}
            <div>
              <p className="font-body text-sm text-stone-600 mb-3 font-medium">Content type:</p>
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`filter-btn px-4 py-2 font-body text-sm font-medium rounded-full border ${
                      selectedType === type
                        ? "active border-brand"
                        : "bg-white border-stone-300 text-stone-700 hover:border-brand"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {loading ? (
            <div className="text-center py-20">
              <p className="font-body text-lg text-stone-600">Loading insights...</p>
            </div>
          ) : filteredInsights.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredInsights
                .filter(i => !featuredInsight || i._id !== featuredInsight._id)
                .map((insight, index) => (
                  <InsightCard key={insight._id} insight={insight} index={index} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-body text-lg text-stone-600">
                No content found for this filter combination.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
                className="mt-4 px-6 py-3 bg-brand text-white font-body font-semibold hover:bg-brand/90 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 scroll-reveal bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-white text-brand font-body text-sm font-semibold rounded-full mb-6">
                Stay informed
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                Get new insights <span className="text-brand italic">delivered</span>
              </h2>
            </div>

            <div className="md:col-span-3 space-y-6">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Receive new articles and videos directly to your inbox. Thoughtful perspectives 
                on leadership, strategy, and governance—without the noise.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-4 font-body bg-white border border-stone-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-brand text-white font-body font-semibold hover:bg-brand/90 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="font-body text-sm text-stone-600">
                Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <div className="inline-block px-4 py-2 bg-warm-white text-brand font-body text-sm font-semibold rounded-full mb-6">
              Topics we explore
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight max-w-4xl">
              The themes that <span className="text-brand italic">matter most</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TopicCard
              title="Strategic Clarity"
              description="Making sense of complexity. Building frameworks that illuminate paths forward. Asking better questions before seeking answers."
            />
            <TopicCard
              title="Leadership & Governance"
              description="The art of oversight. Balancing independence with support. Creating structures that enable better decisions."
            />
            <TopicCard
              title="Organizational Dynamics"
              description="How strategy translates to execution. Aligning vision with capability. Navigating change without losing momentum."
            />
            <TopicCard
              title="Financial Intelligence"
              description="Understanding the numbers that matter. Building systems that inform decisions. Creating clarity from data."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 scroll-reveal overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-body text-sm font-medium rounded-full mb-8">
            Work with us
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Facing a complex
            <br />
            <span className="italic">challenge?</span>
          </h2>
          
          <p className="font-body text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            If these perspectives resonate with what you&#39;re navigating, let&#39;s explore how we can help.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-brand font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20"
          >
            <span>Start a conversation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

function VideoPlayer({ insight }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  if (insight.videoSource === 'youtube' && insight.videoUrl) {
    const videoId = getYouTubeVideoId(insight.videoUrl);
    
    if (!videoId) return null;
    
    return (
      <div className="relative w-full h-full">
        {!isPlaying ? (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-brand ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={insight.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }
  
  if (insight.videoSource === 'upload' && insight.videoFile) {
    const videoUrl = getVideoFileUrl(insight.videoFile);
    
    if (!videoUrl) return null;
    
    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        controls
        poster={insight.image ? urlFor(insight.image).width(800).height(600).url() : undefined}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  
  return null;
}

function FeaturedInsight({ insight }) {
  const imageUrl = insight.image ? urlFor(insight.image).width(800).height(600).url() : '/images/placeholder.jpg';
  const formattedDate = format(new Date(insight.date), 'MMMM yyyy');

  return (
    <Link href={`/insights/${insight.slug.current}`}>
      <div className="group relative bg-white border border-stone-200 hover:border-brand overflow-hidden hover:shadow-xl transition-all">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image/Video */}
          <div className="relative h-[300px] md:h-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={insight.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {insight.type === "video" && <VideoPlayer insight={insight} />}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-brand text-white font-body text-xs font-semibold rounded-full">
                {insight.category}
              </span>
              <span className="font-body text-sm text-stone-500">
                {formattedDate}
              </span>
              {insight.type === "video" && insight.duration && (
                <span className="inline-flex items-center gap-1 font-body text-sm text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {insight.duration}
                </span>
              )}
              {insight.type === "article" && insight.readTime && (
                <span className="font-body text-sm text-stone-500">
                  {insight.readTime}
                </span>
              )}
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-charcoal group-hover:text-brand transition-colors mb-4 leading-tight">
              {insight.title}
            </h3>
            
            <p className="font-body text-lg text-stone-700 leading-relaxed mb-6">
              {insight.excerpt}
            </p>

            <div className="inline-flex items-center font-body text-brand group-hover:text-charcoal font-semibold transition-colors">
              {insight.type === "video" ? "Watch video" : "Read article"}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function InsightCard({ insight, index }) {
  const imageUrl = insight.image ? urlFor(insight.image).width(600).height(400).url() : '/images/placeholder.jpg';
  const formattedDate = format(new Date(insight.date), 'MMMM yyyy');

  return (
    <article className="scroll-reveal group" style={{ transitionDelay: `${index * 0.1}s` }}>
      <Link href={`/insights/${insight.slug.current}`}>
        <div className="bg-white border border-stone-200 hover:border-brand hover:shadow-lg transition-all overflow-hidden h-full flex flex-col">
          {/* Image/Video */}
          <div className="relative h-[240px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={insight.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {insight.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-3 py-1 bg-warm-white text-brand font-body text-xs font-semibold rounded-full">
                {insight.category}
              </span>
              <span className="font-body text-sm text-stone-500">
                {formattedDate}
              </span>
            </div>

            <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-brand transition-colors mb-3 leading-tight">
              {insight.title}
            </h3>
            
            <p className="font-body text-base text-stone-700 leading-relaxed mb-4 flex-1">
              {insight.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <span className="inline-flex items-center font-body text-brand group-hover:text-charcoal font-medium transition-colors text-sm">
                {insight.type === "video" ? "Watch video" : "Read article"}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {insight.type === "video" && insight.duration ? (
                <span className="inline-flex items-center gap-1 font-body text-sm text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {insight.duration}
                </span>
              ) : insight.readTime ? (
                <span className="font-body text-sm text-stone-500">
                  {insight.readTime}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function TopicCard({ title, description }) {
  return (
    <div className="group bg-white p-8 border border-stone-200 hover:border-brand hover:shadow-lg transition-all h-full">
      <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-brand transition-colors">
        {title}
      </h3>
      <p className="font-body text-lg text-stone-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}