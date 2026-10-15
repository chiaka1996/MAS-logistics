import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "24/7 UK Customs Clearance (Air, Sea & Road) | MAS Logistics",
  description: "24/7 UK customs clearance services through London Heathrow hub. Direct HMRC CDS links, Port Health, DEFRA SPS support, and VAT/duty deferment account.",
};

export default function CustomsClearancePage() {
  const service = servicesData.find((s) => s.slug === "customs-clearance");
  return <ServiceLayout service={service} />;
}
