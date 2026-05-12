import { IconLinkedin, IconMail, IconMaple, IconPhone } from "./icons";
import { Logo } from "./logo";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim mb-5">
        {title}
      </div>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a className="hover:text-white text-white/70 transition-colors" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#070913] pt-14 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 flex flex-col gap-4 border-b border-white/[0.06] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-glow-blue">
              Canada-wide infrastructure partner
            </div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Cloud, network, telecom, and support work delivered by hands-on senior engineering.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-secondary glass-light inline-flex items-center justify-center rounded-none px-5 py-3 text-sm text-white/85"
          >
            Start a project
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo size={20} />
            <p className="mt-5 text-sm text-muted max-w-xs leading-relaxed">
              Ottawa-based IT solutions provider — cloud, network, telecom, and managed
              support, engineered hands-on for growing Canadian businesses.
            </p>
            <div className="mt-5 text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim">
              Ottawa, ON
            </div>
          </div>
          <FooterCol
            title="Services"
            links={[
              { label: "Cloud & Migration", href: "#services" },
              { label: "Network Design", href: "#services" },
              { label: "Managed IT Support", href: "#services" },
              { label: "Data Center", href: "#services" },
              { label: "Telecom & Radio", href: "#services" },
              { label: "Systems Integration", href: "#services" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Solutions", href: "#problems" },
              { label: "Founder", href: "#founder" },
              { label: "Work", href: "#work" },
              { label: "Contact", href: "#contact" },
            ]}
          />
          <div>
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim mb-5">
              Connect
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2 transition-colors"
                  href="https://www.linkedin.com/company/hnovatech-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin size={13} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2 transition-colors"
                  href="mailto:info@hnovatech.ca"
                >
                  <IconMail size={13} /> info@hnovatech.ca
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white text-white/70 inline-flex items-center gap-2 transition-colors"
                  href="tel:+16132621341"
                >
                  <IconPhone size={13} /> +1 (613) 262-1341
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 text-xs text-muted-dim font-mono tracking-[0.14em] uppercase">
          <div>© {new Date().getFullYear()} HNovaTech Inc. — Ottawa, Ontario</div>
          <div className="flex items-center gap-2">
            <IconMaple size={12} className="text-glow-blue" />
            <span>Built in Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
