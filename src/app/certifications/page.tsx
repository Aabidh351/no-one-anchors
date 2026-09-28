import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  UtensilsCrossed,
  Flag,
  BadgeCheck,
  FileCheck2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { certifications, type Certification } from "@/lib/api/data";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "Our quality, food safety, and membership certifications, including ISO 9001, ISO 22000, and ISSA membership.",
};

// Matched by certification name; anything unmatched falls back to BadgeCheck
const icons: Record<string, LucideIcon> = {
  "ISO 9001:2015": ShieldCheck,
  "ISSA Membership": Award,
  "ISO 22000": UtensilsCrossed,
  "Flag State Approval": Flag,
};

const assurances = [
  {
    icon: FileCheck2,
    title: "Copies on request",
    text: "Current certificates are available for vetting before you appoint us.",
  },
  {
    icon: BadgeCheck,
    title: "Kept current",
    text: "Renewals are tracked so documentation stays valid at every port we operate in.",
  },
  {
    icon: ShieldCheck,
    title: "Audited",
    text: "Independent audits cover quality management and food safety.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance"
        title="Documentation your superintendent can check."
        description="Certificates and memberships are kept current across every port we operate in. Copies are available on request for vetting."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert: Certification, i: number) => {
            const Icon = icons[cert.name] ?? BadgeCheck;
            return (
              <article
                key={cert.name}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group animate-fade-up relative overflow-hidden rounded-xl border border-line bg-paper p-8 hover:border-harbor/30 hover:shadow-lg hover:shadow-harbor/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* accent bar that grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1 bg-brass origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                />

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-harbor/10 flex items-center justify-center text-harbor group-hover:bg-harbor group-hover:text-white transition-colors duration-300">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h2 className="font-display font-semibold text-2xl text-ink">
                      {cert.name}
                    </h2>
                    <p className="text-sm text-harbor font-medium mt-1">
                      Issued by {cert.issuer}
                    </p>
                    <p className="text-ink/70 leading-relaxed mt-3">
                      {cert.scope}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid md:grid-cols-3 gap-8">
            {assurances.map((a) => (
              <div key={a.title} className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brass/15 text-brass flex items-center justify-center">
                  <a.icon size={19} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink mb-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed">
                    {a.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-xl border border-line bg-foam p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display font-semibold text-xl text-ink mb-1">
              Need a certificate for your vetting file?
            </h2>
            <p className="text-sm text-ink/70">
              Ask the duty desk and we&apos;ll send current copies.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-harbor px-6 py-3 text-sm text-white font-medium hover:bg-harbor-dark transition-colors whitespace-nowrap"
          >
            Request documents
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
