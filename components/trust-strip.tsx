import Image from "next/image";
import { IconMaple } from "./icons";
import { Reveal } from "./reveal";

type Item = { k: string; v: string; isMaple?: boolean };

const items: Item[] = [
  { k: "15+", v: "Years Experience" },
  { k: "Cloud", v: "Infrastructure Specialists" },
  { k: "Enterprise", v: "& Public Sector" },
  { k: "maple", v: "Canada-Based IT", isMaple: true },
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
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-black/[0.08] overflow-hidden border border-black/[0.06]">
            {items.map((it, i) => (
              <div
                key={i}
                className="bg-[#f6f7fb] p-6 sm:p-8 group hover:bg-white transition-colors border-r border-b border-black/[0.06] last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
              >
                <div className="font-display font-medium text-3xl sm:text-4xl tracking-tight text-ink-900">
                  {it.isMaple ? (
                    <IconMaple size={36} className="text-glow-blue" />
                  ) : (
                    it.k
                  )}
                </div>
                <div className="mt-2 text-sm text-muted">{it.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 sm:mt-16 flex items-center gap-4 text-[11px] font-mono tracking-[0.22em] uppercase text-muted-dim">
            <span className="h-px w-8 bg-black/15" />
            <span>Engineered by alumni from</span>
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