import { servicesData } from "@/data/servicesData";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Compassionate International Air Repatriation to UK | MAS Logistics",
  description: "Dignified, professional air repatriation to the UK: UK airport customs clearance, airline collection, and safe road transfer to chosen funeral directors nationwide.",
};

export default function RepatriationPage() {
  const service = servicesData.find((s) => s.slug === "repatriation");
  return <ServiceLayout service={service} />;
}
