export function Logo({ size = 18 }: { size?: number }) {
  return (
    <span
      className="font-display font-semibold tracking-[-0.03em] text-white leading-none"
      style={{ fontSize: `${size}px` }}
    >
      HNova<span className="text-glow-blue">Tech</span>
    </span>
  );
}
