import Image from "next/image";

const reasons = [
  {
    title: "Safe Package",
    description:
      "Reliable products and supplies carefully selected to support safe and efficient vessel operations.",
  },
  {
    title: "Reliability",
    description:
      "Dependable service and timely support designed around your vessel's operational requirements.",
  },
  {
    title: "Global Reach",
    description:
      "Marine support and supply solutions helping vessels operate across ports and destinations.",
  },
];

export default function Why() {
  return (
    <section className="bg-foam py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2">

          {/* ================= LEFT IMAGE AREA ================= */}

          <div className="
            relative
            min-h-105
            bg-harbor
            sm:min-h-125
          ">

            {/* Main image */}

            <div className="
              absolute
              left-[8%]
              top-1/2
              h-65
              w-[88%]
              -translate-y-1/2
              overflow-hidden
              shadow-xl
              sm:h-82.5
              sm:w-[92%]
            ">
              <Image
                src="/why/why.jpg"
                alt="Cargo containers and railway at port"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Orange label */}

            <div className="
              absolute
              bottom-[20%]
              left-[15%]
              z-10
              bg-harbor
              px-5
              py-3
              shadow-lg
            ">
              <p className="
                text-xs
                font-bold
                text-white
              ">
                Moving your products
              </p>

              <p className="
                text-[10px]
                text-white/80
              ">
                across borders
              </p>
            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}

          <div className="
            flex
            items-center
            bg-white
            px-8
            py-12
            sm:px-12
            lg:px-14
            xl:px-16
          ">

            <div className="w-full max-w-lg">

              {/* Heading */}

              <div className="mb-3">
                <h2 className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-ink
                  sm:text-3xl
                ">
                  Why Choose Us
                </h2>

                <div className="
                  mt-2
                  h-0.5
                  w-10
                  bg-harbor
                " />
              </div>

              {/* Description */}

              <p className="
                max-w-md
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
              ">
                Delivering reliable maritime solutions to help
                your vessel operations run smoothly and
                efficiently.
              </p>


              {/* Reasons */}

              <div className="mt-7 space-y-6">

                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex gap-4"
                  >

                    {/* Icon */}

                    <div className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-harbor
                      text-white
                    ">
                      <span className="text-sm">
                        ✓
                      </span>
                    </div>

                    {/* Text */}

                    <div>
                      <h3 className="
                        text-sm
                        font-bold
                        text-ink
                      ">
                        {reason.title}
                      </h3>

                      <p className="
                        mt-1
                        max-w-sm
                        text-[11px]
                        leading-5
                        text-slate-500
                      ">
                        {reason.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}