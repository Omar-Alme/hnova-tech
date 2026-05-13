"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  IconArrow,
  IconCheck,
  IconChevron,
  IconClose,
  IconLinkedin,
  IconMail,
  IconPhone,
} from "./icons";
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

type Toast = {
  tone: "success" | "error";
  title: string;
  message: string;
};

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
  error?: string;
};

function Field({ label, v, onChange, type = "text", placeholder, required, error }: FieldProps) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        value={v}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        className={`contact-input ${error ? "contact-input-error" : ""}`}
      />
      {error ? <FieldError>{error}</FieldError> : null}
    </div>
  );
}

function FieldError({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 w-fit max-w-full bg-white px-3 py-2 text-xs font-medium leading-snug text-ink-950 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
      {children}
    </div>
  );
}

type ServiceSelectProps = {
  value: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
};

function ServiceSelect({ value, options, error, onChange }: ServiceSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={Boolean(error)}
        onClick={() => setOpen((current) => !current)}
        className={`contact-input contact-select-trigger gap-3 text-left ${
          error ? "contact-input-error" : ""
        }`}
      >
        <span className="truncate">{value}</span>
        <IconChevron
          size={16}
          className={`shrink-0 text-white/55 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden border border-white/[0.1] bg-ink-900/95 p-1 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            role="listbox"
          >
            {options.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex min-h-10 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                    selected
                      ? "bg-white text-ink-950"
                      : "text-white/82 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <span>{option}</span>
                  {selected ? <IconCheck size={14} /> : null}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {error ? <FieldError>{error}</FieldError> : null}
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState<Toast | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof form, string>>>({});

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => setToast(null), 5200);

    return () => window.clearTimeout(timer);
  }, [toast]);

  const set =
    <K extends keyof typeof form>(k: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      {
        setForm((f) => ({ ...f, [k]: e.target.value }));
        setFieldErrors((errors) => ({ ...errors, [k]: undefined }));
      };

  const setService = (service: string) => {
    setForm((f) => ({ ...f, service }));
    setFieldErrors((errors) => ({ ...errors, service: undefined }));
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof typeof form, string>> = {};
    const email = form.email.trim();

    if (!form.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!form.company.trim()) {
      errors.company = "Please enter your company.";
    }

    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!form.service.trim()) {
      errors.service = "Please choose a service.";
    }

    if (!form.message.trim()) {
      errors.message = "Please tell us a little about the project.";
    }

    return errors;
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setToast({
        tone: "error",
        title: "A few details are missing",
        message: "Please fill out the highlighted fields before sending.",
      });
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = (await response.json().catch(() => null)) as { error?: string } | null;

    if (!response.ok) {
      const message = result?.error || "Something went wrong. Please email us directly.";
      setStatus("error");
      setErrorMessage(message);
      setToast({
        tone: "error",
        title: "Message not sent",
        message,
      });
      return;
    }

    setStatus("sent");
    setFieldErrors({});
    setToast({
      tone: "success",
      title: "Message sent",
      message: "Thanks. A senior engineer will reply within one business day.",
    });
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: services[0],
      message: "",
    });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-ink-950 curve-up py-20 sm:py-28 overflow-hidden"
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

      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 translate-x-[5%] translate-y-[20%] opacity-[0.05]">
        <svg width="280" height="280" viewBox="0 0 64 64" fill="none">
          <path d="M11 14 L25 14 L17 50 L3 50 Z" fill="white"/>
          <path d="M29 14 L43 14 L35 50 L21 50 Z" fill="white"/>
          <path d="M47 14 L61 14 L53 50 L39 50 Z" fill="white"/>
        </svg>
      </div>

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
              Tell us about your infrastructure challenge. A senior engineer will reply within one business day.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  Icon: IconMail,
                  text: "info@hnovatech.ca",
                  href: "mailto:info@hnovatech.ca",
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
              Ottawa, ON · Serving Canada
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
            <form onSubmit={submit} noValidate className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  v={form.name}
                  onChange={set("name")}
                  placeholder="Jane Doe"
                  required
                  error={fieldErrors.name}
                />
                <Field
                  label="Company"
                  v={form.company}
                  onChange={set("company")}
                  placeholder="Acme Corp"
                  required
                  error={fieldErrors.company}
                />
                <Field
                  label="Email"
                  v={form.email}
                  type="email"
                  onChange={set("email")}
                  placeholder="jane@acme.com"
                  required
                  error={fieldErrors.email}
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
                <ServiceSelect
                  value={form.service}
                  options={services}
                  onChange={setService}
                  error={fieldErrors.service}
                />
              </div>

              <div>
                <FieldLabel>Message</FieldLabel>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project…"
                  required
                  aria-invalid={Boolean(fieldErrors.message)}
                  className={`contact-input resize-none ${
                    fieldErrors.message ? "contact-input-error" : ""
                  }`}
                />
                {fieldErrors.message ? <FieldError>{fieldErrors.message}</FieldError> : null}
              </div>

              {status === "error" ? (
                <p className="text-sm text-red-300" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              {/* Footer row */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
                <p className="text-xs text-muted-dim leading-relaxed max-w-[260px]">
                  By sending, you agree to our privacy practices. We&apos;ll never share your
                  details.
                </p>
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary rounded-none px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
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

      <AnimatePresence>
        {toast ? (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden border border-white/[0.1] bg-ink-900/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:bottom-7 sm:right-7"
          >
            <div
              className={`absolute inset-x-0 top-0 h-px ${
                toast.tone === "success"
                  ? "bg-emerald-300/80"
                  : "bg-red-300/80"
              }`}
            />
            <div className="flex gap-3">
              <div
                className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                  toast.tone === "success"
                    ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
                    : "border-red-300/25 bg-red-300/10 text-red-200"
                }`}
              >
                {toast.tone === "success" ? (
                  <IconCheck size={15} />
                ) : (
                  <IconClose size={15} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-white">{toast.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted">{toast.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setToast(null)}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Dismiss notification"
              >
                <IconClose size={14} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
