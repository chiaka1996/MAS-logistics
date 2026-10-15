import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-medium text-center space-y-5">
        <span className="text-4xl font-black font-heading text-masOrange">404</span>
        <h1 className="text-2xl font-bold text-navy-950 font-heading">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The logistics page or service specification you requested could not be located. It may have moved or been consolidated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-navy-950 hover:bg-navy-850 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>Browse Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate shipment support? Call{" "}
          <a href={companyData.contact.phoneHref} className="font-bold text-navy-900 underline">
            {companyData.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
