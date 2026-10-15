"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Anchor, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { portsData } from "@/data/portsData";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedWrapper";

export default function PortsGrid({ limit = null }) {
  const [filter, setFilter] = useState("all");

  const filteredPorts = filter === "all"
    ? portsData
    : portsData.filter(p => {
        if (filter === "airports") return p.type.toLowerCase().includes("airport");
        if (filter === "seaports") return p.type.toLowerCase().includes("seaport") || p.type.toLowerCase().includes("ferry");
        return true;
      });

  const displayPorts = limit ? filteredPorts.slice(0, limit) : filteredPorts;

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80" id="ports">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-masOrange mb-2 block">
              Strategic Gateway Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-heading tracking-tight">
              Major UK Airports &amp; Seaports Served
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Operating directly linked customs clearance badges across all prominent international air cargo hubs, deep-sea container ports, and cross-channel RoRo terminals.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === "all" ? "bg-navy-950 text-white" : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              All Ports ({portsData.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("airports")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === "airports" ? "bg-navy-950 text-white" : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              Airports (5)
            </button>
            <button
              type="button"
              onClick={() => setFilter("seaports")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filter === "seaports" ? "bg-navy-950 text-white" : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              Seaports &amp; RoRo (6)
            </button>
          </div>
        </div>

        {/* Ports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPorts.map((port) => {
            const isAirport = port.type.toLowerCase().includes("airport");
            return (
              <div
                key={port.name}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft hover:shadow-medium transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isAirport ? "bg-blue-50 text-brandBlue-600" : "bg-teal-50 text-brandTeal-600"
                      }`}>
                        {isAirport ? <Plane className="w-5 h-5" /> : <Anchor className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {port.type}
                        </span>
                        <div className="text-xs font-bold text-navy-800">
                          Code: {port.code}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {port.region}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-950 font-heading">
                    {port.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {port.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>CDS Integrated Clearance</span>
                  </span>

                  <Link
                    href={`/quote?port=${encodeURIComponent(port.name)}`}
                    className="text-xs font-bold text-navy-900 hover:text-masOrange transition-colors"
                  >
                    Clear Cargo →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link
              href="/ports-we-serve"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-navy-700 group"
            >
              <span>View full list of UK gateways &amp; airport badges</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
