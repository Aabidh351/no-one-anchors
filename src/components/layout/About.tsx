import Image from "next/image";
import Link from "next/link";
import AboutImage from "../../../public/about/about.jpg";

export default function About() {
  return (
    <section className="bg-foam pt-20 md:pt-0 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-harbor" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-harbor">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
              Your trusted partner
              <span className="block text-harbor">in maritime services.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              NoOne Anchors provides reliable marine services, quality vessel
              supplies, and dependable port support designed to keep maritime
              operations moving safely and efficiently.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              We work closely with vessel owners, operators, and crews to
              deliver the right support when and where it is needed.
            </p>

            <Link
              href="/about"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-harbor
                transition-transform
                duration-300
                hover:translate-x-1
              "
            >
              Learn More →
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={AboutImage}
                alt="Cargo vessel at sea"
                width={800}
                height={600}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Experience badge */}
            <div
              className="
              absolute
              -bottom-5
              -left-4
              rounded-2xl
              bg-harbor
              px-5
              py-4
              text-white
              shadow-xl
              sm:-left-6
            "
            >
              <div className="text-2xl font-black">20+</div>
              <div className="text-[10px] uppercase tracking-wider text-sky-200">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
