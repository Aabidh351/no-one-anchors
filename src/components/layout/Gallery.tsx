"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const gallery = [
  {
    image: "/gallery/gallery-1.jpg",
    title: "Port Operations",
    subtitle: "Efficient support at every port",
  },
  {
    image: "/gallery/gallery-2.jpg",
    title: "Marine Services",
    subtitle: "Reliable solutions for vessels",
  },
  {
    image: "/gallery/gallery-3.jpg",
    title: "Cargo Handling",
    subtitle: "Supporting smooth cargo operations",
  },
  {
    image: "/gallery/gallery-4.jpg",
    title: "Ship Supply",
    subtitle: "Quality supplies when you need them",
  },
  {
    image: "/gallery/gallery-5.jpg",
    title: "Port Network",
    subtitle: "Connected across key ports",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="bg-foam py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-harbor" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-harbor
              "
            >
              Photo Gallery
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-ink
              sm:text-5xl
            "
          >
            Built around the
            <span className="block text-harbor">maritime industry.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-slate
              sm:text-base
            "
          >
            Explore our services, port operations, and maritime capabilities
            through a closer look at what we do.
          </p>
        </div>

        {/* ================= GALLERY ================= */}

        <div
          className="
            flex
            h-130
            w-full
            gap-1
            overflow-hidden
            rounded-2xl

            md:h-140
          "
        >
          {gallery.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative min-w-0 flex-1 overflow-hidden cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${selectedIndex === index ? "flex-4" : "flex-1"} md:flex-1 md:hover:flex-4`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Image */}

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[#031f2a]/35
                  transition-all
                  duration-500
                  group-hover:bg-[#031f2a]/20
                "
              />

              {/* Bottom gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-linear-to-t
                  from-[#031f2a]/90
                  via-[#031f2a]/30
                  to-transparent
                  opacity-90
                "
              />

              {/* ================= COLLAPSED LABEL ================= */}

              <div
                className="
    absolute
    left-1/2
    top-8
    -translate-x-1/2
    transition-all
    duration-500

    group-hover:opacity-0
    group-hover:-translate-y-3
  "
              >
                <span
                  className="
      block
      whitespace-nowrap
      text-xs
      font-bold
      uppercase
      tracking-[0.18em]
      text-white
      [writing-mode:vertical-rl]
      rotate-180
    "
                >
                  {item.title}
                </span>
              </div>

              {/* ================= EXPANDED CONTENT ================= */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  opacity-0
                  translate-y-5
                  transition-all
                  duration-500

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  sm:p-8
                "
              >
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-sky-300
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-black
                        text-white
                        sm:text-3xl
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-md
                        text-sm
                        text-white/75
                      "
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      text-white
                      backdrop-blur-sm
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* ================= VIEW FULL GALLERY ================= */}

        <div className="mt-6 flex justify-end">
          <Link
            href="/gallery"
            className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-harbor/20
      bg-white
      px-6
      py-3
      text-sm
      font-bold
      text-harbor
      shadow-sm
      transition-all
      duration-300
      hover:border-harbor
      hover:bg-harbor
      hover:text-white
      hover:shadow-lg
      hover:shadow-harbor/20
    "
          >
            View Full Gallery
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
