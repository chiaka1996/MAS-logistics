import Link from "next/link";
import { ArrowRight, Phone, Clock, ShieldCheck, Mail } from "lucide-react";
import { companyData } from "@/data/companyData";
import { FadeIn } from "./AnimatedWrapper";

export default function CTASection({
  title = "Ready to Streamline Your UK & European Logistics?",
  subtitle = "Contact our Heathrow operations hub for rapid quotes, 24/7 customs clearance support, and verified fleet availability.",
  showContactAlt = true
}) {
  return (
    <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-masOrange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-850 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Operations Active • Mon-Sat 05:30 - 03:00 | Sun 05:30 - 04:00
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white leading-tight">
              {title}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-elevated transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950 focus:ring-masOrange"
              >
                <span>Request a Quote Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={companyData.contact.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-navy-850 hover:bg-navy-800 border border-slate-700 transition-colors"
              >
                <Phone className="w-5 h-5 text-slate-400" />
                <span>Call {companyData.contact.phoneDisplay}</span>
              </a>
            </div>
          </FadeIn>

          {showContactAlt && (
            <FadeIn direction="up" delay={0.4}>
              <div className="pt-8 border-t border-navy-850/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>BIFA &amp; RHA Standard Terms</span>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href={companyData.contact.emailHref} className="hover:text-white underline">
                    {companyData.contact.email}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>24/7 Customs Emergency Desk</span>
                </span>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
