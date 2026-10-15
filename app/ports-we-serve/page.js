import PortsGrid from "@/components/PortsGrid";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Clock, Plane, Anchor } from "lucide-react";

export const metadata = {
  title: "UK Ports & Airports Served | Customs Clearance Gateways | MAS Logistics",
  description: "Direct customs clearance and haulage across all primary UK entry points: Heathrow, Manchester, Birmingham, Felixstowe, Dover, London Gateway, Southampton, Tilbury & Immingham.",
};

export default function PortsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-masOrange mb-2 block">
              Border Gateway Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
              UK Ports &amp; International Cargo Airports Served
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              At MAS Logistics, our customs brokerage desk is directly integrated with all primary UK airports and maritime deep-sea container terminals via HMRC&apos;s Customs Declaration Service (CDS), ensuring shipments clear without port demurrage or avoidable delay.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip */}
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-900 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-masOrange" />
            </div>
            <div>
              <p className="font-bold text-navy-950">Direct Electronic CDS Links</p>
              <p className="text-slate-500">Fast clearance badges across all major UK terminals</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-900 shadow-sm">
              <Clock className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-navy-950">24/7 Operations Desk</p>
              <p className="text-slate-500">Supporting night flights and cross-Channel ferry arrivals</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-navy-900 shadow-sm">
              <Anchor className="w-5 h-5 text-brandBlue-600" />
            </div>
            <div>
              <p className="font-bold text-navy-950">44-Tonne Port Haulage</p>
              <p className="text-slate-500">Full container transport &amp; destuffing at our depot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Ports Grid */}
      <PortsGrid limit={null} />

      <CTASection />
    </div>
  );
}
