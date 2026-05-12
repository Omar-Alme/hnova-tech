"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { IconArrow } from "./icons";

type Stat = [string, string];
type Visual = ComponentType<{ accent: string }>;
type Case = {
  tag: string;
  title: string;
  desc: string;
  stats: Stat[];
  accent: string;
  Visual: Visual;
};

/* ─── Visual: Cloud cost bars ──────────────────────────────────────────── */
function CloudCostVisual({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-10 gap-4">
      <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/35 mb-1">
        Infrastructure cost
      </div>
      {[
        { label: "Before", pct: 100, muted: true },
        { label: "After", pct: 62, muted: false },
      ].map(({ label, pct, muted }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="w-12 text-[10px] font-mono text-white/40 shrink-0">{label}</div>
          <div className="flex-1 h-6 rounded bg-white/[0.04] overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 rounded"
              style={{ background: muted ? "rgba(255,255,255,0.12)" : accent }}
              initial={{ width: "0%" }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            />
            <span className="absolute right-2 inset-y-0 flex items-center text-[10px] font-mono text-white/50">
              {pct}%
            </span>
          </div>
        </div>
      ))}
      <motion.div
        className="flex items-center gap-2 mt-1"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-[11px] font-mono font-medium" style={{ color: accent }}>
          38% TCO reduction
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>
    </div>
  );
}

/* ─── Visual: Hybrid RTO timeline ───────────────────────────────────────── */
function HybridTimelineVisual({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-10 gap-5">
      <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/35">
        Recovery time objective
      </div>
      <div className="relative">
        <div className="h-1 rounded-full bg-white/[0.06]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
          />
        </div>
        <div className="mt-2.5 flex justify-between">
          <div className="text-[10px] font-mono text-white/35 uppercase tracking-[0.12em]">
            T+0 incident
          </div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="font-display text-xl font-medium text-white">&lt;15m</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.12em]" style={{ color: accent }}>
              recovered
            </div>
          </motion.div>
        </div>
      </div>
      <div className="space-y-2 mt-1">
        <div className="flex justify-between text-[10px] font-mono text-white/35 uppercase tracking-[0.12em]">
          <span>Uptime SLA</span>
          <span className="text-white/60">99.99%</span>
        </div>
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent }}
            initial={{ width: "0%" }}
            animate={{ width: "99.99%" }}
            transition={{ duration: 1.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Visual: Network topology ───────────────────────────────────────────── */
function NetworkTopologyVisual({ accent }: { accent: string }) {
  const cx = 100, cy = 62, r = 46;
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
  });

  return (
    <div className="absolute inset-0 flex flex-col">
      <svg viewBox="0 0 200 128" fill="none" className="flex-1 w-full">
        <motion.circle
          cx={cx} cy={cy} r={r + 14}
          stroke="white" strokeOpacity={0.08} strokeWidth={1} strokeDasharray="2 5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1={cx} y1={cy} x2={n.x} y2={n.y}
            stroke="white" strokeWidth={0.7} strokeOpacity={0.2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.07 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x} cy={n.y} r={3.5}
            stroke={accent} strokeWidth={1.4} fill="rgb(5,6,10)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.07, type: "spring", stiffness: 280, damping: 18 }}
          />
        ))}
        <motion.circle
          cx={cx} cy={cy} r={10}
          fill={accent} fillOpacity={0.15} stroke={accent} strokeWidth={1.4}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.circle
          cx={cx} cy={cy} r={3.5}
          fill={accent}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ duration: 0.4, delay: 0.12 }}
        />
      </svg>
      <div className="flex justify-between px-7 sm:px-10 pb-5 text-[10px] font-mono uppercase tracking-[0.14em]">
        <span className="text-white/35">9 regional sites</span>
        <span style={{ color: accent }}>zero-trust</span>
      </div>
    </div>
  );
}

/* ─── Visual: Radio signal bars ─────────────────────────────────────────── */
const BAR_HEIGHTS = [28, 44, 56, 68, 52, 72, 60, 48, 76, 60, 52, 40, 28];

function RadioSignalVisual({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-10 gap-4">
      <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/35">
        Signal spectrum
      </div>
      <div className="flex items-end gap-1 h-[76px]">
        {BAR_HEIGHTS.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: accent, opacity: 0.45 + (h / 76) * 0.55 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
            custom={h}
          >
            <div style={{ height: `${h}px` }} className="w-full" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <div>
          <div className="font-display text-xl font-medium text-white">P25</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-white/40 mt-0.5">
            Standard
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-xl font-medium text-white">24/7</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-white/40 mt-0.5">
            Resilient
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Cases ──────────────────────────────────────────────────────────────── */
const cases: Case[] = [
  {
    tag: "Cloud",
    title: "Enterprise Cloud Migration",
    desc: "Hybrid landing zone for a 2,400-seat enterprise. Lift-shift-refactor across 14 workloads with 0% downtime — landing zones, FinOps controls, and IAM hardening baked in from day one.",
    stats: [["14", "Workloads"], ["38%", "TCO reduction"], ["0", "Downtime hrs"]],
    accent: "oklch(0.72 0.18 255)",
    Visual: CloudCostVisual,
  },
  {
    tag: "Hybrid",
    title: "Hybrid Infrastructure Deployment",
    desc: "Edge-to-cloud disaster recovery with sub-15-minute RTO across two Canadian data centers. Replication, failover orchestration, and quarterly DR exercises all built into the platform.",
    stats: [["<15m", "RTO"], ["99.99%", "Uptime"], ["2", "DC sites"]],
    accent: "oklch(0.78 0.14 175)",
    Visual: HybridTimelineVisual,
  },
  {
    tag: "Network",
    title: "Secure Network Modernization",
    desc: "Zero-trust segmentation, SD-WAN refresh, and identity hardening across 9 regional offices. Lateral movement contained at each policy boundary with full east-west visibility.",
    stats: [["9", "Sites"], ["0", "Lateral incidents"], ["100%", "Visibility"]],
    accent: "oklch(0.72 0.17 295)",
    Visual: NetworkTopologyVisual,
  },
  {
    tag: "Telecom",
    title: "Emergency Communication Systems",
    desc: "P25 radio and dispatch integration for mission-critical first-responder coordination. Programmed Motorola and Tait fleets, integrated dispatch consoles, and resilient failover paths.",
    stats: [["P25", "Standard"], ["24/7", "Resilient"], ["100%", "Coverage"]],
    accent: "oklch(0.78 0.15 65)",
    Visual: RadioSignalVisual,
  },
];

/* ─── Animated stat ──────────────────────────────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    const match = value.match(/^([<>]?)(\d+\.?\d*)(.*)$/);
    if (!match) { setDisplayed(value); return; }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    if (target === 0) { setDisplayed(value); return; }
    const decimals = (numStr.split(".")[1] ?? "").length;
    if (!inView) { setDisplayed(`${prefix}${(0).toFixed(decimals)}${suffix}`); return; }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const out = decimals > 0 ? (eased * target).toFixed(decimals) : Math.round(eased * target).toString();
      setDisplayed(`${prefix}${out}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
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

/* ─── Section ────────────────────────────────────────────────────────────── */
export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const manualPauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const c = cases[index];

  const pauseAfterManualControl = () => {
    setIsManuallyPaused(true);
    if (manualPauseTimer.current) clearTimeout(manualPauseTimer.current);
    manualPauseTimer.current = setTimeout(() => setIsManuallyPaused(false), 7000);
  };

  const go = (dir: 1 | -1, manual = true) => {
    if (manual) pauseAfterManualControl();
    setDirection(dir);
    setIndex((i) => (i + dir + cases.length) % cases.length);
  };

  const jump = (i: number) => {
    pauseAfterManualControl();
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    if (prefersReducedMotion || isInteracting || isManuallyPaused) return;

    const interval = setInterval(() => go(1, false), 7000);
    return () => clearInterval(interval);
  }, [index, isInteracting, isManuallyPaused, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (manualPauseTimer.current) clearTimeout(manualPauseTimer.current);
    };
  }, []);

  return (
    <section
      id="work"
      className="relative pt-10 sm:pt-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #eef0f7 0%, #f6f7fb 100%)" }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-t-[28px] sm:rounded-t-[36px] bg-ink-950 px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16 pb-20 sm:pb-24 shadow-[0_-30px_80px_-30px_rgba(10,14,31,0.25)]">
            <div
              className="glow-orb transition-all duration-700"
              style={{
                top: "-15%", left: "-10%", width: 520, height: 520,
                background: c.accent.replace(")", " / 0.18)"),
              }}
            />
            <div
              className="glow-orb"
              style={{ bottom: "-20%", right: "-10%", width: 460, height: 460, background: "oklch(0.55 0.18 280 / 0.14)" }}
            />

            <div
              className="relative"
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => setIsInteracting(false)}
              onFocusCapture={() => setIsInteracting(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
              }}
            >
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-6">
                — Projects We Have Shaped
              </div>

              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex gap-3 sm:gap-5">
                  <span aria-hidden className="font-display font-medium leading-[0.7] text-white/12 select-none" style={{ fontSize: "clamp(4.5rem,9vw,7.5rem)" }}>
                    &ldquo;
                  </span>
                  <h2 className="font-display font-medium text-[clamp(1.8rem,3.8vw,3rem)] leading-[1.05] tracking-tight max-w-xl">
                    The shape of the work,
                    <br />
                    <span className="text-white/50">in production.</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-2">
                  <button type="button" onClick={() => go(-1)} aria-label="Previous case" className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-ink-950 grid place-items-center shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                    <IconArrow size={16} className="-scale-x-100" />
                  </button>
                  <button type="button" onClick={() => go(1)} aria-label="Next case" className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-ink-950 grid place-items-center shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                    <IconArrow size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 relative min-h-[390px] sm:min-h-[330px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={c.title}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 28, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -direction * 28, filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                  >
                    <div className="lg:col-span-5">
                      <div
                        className="relative aspect-[5/3.2] rounded-2xl border overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${c.accent.replace(")", " / 0.10)")}, ${c.accent.replace(")", " / 0.03)")})`,
                          borderColor: c.accent.replace(")", " / 0.22)"),
                        }}
                      >
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
                            backgroundSize: "14px 14px",
                          }}
                        />
                        <c.Visual accent={c.accent} />
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full" style={{ background: c.accent }} />
                        <div>
                          <div className="text-base sm:text-lg font-display font-medium" style={{ color: c.accent }}>
                            {c.tag}
                          </div>
                          <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-muted-dim mt-0.5">
                            Case / 0{index + 1}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 lg:pt-2">
                      <h3 className="font-display font-medium text-2xl sm:text-[28px] tracking-tight text-white leading-tight">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-white/75 max-w-2xl">
                        {c.desc}
                      </p>
                      <div className="mt-8 grid grid-cols-3 gap-5 sm:gap-7 max-w-[500px]">
                        {c.stats.map(([k, v]) => (
                          <AnimatedStat key={`${index}-${k}-${v}`} value={k} label={v} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between gap-6 flex-wrap max-w-[620px]">
                <div className="flex items-center gap-2 sm:gap-3">
                  {cases.map((cs, i) => (
                    <button
                      key={cs.title}
                      type="button"
                      onClick={() => jump(i)}
                      aria-label={`Go to ${cs.tag} case`}
                      className="group relative h-1 w-10 sm:w-14 overflow-hidden cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                      <motion.span
                        className="absolute inset-y-0 left-0 transition-[background] duration-500"
                        style={{ background: i === index ? cs.accent : "rgba(255,255,255,0.35)" }}
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
