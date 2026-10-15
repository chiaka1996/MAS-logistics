import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ArrowUpRight,
  Truck,
  ExternalLink
} from "lucide-react";
import Logo from "./Logo";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 font-sans border-t border-navy-850">
      {/* Top Value Banner */}
      <div className="border-b border-navy-900 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy-850 border border-navy-700/50 flex items-center justify-center flex-shrink-0 text-masOrange">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">150+ Commercial Fleet</h4>
                <p className="text-xs text-slate-400 mt-0.5">Small courier vans to 44t articulated HGVs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy-850 border border-navy-700/50 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">ETSF Bonded Facility</h4>
                <p className="text-xs text-slate-400 mt-0.5">Duty & VAT suspended warehouse near Heathrow</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy-850 border border-navy-700/50 flex items-center justify-center flex-shrink-0 text-blue-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">22+ Hours Daily Hub</h4>
                <p className="text-xs text-slate-400 mt-0.5">05:30 to 03:00/04:00 with 24/7 Customs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy-850 border border-navy-700/50 flex items-center justify-center flex-shrink-0 text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">BIFA & RHA Member</h4>
                <p className="text-xs text-slate-400 mt-0.5">Trading under national industry standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 2008, MAS Logistics (UK) Ltd provides premier freight forwarding, 24/7 customs clearance, bonded warehousing, and rapid UK/European transport solutions with direct UK border links.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-masOrange flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300">
                  {companyData.headquarters.addressLine1}, {companyData.headquarters.addressLine2},<br />
                  {companyData.headquarters.town}, {companyData.headquarters.county}, {companyData.headquarters.postcode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={companyData.contact.phoneHref} className="text-slate-200 hover:text-white font-semibold">
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={companyData.contact.emailHref} className="text-slate-300 hover:text-white">
                  {companyData.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: {companyData.hours.monSat}</p>
                  <p>Sun: {companyData.hours.sunday}</p>
                  <p className="text-emerald-400 font-medium">Customs Desk: 24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Freight & Transport
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/road-freight" className="text-slate-400 hover:text-white transition-colors">
                  Road Haulage & Rapid Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="text-slate-400 hover:text-white transition-colors">
                  Air Freight Handling
                </Link>
              </li>
              <li>
                <Link href="/services/sea-freight" className="text-slate-400 hover:text-white transition-colors">
                  Sea Freight & Containers
                </Link>
              </li>
              <li>
                <Link href="/services/customs-clearance" className="text-slate-400 hover:text-white transition-colors">
                  Customs Clearance (24/7)
                </Link>
              </li>
              <li>
                <Link href="/ports-we-serve" className="text-slate-400 hover:text-white transition-colors">
                  Ports & Airports Served
                </Link>
              </li>
            </ul>
          </div>

          {/* Warehousing & Specialist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Storage & Specialist
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/bonded-warehousing" className="text-slate-400 hover:text-white transition-colors">
                  Bonded Warehouse (ETSF)
                </Link>
              </li>
              <li>
                <Link href="/services/cold-storage" className="text-slate-400 hover:text-white transition-colors">
                  Cold Storage (Ambient/Chilled)
                </Link>
              </li>
              <li>
                <Link href="/services/cargo-handling" className="text-slate-400 hover:text-white transition-colors">
                  Cargo Handling & Devanning
                </Link>
              </li>
              <li>
                <Link href="/services/specialist-cargo" className="text-slate-400 hover:text-white transition-colors">
                  ADR & Perishable Goods
                </Link>
              </li>
              <li>
                <Link href="/services/repatriation" className="text-slate-400 hover:text-white transition-colors">
                  Air Repatriation to UK
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Standards
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About MAS Logistics
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-slate-400 hover:text-white transition-colors font-semibold text-masOrange">
                  Request a Formal Quote →
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Our Operations Desk
                </Link>
              </li>
              <li>
                <a 
                  href={companyData.memberships[0].termsPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>BIFA Standard Conditions</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href={companyData.memberships[1].termsPdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>RHA Conditions of Carriage</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy (UK GDPR)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Accreditation Strip */}
        <div className="mt-12 pt-8 border-t border-navy-850 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-semibold text-slate-300">Regulatory Integrations:</span>
            <span>HMRC (CDS)</span>
            <span>•</span>
            <span>UK Border Force (UKBF)</span>
            <span>•</span>
            <span>APHA / DEFRA Plant Health</span>
            <span>•</span>
            <span>Heathrow ARC</span>
            <span>•</span>
            <span>UK Port Health</span>
          </div>

          <div className="text-slate-400">
            Company Registered in England & Wales: <strong className="text-slate-300">#{companyData.companyNumber}</strong>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/quote" className="hover:text-white text-masOrange font-semibold">Quote Request</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
