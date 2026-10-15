import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Warehouse, 
  Plane, 
  Anchor, 
  ThermometerSnowflake, 
  Boxes, 
  AlertTriangle, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { servicesData, servicesCategories } from "@/data/servicesData";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Logistics, Freight & Customs Services | MAS Logistics UK Ltd",
  description: "Comprehensive freight services: 24/7 UK customs clearance, road haulage with 150+ fleet, air freight handling, ETSF bonded warehousing, and cold storage near Heathrow.",
};

export default function ServicesPage() {
  const iconMap = {
    ShieldCheck,
    Truck,
    Plane,
    Anchor,
    Warehouse,
    ThermometerSnowflake,
    Boxes,
    AlertTriangle,
    HeartHandshake
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-masOrange mb-2 block">
              Operational Scope
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
              End-to-End Freight, Customs &amp; Storage Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              From our strategic Southall facility minutes from London Heathrow, we integrate road, air, and ocean freight forwarding with private ETSF bonded warehousing and around-the-clock customs brokerage.
            </p>
          </div>
        </div>
      </section>

      {/* Categorized Overview Sections */}
      <div className="py-16 lg:py-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {servicesCategories.map((category, catIdx) => {
          const categoryServices = servicesData.filter(s => category.services.includes(s.slug));

          return (
            <section key={category.id} className="scroll-mt-24">
              <div className="border-b border-slate-200 pb-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                    Category 0{catIdx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading mt-1">
                    {category.title}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1.5 max-w-2xl">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/quote?category=${encodeURIComponent(category.title)}`}
                  className="text-xs font-bold text-navy-900 hover:text-masOrange transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Request quote for this category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Grid of services in this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => {
                  const Icon = iconMap[service.icon] || Truck;
                  return (
                    <div
                      key={service.slug}
                      className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={service.heroImage}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-navy-950/90 text-white flex items-center justify-center">
                            <Icon className="w-4 h-4 text-masOrange" />
                          </div>
                          <span className="text-xs font-bold text-white shadow-sm">
                            {service.title}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {service.shortDescription}
                          </p>

                          <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                            {service.highlights.slice(0, 3).map((hl, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 group-hover:text-masOrange transition-colors"
                          >
                            <span>Read Full Specification</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href={`/quote?service=${encodeURIComponent(service.slug)}`}
                            className="text-[11px] font-semibold text-slate-500 hover:text-navy-950 underline"
                          >
                            Get Tariff
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </div>
  );
}
