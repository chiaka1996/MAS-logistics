import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Cargo Handling, Devanning & Cross-Docking | MAS Logistics",
  description: "Comprehensive cargo handling services in Southall/Heathrow: container destuffing, palletisation, breaking bulk, DEFRA/APHA inspection hosting, and secure storage.",
};

export default function CargoHandlingPage() {
  const service = servicesData.find((s) => s.slug === "cargo-handling");
  return <ServiceLayout service={service} />;
}
