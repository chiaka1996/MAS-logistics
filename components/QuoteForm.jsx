"use client";

import { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Copy, 
  Check, 
  FileText, 
  Phone, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from "lucide-react";
import { companyData } from "@/data/companyData";

export default function QuoteForm({ preselectedService = "" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    position: "",
    serviceRequired: preselectedService || "Customs Clearance (Air & Sea)",
    natureOfGoods: "",
    origin: "",
    destination: "",
    weightKg: "",
    palletCount: "",
    dimensions: "",
    targetDate: "",
    isHazardous: false,
    isTemperatureControlled: false,
    needsDeferment: false,
    needsTailLift: false,
    additionalNotes: "",
    agreedToTerms: false,
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    response: null,
  });

  const [copied, setCopied] = useState(false);

  const serviceOptions = [
    "Customs Clearance (Air & Sea)",
    "Road Haulage - UK Nationwide Delivery",
    "Road Haulage - Pan-European Transport",
    "Air Freight Cargo Handling",
    "Sea Freight & Container Haulage",
    "Bonded Warehousing & ETSF Storage",
    "Cold Storage (Ambient / Chilled / Frozen)",
    "Cargo Handling, Devanning & Palletisation",
    "Specialist Regulated Cargo / Dangerous Goods (ADR)",
    "International Air Repatriation to UK"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false, response: null });

    if (!formData.agreedToTerms) {
      setStatus({
        submitting: false,
        error: "Please agree to the standard terms and conditions before submitting your enquiry.",
        success: false,
        response: null,
      });
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please check your details.");
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
        response: data,
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message,
        response: null,
      });
    }
  };

  const copyReference = () => {
    if (status.response?.referenceId) {
      navigator.clipboard.writeText(status.response.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (status.success && status.response) {
    const ref = status.response.referenceId;
    const isStaging = status.response.mode === "staging";

    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-medium max-w-3xl mx-auto space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-950 font-heading">
              Consignment Quote Request Received
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Your shipment specifications have been logged and structured for review by our operations desk.
            </p>
          </div>
        </div>

        {/* Tracking Reference Card */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Your Quote Reference Number
            </span>
            <div className="text-2xl font-black font-heading text-navy-950 tracking-tight mt-0.5">
              {ref}
            </div>
          </div>
          <button
            type="button"
            onClick={copyReference}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied" : "Copy Reference"}</span>
          </button>
        </div>

        {/* Transparent Staging Disclosure Requirement */}
        {isStaging && (
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-4 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>System Notice: Staging Environment (Backend Email Setup Required)</span>
            </div>
            <p className="leading-relaxed">
              Your enquiry was successfully validated and archived on the server. Because live SMTP/API delivery credentials are not hardcoded in the codebase for security reasons, automatic transmission to external mailboxes remains paused until authorized API keys (e.g. Resend or SendGrid) are placed in the server environment.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${companyData.contact.email}?subject=Quote Request ${ref}&body=Hello MAS Logistics,%0D%0A%0D%0APlease find my shipment quote request (${ref}):%0D%0A- Service: ${encodeURIComponent(formData.serviceRequired)}%0D%0A- Nature of Goods: ${encodeURIComponent(formData.natureOfGoods)}%0D%0A- Route: ${encodeURIComponent(formData.origin)} to ${encodeURIComponent(formData.destination)}%0D%0A- Customer: ${encodeURIComponent(formData.firstName)} ${encodeURIComponent(formData.lastName)} (${encodeURIComponent(formData.phone)})%0D%0A%0D%0AThank you.`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900 text-white font-bold hover:bg-amber-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Directly via Email ({companyData.contact.email})</span>
              </a>
              <a
                href={companyData.contact.phoneHref}
                className="font-bold underline text-amber-950 hover:text-amber-800"
              >
                Or Call Operations: {companyData.contact.phoneDisplay}
              </a>
            </div>
          </div>
        )}

        {/* Summary of submitted goods */}
        <div className="border-t border-slate-200 pt-4 text-xs text-slate-600 space-y-2">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            Shipment Summary Logged:
          </h4>
          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div><strong className="text-slate-800">Service:</strong> {formData.serviceRequired}</div>
            <div><strong className="text-slate-800">Nature of Goods:</strong> {formData.natureOfGoods || "General"}</div>
            <div><strong className="text-slate-800">Origin:</strong> {formData.origin || "TBC"}</div>
            <div><strong className="text-slate-800">Destination:</strong> {formData.destination || "TBC"}</div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus({ submitting: false, success: false, error: null, response: null })}
            className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-navy-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Submit another consignment enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-medium space-y-8">
      {status.error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Please check your submission</p>
            <p className="mt-0.5">{status.error}</p>
          </div>
        </div>
      )}

      {/* Fieldset 1: Contact & Company Details */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 w-full">
          1. Contact &amp; Company Details
        </legend>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-bold text-slate-800 mb-1">
              First Name <span className="text-masOrange">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="e.g. David"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-xs font-bold text-slate-800 mb-1">
              Last Name <span className="text-masOrange">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="e.g. Miller"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1">
              Business Email <span className="text-masOrange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.co.uk"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1">
              Telephone Number <span className="text-masOrange">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 20 8000 0000"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyName" className="block text-xs font-bold text-slate-800 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Trading Company Ltd"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-xs font-bold text-slate-800 mb-1">
              Job Title / Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Supply Chain Manager / Director"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>
      </fieldset>

      {/* Fieldset 2: Logistics Service & Cargo Nature */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 w-full">
          2. Required Logistics Service &amp; Cargo Nature
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-800 mb-1">
              Primary Service Required <span className="text-masOrange">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              required
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="natureOfGoods" className="block text-xs font-bold text-slate-800 mb-1">
              Nature of Goods / Cargo Description <span className="text-masOrange">*</span>
            </label>
            <input
              type="text"
              id="natureOfGoods"
              name="natureOfGoods"
              required
              value={formData.natureOfGoods}
              onChange={handleChange}
              placeholder="e.g. Commercial Machinery, Foodstuffs, Textiles"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Regulatory & Handling Checkboxes */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              name="isHazardous"
              checked={formData.isHazardous}
              onChange={handleChange}
              className="w-4 h-4 text-masOrange rounded border-slate-300 focus:ring-masOrange"
            />
            <span className="font-semibold">Hazardous Goods (ADR classification)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              name="isTemperatureControlled"
              checked={formData.isTemperatureControlled}
              onChange={handleChange}
              className="w-4 h-4 text-masOrange rounded border-slate-300 focus:ring-masOrange"
            />
            <span className="font-semibold">Temperature Controlled (Chilled / Frozen)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              name="needsDeferment"
              checked={formData.needsDeferment}
              onChange={handleChange}
              className="w-4 h-4 text-masOrange rounded border-slate-300 focus:ring-masOrange"
            />
            <span className="font-semibold">Advance Duty / VAT via MAS Deferment Account</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              name="needsTailLift"
              checked={formData.needsTailLift}
              onChange={handleChange}
              className="w-4 h-4 text-masOrange rounded border-slate-300 focus:ring-masOrange"
            />
            <span className="font-semibold">Tail-Lift Vehicle Required at Destination</span>
          </label>
        </div>
      </fieldset>

      {/* Fieldset 3: Origin, Destination & Dimensions */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 w-full">
          3. Routing &amp; Shipment Dimensions
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="origin" className="block text-xs font-bold text-slate-800 mb-1">
              Collection Origin / Port / Airport
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="e.g. Heathrow LHR / Felixstowe / Postcode"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-xs font-bold text-slate-800 mb-1">
              Delivery Destination / Address
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Manchester M1 / Paris FR / Postcode"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="weightKg" className="block text-xs font-bold text-slate-800 mb-1">
              Est. Total Weight (kg)
            </label>
            <input
              type="text"
              id="weightKg"
              name="weightKg"
              value={formData.weightKg}
              onChange={handleChange}
              placeholder="e.g. 1,450 kg"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="palletCount" className="block text-xs font-bold text-slate-800 mb-1">
              Quantity / Pallets
            </label>
            <input
              type="text"
              id="palletCount"
              name="palletCount"
              value={formData.palletCount}
              onChange={handleChange}
              placeholder="e.g. 4 Euro Pallets"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="targetDate" className="block text-xs font-bold text-slate-800 mb-1">
              Required Delivery Date
            </label>
            <input
              type="date"
              id="targetDate"
              name="targetDate"
              value={formData.targetDate}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="additionalNotes" className="block text-xs font-bold text-slate-800 mb-1">
            Additional Consignment Notes or Customs Instructions
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={3}
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Provide any additional context: AWB number, container number, commodity codes, IPAFFS reference, or delivery time restrictions..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
          ></textarea>
        </div>
      </fieldset>

      {/* Terms and Consent */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            name="agreedToTerms"
            required
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="w-4 h-4 text-masOrange rounded border-slate-300 focus:ring-masOrange mt-0.5"
          />
          <span>
            I agree to the standard trading conditions of the British International Freight Association (BIFA) and Road Haulage Association (RHA), and consent to MAS Logistics processing this information in accordance with its{" "}
            <a href="/privacy" className="underline font-bold text-navy-900 hover:text-navy-700" target="_blank">
              Privacy Policy (UK GDPR)
            </a>.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>Operational Hub Active: Mon-Sat 05:30 - 03:00 | 24/7 Customs</span>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
        >
          {status.submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Validating Consignment...</span>
            </>
          ) : (
            <>
              <span>Submit Formal Quote Request</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
