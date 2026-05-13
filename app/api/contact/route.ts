import { render } from "@react-email/components";
import { Resend } from "resend";
import ContactConfirmation from "../../../emails/contact-confirmation";

const contactEmail = process.env.CONTACT_TO_EMAIL || "omar.almehdar17@gmail.com";
const fromEmail = process.env.RESEND_FROM_EMAIL;

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  if (!fromEmail) {
    return Response.json(
      { error: "Email sender is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const service = clean(body.service);
  const message = clean(body.message);

  if (!name || !company || !email || !isEmail(email) || !service || !message) {
    return Response.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const rows = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Service", service],
    ["Message", message],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 16px;font-weight:700;font-size:13px;vertical-align:top;white-space:nowrap;color:#5a607a;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(label)}</td>
          <td style="padding:8px 16px;font-size:14px;white-space:pre-wrap;color:#f1f3fb;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const confirmationHtml = await render(
    ContactConfirmation({ name, company, service }),
  );

  const idBase = `${Date.now()}-${crypto.randomUUID()}`;

  const [notifyResult, confirmResult] = await Promise.all([
    // Internal notification to Hassan / Omar
    resend.emails.send(
      {
        from: `HNOVA Tech <${fromEmail}>`,
        to: [contactEmail],
        replyTo: email,
        subject: `New contact request — ${name} @ ${company}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.5;color:#f1f3fb;background:#05060a;padding:36px;border-radius:8px;max-width:560px;">
            <div style="margin-bottom:4px;font-size:9px;font-family:monospace;letter-spacing:0.22em;text-transform:uppercase;color:#5a607a;">NEW CONTACT REQUEST</div>
            <h1 style="font-size:22px;font-weight:700;color:#f1f3fb;margin:0 0 24px;letter-spacing:-0.02em;">
              ${escapeHtml(name)} @ ${escapeHtml(company)}
            </h1>
            <table style="border-collapse:collapse;width:100%;background:#0c1024;border-radius:6px;">
              ${htmlRows}
            </table>
            <p style="margin:24px 0 0;font-size:12px;color:#5a607a;">Reply directly to this email to respond to ${escapeHtml(name)}.</p>
          </div>
        `,
        text: `NEW CONTACT REQUEST\n\n${text}\n\nReply to this email to respond to ${name}.`,
      },
      { idempotencyKey: `contact-notify/${idBase}` },
    ),

    // Confirmation email to the lead
    resend.emails.send(
      {
        from: `Hassan @ HNovaTech <${fromEmail}>`,
        to: [email],
        replyTo: "info@hnovatech.ca",
        subject: `Got it, ${name} — we'll be in touch shortly`,
        html: confirmationHtml,
        text: `Hi ${name},\n\nThanks for reaching out to HNovaTech. We've received your inquiry from ${company} regarding ${service}.\n\nA senior engineer will reply within one business day.\n\n— Hassan Al-Mehdar\nFounder & Network Integration Specialist, HNovaTech\ninfo@hnovatech.ca · +1 (613) 262-1341`,
      },
      { idempotencyKey: `contact-confirm/${idBase}` },
    ),
  ]);

  if (notifyResult.error || confirmResult.error) {
    const msg =
      notifyResult.error?.message ||
      confirmResult.error?.message ||
      "Unable to send your message.";
    return Response.json({ error: msg }, { status: 502 });
  }

  return Response.json({ id: notifyResult.data?.id });
}
