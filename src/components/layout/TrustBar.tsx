type Certification = {
  name: string;
  issuer: string;
};

export default function TrustBar({ certifications }: { certifications: Certification[] }) {
  return (
    <section className="bg-harbor-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="border-l-2 border-brass pl-4">
              <div className="font-display font-semibold text-lg">{cert.name}</div>
              <div className="text-xs text-white/60 mt-1">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}