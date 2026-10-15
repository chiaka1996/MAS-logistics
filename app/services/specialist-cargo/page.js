import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Specialist Cargo, Dangerous Goods (ADR) & Perishables | MAS Logistics",
  description: "Compliant handling for regulated and sensitive freight: ADR hazardous cargo, perishable supply chains, vehicle port clearances, and live animal/pet clearances via Heathrow ARC.",
};

export default function SpecialistCargoPage() {
  const service = servicesData.find((s) => s.slug === "specialist-cargo");
  return <ServiceLayout service={service} />;
}
