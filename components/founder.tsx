import Image from "next/image";
import { IconArrow, IconLinkedin } from "./icons";
import { Reveal } from "./reveal";

const stack: [string, string][] = [
  ["Cloud Systems", "AWS · Azure"],
  ["Networking", "Cisco · Juniper"],
  ["Telecom", "VoIP · P25"],
  ["Enterprise", "Public sector"],
];

export function Founder() {
  return (
    <section
      id="founder"
      className="relative section-light curve-up py-24 sm:py-36 overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          top: "10%",
          right: "-10%",
          width: 520,
          height: 520,
          background: "oklch(0.55 0.18 260 / 0.2)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden glass-light">
              <Image
                src="/hassan1.JPG"
                alt="Hassan Al-Mehdar, Founder"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
              <div className="absolute -inset-2 rounded-none ring-1 ring-glow-blue/20 pointer-events-none" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-white/50">
                <span>HNT — 01</span>
                <span>YYZ · CA</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/60">
                  Hassan Al-Mehdar
                </div>
                <div className="h-7 w-7 rounded-full grid place-items-center border border-white/15 bg-black/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-glow-blue shadow-[0_0_8px_2px_oklch(0.72_0.18_255_/_0.8)]" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
              — Founder
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Hassan Al-Mehdar
            </h2>
            <div className="mt-2 text-sm text-muted">
              Founder & Network Integration Specialist
            </div>

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-white/80 max-w-xl">
              <p>
                15+ years engineering enterprise infrastructure across cloud, networking, and
                telecom — including roles supporting TELUS Health, Shared Services Canada,
                Intrado, and Axsera.
              </p>
              <p className="text-muted">
                A hands-on engineer first. HNovaTech exists to give growing Canadian businesses
                the same caliber of integration work usually reserved for the largest enterprise
                programs — without the agency layer.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-none overflow-hidden border border-white/[0.07] max-w-2xl">
              {stack.map(([k, v]) => (
                <div key={k} className="bg-ink-950 px-4 py-4">
                  <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-muted-dim">
                    {k}
                  </div>
                  <div className="mt-1 text-sm text-white/85">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="#contact"
                className="btn-primary rounded-none px-5 py-3 text-sm font-medium inline-flex items-center gap-2"
              >
                Talk to Hassan <IconArrow size={14} />
              </a>
              <a
                href="#"
                className="btn-secondary glass-light rounded-none px-5 py-3 text-sm inline-flex items-center gap-2 text-white/85"
              >
                <IconLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
