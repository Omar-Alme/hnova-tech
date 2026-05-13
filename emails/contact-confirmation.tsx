import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const c = {
  bg: "#05060a",
  surface: "#0c1024",
  border: "#1a2046",
  blue: "#5B8AFF",
  text: "#f1f3fb",
  muted: "#8b91ad",
  dim: "#5a607a",
  white: "#ffffff",
};

const font = "Arial, 'Helvetica Neue', Helvetica, sans-serif";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hnovatech.ca");

export type ContactConfirmationProps = {
  name: string;
  company: string;
  service: string;
};

export default function ContactConfirmation({
  name = "Hassan",
  company = "Acme Corp",
  service = "Cloud Solutions & Migration",
}: ContactConfirmationProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Thanks {name}. A senior engineer will reply within one business day.
      </Preview>
      <Body
        style={{
          backgroundColor: "#e8eaf2",
          fontFamily: font,
          margin: 0,
          padding: "32px 16px",
        }}
      >
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>

          {/* ── HEADER ── */}
          <Section
            style={{
              backgroundColor: c.bg,
              padding: "20px 32px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Row>
              <Column>
                <table cellPadding={0} cellSpacing={0} role="presentation">
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle", paddingRight: "9px" }}>
                        <Img
                          src={`${siteUrl}/brand/favicon-32x32.png`}
                          width="24"
                          height="24"
                          alt=""
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: c.white,
                            letterSpacing: "-0.03em",
                            fontFamily: font,
                          }}
                        >
                          HNova<span style={{ color: c.blue }}>Tech</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
              <Column align="right">
                <Text
                  style={{
                    color: c.dim,
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    margin: 0,
                    fontFamily: "monospace",
                  }}
                >
                  OTTAWA · CANADA
                </Text>
              </Column>
            </Row>
          </Section>

          {/* ── HERO ── */}
          <Section
            style={{
              backgroundColor: c.bg,
              padding: "4px 32px 28px",
            }}
          >
            <div
              style={{
                height: "2px",
                background: `linear-gradient(90deg, ${c.blue} 0%, transparent 100%)`,
                marginBottom: "24px",
              }}
            />
            <Heading
              style={{
                color: c.text,
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "1.1",
                letterSpacing: "-0.025em",
                margin: "0 0 14px",
                fontFamily: font,
              }}
            >
              Got it, {name}.<br />We&apos;ll be in touch shortly.
            </Heading>
            <Text
              style={{
                color: c.muted,
                fontSize: "14px",
                lineHeight: "1.65",
                margin: "0 0 22px",
                fontFamily: font,
              }}
            >
              A senior engineer will review your inquiry and reply within{" "}
              <strong style={{ color: c.text }}>one business day</strong>.
            </Text>

            {/* Inquiry pill */}
            <table
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{
                backgroundColor: c.surface,
                borderLeft: `3px solid ${c.blue}`,
                borderRadius: "0 6px 6px 0",
                width: "100%",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "14px 18px" }}>
                    <Text
                      style={{
                        color: c.dim,
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        margin: "0 0 8px",
                        fontFamily: "monospace",
                      }}
                    >
                      YOUR INQUIRY
                    </Text>
                    <Text
                      style={{
                        color: c.text,
                        fontSize: "14px",
                        fontWeight: "700",
                        margin: "0 0 3px",
                        fontFamily: font,
                      }}
                    >
                      {company}
                    </Text>
                    <Text
                      style={{
                        color: c.muted,
                        fontSize: "13px",
                        margin: 0,
                        fontFamily: font,
                      }}
                    >
                      {service}
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ── FOUNDER ── */}
          <Section
            style={{
              backgroundColor: c.surface,
              padding: "24px 32px",
            }}
          >
            <Row>
              <Column
                style={{
                  width: "68px",
                  verticalAlign: "top",
                  paddingRight: "18px",
                }}
              >
                <Img
                  src={`${siteUrl}/hassan.png`}
                  width="60"
                  height="72"
                  alt="Hassan Al-Mehdar"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Column>
              <Column style={{ verticalAlign: "top" }}>
                <Heading
                  as="h2"
                  style={{
                    color: c.text,
                    fontSize: "16px",
                    fontWeight: "700",
                    margin: "0 0 2px",
                    fontFamily: font,
                  }}
                >
                  Hassan Al-Mehdar
                </Heading>
                <Text
                  style={{
                    color: c.blue,
                    fontSize: "11px",
                    margin: "0 0 10px",
                    fontFamily: font,
                  }}
                >
                  Founder &amp; Network Integration Specialist
                </Text>
                <Text
                  style={{
                    color: c.muted,
                    fontSize: "13px",
                    lineHeight: "1.55",
                    margin: "0 0 10px",
                    fontFamily: font,
                  }}
                >
                  15+ years in critical infrastructure: cloud, networking,
                  telecom, and managed support for enterprise and public sector
                  across Canada.
                </Text>
                <Text
                  style={{
                    color: c.dim,
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    fontFamily: "monospace",
                    margin: 0,
                  }}
                >
                  AWS SA · Google Cloud Pro · CompTIA Cloud+
                </Text>
              </Column>
            </Row>
          </Section>

          {/* ── CTA ── */}
          <Section
            style={{
              backgroundColor: c.bg,
              padding: "28px 32px",
              textAlign: "center",
              borderTop: `1px solid ${c.border}`,
            }}
          >
            <Text
              style={{
                color: c.muted,
                fontSize: "13px",
                margin: "0 0 18px",
                fontFamily: font,
              }}
            >
              Can&apos;t wait? Connect directly with Hassan.
            </Text>
            <Button
              href="https://www.linkedin.com/in/hassanalmehdar/"
              style={{
                backgroundColor: c.blue,
                color: c.white,
                fontSize: "13px",
                fontWeight: "700",
                padding: "12px 28px",
                textDecoration: "none",
                borderRadius: "4px",
                letterSpacing: "0.03em",
              }}
            >
              Connect on LinkedIn →
            </Button>
          </Section>

          {/* ── FOOTER ── */}
          <Section
            style={{
              backgroundColor: c.bg,
              padding: "16px 32px 24px",
              borderRadius: "0 0 10px 10px",
              borderTop: `1px solid ${c.border}`,
            }}
          >
            <Hr style={{ borderColor: c.border, margin: "0 0 14px" }} />
            <Text
              style={{
                color: c.dim,
                fontSize: "11px",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: font,
              }}
            >
              <strong style={{ color: c.muted }}>HNovaTech Inc.</strong> · Ottawa, ON ·{" "}
              <Link href="mailto:info@hnovatech.ca" style={{ color: c.dim, textDecoration: "none" }}>
                info@hnovatech.ca
              </Link>
              {" · "}
              <Link href="tel:+16132621341" style={{ color: c.dim, textDecoration: "none" }}>
                +1 (613) 262-1341
              </Link>
              {" · "}
              <Link href={siteUrl} style={{ color: c.dim, textDecoration: "underline" }}>
                hnovatech.ca
              </Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
