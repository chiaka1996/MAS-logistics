import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Cold Storage & Temperature-Controlled Warehousing | MAS Logistics",
  description: "Specialized cold storage near Heathrow Airport. Ambient, chilled (+2°C to +8°C), and frozen (-18°C) regimes for foodstuffs, perishables, and pharma.",
};

export default function ColdStoragePage() {
  const service = servicesData.find((s) => s.slug === "cold-storage");
  return <ServiceLayout service={service} />;
}
