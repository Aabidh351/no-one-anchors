import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    title: "Quality Assurance",
    description:
      "Maintaining consistent standards across our marine services and supplied products.",
  },
  {
    title: "Safety Standards",
    description:
      "Following established safety practices throughout our maritime operations.",
  },
  {
    title: "Trusted Operations",
    description:
      "Professional processes designed to meet the requirements of vessel owners and operators.",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= IMAGE ================= */}

          <div className="relative">

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/certifications/certifications.jpg"
                alt="Maritime operations"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Badge */}

            <div className="
              absolute
              bottom-0
              left-0
              bg-[#073b78]
              px-6
              py-5
              text-white
              shadow-xl
            ">
              <div className="text-2xl font-black">
                Trusted
              </div>

              <div className="
                mt-1
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-sky-200
              ">
                Maritime Services
              </div>
            </div>

          </div>


          {/* ================= CONTENT ================= */}

          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-harbor" />

              <span className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-harbor
              ">
                Certifications & Compliance
              </span>
            </div>

            <h2 className="
              max-w-xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-ink
              sm:text-5xl
            ">
              Standards you can
              <span className="block text-harbor">
                rely on.
              </span>
            </h2>

            <p className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            ">
              We are committed to maintaining professional
              standards across our services, products, and
              maritime operations.
            </p>


            {/* Certifications */}

            <div className="mt-8 space-y-5">

              {certifications.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    flex
                    gap-4
                    border-b
                    border-slate-200
                    pb-5
                  "
                >

                  <div className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-harbor/10
                    text-xs
                    font-bold
                    text-harbor
                  ">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="
                      text-sm
                      font-bold
                      text-ink
                    ">
                      {item.title}
                    </h3>

                    <p className="
                      mt-1
                      max-w-md
                      text-xs
                      leading-5
                      text-slate-500
                    ">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>


            <Link
              href="/certifications"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-harbor
                transition-all
                duration-300
                hover:gap-3
              "
            >
              View Certifications
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}