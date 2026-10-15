import { FileText, Calculator, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Consignment Enquiry",
      description: "Submit cargo details: origin, destination, commodity classification, dimensions, and whether customs clearance or temperature control is needed."
    },
    {
      step: "02",
      icon: Calculator,
      title: "Transparent Tariff Assessment",
      description: "We issue a clear end-to-end transport rate, with separate itemized lines for customs entries, airline security, and duty deferment."
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Border Lodgement & Collection",
      description: "Our desk files customs declarations directly to HMRC CDS / Border Force. Goods are collected from airport tarmac, container port, or collection point."
    },
    {
      step: "04",
      icon: Truck,
      title: "ETSF Transit or Final Delivery",
      description: "Cargo is transferred straight to our ETSF bonded warehouse (for duty suspension/cross-docking) or delivered nationwide via our 150+ fleet."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
              Operational Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
              From Initial Enquiry to Verified Delivery
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Our structured customer journey ensures full traceability, regulatory compliance, and total transparency at every milestone.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.step}>
                <div className="relative flex flex-col h-full bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-soft">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-navy-850 font-heading">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-900 shadow-sm">
                      <Icon className="w-5 h-5 text-masOrange" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-navy-950 font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    Step {idx + 1} of 4
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm transition-all"
          >
            <span>Start Your Consignment Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
