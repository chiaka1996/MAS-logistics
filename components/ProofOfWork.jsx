import Image from "next/image";
import { CheckCircle2, ShieldAlert, ArrowRight, Warehouse, Plane, Truck, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";

export default function ProofOfWork() {
  const operations = [
    {
      category: "Perishable Air Logistics",
      title: "Cold-Chain Heathrow Tarmac Transfer",
      description: "Direct collection of perishable food and horticultural shipments from Heathrow cargo terminal, moving straight into our temperature-controlled facility to maintain unbroken cold-chain conditions.",
      metrics: "Ambient, Chilled & Frozen Multi-Regime",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Bonded Customs Storage",
      title: "ETSF Transit Shed Demurrage Mitigation",
      description: "Inbound European and international consignments held under T1 multilateral transit status within our HMRC-authorized External Temporary Storage Facility, suspending duty/VAT payments.",
      metrics: "Substantial Storage Savings vs Airline Sheds",
      icon: Warehouse,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Port Haulage & Cross-Docking",
      title: "Deep-Sea Container Devanning & Palletisation",
      description: "44-tonne container haulage from Felixstowe and London Gateway, followed by rapid destuffing, shrink-wrap palletisation, and regional dispatch via our 150+ fleet.",
      metrics: "Loose & Palletised Cargo Handling",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Specialist Protocol",
      title: "Dignified UK Airport Repatriation",
      description: "Professional, sensitive customs clearance and airport custody of deceased or ashes upon flight arrival into the UK, coordinating direct transfer to appointed funeral homes.",
      metrics: "Comprehensive Coroner & Customs Handling",
      icon: HeartHandshake,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
              Operational Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
              Demonstrated Logistics Capabilities
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Real-world execution across customs compliance, temperature integrity, and high-capacity freight transport.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              Verified In-House Facilities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.title}
                className="group flex flex-col sm:flex-row bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-medium transition-all"
              >
                <div className="relative w-full sm:w-5/12 h-52 sm:h-auto bg-slate-200 flex-shrink-0 overflow-hidden">
                  <Image
                    src={op.image}
                    alt={op.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/20"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-masOrange" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {op.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-950 font-heading leading-snug">
                      {op.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {op.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {op.metrics}
                    </span>
                    <Link
                      href="/quote"
                      className="text-xs font-bold text-navy-900 hover:text-masOrange transition-colors"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
