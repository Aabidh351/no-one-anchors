import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { newsPosts, type NewsPost } from "@/lib/api/data";

export const metadata: Metadata = {
  title: "News",
  description: "Port updates, lead times, and notes from NoOne Anchors.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsPage() {
  const sorted: NewsPost[] = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Port notes & updates"
        description="Lead times, coverage changes and company news from across our network."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Featured */}
        {featured && (
          <Link
            href={`/news/${featured.slug}`}
            className="group animate-fade-up relative block overflow-hidden rounded-2xl border border-line bg-paper p-8 md:p-10 hover:border-harbor/30 hover:shadow-lg hover:shadow-harbor/10 transition-all duration-300"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-harbor/10 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-brass/15 text-brass">
                  Latest
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-harbor/10 text-harbor-dark">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate">
                  <Calendar size={12} /> {formatDate(featured.date)}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-ink max-w-3xl leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-harbor font-medium">
                Read article
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {rest.map((post: NewsPost, i: number) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                style={{ animationDelay: `${(i + 1) * 70}ms` }}
                className="group animate-fade-up flex flex-col rounded-xl border border-line bg-paper p-6 hover:border-harbor/30 hover:shadow-md hover:shadow-harbor/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-harbor/10 text-harbor-dark">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-ink mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-harbor font-medium">
                  Read more
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
