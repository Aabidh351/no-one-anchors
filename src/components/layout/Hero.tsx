"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/Hero/hero-cargo-1.jpg",
    alt: "Container ship sailing at sea",
  },
  {
    src: "/Hero/hero-cargo-2.jpg",
    alt: "Cargo vessel at sea",
  },
  {
    src: "/Hero/hero-cargo-3.jpg",
    alt: "Maritime shipping operations",
  },
];

const stats = [
  {
    value: "20+",
    label: "Years of Industry",
    sublabel: "Experience",
  },
  {
    value: "500+",
    label: "Projects",
    sublabel: "Completed",
  },
  {
    value: "99%",
    label: "Compliance",
    sublabel: "Success Rate",
  },
  {
    value: "24/7",
    label: "Operations",
    sublabel: "Support",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ================= MANUAL SLIDE ================= */

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-ink">

      {/* ================= HERO ================= */}

      <div className="relative min-h-170 lg:min-h-180">

        {/* Background */}
        <div className="absolute inset-0">

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={slides[current].src}
              custom={direction}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                priority={current === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay */}

          <div className="
            absolute
            inset-0
            bg-linear-to-r
        from-[#062d4f]/75
        via-[#073b78]/35
        to-transparent
          " />

          {/* Bottom ocean gradient */}

          <div className="
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-linear-to-t
        from-[#073b78]/75
        via-[#073b78]/20
        to-transparent
          " />

        </div>

        {/* ================= CONTENT ================= */}

        <div className="
          relative
          z-10
          mx-auto
          flex
          min-h-170
          lg:min-h-180
          max-w-7xl
          items-center
          px-5
          sm:px-6
          lg:px-8
          pb-36
          lg:pb-32"
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="max-w-2xl"
          >

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span className="
                h-px
                w-10
                bg-harbor"
              />

              <span className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-sky-300
              ">
                Marine & Shipping Services
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                max-w-3xl
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Confidence for
              <span className="block text-sky-300">
                Every Maritime
              </span>
              Decision
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-slate-200
                sm:text-base
              "
            >
              Trusted marine services, quality products, and
              reliable port support designed to keep your
              maritime operations moving safely and efficiently.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-harbor
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  shadow-harbor/25
                  transition-all
                  duration-300
                  hover:bg-harbor-dark
                  hover:shadow-2xl
                "
              >
                Request a Consultation

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                Explore Services
              </Link>
            </motion.div>

          </motion.div>
        </div>


        {/* ================= STATS ================= */}

<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.7,
    duration: 0.7,
  }}
  className="
    absolute
    bottom-0
    left-1/2
    z-20
    w-[calc(100%-2rem)]
    max-w-6xl
    -translate-x-1/2
    translate-y-1/2
  "
>
  <div
    className="
      grid
      grid-cols-2
      overflow-hidden
      rounded-2xl
      bg-harbor
      hover:bg-harbor-dark
      shadow-2xl
      backdrop-blur-xl
      sm:grid-cols-4
    "
  >
    {stats.map((stat, index) => (
      <div
        key={stat.value}
        className={`
          relative
          px-5
          py-5
          sm:px-6
          sm:py-6

          ${index < 2 ? "border-b border-white/10" : ""}

          sm:border-b-0

          ${index !== stats.length - 1 ? "sm:border-r sm:border-white/10" : ""}
        `}
      >
        {/* Decorative dot */}

        <div className="mb-2 flex items-center gap-2">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-sky-300
              shadow-sm
              shadow-sky-300/50
            "
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-sky-200/70
            "
          >
            NoOne Anchors
          </span>
        </div>

        {/* Number */}

        <div
          className="
            text-3xl
            font-black
            tracking-tight
            text-white
            sm:text-4xl
          "
        >
          {stat.value}
        </div>

        {/* Label */}

        <div
          className="
            mt-1
            text-xs
            font-medium
            text-white/80
          "
        >
          {stat.label}
        </div>

        {/* Sublabel */}

        <div
          className="
            text-[10px]
            text-white/45
          "
        >
          {stat.sublabel}
        </div>
      </div>
    ))}
  </div>
</motion.div>

      </div>

      {/* ================= BOTTOM SPACING ================= */}

      <div className="h-24 bg-foam" />

    </section>
  );
}