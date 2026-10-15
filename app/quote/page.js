import QuoteForm from "@/components/QuoteForm";
import { companyData } from "@/data/companyData";
import { Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Request a Logistics Quote | Freight & Customs Tariffs | MAS Logistics",
  description: "Request an upfront freight or customs clearance quote. Road transport across UK & Europe, air freight, sea freight, bonded warehousing, and cold storage.",
};

export default function QuotePage({ searchParams }) {
  const preselected = searchParams?.service || "";

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-navy-950">
            Request a Consignment Tariff &amp; Customs Quote
          </h1>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Provide your shipment specifics below to receive an accurate, all-inclusive price. We quote transparently: one single tariff for end-to-end transport, with separate itemized lines for customs declarations and airline security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <QuoteForm preselectedService={preselected} />
          </div>

          {/* Right Trust Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft space-y-5">
              <h3 className="text-base font-bold text-navy-950 font-heading">
                Prefer to Speak Directly?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For time-critical consignments, urgent customs clearance, or same-day collections, our dispatch desk is available by phone.
              </p>

              <div className="pt-2 space-y-3 text-xs">
                <a
                  href={companyData.contact.phoneHref}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-950 font-bold hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-masOrange" />
                  <span>Call {companyData.contact.phone}</span>
                </a>

                <a
                  href={companyData.contact.emailHref}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{companyData.contact.email}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Hub Working Hours:</strong>
                    Mon - Sat: 05:30 am - 03:00 am<br />
                    Sunday: 05:30 am - 04:00 am<br />
                    <span className="text-emerald-700 font-semibold">24/7 UK Customs Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Standard Trading Terms:</strong>
                    Governed by BIFA and RHA terms of carriage for complete carrier liability protection.
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 border border-navy-850 space-y-4">
              <h4 className="text-sm font-bold font-heading">
                What Happens Next?
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-masOrange flex-shrink-0 mt-0.5" />
                  <span>Your consignment specifications are reviewed by a specialist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-masOrange flex-shrink-0 mt-0.5" />
                  <span>We confirm vehicle size, routing, or customs commodity codes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-masOrange flex-shrink-0 mt-0.5" />
                  <span>A formal quote and collection schedule are returned swiftly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
