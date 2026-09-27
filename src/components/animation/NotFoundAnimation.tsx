
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.25,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        absolute
        left-1/2
        top-[42%]
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, -3, 0, 3, 0],
          rotate: [0, -1, 1, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Ship */}
        <Image
          src="/ship-main.png"
          alt="Cargo ship"
          width={100}
          height={100}
          className="
            h-auto w-32
            object-contain
          "
          priority
        />

        {/* Animated wake */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-1
            left-1/2
            -translate-x-1/2
            h-1
            w-16
            sm:w-20
            md:w-24
            rounded-full
            bg-harbor/30
            blur-[1px]
          "
        />
      </motion.div>
    </motion.div>
  );
}
