import { IconArrow } from "./icons";
import { Reveal } from "./reveal";

type Row = {
  n: string;
  problem: string;
  pdesc: string;
  solution: string;
  sdesc: string;
  tags: string[];
};

const rows: Row[] = [
  {
    n: "01",
    problem: "Outdated Infrastructure",
    pdesc: "Legacy hardware, sprawl, and brittle systems holding back velocity.",
    solution: "Modernized stack: assessed, refactored, and migrated.",
    sdesc:
      "We audit your environment, design the target state, and execute zero-downtime cutovers.",
    tags: ["Stack Assessment", "Zero-downtime", "Refactor"],
  },
  {
    n: "02",
    problem: "Cloud Migration Complexity",
    pdesc:
      "Costly missteps, security risk, and uncertainty about what to lift, shift, or rebuild.",
    solution: "Phased migration with cost & security guardrails.",
    sdesc:
      "AWS / Azure / hybrid blueprints with FinOps controls and identity hardening built in.",
    tags: ["AWS", "Azure", "Landing Zone", "FinOps"],
  },
  {
    n: "03",
    problem: "Unreliable IT Support",
    pdesc:
      "Long ticket times, knowledge silos, and reactive (not proactive) operations.",
    solution: "Managed services with SLA-backed response.",
    sdesc:
      "24/7 monitoring, change management, and a dedicated engineer who knows your stack.",
    tags: ["24/7 NOC", "< 4hr SLA", "ITSM"],
  },
  {
    n: "04",
    problem: "Telecom & Communication Challenges",
    pdesc:
      "Aging PBX, weak coverage, fragmented radio, and unreliable emergency comms.",
    solution: "Modern voice, data, and radio integration.",
    sdesc:
      "Carrier-grade VoIP, LMR/P25 systems, and resilient communication for mission-critical work.",
    tags: ["P25 / LMR", "VoIP", "Motorola", "Dispatch"],
  },
];

export function ProblemSolution() {
  return (
    <section
      id="problems"
      className="relative section-light py-24 sm:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 sm:mb-20">
            <div>
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
                — Problems / Solutions
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight max-w-[18ch]">
                The friction we engineer
                <br />
                <span className="text-white/50">out of your operations.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted leading-relaxed">
              Four patterns we see in nearly every IT modernization. Each row is how we reframe
              the problem and the shape of the work we do.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4 sm:space-y-5">
          {rows.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06}>
              <div className="ps-row group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 rounded-2xl bg-white border border-black/[0.05] shadow-[0_1px_2px_rgba(10,14,31,0.04),0_8px_24px_-12px_rgba(10,14,31,0.08)] p-7 sm:p-9 transition-shadow hover:shadow-[0_1px_2px_rgba(10,14,31,0.04),0_18px_40px_-18px_rgba(10,14,31,0.18)]">
                <div className="lg:col-span-1 font-mono text-xs text-muted-dim">
                  ({r.n})
                </div>
                <div className="lg:col-span-5">
                  <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-rose-500/80 mb-3">
                    Problem
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl leading-tight tracking-tight text-ink-900">
                    {r.problem}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-sm text-muted max-w-md">
                    {r.pdesc}
                  </p>
                </div>
                <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-black/[0.06] relative">
                  <span
                    aria-hidden
                    className="hidden lg:block absolute left-0 top-0 h-10 w-px bg-glow-blue/60"
                  />
                  <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.18em] uppercase text-glow-blue mb-3">
                    <span>Solution</span>
                    <IconArrow size={12} className="ps-arrow" />
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl leading-tight tracking-tight text-ink-900">
                    {r.solution}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-sm text-muted max-w-lg">
                    {r.sdesc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-black/[0.08] bg-black/[0.02] px-2.5 py-1 text-[10.5px] font-mono tracking-[0.08em] text-ink-900/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
