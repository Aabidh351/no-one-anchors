import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PortsExplorer from "@/components/ports/PortsExplorer";
import { ports, type Port } from "@/lib/api/data";

export const metadata: Metadata = {
  title: "Port Network",
  description:
    "Our port coverage across Bangladesh, Sri Lanka, Singapore, and Malaysia, with services and typical response time per port.",
};

export default function PortsPage() {
  const countries = new Set(ports.map((p: Port) => p.country)).size;

  const stats = [
    { value: ports.length, label: "Ports covered" },
    { value: countries, label: "Countries" },
    { value: "24/7", label: "Duty desk" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Port network"
        title="Five ports. One duty desk."
        description="Coverage grows with our clients' trade lanes. If your route isn't listed, ask. Many of these started as a one-off request."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-line bg-paper px-4 py-5 text-center"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-harbor">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-slate mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <PortsExplorer ports={ports} />

        <div className="mt-14 rounded-xl border border-line bg-foam p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-1">
              Calling at a port that isn&apos;t listed?
            </h2>
            <p className="text-sm text-ink/70">
              Tell us the port and ETA. We can often arrange cover through our
              partner agents.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-harbor px-6 py-3 text-sm text-white font-medium hover:bg-harbor-dark transition-colors whitespace-nowrap"
          >
            Ask the duty desk
          </Link>
        </div>
      </section>
    </>
  );
}
