import { IconChevron } from "./icons";
import { Reveal } from "./reveal";

export const faqs = [
  {
    q: "What kinds of organizations does HNovaTech work with?",
    a: "We work with growing Canadian businesses, enterprise teams, and public-sector environments that need practical cloud, network, telecom, or managed IT engineering.",
  },
  {
    q: "Can you support both cloud and on-prem infrastructure?",
    a: "Yes. Most modernization work is hybrid in practice, so we design around the realities of existing data centers, identity systems, networks, security controls, and cloud platforms.",
  },
  {
    q: "How quickly can we start?",
    a: "Most conversations start within one business day. After discovery, we can usually outline a technical path and next-step scope before a larger engagement begins.",
  },
  {
    q: "Do you handle telecom and radio systems too?",
    a: "Yes. HNovaTech supports telecom, LMR/P25 radio, Motorola and Tait environments, dispatch integrations, and mission-critical communications planning.",
  },
];

export function FAQ() {
  return (
    <section className="relative section-light py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
            — FAQ
          </div>
          <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight">
            Questions buyers
            <br />
            <span className="text-white/50">ask early.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            A few direct answers before you book time with the team.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faqs.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left">
                  <span className="font-display text-xl font-medium tracking-tight text-ink-900">
                    {item.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-black/[0.08] text-muted transition-colors group-open:bg-ink-950 group-open:text-white">
                    <IconChevron
                      size={15}
                      className="transition-transform group-open:rotate-180"
                    />
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
