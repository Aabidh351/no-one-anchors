"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
import WaveDivider from "@/components/ui/WaveDivider";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.25-1.46 1.49-1.46H16.5V4.35c-.26-.03-1.14-.1-2.17-.1-2.15 0-3.62 1.31-3.62 3.72V10.5H8.2v3h2.5V21h2.8z" />
    </svg>
  );
}

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/certifications", label: "Certifications" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/deck-engine-stores", label: "Deck & Engine Stores" },
      { href: "/services/provisions", label: "Provisions" },
      { href: "/services/bunkering", label: "Bunkering" },
      { href: "/services", label: "View all" },
    ],
  },
];

const socials = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: Mail, href: "mailto:duty@meridiansupply.example", label: "Email" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="group relative inline-block text-sm text-white/70 hover:text-white transition-colors">
        {label}
        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-brass group-hover:w-full transition-all duration-300" />
      </Link>
    </li>
  );
}

export default function TestFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <>
      <footer className="relative overflow-hidden bg-harbor-dark text-white">
        <WaveDivider fill="var(--foam)" flip />

        {/* ambient glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full bg-harbor/30 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-display font-bold text-2xl mb-3">Meridian Ship Supply</div>
              <p className="text-sm text-white/65 leading-relaxed max-w-xs">
                Marine provisioning, technical stores, and port agency across
                five ports, on call around the clock.
              </p>
              <div className="flex gap-3 mt-5">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brass hover:text-harbor-dark transition-colors"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {columns.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
              >
                <div className="text-sm font-semibold mb-4 text-white/90">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <FooterLink key={l.href} {...l} />
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.26 }}
            >
              <div className="text-sm font-semibold mb-4 text-white/90">24/7 Duty Desk</div>
              <ul className="space-y-2.5 text-sm text-white/70 mb-6">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-brass shrink-0" /> +880 31 000 0000
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-brass shrink-0" /> duty@meridiansupply.example
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-brass shrink-0" /> Chattogram, Bangladesh
                </li>
              </ul>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.p
                    key="thanks"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-brass"
                  >
                    Subscribed — thanks for staying in the loop.
                  </motion.p>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubscribe}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Port updates via email"
                      className="w-full rounded-md bg-white/10 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brass focus:bg-white/15 transition-all"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label="Subscribe"
                      className="shrink-0 w-9 h-9 rounded-md bg-brass text-harbor-dark flex items-center justify-center"
                    >
                      <Send size={15} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
            <span>© {new Date().getFullYear()} Meridian Ship Supply. All rights reserved.</span>
            <span>ISSA Member · ISO 9001:2015 · ISO 22000</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-harbor text-white shadow-lg shadow-harbor/40 flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}