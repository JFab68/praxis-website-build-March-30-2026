"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface NewsGridProps {
  articles: NewsArticle[];
  className?: string;
}

export default function NewsGrid({ articles, className }: NewsGridProps) {
  return (
    <section className={`section ${className || ""}`}>
      <div className="section-inner">
        <SectionHeader
          title="News & Research"
          subtitle="Analysis, advocacy, and updates from the front lines of criminal legal reform in Arizona."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card flex flex-col p-6 transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,128,0.55),0_0_0_1px_rgba(0,212,255,0.20),inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              {/* Date */}
              <time
                dateTime={article.date}
                className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-electric"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {article.date}
              </time>

              {/* Title */}
              <h3
                className="mb-3 text-lg font-bold leading-snug text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p
                className="mb-6 flex-1 text-sm leading-relaxed text-[#C0C0D0]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {article.excerpt}
              </p>

              {/* Read More */}
              <Link
                href={`/news/${article.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-[#7FE9FF]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Read More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/news" variant="secondary" size="md">
            All News &amp; Research
          </Button>
        </div>
      </div>
    </section>
  );
}
