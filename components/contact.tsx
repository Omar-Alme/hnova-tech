"use client";

import { useState, type ChangeEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { IconArrow, IconCheck, IconLinkedin, IconMail, IconPhone } from "./icons";
import { Reveal } from "./reveal";

const services = [
  "Cloud Solutions & Migration",
  "Network Design & Integration",
  "Managed IT Support",
  "Data Center Infrastructure",
  "Telecom & Radio Systems",
  "Systems Integration & Engineering",
  "Not sure yet",
];

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className="block text-[10px] font-mono tracking-[0.2em] uppercase text-muted-dim mb-2">
      {children}
    </label>
  );
}

type FieldProps = {
  label: string;
  v: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, v, onChange, type = "text", placeholder, required }: FieldProps) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        value={v}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="contact-input"
      />
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set =
    <K extends keyof typeof form>(k: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-ink-950 curve-up py-24 sm:py-36 overflow-hidden"
    >
      <div
        className="glow-orb"
        style={{
          top: "10%",
          left: "-10%",
          width: 480,
          height: 480,
          background: "oklch(0.6 0.18 270 / 0.16)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <Reveal className="lg:col-span-5 lg:pt-2">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
              — Contact
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Start a conversation.
            </h2>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-sm">
              Tell us about your infrastructure challenge. A senior engineer — not a sales
              rep — will reply within one business day.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  Icon: IconMail,
                  text: "halmehdar@hnovatech.ca",
                  href: "mailto:halmehdar@hnovatech.ca",
                },
                {
                  Icon: IconPhone,
                  text: "+1 (613) 262-1341",
                  href: "tel:+16132621341",
                },
                {
                  Icon: IconLinkedin,
                  text: "linkedin.com/company/hnovatech-inc",
                  href: "https://www.linkedin.com/company/hnovatech-inc/",
                },
              ].map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 group"
                >
                  <div className="h-8 w-8 rounded-full glass-light grid place-items-center shrink-0 group-hover:bg-white/[0.08] transition-colors">
                    <Icon size={13} className="text-white/70" />
                  </div>
                  <span className="text-sm text-muted group-hover:text-white transition-colors">
                    {text}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 text-xs font-mono tracking-[0.18em] uppercase text-muted-dim">
              Gatineau, QC · Serving Canada
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim mb-4">
                Response time
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_3px_rgba(52,211,153,0.5)]" />
                <span className="text-sm text-white/70">
                  Usually within{" "}
                  <span className="text-white">1 business day</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <form onSubmit={submit} className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  v={form.name}
                  onChange={set("name")}
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  label="Company"
                  v={form.company}
                  onChange={set("company")}
                  placeholder="Acme Corp"
                />
                <Field
                  label="Email"
                  v={form.email}
                  type="email"
                  onChange={set("email")}
                  placeholder="jane@acme.com"
                  required
                />
                <Field
                  label="Phone"
                  v={form.phone}
                  onChange={set("phone")}
                  placeholder="+1 (___) ___-____"
                />
              </div>

              <div>
                <FieldLabel>Service Needed</FieldLabel>
                <select
                  value={form.service}
                  onChange={set("service")}
                  className="contact-input"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-ink-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel>Message</FieldLabel>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project…"
                  className="contact-input resize-none"
                />
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
                <p className="text-xs text-muted-dim leading-relaxed max-w-[260px]">
                  By sending, you agree to our privacy practices. We&apos;ll never share your
                  details.
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary rounded-none px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2"
                >
                  {sent ? (
                    <>
                      <IconCheck size={14} /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Message <IconArrow size={14} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
