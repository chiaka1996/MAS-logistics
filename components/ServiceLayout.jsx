import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  Phone, 
  Mail, 
  ChevronRight,
  Clock,
  Warehouse
} from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import CTASection from "./CTASection";

export default function ServiceLayout({ service }) {
  if (!service) return null;

  // Find related services in the same category or adjacent
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs?.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })) || [],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Strip */}
      <div className="bg-slate-50 border-b border-slate-200 text-xs py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500">
          <Link href="/" className="hover:text-navy-950">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-navy-950">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-navy-950">{service.title}</span>
        </div>
      </div>

      {/* Service Header Section */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-navy-850 border border-slate-700 text-xs font-semibold text-slate-300">
                {service.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href={`/quote?service=${encodeURIComponent(service.slug)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm transition-all"
                >
                  <span>Request a Quote for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={companyData.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-navy-850 hover:bg-navy-800 border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Call {companyData.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-700 aspect-[16/11]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Body */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Explanation */}
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-1 block">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading mb-4">
                  What This Service Involves
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  {service.detailedDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Capabilities 4-Grid */}
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-1 block">
                  Technical Specifications
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-950 font-heading mb-6">
                  Operational Capabilities
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-soft"
                    >
                      <h3 className="text-base font-bold text-navy-950 font-heading mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Highlights Checklist */}
              <div className="bg-navy-950 text-white p-8 rounded-2xl border border-navy-850">
                <h3 className="text-lg font-bold font-heading mb-4">
                  Key Service Highlights &amp; Assurances
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  {service.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-masOrange" />
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                      Frequently Asked Questions
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy-950 font-heading mb-6">
                    Common Questions About {service.title}
                  </h2>

                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 p-6 rounded-xl border border-slate-200"
                      >
                        <h4 className="text-sm font-bold text-navy-950 font-heading">
                          {faq.q}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Quote Widget */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-soft sticky top-24 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-masOrange">
                    Quick Booking
                  </span>
                  <h3 className="text-lg font-bold text-navy-950 font-heading mt-1">
                    Book {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Receive clear, upfront pricing with separate customs &amp; security fees.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Transparent all-in tariffs</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>24/7 UK Customs support desk</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>BIFA &amp; RHA standard terms</span>
                  </div>
                </div>

                <Link
                  href={`/quote?service=${encodeURIComponent(service.slug)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm transition-all"
                >
                  <span>Request a Formal Tariff</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Direct Telephone Desk:</div>
                  <a
                    href={companyData.contact.phoneHref}
                    className="flex items-center gap-2 font-bold text-navy-950 hover:text-masOrange"
                  >
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{companyData.contact.phone}</span>
                  </a>
                  <a
                    href={companyData.contact.emailHref}
                    className="flex items-center gap-2 text-slate-600 hover:text-navy-950"
                  >
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{companyData.contact.email}</span>
                  </a>
                </div>

                {/* Related Services in sidebar */}
                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Related Services
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="block text-xs font-semibold text-slate-700 hover:text-navy-950 hover:underline"
                      >
                        → {rel.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
