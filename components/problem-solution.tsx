import { IconArrow } from "./icons";
import { Reveal } from "./reveal";

const rows = [
  {
    n: "01",
    problem: "Outdated Infrastructure",
    pdesc: "Legacy hardware, sprawl, and brittle systems holding back velocity.",
    solution: "Modernized stack — assessed, refactored, and migrated.",
    sdesc:
      "We audit your environment, design the target state, and execute zero-downtime cutovers.",
  },
  {
    n: "02",
    problem: "Cloud Migration Complexity",
    pdesc:
      "Costly missteps, security risk, and uncertainty about what to lift, shift, or rebuild.",
    solution: "Phased migration with cost & security guardrails.",
    sdesc:
      "AWS / Azure / hybrid blueprints with FinOps controls and identity hardening built in.",
  },
  {
    n: "03",
    problem: "Unreliable IT Support",
    pdesc:
      "Long ticket times, knowledge silos, and reactive — not proactive — operations.",
    solution: "Managed services with SLA-backed response.",
    sdesc:
      "24/7 monitoring, change management, and a dedicated engineer who knows your stack.",
  },
  {
    n: "04",
    problem: "Telecom & Communication Challenges",
    pdesc:
      "Aging PBX, weak coverage, fragmented radio, and unreliable emergency comms.",
    solution: "Modern voice, data, and radio integration.",
    sdesc:
      "Carrier-grade VoIP, LMR/P25 systems, and resilient communication for mission-critical work.",
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

        <Reveal delay={0.1}>
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {rows.map((r) => (
              <div
                key={r.n}
                className="ps-row group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 sm:py-12 px-2 sm:px-4"
              >
                <div className="lg:col-span-1 font-mono text-xs text-muted-dim pt-1">
                  ({r.n})
                </div>
                <div className="lg:col-span-5">
                  <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-rose-400/70 mb-3">
                    Problem
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl leading-tight tracking-tight text-white/95">
                    {r.problem}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-sm text-muted max-w-md">
                    {r.pdesc}
                  </p>
                </div>
                <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-white/5">
                  <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.18em] uppercase text-glow-blue mb-3">
                    <span>Solution</span>
                    <IconArrow size={12} className="ps-arrow" />
                  </div>
                  <h3 className="font-display font-medium text-2xl sm:text-3xl leading-tight tracking-tight text-white">
                    {r.solution}
                  </h3>
                  <p className="mt-3 text-[13px] sm:text-sm text-muted max-w-lg">
                    {r.sdesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
