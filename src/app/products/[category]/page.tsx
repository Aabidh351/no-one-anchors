import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  productCategories,
  type ProductCategory,
  type ProductItem,
} from "@/lib/api/data";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return productCategories.map((c: ProductCategory) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat: ProductCategory | undefined = productCategories.find(
    (c) => c.slug === category,
  );
  if (!cat) notFound();

  const otherCategories: ProductCategory[] = productCategories.filter(
    (c) => c.slug !== category,
  );

  return (
    <>
      <div className="bg-paper border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-20 md:pb-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-harbor hover:text-harbor-dark font-medium"
          >
            <ArrowLeft size={14} /> All categories
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink mt-4">
            {cat.name}
          </h1>
          <p className="mt-4 text-lg text-ink/70 max-w-xl leading-relaxed">
            {cat.description}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="border border-line rounded-xl bg-paper overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1.2fr_1.5fr_auto] gap-6 px-6 py-3 bg-foam border-b border-line text-xs font-medium text-slate">
            <span>Item</span>
            <span>Specification</span>
            <span className="text-right">Availability</span>
          </div>

          {cat.items.map((item: ProductItem, i: number) => (
            <div
              key={item.name}
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-fade-up grid sm:grid-cols-[1.2fr_1.5fr_auto] gap-1 sm:gap-6 items-center px-6 py-5 border-b border-line last:border-none hover:bg-foam/70 transition-colors"
            >
              <div className="font-medium text-ink">{item.name}</div>
              <div className="text-sm text-ink/65">{item.spec}</div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm text-harbor hover:text-harbor-dark font-medium sm:justify-end mt-2 sm:mt-0"
              >
                Request quote
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-line bg-foam p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-1">
              Don&apos;t see what you need?
            </h2>
            <p className="text-sm text-ink/70">
              The list above is a sample. Send us your requirements and the duty
              desk will source it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-harbor px-6 py-3 text-sm text-white font-medium hover:bg-harbor-dark transition-colors whitespace-nowrap"
          >
            Request a quote
          </Link>
        </div>
      </section>

      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-display font-semibold text-2xl text-ink mb-6">
            Other categories
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherCategories.map((c: ProductCategory) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="border border-line rounded-lg p-5 hover:border-harbor/30 hover:bg-foam transition-colors"
              >
                <h3 className="font-display font-semibold text-ink mb-1">
                  {c.name}
                </h3>
                <p className="text-sm text-ink/60">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
