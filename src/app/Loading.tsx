"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-foam">

      <div className="flex flex-col items-center">

        {/* Ship */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative"
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
          >
            <Image
              src="/ship-main.png"
              alt="Loading"
              width={100}
              height={100}
              className="h-32 w-32 object-contain"
              priority
            />
          </motion.div>

          {/* Wake */}

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
              h-1
              w-16
              -translate-x-1/2
              rounded-full
              bg-harbor/30
              blur-[1px]
            "
          />
        </motion.div>


        {/* Text */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="
            mt-5
            text-sm
            font-semibold
            tracking-[0.2em]
            text-harbor
          "
        >
          Sailing...
        </motion.p>

      </div>

    </div>
  );
}