import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { newsPosts, type NewsPost } from "@/lib/api/data";

type Params = { slug: string };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readingTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function generateStaticParams(): Params[] {
  return newsPosts.map((p: NewsPost) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const sorted: NewsPost[] = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const index = sorted.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = sorted[index];
  const newer = index > 0 ? sorted[index - 1] : null;
  const older = index < sorted.length - 1 ? sorted[index + 1] : null;
  const paragraphs = post.body.split(/\n\s*\n/);

  return (
    <>
      <div className="bg-paper border-b border-line">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-20 md:pb-14">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-harbor hover:text-harbor-dark font-medium"
          >
            <ArrowLeft size={14} /> All news
          </Link>

          <div className="flex flex-wrap items-center gap-3 mt-6 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-harbor/10 text-harbor-dark">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate">
              <Calendar size={12} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate">
              <Clock size={12} /> {readingTime(post.body)} min read
            </span>
          </div>

          <h1 className="font-display font-bold text-3xl md:text-5xl text-ink leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-5 text-ink/80 leading-relaxed text-[17px]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-line bg-foam p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-ink/75">
            Questions about coverage or lead times at a specific port?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-harbor px-5 py-2.5 text-sm text-white font-medium hover:bg-harbor-dark transition-colors whitespace-nowrap"
          >
            Ask the duty desk
          </Link>
        </div>
      </article>

      {(newer || older) && (
        <nav
          aria-label="More articles"
          className="border-t border-line bg-paper"
        >
          <div className="mx-auto max-w-3xl px-6 py-10 grid sm:grid-cols-2 gap-5">
            {older ? (
              <Link
                href={`/news/${older.slug}`}
                className="group rounded-xl border border-line p-5 hover:border-harbor/30 hover:bg-foam transition-colors"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-slate mb-1">
                  <ArrowLeft size={12} /> Older
                </span>
                <div className="font-display font-semibold text-ink">
                  {older.title}
                </div>
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link
                href={`/news/${newer.slug}`}
                className="group rounded-xl border border-line p-5 hover:border-harbor/30 hover:bg-foam transition-colors sm:text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-slate mb-1 sm:justify-end w-full">
                  Newer <ArrowRight size={12} />
                </span>
                <div className="font-display font-semibold text-ink">
                  {newer.title}
                </div>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      )}
    </>
  );
}
