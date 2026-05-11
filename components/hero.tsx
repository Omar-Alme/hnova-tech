"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { IconArrow, IconChevron, IconCloud } from "./icons";
import { Reveal } from "./reveal";
import AnimatedTextCycle from "./ui/animated-text-cycle";

function Particles({ count = 60 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = Math.random() * 100;
        const dur = 12 + Math.random() * 22;
        const delay = -Math.random() * dur;
        const dy = -(180 + Math.random() * 380);
        const dx = (Math.random() - 0.5) * 100;
        const o = 0.35 + Math.random() * 0.65;
        const size = 1 + Math.random() * 2.2;
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

const certificates = [
  { src: "/certificates/awsSA.webp", alt: "AWS Solutions Architect" },
  { src: "/certificates/googlecloudpro.png", alt: "Google Cloud Professional" },
];

const proofPoints = [
  ["15+", "Years in critical infrastructure"],
  ["1 day", "Typical first response"],
  ["Canada", "Remote and onsite delivery"],
];

const heroAudiences = [
  "Modern Enterprises",
  "Growing Businesses",
  "Canadian IT Teams",
  "Mission-Critical Ops",
];

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
      <div
        className="aurora"
        style={{ transform: `translateY(${-parallax * 0.3}px)` }}
      />
      <div className="horizon" />
      <div className="absolute inset-0 stars opacity-70" />
      {mounted && <Particles count={64} />}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950 z-10" />

      <div className="relative z-20 flex-1 flex flex-col justify-end pb-20 sm:pb-28 pt-36">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10">

          {/* Announcement chip */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-1.5 text-[11px] font-mono tracking-[0.15em] uppercase text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-glow-blue shadow-[0_0_8px_3px_oklch(0.72_0.18_255_/_0.7)]" />
                Cloud · Infrastructure · Networking
              </div>

              <div className="flex items-center gap-2">
                {certificates.map((c) => (
                  <div
                    key={c.src}
                    className="relative h-9 w-9 sm:h-10 sm:w-10"
                    title={c.alt}
                  >
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="40px"
                      className="object-contain drop-shadow-[0_2px_8px_rgba(120,150,255,0.35)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <Reveal delay={0.1} className="lg:col-span-9">
              <h1 className="font-display font-medium text-[clamp(2.1rem,10.5vw,3.35rem)] sm:text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] sm:leading-[0.95] tracking-[-0.02em] sm:tracking-[-0.035em] max-w-[16ch]">
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #ffffff 0%, #eef1fa 100%)",
                  }}
                >
                  Reliable Cloud
                </span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #c4cae0 0%, #7e85a3 100%)",
                  }}
                >
                  & Infrastructure
                </span>
                <span className="block text-white/45 text-[0.74em] sm:text-[0.82em] tracking-[-0.01em] sm:tracking-[-0.02em]">
                  {"for "}
                  <AnimatedTextCycle
                    words={heroAudiences}
                    interval={3000}
                    className="text-white/70"
                  />
                </span>
              </h1>
            </Reveal>

            {/* Spinning cloud emblem */}
            <div className="hidden lg:flex lg:col-span-3 justify-end items-end">
              <Reveal delay={0.35}>
                <div className="relative h-32 w-32 xl:h-36 xl:w-36">
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
                      fontSize="5.4"
                      letterSpacing="2.8"
                      fontFamily="Inter Tight"
                    >
                      <textPath href="#cir">
                        CLOUD · INFRASTRUCTURE · NETWORKING · TELECOM ·{" "}
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 grid place-items-center">
                    <IconCloud size={30} className="text-white/90" />
                  </div>
                  <div className="absolute -inset-4 rounded-full bg-glow-blue/15 blur-2xl -z-10" />
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-white/55">
              Ottawa-based IT solutions provider with 15+ years building cloud,
              networking, telecom, and managed support for enterprise and public sector
              across Canada.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary rounded-none px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2"
              >
                Book a Consultation <IconArrow size={15} />
              </a>
              <a
                href="#services"
                className="btn-secondary glass-light rounded-none px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2 text-white/75"
              >
                Explore Services <IconChevron size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3">
              {proofPoints.map(([value, label]) => (
                <div key={value} className="bg-ink-950/70 px-4 py-4">
                  <div className="font-display text-xl tracking-tight text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.14em] text-muted-dim">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
