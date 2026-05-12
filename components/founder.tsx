import Image from "next/image";
import { IconArrow, IconLinkedin } from "./icons";
import { Reveal } from "./reveal";

const credentials = [
  "CompTIA Cloud+",
  "A+ Certified",
  "AWS Solutions Architect",
  "Google Cloud Professional",
];

const stack: { k: string; v: string }[] = [
  { k: "Cloud", v: "AWS · Azure · GCP" },
  { k: "Networking", v: "Cisco · BGP · MPLS" },
  { k: "Telecom", v: "Motorola · Tait · P25" },
  { k: "Sectors", v: "Enterprise · Public" },
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative section-light curve-up py-20 sm:py-24 overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          top: "10%",
          right: "-10%",
          width: 520,
          height: 520,
          background: "oklch(0.55 0.18 260 / 0.1)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/hassan.png"
                alt="Hassan Al-Mehdar — Founder & Network Integration Specialist at HNovaTech"
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 ring-1 ring-black/[0.06]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/95">
                  Hassan Al-Mehdar
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/65">
                  Ottawa · CA
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Right column */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
              — Founder
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Hassan Al-Mehdar
            </h2>
            <div className="mt-3 text-sm text-muted">
              Founder &amp; Network Integration Specialist
              <span className="mx-2 text-muted-dim">·</span>
              Ottawa, ON
            </div>

            <div className="mt-7 space-y-4 text-[15px] leading-relaxed max-w-xl">
              <p>
                15+ years architecting and supporting critical infrastructure — from 9-1-1
                emergency response systems at Intrado, to cloud-native operations at TELUS
                Health, to government networks at Shared Services Canada and integrations at
                Axsera.
              </p>
              <p className="text-muted">
                A hands-on engineer first. HNovaTech exists to give growing Canadian
                businesses the same caliber of integration work usually reserved for the
                largest enterprise programs — without the agency layer.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8">
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-muted-dim mb-3">
                Credentials
              </div>
              <div className="flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-mono tracking-[0.12em] uppercase border border-black/[0.1] px-3 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="mt-8 pt-8 border-t border-black/[0.07]">
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-muted-dim mb-5">
                Stack &amp; Specializations
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
                {stack.map(({ k, v }) => (
                  <div key={k}>
                    <div className="text-[10px] font-mono tracking-[0.16em] uppercase text-muted-dim">
                      {k}
                    </div>
                    <div className="mt-1.5 text-sm">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary rounded-none px-5 py-3 text-sm font-medium inline-flex items-center gap-2 text-white"
              >
                Talk to Hassan <IconArrow size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/hassanalmehdar/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-none px-5 py-3 text-sm font-medium inline-flex items-center gap-2 border border-black/[0.1] hover:bg-black/[0.03] transition-colors"
              >
                <IconLinkedin size={14} /> Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
