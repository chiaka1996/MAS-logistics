import { companyData } from "@/data/companyData";
import { ExternalLink, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Standard Trading Conditions | MAS Logistics",
  description: "Terms and conditions of trading for MAS Logistics (UK) Ltd, incorporating British International Freight Association (BIFA) and Road Haulage Association (RHA) standard conditions.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Standard Trading Conditions
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-1">
            Terms &amp; Conditions of Business
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            MAS Logistics (UK) Ltd • Company Registration No. 06739909
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              1. Incorporation of National Trading Conditions
            </h2>
            <p>
              All business undertaken, quotes provided, and contracts entered into by <strong>{companyData.name}</strong> (&ldquo;the Company&rdquo;) are conducted strictly subject to the Standard Trading Conditions of the relevant industry association governing the specific mode of transport:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-navy-950 font-bold text-sm">
                  <FileText className="w-5 h-5 text-masOrange" />
                  <span>BIFA Standard Conditions</span>
                </div>
                <p className="text-xs text-slate-600">
                  Applies to all freight forwarding, customs clearance, air cargo, ocean shipping, and international logistics operations.
                </p>
                <a
                  href={companyData.memberships[0].termsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-masOrange"
                >
                  <span>Download BIFA Conditions PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-navy-950 font-bold text-sm">
                  <FileText className="w-5 h-5 text-masOrange" />
                  <span>RHA Conditions of Carriage</span>
                </div>
                <p className="text-xs text-slate-600">
                  Applies to all domestic UK and European road haulage, collection, courier transit, and warehousing movements.
                </p>
                <a
                  href={companyData.memberships[1].termsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-masOrange"
                >
                  <span>Download RHA Conditions PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              2. Quotations and Tariffs
            </h2>
            <p>
              Quotations are issued based on immediate availability of equipment and prevailing tariffs. All quotes clearly distinguish between end-to-end transport tariffs, customs clearance charges, port fees, and statutory taxes. Unless otherwise agreed in writing, quotations exclude duties, taxes, VAT, and unexpected statutory inspection fees levied by Port Health or DEFRA.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              3. Customs Clearance &amp; Deferment
            </h2>
            <p>
              When the Company acts as customs clearance agent, the customer warrants that all commodity classifications (HS codes), invoices, and regulatory certificates supplied are accurate and compliant with UK law. Where import duties or taxes are advanced via the Company&apos;s HMRC deferment account, reimbursement is payable immediately in accordance with agreed credit terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              4. Liability and Cargo Insurance
            </h2>
            <p>
              The liability of the Company for loss, damage, or delay to consignments is strictly limited in accordance with the BIFA or RHA conditions (calculated by reference to gross weight). Customers are strongly advised to secure comprehensive Marine Cargo / All-Risks Goods in Transit insurance cover for high-value consignments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              5. Governing Law
            </h2>
            <p>
              These conditions and all contracts concluded hereunder shall be governed by and construed in accordance with English Law, and any dispute shall be submitted to the exclusive jurisdiction of the Courts of England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
