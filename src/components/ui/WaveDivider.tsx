export default function WaveDivider({
  fill = "var(--paper)",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div aria-hidden className={flip ? "rotate-180" : undefined} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 72"
        className="w-full h-[40px] sm:h-[60px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C240,72 480,0 720,20 C960,40 1200,72 1440,32 L1440,72 L0,72 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}