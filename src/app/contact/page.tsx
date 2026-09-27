import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import RFQForm from "@/components/sections/RFQForm";
import { getPorts } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send vessel and ETA details for a quote on provisions, stores, safety equipment, or husbandry services.",
};

export default async function ContactPage() {
  const ports = await getPorts();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a quote"
        description="Fill in what you can — the more detail on items and ETA, the faster we can price it."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-[1fr_320px] gap-16">
        <RFQForm ports={ports} />

        <aside className="space-y-8">
          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-3">24/7 duty desk</h2>
            <p className="text-sm text-ink/70 leading-relaxed">
              For urgent or critical requests, call directly rather than
              waiting on a form reply.
            </p>
            <div className="mt-4 text-sm space-y-1">
              <div className="text-ink font-medium">+880 31 000 0000</div>
              <div className="text-harbor">duty@nanchors.example</div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-3">Port offices</h2>
            <ul className="space-y-3">
              {ports.map((port) => (
                <li key={port.code} className="text-sm border-t border-line pt-3">
                  <div className="text-ink font-medium">{port.name}, {port.country}</div>
                  <div className="text-ink/60">{port.responseTime} typical response</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}