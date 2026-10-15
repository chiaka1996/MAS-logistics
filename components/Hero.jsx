import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./AnimatedWrapper";
import { companyData } from "@/data/companyData";

export default function Hero() {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brandBlue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-masOrange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="down" duration={0.4}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-850/90 border border-slate-700/60 text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-masOrange animate-pulse"></span>
                <span>Established 2008 • London Heathrow Cargo Hub</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} duration={0.6}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight font-heading leading-[1.15] text-white">
                Freight Forwarding &amp; Customs Clearance Across the UK and Europe
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} duration={0.6}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                From customs clearance and bonded warehousing to road, air and sea freight, we help businesses move goods through the supply chain with confidence.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.3} duration={0.5}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-medium transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-950 focus:ring-masOrange"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-navy-850 hover:bg-navy-800 border border-slate-700 transition-colors duration-150"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </FadeIn>

            {/* Trust bullet points */}
            <FadeIn direction="up" delay={0.4} duration={0.5}>
              <div className="pt-6 border-t border-navy-850/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>150+ Commercial Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>ETSF Bonded Warehouse</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7 UK Customs Desk</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2} duration={0.7}>
              <div className="relative">
                {/* Main Hero Logistics Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-700/60 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                    alt="MAS Logistics freight operations and modern warehouse logistics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>

                  {/* Overlay Badges */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-950/90 backdrop-blur-md border border-navy-800 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Operational Coverage
                      </p>
                      <p className="text-sm font-bold text-white">
                        All Major UK Ports &amp; Airports
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                      Active
                    </span>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 bg-white text-navy-950 p-3 rounded-xl shadow-elevated border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white">
                    <ShieldCheck className="w-5 h-5 text-masOrange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">HMRC Customs Linked</p>
                    <p className="text-[10px] text-slate-500">CDS &amp; Border Force Ready</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 bg-navy-900 text-white p-3 rounded-xl shadow-elevated border border-navy-700">
                  <div className="w-10 h-10 rounded-lg bg-masOrange flex items-center justify-center text-white">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">150+ Vehicles</p>
                    <p className="text-[10px] text-slate-300">Vans to 44t HGVs</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
