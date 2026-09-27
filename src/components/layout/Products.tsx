import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Deck Supplies",
    description: "Essential equipment and supplies for deck operations.",
  },
  {
    title: "Engine Supplies",
    description: "Reliable products for vessel engine and maintenance needs.",
  },
  {
    title: "Safety Equipment",
    description: "Safety products designed for onboard requirements.",
  },
  {
    title: "Provisions",
    description: "Quality food and essential provisions for vessel crews.",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="relative">

            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/products/product.jpg"
                alt="Marine supplies and equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Small label */}

            <div className="
              absolute
              bottom-0
              left-0
              bg-harbor
              px-6
              py-4
              text-white
            ">
              <p className="text-xl font-black">500+</p>
              <p className="text-[10px] uppercase tracking-wider text-sky-200">
                Products Available
              </p>
            </div>

          </div>


          {/* Content */}

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
                Marine Products
              </span>
            </div>

            <h2 className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-ink
              sm:text-5xl
            ">
              Everything your vessel
              <span className="block text-harbor">
                needs, in one place.
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
              From everyday provisions to essential marine
              equipment, we supply quality products selected
              to meet the practical needs of vessels and crews.
            </p>


            {/* Product list */}

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">

              {products.map((product, index) => (
                <div
                  key={product.title}
                  className="
                    group
                    border-b
                    border-slate-200
                    pb-5
                  "
                >
                  <div className="flex items-center gap-3">

                    <span className="
                      text-xs
                      font-bold
                      text-harbor
                    ">
                      0{index + 1}
                    </span>

                    <h3 className="
                      text-sm
                      font-bold
                      text-ink
                      transition-colors
                      group-hover:text-harbor
                    ">
                      {product.title}
                    </h3>

                  </div>

                  <p className="
                    mt-2
                    pl-7
                    text-xs
                    leading-5
                    text-slate-500
                  ">
                    {product.description}
                  </p>
                </div>
              ))}

            </div>


            <Link
              href="/products"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-harbor
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-harbor-dark
                hover:gap-3
              "
            >
              Explore Products
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}