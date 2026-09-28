import type { Metadata } from "next";
import Link from "next/link";
import { services, type Service } from "@/lib/api/data";
import {
  Anchor,
  UtensilsCrossed,
  LifeBuoy,
  Wrench,
  Fuel,
  ClipboardList,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Deck and engine stores, provisions, safety equipment, technical spares, bunkering, and husbandry services for vessels in port.",
};

const icons: Record<string, LucideIcon> = {
  "deck-engine-stores": Anchor,
  provisions: UtensilsCrossed,
  "safety-equipment": LifeBuoy,
  "technical-spares": Wrench,
  bunkering: Fuel,
  husbandry: ClipboardList,
};

export default async function ServicesPage() {


  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything alongside needs, under one call."
        description="Six service lines, coordinated by a single duty desk so your agent isn't juggling five suppliers for one port call."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service: Service, i:number) => {
            const Icon = icons[service.slug] ?? Anchor;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group animate-fade-up border border-line rounded-xl p-7 bg-paper hover:border-harbor/30 hover:shadow-lg hover:shadow-harbor/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-harbor/10 flex items-center justify-center mb-5 group-hover:bg-harbor group-hover:text-white text-harbor transition-colors duration-300">
                  <Icon size={21} />
                </div>
                <h2 className="font-display font-semibold text-xl text-ink mb-2">
                  {service.name}
                </h2>
                <p className="text-sm text-ink/65 leading-relaxed mb-4">
                  {service.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-harbor font-medium">
                  View details
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}