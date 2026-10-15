"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-medium text-center space-y-5">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-navy-950 font-heading">
          An Unexpected Error Occurred
        </h2>
        <p className="text-xs text-slate-600">
          Our system encountered an issue loading this section. You can retry the request or contact our London operations desk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-navy-900 hover:bg-navy-850 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
          Telephone Operations: <a href={companyData.contact.phoneHref} className="font-bold underline">{companyData.contact.phone}</a>
        </p>
      </div>
    </div>
  );
}
