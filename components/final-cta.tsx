import { IconArrow } from "./icons";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section className="relative bg-ink-950 curve-up py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="glow-orb"
          style={{
            top: "-20%",
            left: "20%",
            width: 700,
            height: 700,
            background: "oklch(0.62 0.2 260 / 0.35)",
          }}
        />
        <div
          className="glow-orb"
          style={{
            bottom: "-30%",
            right: "10%",
            width: 600,
            height: 600,
            background: "oklch(0.55 0.18 295 / 0.3)",
          }}
        />
        <div className="absolute inset-0 stars opacity-40" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <Reveal>
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-6">
            — Get started
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-medium text-[clamp(2.4rem,6vw,5rem)] leading-[0.98] tracking-tight">
            Ready to modernize
            <br />
            <span className="text-gradient">your IT infrastructure?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-xl mx-auto text-base text-muted">
            A 30-minute conversation with our team will tell you more about your stack than a
            six-week audit.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="btn-primary rounded-none px-7 py-4 text-sm font-medium inline-flex items-center gap-2"
            >
              Book a Consultation <IconArrow size={15} />
            </a>
            <a
              href="#services"
              className="btn-secondary glass-light rounded-none px-7 py-4 text-sm inline-flex items-center gap-2 text-white/85"
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
