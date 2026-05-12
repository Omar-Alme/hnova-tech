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
  const featuredServices = [services[0], services[2]];
  const supportingServices = [services[1], services[3], services[4], services[5]];
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
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
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-16">
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
            <div className="max-w-sm text-right">
              <p className="text-sm leading-relaxed text-muted">
                Strategy, implementation, and support under one roof, so modernization feels
                coordinated instead of fragmented.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/72 transition-colors hover:text-white"
              >
                Discuss your roadmap
                <span className="grid h-7 w-7 place-items-center rounded-full glass-light transition hover:bg-white/10">
                  <IconArrow size={13} />
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="grid gap-5 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.t}
              className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
                },
              }}
            >
              <div
                onMouseMove={handleMove}
                className="svc-card group relative flex min-h-[340px] h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-8"
              >
                <div
                  className="svc-glow pointer-events-none absolute -inset-px"
                  style={
                    {
                      background:
                        "radial-gradient(360px 220px at var(--mx,50%) 0%, oklch(0.72 0.18 255 / 0.2), transparent 62%)",
                    } as CSSProperties
                  }
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl glass-light text-white/90 transition group-hover:border-glow-blue/40">
                    <service.Ic size={22} />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-dim">
                    Flagship / 0{index + 1}
                  </div>
                </div>
                <div className="relative mt-auto pt-14">
                  <h3 className="max-w-[16ch] font-display text-3xl font-medium tracking-tight text-white">
                    {service.t}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/68">{service.d}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.12em] text-glow-blue">
                    <span className="h-1 w-1 rounded-full bg-glow-blue" />
                    {service.metric}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono tracking-[0.05em] text-white/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {supportingServices.map((service, index) => (
            <motion.article
              key={service.t}
              className="lg:col-span-3"
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.72, ease: [0.2, 0.7, 0.2, 1] },
                },
              }}
            >
              <div
                onMouseMove={handleMove}
                className="svc-card group relative flex min-h-[245px] h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-950/80 p-6"
              >
                <div
                  className="svc-glow pointer-events-none absolute -inset-px"
                  style={
                    {
                      background:
                        "radial-gradient(220px 150px at var(--mx,50%) 0%, oklch(0.72 0.18 255 / 0.16), transparent 64%)",
                    } as CSSProperties
                  }
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass-light text-white/85 transition group-hover:border-glow-blue/40">
                    <service.Ic size={19} />
                  </div>
                  <span className="font-mono text-[11px] text-muted-dim">
                    0{index + 3}
                  </span>
                </div>
                <div className="relative mt-auto pt-10">
                  <h3 className="font-display text-xl font-medium tracking-tight text-white">
                    {service.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.d}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.12em] text-glow-blue">
                    <span className="h-1 w-1 rounded-full bg-glow-blue" />
                    {service.metric}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
