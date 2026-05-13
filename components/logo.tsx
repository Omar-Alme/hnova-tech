export function Logo({ size = 18 }: { size?: number }) {
  const markSize = Math.round(size * 1.5);
  return (
    <span className="inline-flex items-center gap-2 leading-none">
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path d="M11 14 L25 14 L17 50 L3 50 Z" fill="white" />
        <path d="M29 14 L43 14 L35 50 L21 50 Z" fill="white" opacity="0.55" />
        <path d="M47 14 L61 14 L53 50 L39 50 Z" fill="oklch(0.72 0.18 255)" />
      </svg>
      <span
        className="font-display font-semibold tracking-[-0.03em] text-white leading-none"
        style={{ fontSize: `${size}px` }}
      >
        HNova<span className="opacity-[0.78]">Tech</span>
      </span>
    </span>
  );
}
