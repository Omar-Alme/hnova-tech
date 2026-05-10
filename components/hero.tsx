"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Nav } from "./nav";
import { IconArrow, IconChevron, IconCloud } from "./icons";
import { Reveal } from "./reveal";

function Particles({ count = 28 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = Math.random() * 100;
        const dur = 12 + Math.random() * 18;
        const delay = -Math.random() * dur;
        const dy = -(160 + Math.random() * 320);
        const dx = (Math.random() - 0.5) * 80;
        const o = 0.4 + Math.random() * 0.6;
        const size = 1 + Math.random() * 2;
        return { left, dur, delay, dy, dx, o, size, i };
      }),
    [count]
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((p) => (
        <span
          key={p.i}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              "--dy": `${p.dy}px`,
              "--dx": `${p.dx}px`,
              "--o": p.o,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [parallax, setParallax] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () =>
      setParallax(Math.min(window.scrollY * 0.25, 200));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex flex-col overflow-hidden bg-ink-950"
    >
      <div className="aurora" style={{ transform: `translateY(${-parallax * 0.3}px)` }} />
      <div className="horizon" />
      <div className="absolute inset-0 stars opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      {mounted && <Particles count={32} />}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950 z-10" />

      <Nav />

      <div className="relative z-20 flex-1 flex items-end pb-16 sm:pb-24 pt-40">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10">
          <Reveal className="inline-flex items-center gap-2.5 glass rounded-full pl-1.5 pr-5 py-1.5 text-[12px] tracking-wide text-white/85">
            <span className="h-6 w-6 rounded-full grid place-items-center bg-white/10 border border-white/15">
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M6 1v10M1 6h10" />
              </svg>
            </span>
            <span>Cloud · Infrastructure · Networking</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display font-medium text-[clamp(3.4rem,11vw,9.5rem)] leading-[0.92] tracking-[-0.035em]">
              <span
                className="block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ffffff 0%, #e8ecf6 100%)" }}
              >
                Reliable Cloud
              </span>
              <span
                className="block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #c8cee0 0%, #8a91ad 100%)" }}
              >
                & Infrastructure
              </span>
              <span
                className="block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #6b7396 0%, #2e3454 100%)" }}
              >
                for Modern Business.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-[14px] sm:text-[15px] leading-relaxed text-white/65">
              Cloud systems, networking, telecom, and IT support — engineered hands-on for
              growing Canadian enterprises.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2"
              >
                Book a Consultation <IconArrow size={15} />
              </a>
              <a
                href="#services"
                className="btn-secondary glass-light rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2 text-white/85"
              >
                Explore Services <IconChevron size={15} />
              </a>
            </div>
          </Reveal>

          {/* Spinning cloud emblem — mid-right */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
            <Reveal delay={0.35}>
              <div className="relative h-36 w-36">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 animate-[spin_28s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="cir"
                      d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text
                    fill="rgba(255,255,255,0.7)"
                    fontSize="5.6"
                    letterSpacing="2.8"
                    fontFamily="Inter Tight"
                  >
                    <textPath href="#cir">
                      CLOUD · INFRASTRUCTURE · NETWORKING · TELECOM ·{" "}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <IconCloud size={32} className="text-white/90" />
                </div>
                <div className="absolute -inset-3 rounded-full bg-glow-blue/15 blur-2xl -z-10" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 sm:mt-20 flex items-center gap-3 text-xs text-muted font-mono tracking-[0.18em] uppercase">
              <span className="h-px w-10 bg-white/20" />
              <span>Scroll to explore</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
