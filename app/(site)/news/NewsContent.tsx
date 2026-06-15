"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { newsArticles, type NewsArticle } from "@/lib/news-data";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Category = "All" | "News" | "Research" | "Press" | "Legislation";

const categoryBadgeVariant: Record<string, "electric" | "gold" | "navy" | "maroon" | "crimson"> = {
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

export default function NewsContent() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "News", "Research", "Press", "Legislation"];

  const featuredArticles = newsArticles.filter((a) => a.featured);
  const featuredArticle = featuredArticles[0];

  const filteredArticles =
    activeFilter === "All"
      ? newsArticles.filter((a) => a.slug !== featuredArticle?.slug)
      : newsArticles.filter(
          (a) => a.category === activeFilter && a.slug !== featuredArticle?.slug
        );

  return (
    <>
      {/* Featured Article */}
      {featuredArticle && (
        <section className="section">
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/news/${featuredArticle.slug}`} className="group block">
                <GlassCard
                  variant="navy"
                  hover={false}
                  className="relative overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_16px_48px_rgba(0,0,128,0.55)]"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    {/* Featured image placeholder */}
                    <div className="flex h-48 w-full flex-shrink-0 items-center justify-center rounded-xl bg-[rgba(0,0,128,0.3)] md:h-56 md:w-72">
                      <svg
                        className="h-16 w-16 text-electric opacity-30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <Badge variant={categoryBadgeVariant[featuredArticle.category]}>
                          {featuredArticle.category}
                        </Badge>
                        <Badge variant="crimson">Featured</Badge>
                      </div>
                      <h2
                        className="mb-3 text-2xl font-bold text-white group-hover:text-electric transition-colors md:text-3xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {featuredArticle.title}
                      </h2>
                      <p
                        className="mb-3 text-sm text-text-muted"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {formatDate(featuredArticle.date)}
                      </p>
                      <p
                        className="text-[#C0C0D0] leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {featuredArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="section !pt-0">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "border-electric bg-[rgba(0,212,255,0.15)] text-electric"
                    : "border-[rgba(255,255,255,0.12)] bg-transparent text-[#C0C0D0] hover:border-electric/50 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <Link href={`/news/${article.slug}`} className="group block h-full">
                  <GlassCard className="flex h-full flex-col transition-shadow duration-300 group-hover:shadow-[0_16px_48px_rgba(0,0,128,0.55)]">
                    {/* Image placeholder */}
                    <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-[rgba(0,0,128,0.2)]">
                      <svg
                        className="h-10 w-10 text-electric opacity-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"
                        />
                      </svg>
                    </div>
                    <Badge
                      variant={categoryBadgeVariant[article.category]}
                      className="mb-3 self-start"
                    >
                      {article.category}
                    </Badge>
                    <h3
                      className="mb-2 text-lg font-bold text-white group-hover:text-electric transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="mb-3 text-sm text-text-muted"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {formatDate(article.date)}
                    </p>
                    <p
                      className="flex-1 text-sm text-[#C0C0D0] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {article.excerpt}
                    </p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard variant="navy" hover={false} className="text-center">
              <h3
                className="mb-3 text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stay in the Fight
              </h3>
              <p
                className="mx-auto mb-6 max-w-xl text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get updates on legislation, program openings, events, and victories. No noise —
                just signal.
              </p>
              <Button href="/take-action" variant="cta" size="lg">
                Subscribe to Updates
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
