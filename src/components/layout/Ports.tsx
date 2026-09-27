import Image from "next/image";
import Link from "next/link";

const ports = [
  {
    name: "Chattogram Port",
    location: "Chattogram, Bangladesh",
  },
  {
    name: "Mongla Port",
    location: "Mongla, Bangladesh",
  },
  {
    name: "Payra Port",
    location: "Patuakhali, Bangladesh",
  },
];

export default function Ports() {
  return (
    <section className="bg-foam py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= BACKGROUND ================= */}

        <div className="relative overflow-hidden">

          <div className="absolute inset-0">
            <Image
              src="/ports/ports.jpg"
              alt="Cargo vessels at port"
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Overlay */}
            {/* Left-side text overlay */}
        <div
            className="
            absolute
            inset-y-0
            left-0
            w-full
            bg-linear-to-r
        from-[#062d4f]/75
        via-[#073b78]/35
        to-transparent" />
          </div>


          {/* ================= CONTENT ================= */}

          <div
            className="
              relative
              z-10
              px-7
              py-14
              sm:px-12
              sm:py-16
              lg:px-16
              lg:py-20
            "
          >

            {/* Heading */}

            <div className="max-w-2xl">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-sky-300" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-sky-200
                  "
                >
                  Ports We Serve
                </span>
              </div>

              <h2
                className="
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                Reliable support,
                <span className="block text-sky-300">
                  wherever you dock.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-200
                  sm:text-base
                "
              >
                Our maritime services and supplies are available
                across key ports, helping vessels receive the
                support they need throughout their operations.
              </p>

            </div>


            {/* ================= PORTS ================= */}

            <div
              className="
                mt-10
                grid
                gap-4
                sm:grid-cols-3
              "
            >

              {ports.map((port, index) => (
                <div
                  key={port.name}
                  className="
                    border
                    border-white/15
                    bg-white/10
                    p-5
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                  "
                >

                  <div
                    className="
                      text-xs
                      font-bold
                      text-sky-300
                    "
                  >
                    0{index + 1}
                  </div>

                  <h3
                    className="
                      mt-4
                      text-base
                      font-bold
                      text-white
                    "
                  >
                    {port.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-white/60
                    "
                  >
                    {port.location}
                  </p>

                </div>
              ))}

            </div>


            {/* ================= CTA ================= */}

            <Link
              href="/ports"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[#073b78]
                transition-all
                duration-300
                hover:bg-sky-100
                hover:gap-3
              "
            >
              View Our Ports
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}