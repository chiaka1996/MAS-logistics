"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Truck, 
  ShieldCheck, 
  Warehouse, 
  Plane, 
  Anchor, 
  ArrowRight,
  ThermometerSnowflake,
  Boxes,
  HeartHandshake,
  AlertTriangle
} from "lucide-react";
import Logo from "./Logo";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true 
    },
    { name: "Ports We Serve", href: "/ports-we-serve" },
    { name: "Contact", href: "/contact" },
  ];

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

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-850 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={companyData.contact.phoneHref} 
              className="flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5 text-masOrange" />
              <span className="font-semibold text-slate-100">{companyData.contact.phone}</span>
            </a>
            <a 
              href={companyData.contact.emailHref} 
              className="flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{companyData.contact.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Hub Hours: {companyData.hours.monSat} | 24/7 Customs</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-navy-850 text-[11px] font-medium text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              BIFA & RHA Member
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-[11px]">Heathrow Cargo Corridor (UB1 3AF)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`bg-white transition-all duration-200 border-b ${
          scrolled 
            ? "shadow-medium border-slate-200/80 py-2.5" 
            : "border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                        isActive 
                          ? "text-navy-950 bg-slate-50" 
                          : "text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-navy-900" : ""}`} />
                    </Link>

                    {/* Services Dropdown Panel */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-[520px] bg-white rounded-xl shadow-elevated border border-slate-200/80 p-5 grid grid-cols-2 gap-3 transition-all duration-200">
                        {servicesData.map((service) => {
                          const IconComp = iconMap[service.icon] || Truck;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-md bg-slate-100 group-hover:bg-navy-900 flex items-center justify-center flex-shrink-0 transition-colors">
                                <IconComp className="w-4 h-4 text-navy-800 group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 group-hover:text-navy-900 transition-colors leading-tight">
                                  {service.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          );
                        })}

                        <div className="col-span-2 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between">
                          <Link 
                            href="/services" 
                            className="text-xs font-bold text-navy-900 hover:text-navy-700 flex items-center gap-1"
                          >
                            <span>Explore all logistics capabilities</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-[11px] text-slate-400 font-medium">
                            150+ Fleet • ETSF Bonded
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                    isActive 
                      ? "text-navy-950 bg-slate-50" 
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={companyData.contact.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-navy-950 hover:text-navy-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy-900">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">{companyData.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-masOrange"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={companyData.contact.phoneHref}
              className="p-2 text-slate-700 hover:text-navy-950"
              aria-label="Call MAS Logistics"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-navy-950 focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-navy-950/60 backdrop-blur-sm z-40">
          <div className="bg-white h-full max-w-sm w-full p-6 shadow-elevated overflow-y-auto flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-4">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">Navigation</p>
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    About Us
                  </Link>
                  
                  {/* Services Accordion on Mobile */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1">
                        <Link
                          href="/services"
                          className="block py-1.5 text-xs font-bold text-navy-900 border-b border-slate-200/60 mb-1"
                        >
                          All Services Overview →
                        </Link>
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block py-1.5 text-xs font-medium text-slate-700 hover:text-navy-900"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/ports-we-serve"
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Ports We Serve
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Verified Contact Details in Drawer */}
              <div className="pt-2 text-xs text-slate-600 space-y-2.5">
                <p className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">Direct Contact</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-masOrange" />
                  <a href={companyData.contact.phoneHref} className="font-semibold text-navy-950">
                    {companyData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href={companyData.contact.emailHref}>{companyData.contact.email}</a>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Mon-Sat 05:30-03:00 | Sun 05:30-04:00 (24/7 Customs)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <Link
                href="/quote"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white bg-masOrange hover:bg-masOrange-hover shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-3">
                Unit 15, Barratt Ind. Park, Southall UB1 3AF
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
