import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Air Freight Cargo Handling (Heathrow Hub) | MAS Logistics",
  description: "Specialist air freight handling and forwarding minutes from Heathrow Airport (LHR). Direct airline manifests, transit shed delivery, and cold chain handling.",
};

export default function AirFreightPage() {
  const service = servicesData.find((s) => s.slug === "air-freight");
  return <ServiceLayout service={service} />;
}
