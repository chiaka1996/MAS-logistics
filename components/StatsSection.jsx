import { companyData } from "@/data/companyData";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";
import { Award, Truck, ShieldCheck, Clock } from "lucide-react";

export default function StatsSection() {
  const iconList = [Award, Truck, Clock, ShieldCheck];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-1">
            Verified Operational Track Record
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-950 font-heading">
            Dependable Logistics Backed by Real Infrastructure
          </h2>
        </div>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {companyData.stats.map((stat, idx) => {
            const Icon = iconList[idx] || Award;
            return (
              <StaggerItem key={stat.label}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-soft hover:shadow-medium transition-shadow duration-200 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 mb-3">
                    <Icon className="w-5 h-5 text-navy-800" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Association & Regulatory Badges */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-600">
            <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold">Standard Trading Conditions:</span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 shadow-sm text-navy-900 font-semibold">
              BIFA Member
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 shadow-sm text-navy-900 font-semibold">
              RHA Member
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 shadow-sm text-navy-900 font-semibold">
              HMRC Customs Declaration Service (CDS)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-slate-200 shadow-sm text-navy-900 font-semibold">
              APHA / DEFRA Linked
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
