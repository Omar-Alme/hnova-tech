"use client";

import type { CSSProperties, ComponentType, MouseEvent } from "react";
import { motion } from "motion/react";
import { Reveal } from "./reveal";
import {
  IconArrow,
  IconCloud,
  IconNetwork,
  IconRadio,
  IconServer,
  IconSettings,
  IconShield,
  type IconProps,
} from "./icons";

type Svc = {
  Ic: ComponentType<IconProps>;
  t: string;
  d: string;
  metric: string;
  tags: string[];
};

const services: Svc[] = [
  {
    Ic: IconCloud,
    t: "Cloud Solutions & Migration",
    d: "AWS, Azure, hybrid. Lift-and-shift, refactor, FinOps & landing zones.",
    metric: "38% avg. TCO reduction",
    tags: ["AWS", "Azure", "GCP", "FinOps"],
  },
  {
    Ic: IconNetwork,
    t: "Network Design & Integration",
    d: "SD-WAN, segmentation, zero-trust topology, end-to-end visibility.",
    metric: "Zero-trust ready",
    tags: ["SD-WAN", "BGP", "Zero Trust"],
  },
  {
    Ic: IconShield,
    t: "Managed IT Support",
    d: "24/7 monitoring, incident response, change management, and SLA-backed care.",
    metric: "< 4hr response SLA",
    tags: ["24/7 NOC", "ITSM", "Patching"],
  },
  {
    Ic: IconServer,
    t: "Data Center Infrastructure",
    d: "Compute, storage, virtualization, and DR — designed for resilience.",
    metric: "99.99% uptime target",
    tags: ["VMware", "Storage", "DR"],
  },
  {
    Ic: IconRadio,
    t: "Telecom & Radio Systems",
    d: "Motorola & Tait LMR / P25 programming, dispatch integration, and mission-critical comms.",
    metric: "Mission-critical grade",
    tags: ["Motorola", "Tait", "P25"],
  },
  {
    Ic: IconSettings,
    t: "Systems Integration & Engineering",
    d: "Custom integrations, automation pipelines, and platform engineering.",
    metric: "End-to-end automation",
    tags: ["Terraform", "APIs", "CI/CD"],
  },
];

export function Services() {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`
    );
  };

  return (
    <section
      id="services"
      className="relative bg-ink-950 curve-up py-24 sm:py-36 overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          top: "20%",
          right: "-15%",
          width: 600,
          height: 600,
          background: "oklch(0.55 0.18 260 / 0.2)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 sm:mb-20">
            <div>
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
                — What we deliver
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight max-w-[14ch]">
                Six disciplines.
                <br />
                <span className="text-white/50">One team.</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="text-sm text-white/70 hover:text-white inline-flex items-center gap-2 group"
            >
              Discuss your roadmap
              <span className="h-7 w-7 rounded-full glass-light grid place-items-center group-hover:bg-white/10 transition">
                <IconArrow size={13} />
              </span>
            </a>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] } },
              }}
            >
              <div
                onMouseMove={handleMove}
                className="svc-card relative bg-ink-950 p-7 sm:p-8 min-h-[300px] flex flex-col group h-full"
              >
                <div
                  className="svc-glow absolute -inset-px pointer-events-none"
                  style={
                    {
                      background:
                        "radial-gradient(220px 160px at var(--mx,50%) 0%, oklch(0.72 0.18 255 / 0.18), transparent 60%)",
                    } as CSSProperties
                  }
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl glass-light grid place-items-center text-white/85 group-hover:text-white group-hover:border-glow-blue/40 transition">
                      <s.Ic size={20} />
                    </div>
                    <span className="font-mono text-[11px] text-muted-dim">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display font-medium text-xl tracking-tight text-white">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{s.d}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.12em] uppercase text-glow-blue">
                    <span className="h-1 w-1 rounded-full bg-glow-blue" />
                    {s.metric}
                  </div>
                </div>
                <div className="relative mt-auto pt-6 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono tracking-[0.05em] text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <IconArrow
                    size={12}
                    className="ps-arrow shrink-0 text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
