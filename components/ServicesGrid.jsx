"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Plane, 
  Anchor, 
  Warehouse, 
  ThermometerSnowflake, 
  Boxes, 
  AlertTriangle, 
  HeartHandshake,
  Check
} from "lucide-react";
import { servicesData, servicesCategories } from "@/data/servicesData";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";

export default function ServicesGrid({ limit = null, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap = {
    ShieldCheck,
    Truck,
    Plane,
    Anchor,
    Warehouse,
    ThermometerSnowflake,
    Boxes,
    AlertTriangle,
    HeartHandshake
  };

  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter(s => {
        const cat = servicesCategories.find(c => c.id === activeCategory);
        return cat?.services.includes(s.slug);
      });

  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section className="py-16 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
              Integrated Freight, Customs &amp; Warehousing Solutions
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Every shipment is backed by verified infrastructure, in-house customs brokers, and our Heathrow-adjacent ETSF storage facilities.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-navy-700 group"
            >
              <span>Get instant tariff assistance</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        {showFilter && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-navy-950 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Services ({servicesData.length})
            </button>
            {servicesCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-navy-950 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <div
                key={service.slug}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-navy-950">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-navy-950/90 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 text-masOrange" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-navy-700 transition-colors font-heading">
                      <Link href={`/services/${service.slug}`} className="focus:outline-none">
                        {service.title}
                      </Link>
                    </h3>
                    
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Key feature list */}
                    <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                      {service.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-navy-900 group-hover:text-masOrange flex items-center gap-1 transition-colors"
                    >
                      <span>Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={`/quote?service=${encodeURIComponent(service.slug)}`}
                      className="text-[11px] font-semibold text-slate-500 hover:text-navy-950 underline decoration-slate-300"
                    >
                      Quote This
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-navy-900 hover:bg-navy-850 shadow-sm transition-colors"
            >
              <span>View All Verified Services ({servicesData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
