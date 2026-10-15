import Link from "next/link";
import Image from "next/image";

export default function Logo({ variant = "dark", className = "" }) {
  const isLight = variant === "light";

  return (
    <Link 
      href="/" 
      className={`group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-900 rounded-lg py-1 ${className}`}
      aria-label="MAS Logistics Home"
    >
      <div className="relative w-12 h-10 flex-shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo-raw.png"
          alt="MAS Logistics Logo Symbol"
          width={56}
          height={38}
          className="object-contain w-auto h-9 transform group-hover:scale-105 transition-transform duration-200"
          priority
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl font-black tracking-tight font-heading ${isLight ? "text-white" : "text-navy-950"}`}>
            MAS
          </span>
          <span className={`text-xl font-bold tracking-wider ${isLight ? "text-slate-200" : "text-navy-800"}`}>
            LOGISTICS
          </span>
        </div>
        <span className={`text-[10px] uppercase tracking-widest font-semibold mt-1 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
          Freight & Customs • UK & EU
        </span>
      </div>
    </Link>
  );
}
