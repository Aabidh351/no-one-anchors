import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-foam py-24 sm:py-28">
      <div className="w-full">

        {/* Main image */}
        <div className="relative h-80 overflow-hidden sm:h-100 lg:h-115">
          <Image
            src="/services/bg.jpg"
            alt="Cargo containers at port"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent" />
        </div>

        {/* White content panel */}
        <div className="relative z-10 mx-auto -mt-16 w-[92%] bg-white px-6 py-8 shadow-xl sm:-mt-24 sm:px-10 sm:py-10 lg:-mt-28 lg:w-[70%] lg:px-12 lg:py-12">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">

            {/* ================= TEXT ================= */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-harbor" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-harbor">
                  Our Services
                </span>
              </div>

              <h2 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
                Comprehensive maritime
                <span className="block text-harbor">
                  solutions.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                We provide a comprehensive range of services
                designed to support vessels throughout their
                journey, from port arrival to departure.
              </p>

              <p className="mt-4 text-xs font-bold text-ink">
                Our specialized subsections
              </p>

              <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
                Ship chandling, marine supplies, port agency,
                logistics, and vessel support tailored to your
                operational requirements.
              </p>

              <Link
                href="/services"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  bg-harbor
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-harbor-dark
                "
              >
                View Services
                <span>→</span>
              </Link>
            </div>

            {/* ================= IMAGES ================= */}

            <div className="relative min-h-65">

              {/* Large image */}

              <div className="
                absolute
                right-0
                top-0
                h-52.5
                w-[72%]
                overflow-hidden
                62.5
              ">
                <Image
                  src="/services/night.jpg"
                  alt="Container terminal"
                  fill
                  sizes="(max-width: 1024px) 55vw, 400px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Small image */}

              <div className="
                absolute
                bottom-0
                left-0
                z-10
                h-28.75
                w-[35%]
                overflow-hidden
                border-4
                border-white
                bg-white
                shadow-lg
                sm:h-33.75
              ">
                <Image
                  src="/services/man.jpg"
                  alt="Maritime operations"
                  fill
                  sizes="180px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}