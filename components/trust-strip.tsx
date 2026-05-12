import Image from "next/image";
import { Reveal } from "./reveal";

type Item = { k: string; v: string; note: string };

const items: Item[] = [
  { k: "15+", v: "Years Experience", note: "Senior delivery depth" },
  { k: "Cloud", v: "Infrastructure Specialists", note: "Modernization and migration" },
  { k: "Enterprise", v: "& Public Sector", note: "Complex environments" },
];

type Partner = { name: string; logo?: string };

const partners: Partner[] = [
  { name: "AWS", logo: "/logos/awslogo.png" },
  { name: "Google Cloud", logo: "/logos/googlecloudlogo.png" },
  { name: "TELUS", logo: "/logos/teluslogo.png" },
  { name: "Bell", logo: "/logos/belllogo.png" },
  { name: "Motorola", logo: "/logos/motorolalogo.png" },
  { name: "Shared Services Canada" },
  { name: "Intrado" },
  { name: "Axsera" },
  { name: "CGI" },
];

export function TrustStrip() {
  const partnersLoop = [...partners, ...partners];
  return (
    <section className="relative section-light curve-up py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] md:grid-cols-3">
            {items.map((it, i) => (
              <div
                key={i}
                className="group bg-[#f6f7fb] p-6 transition-colors hover:bg-white sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
                      {it.k}
                    </div>
                    <div className="mt-2 text-sm font-medium text-ink-900/80">{it.v}</div>
                  </div>
                  <span className="mt-1 h-2 w-2 rounded-full bg-glow-blue/80 shadow-[0_0_18px_oklch(0.72_0.18_255_/_0.45)]" />
                </div>
                <div className="mt-8 border-t border-black/[0.06] pt-4 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-dim">
                  {it.note}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 sm:mt-16 flex items-center gap-4 text-[11px] font-mono tracking-[0.22em] uppercase text-muted-dim">
            <span className="h-px w-8 bg-black/15" />
            <span>Experience across</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-8 overflow-hidden mask-fade">
            <div className="flex items-center gap-14 marquee-track w-max">
              {partnersLoop.map((p, i) =>
                p.logo ? (
                  <div
                    key={`${p.name}-${i}`}
                    className="relative h-9 w-32 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div
                    key={`${p.name}-${i}`}
                    className="font-display text-xl sm:text-2xl text-black/40 hover:text-black/80 transition-colors whitespace-nowrap tracking-tight font-light shrink-0"
                  >
                    {p.name}
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
