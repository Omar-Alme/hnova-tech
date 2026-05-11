import { Resend } from "resend";

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

  if (!name || !email || !isEmail(email)) {
    return Response.json(
      { error: "Please provide a valid name and email address." },
      { status: 400 },
    );
  }

  const rows = [
    ["Name", name],
    ["Company", company || "Not provided"],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Service", service || "Not specified"],
    ["Message", message || "No message provided"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const { data, error } = await resend.emails.send(
    {
      from: `HNOVA Tech <${fromEmail}>`,
      to: [contactEmail],
      replyTo: email,
      subject: `New HNOVA Tech contact request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
          <h1 style="font-size:20px;margin:0 0 16px;">New contact form submission</h1>
          <table style="border-collapse:collapse;">${htmlRows}</table>
        </div>
      `,
      text,
    },
    {
      idempotencyKey: `contact-form/${Date.now()}-${crypto.randomUUID()}`,
    },
  );

  if (error) {
    return Response.json(
      { error: error.message || "Unable to send your message." },
      { status: 502 },
    );
  }

  return Response.json({ id: data?.id });
}
