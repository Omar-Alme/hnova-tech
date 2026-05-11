import { IconArrow } from "./icons";
import { Reveal } from "./reveal";
import { SparklesCore } from "./ui/sparkles";

export function FinalCTA() {
  return (
    <section className="relative bg-ink-950 pt-24 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Top divider */}
      <div className="divider-glow absolute top-0 inset-x-0" />

      {/* Sparkles background */}
      <SparklesCore
        id="final-cta-sparkles"
        className="absolute inset-0 w-full h-full"
        background="transparent"
        particleColor="#ffffff"
        particleDensity={80}
        minSize={0.6}
        maxSize={1.4}
        speed={1.5}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
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

      <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6 sm:px-8">
        <Reveal delay={0.36}>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
            {[
              ["Discovery", "30-minute first conversation"],
              ["Planning", "Practical roadmap and scope"],
              ["Delivery", "Hands-on engineering support"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink-950/70 px-5 py-5 text-left">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-glow-blue">
                  {k}
                </div>
                <div className="mt-2 text-sm text-white/78">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#070913]" />
    </section>
  );
}
