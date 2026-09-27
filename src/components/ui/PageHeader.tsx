export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-paper border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-20 md:pb-16">
        {eyebrow && <p className="text-harbor text-sm font-medium mb-3">{eyebrow}</p>}
        <h1 className="font-display font-bold text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-ink/70 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}