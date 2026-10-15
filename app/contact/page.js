import ContactForm from "@/components/ContactForm";
import { companyData } from "@/data/companyData";
import { Phone, Mail, MapPin, Clock, Printer, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | London Heathrow Depot & 24/7 Customs | MAS Logistics",
  description: "Contact MAS Logistics (UK) Ltd. Operating from Unit 15, Barratt Industrial Park, Southall UB1 3AF. Telephone: 0208 571 7105. 24/7 UK customs support.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
            Direct Operations Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-navy-950">
            Contact MAS Logistics
          </h1>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Our London Heathrow logistics team is available from 05:30 to 03:00 / 04:00 daily, with around-the-clock coverage for urgent customs clearance and air/sea border queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft space-y-6">
              <h3 className="text-lg font-bold text-navy-950 font-heading">
                London Operations Depot
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-masOrange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block mb-0.5">Physical Address:</strong>
                    <address className="not-italic leading-relaxed text-slate-600">
                      {companyData.name}<br />
                      {companyData.headquarters.addressLine1}<br />
                      {companyData.headquarters.addressLine2}<br />
                      {companyData.headquarters.town}, {companyData.headquarters.county}<br />
                      <strong>{companyData.headquarters.postcode}</strong>, {companyData.headquarters.country}
                    </address>
                    <p className="text-[11px] text-slate-500 mt-1 italic">
                      Minutes from Heathrow Airport Cargo Terminal (M4/M25/M40)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-navy-800 flex-shrink-0" />
                  <div>
                    <strong className="text-navy-950 block">Telephone:</strong>
                    <a href={companyData.contact.phoneHref} className="text-navy-900 font-bold hover:underline">
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <strong className="text-navy-950 block">Fax:</strong>
                    <span className="text-slate-600">{companyData.contact.fax}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-navy-800 flex-shrink-0" />
                  <div>
                    <strong className="text-navy-950 block">General Sales &amp; Rates:</strong>
                    <a href={companyData.contact.emailHref} className="text-navy-900 hover:underline">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-navy-800 flex-shrink-0" />
                  <div>
                    <strong className="text-navy-950 block">Management &amp; Director:</strong>
                    <a href={`mailto:${companyData.contact.managementEmail}`} className="text-navy-900 hover:underline">
                      {companyData.contact.managementEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block">Operating Hours:</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Monday to Saturday: {companyData.hours.monSat}<br />
                      Sunday: {companyData.hours.sunday}<br />
                      <span className="text-emerald-700 font-bold">24/7 Customs Clearance Coverage</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                Company Registered in England &amp; Wales No: <strong>{companyData.companyNumber}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
