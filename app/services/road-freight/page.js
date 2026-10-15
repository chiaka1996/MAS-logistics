import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Road Haulage & Rapid Delivery (150+ Fleet) | MAS Logistics",
  description: "UK nationwide express same-day and European road transport with 150+ commercial vehicles. Vans to 44t articulated HGVs with tail lifts and curtainside.",
};

export default function RoadFreightPage() {
  const service = servicesData.find((s) => s.slug === "road-freight");
  return <ServiceLayout service={service} />;
}
