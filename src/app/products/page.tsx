import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
  Cog,
  LifeBuoy,
  UtensilsCrossed,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { productCategories, type ProductCategory } from "@/lib/api/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse deck stores, engine room stores, safety equipment, and provisions by category, or request a quote for specific items.",
};

const icons: Record<string, LucideIcon> = {
  "deck-stores": Anchor,
  "engine-stores": Cog,
  "safety-equipment": LifeBuoy,
  provisions: UtensilsCrossed,
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Stock catalog, browsable by category."
        description="A representative range. Availability and pricing depend on port and lead time, so request a quote for anything specific."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {productCategories.map((cat: ProductCategory, i: number) => {
            const Icon = icons[cat.slug] ?? Anchor;
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group animate-fade-up relative overflow-hidden border border-line rounded-xl p-8 bg-paper hover:border-harbor/30 hover:shadow-lg hover:shadow-harbor/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* soft corner glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-harbor/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-full bg-harbor/10 flex items-center justify-center text-harbor group-hover:bg-harbor group-hover:text-white transition-colors duration-300">
                    <Icon size={21} />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foam text-slate border border-line">
                    {cat.items.length} items
                  </span>
                </div>

                <h2 className="relative font-display font-semibold text-2xl text-ink mt-6 mb-2">
                  {cat.name}
                </h2>
                <p className="relative text-sm text-ink/65 leading-relaxed mb-5">
                  {cat.description}
                </p>
                <span className="relative inline-flex items-center gap-1.5 text-sm text-harbor font-medium">
                  Browse category
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
