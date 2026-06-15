import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { newsArticles, getArticleBySlug, getAllSlugs } from "@/lib/news-data";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

const categoryBadgeVariant: Record<string, "electric" | "gold" | "navy" | "maroon"> = {
  News: "electric",
  Research: "gold",
  Press: "navy",
  Legislation: "maroon",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.title} | Praxis Initiative`,
    description: article.excerpt,
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const related = newsArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="pt-[72px]">
      {/* Article Header */}
      <section className="section">
        <div className="section-inner">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/news"
              className="mb-8 inline-flex items-center gap-2 text-sm text-electric transition-colors hover:text-electric-soft"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to News &amp; Research
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <Badge variant={categoryBadgeVariant[article.category]}>
                {article.category}
              </Badge>
              <span
                className="text-sm text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {formatDate(article.date)}
              </span>
            </div>

            <h1
              className="mb-8 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section !pt-0">
        <div className="section-inner">
          <div className="mx-auto max-w-3xl space-y-6">
            {article.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section">
          <div className="section-inner">
            <h2
              className="mb-8 text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/news/${rel.slug}`} className="group block">
                  <GlassCard className="h-full transition-shadow duration-300 group-hover:shadow-[0_16px_48px_rgba(0,0,128,0.55)]">
                    <Badge
                      variant={categoryBadgeVariant[rel.category]}
                      className="mb-3"
                    >
                      {rel.category}
                    </Badge>
                    <h3
                      className="mb-2 text-lg font-bold text-white group-hover:text-electric transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {rel.title}
                    </h3>
                    <p
                      className="text-sm text-text-muted"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {formatDate(rel.date)}
                    </p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link + newsletter */}
      <section className="section">
        <div className="section-inner text-center">
          <Button href="/news" variant="secondary" size="lg">
            All News &amp; Research
          </Button>
        </div>
      </section>
    </main>
  );
}
