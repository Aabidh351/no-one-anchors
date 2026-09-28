import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Clock, ShieldCheck, Anchor, ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CountUp from "@/components/about/CountUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "NoOne Anchors is a ship chandler and marine services company based in Chattogram, Bangladesh.",
};

// Placeholder figures: replace with your real numbers
const stats = [
  { to: 20, suffix: "+", label: "Years operating" },
  { to: 5, suffix: "", label: "Ports covered" },
  { to: 6, suffix: "", label: "Service lines" },
  { to: 24, suffix: "/7", label: "Duty desk" },
];

const values = [
  {
    icon: Clock,
    title: "Responsiveness",
    text: "Port stays are short. We answer quickly and plan around your berth window, not ours.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear quotes, clear lead times, and no surprises on the invoice.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    text: "Certified stores and documentation that stand up to inspection.",
  },
  {
    icon: Anchor,
    title: "Reliability",
    text: "The same standard at every port, on every call.",
  },
];

// Placeholder milestones: replace with your real history
const timeline = [
  { year: "2004", event: "Founded as a single-port chandlery in Chattogram." },
  { year: "2011", event: "Added husbandry and port agency services." },
  { year: "2016", event: "Joined ISSA and achieved ISO 9001 certification." },
  { year: "2022", event: "Expanded the network to Singapore and Colombo." },
  { year: "2026", event: "Five-port network with 24/7 duty desk cover." },
];

const steps = [
  {
    title: "Send your requirements",
    text: "Vessel, port, ETA and what you need, through the quote form or by phone.",
  },
  {
    title: "We quote and confirm",
    text: "You get pricing and lead time, and we lock in the delivery window.",
  },
  {
    title: "We source and deliver",
    text: "Stores are checked, packed and delivered to berth, anchorage or launch.",
  },
  {
    title: "Documentation and follow-up",
    text: "Certificates and delivery paperwork are handed over before you sail.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Supplying vessels, one port call at a time."
        description="NoOne Anchors provides marine and shipping services from Chattogram, with one duty desk behind every delivery."
      />

      {/* Story + stats */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div>
          <h2 className="font-display font-semibold text-3xl text-ink mb-5">
            Who we are
          </h2>
          <p className="text-ink/75 leading-relaxed mb-4">
            We&apos;re a ship chandler and marine services company. Vessels call
            at our ports for provisions, deck and engine stores, safety
            equipment and husbandry, and we handle it through a single point of
            contact.
          </p>
          <p className="text-ink/75 leading-relaxed">
            Our aim is simple: stores and services ready when the vessel is,
            with the paperwork to match.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-line bg-paper p-6 text-center"
            >
              <div className="font-display font-bold text-4xl text-harbor">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="text-sm text-slate mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display font-semibold text-3xl text-ink mb-10">
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group animate-fade-up rounded-xl border border-line bg-foam/50 p-6 hover:border-harbor/30 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:shadow-harbor/10 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-harbor/10 text-harbor flex items-center justify-center mb-4 group-hover:bg-harbor group-hover:text-white transition-colors duration-300">
                  <v.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink mb-1">
                  {v.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display font-semibold text-3xl text-ink mb-10">
          Our journey
        </h2>
        <ol className="relative border-l-2 border-line ml-3 space-y-8">
          {timeline.map((item, i) => (
            <li
              key={item.year}
              style={{ animationDelay: `${i * 90}ms` }}
              className="animate-fade-up relative pl-8"
            >
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-harbor ring-4 ring-foam" />
              <div className="font-display font-bold text-xl text-brass">
                {item.year}
              </div>
              <p className="text-ink/75 mt-1 max-w-xl">{item.event}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* How we work */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display font-semibold text-3xl text-ink mb-10">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-up relative rounded-xl border border-line bg-foam/50 p-6"
              >
                <div className="w-9 h-9 rounded-full bg-harbor text-white font-display font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-ink mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl border border-line bg-foam p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-1">
              Have a vessel inbound?
            </h2>
            <p className="text-sm text-ink/70">
              Send your requirements and ETA and the duty desk will take it from
              there.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-harbor px-6 py-3 text-sm text-white font-medium hover:bg-harbor-dark transition-colors whitespace-nowrap"
          >
            Request a quote
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
