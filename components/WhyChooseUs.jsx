import { 
  Building2, 
  Languages, 
  MapPin, 
  Clock, 
  Receipt, 
  Truck, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";
import { companyData } from "@/data/companyData";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Building2,
      title: "Direct ETSF Bonded Storage",
      description: "Direct manifested trucking authorities from Europe and T1 transit allow shipments to bypass expensive airline handling sheds at Heathrow, transferring straight into our bonded warehouse to avoid demurrage."
    },
    {
      icon: Receipt,
      title: "Duty & VAT Suspension",
      description: "As an HMRC-approved customs warehouse, clients hold imported inventory with duties and VAT legally suspended until goods are cleared for domestic sale or re-exported."
    },
    {
      icon: Languages,
      title: "Multilingual Operations Team",
      description: "Seamless international communication with experienced dispatchers fluent in 8 languages: English, Polish, Romanian, Punjabi, Hindi, Urdu, Gujarati, and Marathi."
    },
    {
      icon: MapPin,
      title: "Strategic West London Depot",
      description: "Located in Barratt Industrial Park, Southall (UB1 3AF)—minutes from London Heathrow's cargo village and interconnected with the M4, M25, and M40 motorway networks."
    },
    {
      icon: Truck,
      title: "150+ Scaled Commercial Fleet",
      description: "Operational capacity exceeding 150 vehicles, ranging from express courier vans (SWB/XLWB) to 7.5t, 18t, 26t, and 44-tonne articulated HGVs with tail lifts and curtainside options."
    },
    {
      icon: Clock,
      title: "Active 22+ Hours Every Day",
      description: "Operational hours run Monday to Saturday 05:30 to 03:00, and Sunday 05:30 to 04:00, with a dedicated 24/7 UK customs clearance desk for overnight consignments."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
              Substantiated Operational Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
              Why Forward-Thinking Businesses Partner With MAS Logistics
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              We do not rely on generic promises. Our client advantages are built on real assets: private bonded warehousing, direct UK Border integrations, and substantial fleet capacity.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <StaggerItem key={diff.title}>
                <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-medium transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-masOrange" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 font-heading mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Verified Operational Capability</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Pricing Transparency Strip */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 bg-navy-950 text-white rounded-2xl p-8 border border-navy-850 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-masOrange">
                Predictable Logistics Costing
              </span>
              <h3 className="text-xl font-bold font-heading mt-1">
                Straightforward Tariffs: All-in End-to-End Shipping
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                We make quoting straightforward: one price for end-to-end transport, with separate, fully transparent charges for customs declarations and airline security. You retain complete control over logistics costs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={companyData.contact.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-white text-navy-950 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>Call {companyData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
