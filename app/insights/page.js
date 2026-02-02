import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";

const insights = [
  {
    slug: "navigating-complexity",
    title: "Navigating Complexity in Leadership",
    excerpt:
      "Why clarity matters most when decisions are hardest to make.",
    date: "January 2026",
  },
  {
    slug: "strategy-vs-execution",
    title: "Strategy vs Execution",
    excerpt:
      "Bridging the gap between vision and operational reality.",
    date: "December 2025",
  },
];

export default function InsightsPage() {
  return (
    <PageWrapper
      title="Insights"
      intro="Reflections, commentary, and perspectives on leadership, strategy, and governance."
    >
      <div className="max-w-3xl space-y-10">
        {insights.map((post) => (
          <article key={post.slug}>
            <p className="text-sm text-muted-foreground mb-2">
              {post.date}
            </p>
            <h3 className="text-xl font-medium mb-2">
              <Link href={`/insights/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            <p className="text-muted-foreground leading-7">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
