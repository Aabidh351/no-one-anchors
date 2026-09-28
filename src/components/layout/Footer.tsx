import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/products", label: "Products" },
  { href: "/ports", label: "Ports" },
];

const usefulLinks = [
  { href: "/certifications", label: "Certifications" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#031f2a] text-white">
      {/* ================= BACKGROUND IMAGE ================= */}

      <div className="absolute inset-0">
        {/* Desktop Background */}
        <Image
          src="/footer/footer.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
      hidden
      object-cover
      object-center
      sm:block
    "
        />

        {/* Mobile Background */}
        <Image
          src="/footer/footer-mobile.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
      block
      object-cover
      object-center
      sm:hidden
    "
        />

        {/* Bottom dark gradient */}
        <div
          className="
      absolute
      inset-0
      bg-[linear-gradient(
        to_bottom,
        rgba(3,31,42,0)_0%,
        rgba(3,31,42,0)_35%,
        rgba(3,31,42,0.08)_45%,
        rgba(3,31,42,0.28)_55%,
        rgba(3,31,42,0.58)_67%,
        rgba(3,31,42,0.82)_78%,
        rgba(3,31,42,0.96)_90%,
        rgba(3,31,42,1)_100%
      )]
    "
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pt-10
          sm:px-8
          sm:pt-50
          lg:px-10
          lg:pt-110
        "
      >
        <div
          className="
            grid
grid-cols-2
gap-8
lg:grid-cols-[1fr_1fr_1fr_1.5fr]
            border-b
            border-white/15
            pb-10
          "
        >
          {/* ================= COMPANY LINKS ================= */}

          <div>
            <h3
              className="text-sm
                    md:text-lg font-bold"
            >
              Links
            </h3>

            <div className="mt-3 h-px w-44 bg-white/40" />

            <div className="mt-6 space-y-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block
                    text-sm
                    md:text-lg
                    text-white/85
                    transition-colors
                    hover:text-sky-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= USEFUL LINKS ================= */}

          <div>
            <h3
              className="text-sm
                    md:text-lg font-bold"
            >
              Links
            </h3>

            <div className="mt-3 h-px w-44 bg-white/40" />

            <div className="mt-6 space-y-2.5">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block
                    text-sm
                    md:text-lg
                    
                    text-white
                    transition-colors
                    hover:text-sky-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= LEGAL ================= */}

          <div>
            <h3
              className="text-sm
                    md:text-lg font-bold"
            >
              Information
            </h3>

            <div className="mt-3 h-px w-44 bg-white/40" />

            <div className="mt-6 space-y-2.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block text-sm
                    md:text-lg
                    text-white/85
                    transition-colors
                    hover:text-sky-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div className="lg:text-right">
            <h3
              className="text-sm
                    md:text-lg font-black sm:text-xl"
            >
              NoOne Anchors
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Marine & Shipping Services
            </p>

            <div className="mt-4 space-y-1 text-sm text-white/80">
              <p>Chattogram, Bangladesh</p>

              <p>
                <a href="tel:+8800000000000" className="hover:text-sky-300">
                  Tel: +880 0000 000000
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@nooneanchors.com"
                  className="hover:text-sky-300"
                >
                  Email: info@nooneanchors.com
                </a>
              </p>
            </div>

            {/* Social Icons */}

            <div className="mt-6 flex gap-3 lg:justify-end">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  transition-all
                  duration-300
                  hover:border-sky-300
                  hover:bg-sky-300/10
                "
              >
                <span className="text-sm font-bold">f</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  transition-all
                  duration-300
                  hover:border-sky-300
                  hover:bg-sky-300/10
                "
              >
                <span className="text-sm">◎</span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  transition-all
                  duration-300
                  hover:border-sky-300
                  hover:bg-sky-300/10
                "
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-6
            text-xs
            text-white/60
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NoOne Anchors"
              width={42}
              height={42}
              className="rounded w-10.5 h-auto"
            />

            <span className="text-lg font-black text-white">
              NoOne
              <span className="text-sky-300">Anchors</span>
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          <p>
            © {new Date().getFullYear()} NoOne Anchors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
