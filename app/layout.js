import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyData } from "@/data/companyData";

export const metadata = {
  metadataBase: new URL("https://www.maslogistics.co.uk"),
  title: {
    default: "MAS Logistics UK Ltd | Freight Forwarder & Customs Clearance London",
    template: "%s | MAS Logistics UK Ltd",
  },
  description: "Premier UK freight forwarder offering 24/7 customs clearance, 150+ commercial vehicle fleet, ETSF bonded warehousing, and temperature-controlled storage near Heathrow Airport.",
  keywords: [
    "UK freight forwarding",
    "Heathrow customs clearance",
    "ETSF bonded warehouse Southall",
    "UK European road freight",
    "temperature controlled warehousing London",
    "air freight cargo handling",
    "sea freight container clearance",
    "BIFA member logistics London"
  ],
  authors: [{ name: "MAS Logistics (UK) Ltd" }],
  creator: "MAS Logistics (UK) Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.maslogistics.co.uk",
    siteName: "MAS Logistics UK Ltd",
    title: "MAS Logistics UK Ltd | Trusted Freight Forwarder & Customs Clearance",
    description: "Operational fleet of 150+ vehicles, ETSF bonded storage, and 24/7 UK customs clearance across all major ports and airports.",
    images: [
      {
        url: "/images/logo-raw.png",
        width: 800,
        height: 400,
        alt: "MAS Logistics UK Ltd",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/favicon-raw.png",
    apple: "/images/favicon-raw.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": companyData.name,
    "alternateName": companyData.shortName,
    "url": "https://www.maslogistics.co.uk",
    "logo": "https://www.maslogistics.co.uk/images/logo-raw.png",
    "telephone": companyData.contact.phone,
    "email": companyData.contact.email,
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyData.headquarters.addressLine1}, ${companyData.headquarters.addressLine2}`,
      "addressLocality": companyData.headquarters.town,
      "addressRegion": companyData.headquarters.county,
      "postalCode": companyData.headquarters.postcode,
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "05:30",
        "closes": "03:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "05:30",
        "closes": "04:00"
      }
    ],
    "sameAs": [
      "https://www.bifa.org",
      "https://www.rha.uk.net"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-navy-900 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
