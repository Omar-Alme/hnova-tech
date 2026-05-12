"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Reveal } from "./reveal";
import {
  IconArrow,
  IconCloud,
  IconNetwork,
  IconRadio,
  IconServer,
  type IconProps,
} from "./icons";

type Stat = [string, string];

type Case = {
  tag: string;
  title: string;
  desc: string;
  stats: Stat[];
  accent: string;
  Ic: ComponentType<IconProps>;
};

const cases: Case[] = [
  {
    tag: "Cloud",
    title: "Enterprise Cloud Migration",
    desc: "Hybrid landing zone for a 2,400-seat enterprise. Lift-shift-refactor across 14 workloads with 0% downtime — landing zones, FinOps controls, and IAM hardening baked in from day one.",
    stats: [
      ["14", "Workloads"],
      ["38%", "TCO reduction"],
      ["0", "Downtime hrs"],
    ],
    accent: "oklch(0.72 0.18 255)",
    Ic: IconCloud,
  },
  {
    tag: "Hybrid",
    title: "Hybrid Infrastructure Deployment",
    desc: "Edge-to-cloud disaster recovery with sub-15-minute RTO across two Canadian data centers. Replication, failover orchestration, and quarterly DR exercises all built into the platform.",
    stats: [
      ["<15m", "RTO"],
      ["99.99%", "Uptime"],
      ["2", "DC sites"],
    ],
    accent: "oklch(0.78 0.14 175)",
    Ic: IconServer,
  },
  {
    tag: "Network",
    title: "Secure Network Modernization",
    desc: "Zero-trust segmentation, SD-WAN refresh, and identity hardening across 9 regional offices. Lateral movement contained at each policy boundary with full east-west visibility.",
    stats: [
      ["9", "Sites"],
      ["0", "Lateral incidents"],
      ["100%", "Visibility"],
    ],
    accent: "oklch(0.72 0.17 295)",
    Ic: IconNetwork,
  },
  {
    tag: "Telecom",
    title: "Emergency Communication Systems",
    desc: "P25 radio and dispatch integration for mission-critical first-responder coordination. Programmed Motorola and Tait fleets, integrated dispatch consoles, and resilient failover paths.",
    stats: [
      ["P25", "Standard"],
      ["24/7", "Resilient"],
      ["100%", "Coverage"],
    ],
    accent: "oklch(0.78 0.15 65)",
    Ic: IconRadio,
  },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [displayed, setDisplayed] = useState<string>(value);

  useEffect(() => {
    const match = value.match(/^([<>]?)(\d+\.?\d*)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    if (target === 0) {
      setDisplayed(value);
      return;
    }
    const decimals = (numStr.split(".")[1] ?? "").length;
    if (!inView) {
      setDisplayed(`${prefix}${(0).toFixed(decimals)}${suffix}`);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      const out =
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      setDisplayed(`${prefix}${out}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl sm:text-4xl tracking-tight text-white tabular-nums">
        {displayed}
      </div>
      <div className="mt-1.5 text-[11px] font-mono tracking-[0.14em] uppercase text-muted-dim">
        {label}
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const c = cases[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + cases.length) % cases.length);
  };
  const jump = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section
      id="work"
      className="relative pt-12 sm:pt-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #eef0f7 0%, #f6f7fb 100%)",
      }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] bg-ink-950 px-6 sm:px-12 lg:px-20 pt-14 sm:pt-20 pb-24 sm:pb-32 shadow-[0_-30px_80px_-30px_rgba(10,14,31,0.25)]">
            <div
              className="glow-orb"
              style={{
                top: "-15%",
                left: "-10%",
                width: 520,
                height: 520,
                background: `${c.accent.replace(")", " / 0.18)")}`,
                transition: "background 0.8s ease",
              }}
            />
            <div
              className="glow-orb"
              style={{
                bottom: "-20%",
                right: "-10%",
                width: 460,
                height: 460,
                background: "oklch(0.55 0.18 280 / 0.14)",
              }}
            />

            <div className="relative">
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-6">
                — Example Solutions
              </div>

              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex gap-3 sm:gap-5">
                  <span
                    aria-hidden
                    className="font-display font-medium leading-[0.7] text-white/12 select-none"
                    style={{ fontSize: "clamp(4.5rem, 9vw, 7.5rem)" }}
                  >
                    &ldquo;
                  </span>
                  <h2 className="font-display font-medium text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.05] tracking-tight max-w-xl">
                    The shape of the work,
                    <br />
                    <span className="text-white/50">in production.</span>
                  </h2>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous case"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-ink-950 grid place-items-center shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform"
                  >
                    <IconArrow size={16} className="-scale-x-100" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next case"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-ink-950 grid place-items-center shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform"
                  >
                    <IconArrow size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-12 sm:mt-16 relative min-h-[360px] sm:min-h-[320px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={c.title}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 24, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -direction * 24, filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                  >
                    <div className="lg:col-span-4 flex items-center gap-4">
                      <div
                        className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl grid place-items-center shrink-0 border"
                        style={{
                          background: `${c.accent.replace(")", " / 0.12)")}`,
                          borderColor: `${c.accent.replace(")", " / 0.35)")}`,
                          color: c.accent,
                        }}
                      >
                        <c.Ic size={26} />
                      </div>
                      <div>
                        <div
                          className="text-base sm:text-lg font-display font-medium text-white"
                          style={{ color: c.accent }}
                        >
                          {c.tag}
                        </div>
                        <div className="mt-1 text-[11px] font-mono tracking-[0.16em] uppercase text-muted-dim">
                          Case / 0{index + 1}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <h3 className="font-display font-medium text-2xl sm:text-[28px] tracking-tight text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-white/70 max-w-2xl">
                        {c.desc}
                      </p>
                      <div className="mt-8 grid grid-cols-3 gap-6 sm:gap-8 max-w-lg">
                        {c.stats.map(([k, v]) => (
                          <AnimatedStat
                            key={`${index}-${k}-${v}`}
                            value={k}
                            label={v}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-12 sm:mt-14 flex items-center justify-between gap-6 flex-wrap">
                <div className="flex items-center gap-2 sm:gap-3">
                  {cases.map((cs, i) => (
                    <button
                      key={cs.title}
                      type="button"
                      onClick={() => jump(i)}
                      aria-label={`Go to ${cs.tag} case`}
                      className="group relative h-1 w-10 sm:w-14 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                      <motion.span
                        className="absolute inset-y-0 left-0 transition-[background] duration-500"
                        style={{
                          background: i === index ? cs.accent : "rgba(255,255,255,0.4)",
                        }}
                        initial={false}
                        animate={{ width: i === index ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                      />
                    </button>
                  ))}
                </div>
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-dim">
                  {String(index + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
