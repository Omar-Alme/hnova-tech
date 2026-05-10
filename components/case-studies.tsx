import { IconArrowUp } from "./icons";
import { Reveal } from "./reveal";

type Case = {
  tag: string;
  title: string;
  desc: string;
  stats: [string, string][];
  span: string;
};

const cases: Case[] = [
  {
    tag: "Cloud",
    title: "Enterprise Cloud Migration",
    desc: "Hybrid landing zone for a 2,400-seat enterprise. Lift-shift-refactor across 14 workloads with 0% downtime.",
    stats: [
      ["14", "Workloads"],
      ["38%", "TCO reduction"],
      ["0", "Downtime hrs"],
    ],
    span: "lg:col-span-7",
  },
  {
    tag: "Hybrid",
    title: "Hybrid Infrastructure Deployment",
    desc: "Edge-to-cloud DR with sub-15-minute RTO across two Canadian data centers.",
    stats: [
      ["<15m", "RTO"],
      ["99.99%", "Uptime"],
    ],
    span: "lg:col-span-5",
  },
  {
    tag: "Network",
    title: "Secure Network Modernization",
    desc: "Zero-trust segmentation, SD-WAN refresh, and identity hardening across 9 regional offices.",
    stats: [
      ["9", "Sites"],
      ["0", "Lateral incidents"],
    ],
    span: "lg:col-span-5",
  },
  {
    tag: "Telecom",
    title: "Emergency Communication Systems",
    desc: "P25 radio + dispatch integration for mission-critical first-responder coordination.",
    stats: [
      ["P25", "Standard"],
      ["24/7", "Resilient"],
    ],
    span: "lg:col-span-7",
  },
];

export function CaseStudies() {
  return (
    <section
      id="work"
      className="relative bg-ink-950 py-24 sm:py-36 overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          bottom: "20%",
          left: "-15%",
          width: 500,
          height: 500,
          background: "oklch(0.55 0.18 280 / 0.18)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-14 sm:mb-20 max-w-2xl">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
              — Example Solutions
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              The shape of the work,
              <br />
              <span className="text-white/50">in production.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className={c.span}
              as="article"
            >
              <article className="group relative overflow-hidden rounded-3xl glass-light p-7 sm:p-9 min-h-[420px] flex flex-col h-full">
                <div className="absolute inset-0 stripe-img opacity-60" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-blue/50 to-transparent" />
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-glow-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/60">
                    {c.tag}
                  </span>
                  <span className="font-mono text-[11px] text-muted-dim">
                    CASE / 0{i + 1}
                  </span>
                </div>
                <div className="relative mt-auto pt-32">
                  <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-muted leading-relaxed">
                    {c.desc}
                  </p>
                  <div className="mt-7 grid grid-cols-3 gap-5">
                    {c.stats.map(([k, v]) => (
                      <div key={k + v}>
                        <div className="font-display text-2xl tracking-tight text-white">
                          {k}
                        </div>
                        <div className="mt-1 text-[11px] font-mono tracking-[0.14em] uppercase text-muted-dim">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-7 right-7">
                  <div className="h-10 w-10 rounded-full glass grid place-items-center group-hover:bg-glow-blue/20 group-hover:border-glow-blue/40 transition-all">
                    <IconArrowUp size={15} className="text-white/85" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
