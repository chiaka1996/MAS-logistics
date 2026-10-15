import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PortsGrid from "@/components/PortsGrid";
import ProofOfWork from "@/components/ProofOfWork";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Freight Forwarding & Customs Clearance Across UK & Europe | MAS Logistics",
  description: "MAS Logistics UK Ltd delivers comprehensive freight forwarding, 24/7 customs clearance, ETSF bonded warehousing, and cold storage with a 150+ vehicle fleet near Heathrow.",
};

export default function HomePage() {
  return (
    <>
      {/* B. Hero Section */}
      <Hero />

      {/* C. Trust & Credibility Section */}
      <StatsSection />

      {/* D. Services Overview */}
      <ServicesGrid limit={6} showFilter={true} />

      {/* E. Why MAS Logistics */}
      <WhyChooseUs />

      {/* F. How It Works */}
      <HowItWorks />

      {/* G. Industries, Ports & Gateways Served */}
      <PortsGrid limit={6} />

      {/* H. Proof of Work & Operational Showcase */}
      <ProofOfWork />

      {/* I. High-Impact Conversion Section */}
      <CTASection />
    </>
  );
}
