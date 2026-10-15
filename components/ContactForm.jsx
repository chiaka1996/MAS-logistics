"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Clock, Copy, Check, RotateCcw, Mail, Phone } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Logistics Enquiry",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    response: null,
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false, response: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus({ submitting: false, success: true, error: null, response: data });
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message, response: null });
    }
  };

  const copyRef = () => {
    if (status.response?.referenceId) {
      navigator.clipboard.writeText(status.response.referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (status.success && status.response) {
    const ref = status.response.referenceId;
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-medium space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-950 font-heading">
              Message Logged Successfully
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Your inquiry has been validated and recorded for our London operations desk.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Message Reference
            </span>
            <div className="text-xl font-black font-heading text-navy-950">
              {ref}
            </div>
          </div>
          <button
            type="button"
            onClick={copyRef}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-2">
          <p className="font-bold text-amber-950">
            Integration Note: Staging Mode
          </p>
          <p>
            This website is running in staging architecture. Direct automated SMTP forwarding will activate when production mailer keys are placed in environment variables.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={`mailto:${companyData.contact.email}?subject=Inquiry ${ref}: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-amber-900 text-white font-bold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Sales Directly</span>
            </a>
            <a href={companyData.contact.phoneHref} className="font-bold underline text-amber-950">
              Call Operations: {companyData.contact.phoneDisplay}
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setStatus({ submitting: false, success: false, error: null, response: null })}
          className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-navy-700"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Send another message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-medium space-y-5">
      {status.error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>{status.error}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1">
          Full Name <span className="text-masOrange">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Sarah Jenkins"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1">
            Email Address <span className="text-masOrange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@example.com"
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

      <div>
        <label htmlFor="subject" className="block text-xs font-bold text-slate-800 mb-1">
          Enquiry Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
        >
          <option value="General Logistics Enquiry">General Logistics Enquiry</option>
          <option value="Customs Clearance Urgent">Customs Clearance (Urgent 24/7)</option>
          <option value="ETSF Bonded Warehousing">ETSF Bonded Warehousing</option>
          <option value="Cold Storage Facility Booking">Cold Storage Facility Booking</option>
          <option value="UK & European Road Transport">UK &amp; European Road Transport</option>
          <option value="Repatriation Services">Repatriation Services to UK</option>
          <option value="Careers & Employment">Careers &amp; Employment</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1">
          Message Details <span className="text-masOrange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="How can our operations team assist you?"
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-850 shadow-sm transition-all disabled:opacity-50"
      >
        {status.submitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Submit Message to Operations</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
