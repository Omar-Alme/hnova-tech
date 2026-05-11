import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { faqs } from "@/components/faq";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://hnovatech.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HNovaTech — Cloud, Network & IT Infrastructure | Ottawa, Canada",
    template: "%s | HNovaTech",
  },
  description:
    "Ottawa-based IT solutions provider with 15+ years of experience in cloud services, network integration, managed IT support, data center infrastructure, and Motorola/Tait telecom systems. Trusted by enterprise and public sector clients across Canada.",
  keywords: [
    "IT solutions Ottawa",
    "cloud migration Canada",
    "network integration",
    "managed IT services",
    "data center infrastructure",
    "Motorola radio systems",
    "Tait radio",
    "P25 LMR",
    "AWS migration Canada",
    "Azure consulting Ottawa",
    "GCP cloud Canada",
    "9-1-1 emergency systems",
    "enterprise IT support",
    "Canadian IT consultant",
    "HNovaTech",
  ],
  authors: [{ name: "Hassan Al-Mehdar", url: "https://www.linkedin.com/in/hassanalmehdar/" }],
  creator: "HNovaTech Inc.",
  publisher: "HNovaTech Inc.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "HNovaTech Inc.",
    title: "HNovaTech — Cloud, Network & IT Infrastructure for Canadian Business",
    description:
      "15+ years engineering reliable cloud, networking, telecom & data center infrastructure for enterprise and public sector. Ottawa-based, Canada-wide.",
    images: [
      {
        url: "/hassan.png",
        width: 1200,
        height: 1500,
        alt: "Hassan Al-Mehdar, founder of HNovaTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HNovaTech — Cloud & IT Infrastructure | Ottawa, Canada",
    description:
      "Reliable cloud, networking, telecom and IT support — engineered hands-on for growing Canadian enterprises.",
    images: ["/hassan.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "HNovaTech Inc.",
      url: siteUrl,
      legalName: "HNovaTech Inc.",
      description:
        "Ottawa-based IT solutions provider specializing in cloud services, network integration, managed IT support, data center infrastructure, and telecom systems.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gatineau",
        addressRegion: "QC",
        postalCode: "J9J 1K8",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-613-262-1341",
        email: "halmehdar@hnovatech.ca",
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["English", "French"],
      },
      founder: {
        "@id": `${siteUrl}#hassan`,
      },
      sameAs: ["https://www.linkedin.com/company/hnovatech-inc/"],
      knowsAbout: [
        "Cloud Migration",
        "Network Integration",
        "Managed IT Services",
        "Data Center Infrastructure",
        "Telecom Systems",
        "P25 LMR Radio",
        "Motorola Radio Programming",
        "Tait Radio Systems",
        "Cloud Security",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#hassan`,
      name: "Hassan Al-Mehdar",
      jobTitle: "Founder & Network Integration Specialist",
      worksFor: { "@id": `${siteUrl}#organization` },
      email: "halmehdar@hnovatech.ca",
      telephone: "+1-613-262-1341",
      sameAs: ["https://www.linkedin.com/in/hassanalmehdar/"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Carleton University",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#service`,
      name: "HNovaTech IT Solutions",
      url: siteUrl,
      provider: { "@id": `${siteUrl}#organization` },
      areaServed: { "@type": "Country", name: "Canada" },
      serviceType: [
        "Cloud Solutions & Migration",
        "Network Design & Integration",
        "Managed IT Support",
        "Data Center Infrastructure",
        "Telecom & Radio Systems",
        "Systems Integration & Engineering",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
