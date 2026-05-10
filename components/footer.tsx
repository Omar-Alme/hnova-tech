import { IconLinkedin, IconMail, IconMaple, IconPhone } from "./icons";
import { Logo } from "./logo";

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim mb-5">
        {title}
      </div>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a className="hover:text-white text-white/70" href="#">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink-950 curve-up pt-16 pb-10 overflow-hidden">
      <div className="divider-glow" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-muted max-w-xs leading-relaxed">
              Modern cloud & infrastructure solutions, engineered hands-on for growing Canadian
              businesses.
            </p>
          </div>
          <FooterCol
            title="Services"
            links={[
              "Cloud & Migration",
              "Network Design",
              "Managed IT Support",
              "Data Center",
              "Telecom & Radio",
              "Systems Integration",
            ]}
          />
          <FooterCol
            title="Company"
            links={["About", "Founder", "Work", "Privacy", "Terms"]}
          />
          <div>
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim mb-5">
              Connect
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2"
                  href="#"
                >
                  <IconLinkedin size={13} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2"
                  href="#"
                >
                  <IconMail size={13} /> hello@hnovatech.ca
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2"
                  href="#"
                >
                  <IconPhone size={13} /> +1 (416) 555-0184
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs text-muted-dim font-mono tracking-[0.14em] uppercase">
          <div>© 2026 HNovaTech Inc. — Toronto, Canada</div>
          <div className="flex items-center gap-2">
            <IconMaple size={12} className="text-glow-blue" />
            <span>Built in Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
