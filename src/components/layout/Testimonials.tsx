type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-harbor mb-10">
          From the bridge
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative border border-line rounded-lg p-8 bg-foam/60"
            >
              <span className="absolute -top-3 left-7 text-6xl leading-none text-harbor/25 font-display select-none">
                &ldquo;
              </span>
              <blockquote className="relative text-lg leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm text-slate">
                <span className="text-ink font-medium">{t.name}</span>, {t.role} — {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}