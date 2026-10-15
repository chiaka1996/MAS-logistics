import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Globe2, 
  Clock, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  Phone,
  Mail,
  Warehouse,
  ExternalLink
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedWrapper";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us | 17+ Years Premier UK Logistics & Freight Forwarding",
  description: "Established in 2008, MAS Logistics operates an operational fleet of 150+ vehicles, ETSF bonded warehousing, and cold storage near Heathrow Airport.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-850 border border-slate-700 text-xs font-semibold text-slate-300 mb-4">
              <span>Company History &amp; Operational Capabilities</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
              A Dependable Partner in Global &amp; Domestic Supply Chains Since 2008
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Founded on principles of direct customer communication, deep customs expertise, and scalable transport capacity, MAS Logistics has grown into one of London&apos;s foremost independent freight providers.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
              <span className="text-xs uppercase font-bold tracking-widest text-masOrange block">
                Our Heritage &amp; Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
                Established in 2008, Built for Modern International Trade
              </h2>

              <p>
                Since our establishment in <strong>2008</strong>, MAS Logistics (UK) Ltd has built an enduring reputation as a premier freight forwarding and transport provider. Operating under company registration number <strong>06739909</strong>, we specialize in a comprehensive suite of import, export, and inland distribution services.
              </p>

              <p>
                From our strategic headquarters at <strong>Unit 15, Barratt Industrial Park in Southall (UB1 3AF)</strong>—positioned right in the London Heathrow cargo corridor—we bridge international transit with rapid domestic fulfillment. Over more than 17 years of continuous trading, we have developed our operational infrastructure to encompass an active commercial fleet of <strong>over 150 vehicles</strong> alongside our own HMRC-authorized <strong>External Temporary Storage Facility (ETSF)</strong>.
              </p>

              <p>
                Our philosophy centers on direct customer partnership. Rather than navigating bureaucratic layers, clients work closely with a knowledgeable, multilingual operations team that manages end-to-end movements from port of entry to warehouse shelf.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-navy-950 font-heading">150+</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">Commercial Vehicles</div>
                  <p className="text-[11px] text-slate-500 mt-1">From small vans to 44-tonne articulated HGVs with tail lifts.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black text-navy-950 font-heading">2008</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">Continuous Operation</div>
                  <p className="text-[11px] text-slate-500 mt-1">17+ years serving UK importers, exporters, and manufacturers.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                  alt="MAS Logistics freight operations and terminal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-navy-950/95 backdrop-blur-md border border-navy-800 text-white">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-masOrange">Strategic Infrastructure</p>
                  <p className="text-sm font-bold mt-1">Unit 15, Barratt Industrial Park, UB1 3AF</p>
                  <p className="text-xs text-slate-300 mt-1">Adjacent to London Heathrow Cargo Centre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multilingual Team & Inclusive Culture */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange block mb-1">
              Our People &amp; Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
              A Multilingual Operations Team Fluent in Global Trade
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              We take pride in an inclusive, highly skilled team uniting varied cultural backgrounds and operational skill sets. Our dispatch and customs specialists speak eight languages fluently:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {companyData.languages.map((lang) => (
              <div
                key={lang}
                className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-soft"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-navy-900 mb-2">
                  <Globe2 className="w-4 h-4 text-masOrange" />
                </div>
                <div className="text-sm font-bold text-navy-950">{lang}</div>
                <span className="text-[10px] font-semibold text-slate-400">Native Fluency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Verified Governance */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Leadership Profile */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Management Leadership
              </span>
              <h3 className="text-xl font-bold text-navy-950 font-heading">
                Mr. Amar Bhatia
              </h3>
              <p className="text-xs font-semibold text-masOrange mt-0.5">
                Director of Business Development &amp; Sales / Founder
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                Guiding company strategy, commercial client relations, and customs compliance architecture since the company&apos;s inception. Mr. Bhatia drives MAS Logistics&apos; signature commitment to direct customer communication and end-to-end supply chain reliability.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href={`mailto:${companyData.contact.managementEmail}`} className="text-navy-900 font-semibold hover:underline">
                  {companyData.contact.managementEmail}
                </a>
              </div>
            </div>

            {/* Standard Trading Conditions */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Industry Governance
              </span>
              <h3 className="text-xl font-bold text-navy-950 font-heading">
                Trading Under BIFA &amp; RHA Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                All business undertaken by MAS Logistics (UK) Ltd is conducted strictly under national freight forwarding and haulage terms, ensuring complete legal transparency, appropriate carrier liabilities, and comprehensive insurance alignment.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={companyData.memberships[0].termsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-navy-900 transition-colors text-xs font-bold text-navy-950"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-masOrange" />
                    <span>BIFA Standard Trading Conditions (Latest Edition)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={companyData.memberships[1].termsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-navy-900 transition-colors text-xs font-bold text-navy-950"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-masOrange" />
                    <span>RHA Conditions of Carriage (Latest Edition)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Hours Strip */}
      <section className="bg-navy-950 text-white py-12 border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-wider text-masOrange">
                Extended Operational Availability
              </span>
              <h4 className="text-xl font-bold font-heading">
                London Hub: Active 22+ Hours Daily (05:30 to 03:00 / 04:00)
              </h4>
              <p className="text-xs text-slate-300">
                UK Customs Clearance Desk operates 24 Hours / 7 Days for air, sea, and road consignments.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy-950 font-bold text-sm hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Contact Operations Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
