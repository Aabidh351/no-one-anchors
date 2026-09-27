
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/ports", label: "Ports" },
  { href: "/certifications", label: "Certifications" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* ================= MENU BUTTON ================= */}
      <motion.button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className="
          relative z-15
          flex h-10 w-10
          items-center justify-center
          rounded-full
          border border-slate-200
          bg-white/80
          backdrop-blur-sm
          shadow-sm
        "
      >
        <div className="flex flex-col items-center justify-center gap-1.25">

          <motion.span
            animate={
              open
                ? { rotate: 45, y: 7 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25 }}
            className="
              block
              h-0.5
              w-5
              rounded-full
              bg-harbor
            "
          />

          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="
              block
              h-0.5
              w-5
              rounded-full
              bg-harbor
            "
          />

          <motion.span
            animate={
              open
                ? { rotate: -45, y: -7 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25 }}
            className="
              block
              h-0.5
              w-5
              rounded-full
              bg-harbor
            "
          />

        </div>
      </motion.button>

      <AnimatePresence>

        {open && (
          <>
            {/* ================= BACKDROP ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-slate-950/20
                backdrop-blur-[2px]
              "
            />

            {/* ================= MENU ================= */}
            <motion.nav
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                absolute
                left-3
                right-3
                top-[calc(100%+10px)]
                z-50
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white/95
                backdrop-blur-xl
                p-3
                shadow-2xl
                shadow-slate-900/10
              "
            >

              {/* ================= CTA ================= */}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mb-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    bg-harbor
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-harbor/20
                    transition-all
                    hover:bg-harbor-dark
                  "
                >
                  <span>Request a Quote</span>

                  <span className="text-lg">
                    →
                  </span>
                </Link>
              </motion.div>

              {/* ================= NAVIGATION ================= */}
              <div className="space-y-1">

                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: 0.07 + i * 0.04,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        text-[15px]
                        font-medium
                        text-slate-700
                        transition-all
                        duration-200
                        hover:bg-harbor/5
                        hover:text-harbor
                      "
                    >
                      <span>{item.label}</span>

                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="
                          text-harbor
                          transition-opacity
                        "
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

              </div>

              {/* ================= FOOTER ================= */}
              <div className="
                mt-2
                border-t
                border-slate-100
                px-4
                pt-3
                pb-1
              ">
                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                ">
                  Marine & Shipping Services
                </p>
              </div>

            </motion.nav>
          </>
        )}

      </AnimatePresence>
    </div>
  );
}

