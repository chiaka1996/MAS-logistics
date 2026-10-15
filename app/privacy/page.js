import { companyData } from "@/data/companyData";

export const metadata = {
  title: "Privacy Policy | UK GDPR Compliance | MAS Logistics UK Ltd",
  description: "Privacy policy for MAS Logistics (UK) Ltd. Explains how personal data is collected, stored, and processed in compliance with UK GDPR and Data Protection Act 2018.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Effective Date: 31 May 2025 • Compliant with UK GDPR &amp; Data Protection Act 2018
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              1. Introduction
            </h2>
            <p>
              At <strong>{companyData.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered in England and Wales under Company Number <strong>{companyData.companyNumber}</strong>, with our registered office at {companyData.headquarters.addressLine1}, {companyData.headquarters.addressLine2}, {companyData.headquarters.town}, {companyData.headquarters.postcode}, we are committed to safeguarding and respecting your personal data and commercial privacy.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and protect your information when you access our website ({metadata.metadataBase?.hostname || "www.maslogistics.co.uk"}), submit quote requests, or engage our freight forwarding, customs clearance, warehousing, and transportation services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              2. Information We Collect
            </h2>
            <p>We may collect and process the following categories of data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Direct Identification &amp; Contact Details:</strong> Full name, company name, position, business email address, telephone numbers, and invoicing addresses.
              </li>
              <li>
                <strong>Consignment &amp; Customs Data:</strong> Commercial invoices, airway bill / bill of lading numbers, commodity codes (HS codes), origin/destination coordinates, EORI numbers, IPAFFS references, and Letters of Authority required to execute customs clearance with HMRC.
              </li>
              <li>
                <strong>Technical Browsing Data:</strong> IP addresses, browser types, device information, and anonymous session telemetry to maintain website security and user accessibility.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              3. Purpose and Legal Basis for Processing
            </h2>
            <p>Under the UK GDPR, we process your data on the following bases:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Performance of a Contract:</strong> To evaluate quote requests, schedule transport, clear consignments through UK Border Force, and fulfill logistics agreements.
              </li>
              <li>
                <strong>Legal &amp; Regulatory Obligation:</strong> To comply with HMRC declarations, Port Health, DEFRA documentation retention standards, and statutory accounting rules.
              </li>
              <li>
                <strong>Legitimate Business Interests:</strong> To respond to customer inquiries, safeguard cargo custody, and improve our services without infringing upon your rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              4. Data Sharing and Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We disclose information only to authorized statutory authorities (HMRC, UK Border Force, Port Health, DEFRA) and contracted operational carriers strictly necessary to complete cargo movement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              5. Data Retention and Security
            </h2>
            <p>
              We maintain technical and organizational safeguards across our server infrastructure. Customs declaration archives are retained in accordance with statutory HMRC requirements (typically 6 years), after which records are securely destroyed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy-950 font-heading">
              6. Your Statutory Rights
            </h2>
            <p>
              Under UK data protection law, you have the right to request access to your personal data, rectify inaccurate details, request erasure where legally permissible, or object to processing. To exercise any of these rights, please contact our Data Controller at{" "}
              <a href={`mailto:${companyData.contact.managementEmail}`} className="text-navy-900 font-bold underline">
                {companyData.contact.managementEmail}
              </a>.
            </p>
          </section>

          <section className="pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold text-navy-950">Contacting Our Data Protection Officer</h3>
            <p className="text-xs text-slate-500 mt-1">
              MAS Logistics (UK) Ltd • Unit 15 Barratt Industrial Park, Park Avenue, Southall UB1 3AF<br />
              Email: {companyData.contact.email} | Phone: {companyData.contact.phone}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
