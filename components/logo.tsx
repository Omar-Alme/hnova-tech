export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
          <defs>
            <linearGradient id="lg-h" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="oklch(0.85 0.12 250)" />
              <stop offset="1" stopColor="oklch(0.55 0.18 280)" />
            </linearGradient>
          </defs>
          <path d="M6 4h5l10 14V4h5v24h-5L11 14v14H6V4Z" fill="url(#lg-h)" />
        </svg>
        <div className="absolute -inset-1 rounded-full bg-glow-blue/30 blur-md -z-10" />
      </div>
      <div className="leading-none">
        <div className="font-display font-semibold text-[15px] tracking-tight">HNovaTech</div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">Inc.</div>
      </div>
    </div>
  );
}
