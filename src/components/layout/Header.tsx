"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Logo from "../../../public/logo.png";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/ports", label: "Ports" },
  { href: "/certifications", label: "Certifications" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Find the current active navigation item
  const activeItem = nav.find((item) => pathname === item.href);

  // Hover takes priority.
  // If nothing is hovered, use the active page.
  const highlightedItem = hovered ?? activeItem?.href ?? null;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        height: scrolled ? 70 : 82,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={`
        sticky top-0 z-50
        border-b
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-lg shadow-slate-900/5"
            : "bg-foam/95 backdrop-blur-md border-line"
        }
      `}
    >
      <div className="mx-auto max-w-7xl pb-5 pt-8 sm:px-6 lg:px-8 h-full">
        <div className="mx-5 md:mx-0 flex items-center justify-between h-full">
          {/* ================= LOGO ================= */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={Logo}
                  alt="NoOne Anchors"
                  width={48}
                  height={48}
                  className="
                    h-10 w-auto
                    sm:h-11 sm:w-auto
                    object-contain
                    rounded-lg
                  "
                  priority
                />
              </motion.div>

              <div className="hidden sm:block">
                <div className="text-base md:text-lg font-bold tracking-tight text-ink leading-none">
                  NoOne
                </div>

                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-harbor font-medium mt-1">
                  Anchors
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="
              hidden md:flex
              items-center
              gap-0.5
              rounded-full
              border border-slate-200/70
              bg-white/60
              backdrop-blur-sm
              px-1.5 py-1.5
              shadow-sm
            "
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((item) => {
              const isActive = pathname === item.href;
              const isHighlighted = highlightedItem === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  className="
                    group
                    relative
                    px-3.5 lg:px-4
                    py-2
                    text-[13px]
                    lg:text-sm
                    font-medium
                    transition-colors
                    duration-200
                  "
                >
                  {/* ================= HOVER / ACTIVE PILL ================= */}

                  {isHighlighted && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-harbor/10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* ================= SHIP ================= */}

                  {isHighlighted && (
                    <motion.div
                      layoutId="nav-ship"
                      initial={{
                        opacity: 0,
                        x: -25,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="
                        absolute
                        -top-6.75
                        left-1/2
                        -translate-x-1/2
                        z-30
                        pointer-events-none
                      "
                    >
                      <motion.div
                        animate={{
                          y: [0, -1.5, 0, 1.5, 0],
                          rotate: [0, -1, 1, -1, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative"
                      >
                        {/* Ship */}
                        <Image
                          src="/ship-main.png"
                          alt=""
                          width={48}
                          height={48}
                          className="
                            h-7
                            w-7
                            object-contain
                          "
                        />

                        {/* Water wake */}
                        <motion.span
                          animate={{
                            opacity: [0.25, 0.6, 0.25],
                            scaleX: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="
                            absolute
                            -bottom-1
                            -left-3
                            h-[3px]
                            w-10
                            rounded-full
                            bg-harbor/40
                            blur-[1px]
                          "
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* ================= LINK TEXT ================= */}

                  <span
                    className={`
                      relative z-10
                      ${
                        isActive || isHighlighted
                          ? "text-harbor"
                          : "text-slate-600"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ================= CTA ================= */}

          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-harbor
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-harbor/20
                hover:bg-harbor-dark
                hover:shadow-xl
                hover:shadow-harbor/25
                transition-all
                duration-300
              "
            >
              <span>Request a Quote</span>

              <motion.span className="text-base" whileHover={{ x: 3 }}>
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* ================= MOBILE NAV ================= */}

          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
