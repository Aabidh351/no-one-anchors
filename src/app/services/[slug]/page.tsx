import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";
import { services, type Service } from "@/lib/api/data";

export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service: Service | undefined = services.find((s) => s.slug === slug);
if (!service) notFound();

const otherServices: Service[] = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="bg-paper border-b border-line">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-20 md:pb-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-harbor hover:text-harbor-dark font-medium"
          >
            <ArrowLeft size={14} /> All services
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink max-w-2xl leading-tight mt-4">
            {service.name}
          </h1>
          <p className="mt-5 text-lg text-ink/70 max-w-xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-[1fr_1fr] gap-12">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink mb-5">What&apos;s covered</h2>
          <ul className="space-y-3">
            {service.scope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/80">
                <span className="w-5 h-5 rounded-full bg-harbor/10 text-harbor flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-foam border border-line rounded-xl p-8 h-fit">
          <h3 className="font-display font-semibold text-xl text-ink mb-2">
            Need this at your next port?
          </h3>
          <p className="text-sm text-ink/70 mb-6 leading-relaxed">
            Send vessel and ETA details through our inquiry form and the duty
            desk will come back with availability and pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-harbor px-5 py-3 text-sm text-white font-medium hover:bg-harbor-dark transition-colors"
          >
            Request a quote
          </Link>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="bg-paper border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display font-semibold text-2xl text-ink mb-6">Other services</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="border border-line rounded-lg p-5 hover:border-harbor/30 hover:bg-foam transition-colors"
                >
                  <h3 className="font-display font-semibold text-ink mb-1">{s.name}</h3>
                  <p className="text-sm text-ink/60">{s.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}