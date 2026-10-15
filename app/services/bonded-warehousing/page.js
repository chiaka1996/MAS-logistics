import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Bonded Warehousing & ETSF Transit Shed | MAS Logistics",
  description: "HMRC-authorized ETSF bonded warehouse in Southall/Heathrow (UB1 3AF). Duty & VAT tax suspension, direct airline manifest trucking, and secure inventory management.",
};

export default function BondedWarehousingPage() {
  const service = servicesData.find((s) => s.slug === "bonded-warehousing");
  return <ServiceLayout service={service} />;
}
