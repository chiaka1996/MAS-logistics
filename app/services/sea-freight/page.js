import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Sea Freight & Ocean Container Logistics | MAS Logistics",
  description: "FCL and LCL container logistics, port customs clearance at Felixstowe, London Gateway, Southampton, Tilbury, and Immingham. Container destuffing and haulage.",
};

export default function SeaFreightPage() {
  const service = servicesData.find((s) => s.slug === "sea-freight");
  return <ServiceLayout service={service} />;
}
