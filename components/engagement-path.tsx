import { IconArrow } from "./icons";
import { Reveal } from "./reveal";
import { ServerStackLoader } from "./ui/server-stack-loader";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    copy: "We map the business goal, operational risk, and what needs to be true after the work.",
  },
  {
    n: "02",
    title: "Technical snapshot",
    copy: "We review the current stack, constraints, dependencies, and the fastest route to clarity.",
  },
  {
    n: "03",
    title: "Roadmap and quote",
    copy: "You get a practical plan with scope, sequencing, risk notes, and next-step options.",
  },
  {
    n: "04",
    title: "Hands-on delivery",
    copy: "Implementation stays close to the engineering work, with clear communication throughout.",
  },
];

export function EngagementPath() {
  return (
    <section className="relative section-light py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute right-[6%] top-16 hidden xl:block">
        <ServerStackLoader className="scale-[1.08]" />
      </div>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
                — Engagement path
              </div>
              <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight">
                Clear next steps,
                <br />
                <span className="text-white/50">before big commitments.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
              The first conversation is designed to surface whether there is a real fit, what
              the technical path looks like, and how quickly value can be delivered.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/[0.07] bg-black/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.06}>
              <article className="group relative flex min-h-[260px] flex-col overflow-hidden bg-[#f6f7fb] p-6 transition-colors hover:bg-white sm:p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -bottom-6 select-none font-display font-medium leading-none text-ink-900/[0.04] group-hover:text-glow-blue/[0.10] transition-colors duration-500"
                  style={{ fontSize: "9rem" }}
                >
                  {step.n}
                </span>
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted-dim">
                    ({step.n})
                  </span>
                  <IconArrow
                    size={13}
                    className="text-muted-dim transition-transform group-hover:translate-x-1 group-hover:text-ink-950"
                  />
                </div>
                <div className="relative mt-auto pt-14">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
