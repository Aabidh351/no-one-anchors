import Link from "next/link";
import WaveDivider from "@/components/ui/WaveDivider";

export default function CTASection() {
  return (
    <section className="bg-paper">
      <WaveDivider fill="var(--harbor-dark)" />
      <div className="cta-gradient">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-semibold text-3xl text-white">
                Vessel inbound? Get stores moving.
              </h2>
              <p className="mt-2 text-white/80 max-w-md">
                Send your requirements and ETA — our duty desk responds within hours, not days.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-harbor-dark font-semibold shadow-lg hover:bg-foam transition-colors whitespace-nowrap"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}