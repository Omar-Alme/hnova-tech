"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
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

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-muted-dim">
      {children}
    </div>
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
      <Label>{label}</Label>
      <div className="field py-3">
        <input
          type={type}
          value={v}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-transparent text-sm placeholder:text-muted-dim w-full"
        />
      </div>
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

  const submit = (e: FormEvent) => {
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
          background: "oklch(0.6 0.18 270 / 0.18)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-glow-blue mb-4">
              — Contact
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Start a conversation.
            </h2>
            <p className="mt-6 text-sm text-muted max-w-md">
              Tell us about your infrastructure challenge. A senior engineer — not a sales rep
              — will reply within one business day.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <div className="flex items-center gap-3 text-white/80">
                <div className="h-9 w-9 rounded-full glass-light grid place-items-center">
                  <IconMail size={14} />
                </div>
                <span>hello@hnovatech.ca</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="h-9 w-9 rounded-full glass-light grid place-items-center">
                  <IconPhone size={14} />
                </div>
                <span>+1 (416) 555-0184</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="h-9 w-9 rounded-full glass-light grid place-items-center">
                  <IconLinkedin size={14} />
                </div>
                <span>linkedin.com/company/hnovatech</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="glass rounded-3xl p-7 sm:p-10 space-y-7"
            >
              <div className="grid sm:grid-cols-2 gap-7">
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
                <Label>Service Needed</Label>
                <div className="field py-3">
                  <select
                    value={form.service}
                    onChange={set("service")}
                    className="bg-transparent text-white/90 text-sm w-full"
                  >
                    {services.map((s) => (
                      <option key={s} className="bg-ink-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <Label>Message</Label>
                <div className="field py-3">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your project…"
                    className="bg-transparent text-sm placeholder:text-muted-dim w-full resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <p className="text-xs text-muted-dim max-w-xs">
                  By sending, you agree to our privacy practices. We&apos;ll never share your
                  details.
                </p>
                <button
                  type="submit"
                  className="btn-primary rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2"
                >
                  {sent ? (
                    <>
                      <IconCheck size={14} /> Sent
                    </>
                  ) : (
                    <>
                      Send message <IconArrow size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
