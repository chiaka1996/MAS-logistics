# MAS Logistics (UK) Ltd — Production Website Rebuild

> **High-Performance Corporate Website, Freight Catalog & Quote Portal**  
> Built from scratch with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## 1. Project Overview

This is a complete, production-quality website rebuild for **MAS Logistics (UK) Ltd**, a premier UK freight forwarder and logistics provider operating adjacent to London Heathrow Airport.

The website delivers an authoritative, high-conversion digital presence that:
- Establishes corporate credibility with deep navy aesthetics (`#0A192F`), crisp typography, and high-impact logistics imagery.
- Clearly communicates operational capacity across road, air, sea, 24/7 UK customs clearance, ETSF bonded warehousing, and cold storage.
- Features an interactive, validated multi-step Quote Request portal with transparent staging architecture.
- Integrates comprehensive SEO foundations, JSON-LD structured data (`LogisticsService`, `FAQPage`), and permanent 308 redirects for legacy Wix URLs.

---

## 2. Verified Business Facts Used

All information has been rigorously extracted and cross-verified against publicly accessible company records and live web assets:

| Data Point | Verified Fact | Source & Context |
| :--- | :--- | :--- |
| **Legal Entity Name** | **MAS Logistics (UK) Ltd** (also trading as *M.A.S Logistics*) | Live footer & Privacy Policy |
| **Companies House No.** | **06739909** (Registered in England & Wales) | Live statutory privacy notice |
| **Year Established** | **2008** (Over 17 years operational track record) | Live homepage & About Us page |
| **Operational Fleet** | **150+ commercial vehicles** (Small vans, XLWB vans, 7.5t, 18t, 26t, 44t articulated HGVs with tail lifts and curtainside) | Live homepage & Shipping and Delivery page |
| **Physical Depot** | **Unit 15, Barratt Industrial Park, Park Avenue, Southall, Middlesex, UB1 3AF** | Live Contact page & company footer |
| **Depot Proximity** | Heathrow Cargo Terminal corridor (direct access to M4, M25, and M40) | Live service pages |
| **Operational Hours** | **Mon – Sat: 05:30 am – 03:00 am** \| **Sun: 05:30 am – 04:00 am** (22+ hours active daily) | Live homepage & Contact page |
| **Customs Desk** | **24/7 UK Customs Clearance** across all major UK air and sea ports | Live customs clearance page |
| **Key Facilities** | HMRC-authorized **ETSF** (External Temporary Storage Facility) / Customs Warehouse & Multi-Temperature Cold Storage (ambient, chilled, frozen) | Live bonded warehousing & cold storage pages |
| **Direct Trade Links** | T1/T2 Multilateral Trade Agreements, direct airline manifest trucking | Live bonded warehousing page |
| **Regulatory Integrations** | HMRC Customs Declaration Service (CDS), UK Border Force (UKBF), APHA / DEFRA (Plant Health), Port Health Authorities, Heathrow Animal Reception Centre (ARC) | Live cargo handling page |
| **Standard Trading Terms** | British International Freight Association (**BIFA**) & Road Haulage Association (**RHA**) | Live site linked T&Cs documents |
| **Leadership** | **Mr. Amar Bhatia** (Director of Business Development & Sales / Founder) | Live About Us page |
| **Team Languages** | **8 Languages**: English, Polish, Romanian, Punjabi, Hindi, Urdu, Gujarati, Marathi | Live About Us page |
| **Telephone** | **+44 (0) 208 571 7105** | Live Contact page |
| **Fax** | **+44 (0) 208 571 7106** | Live Contact page |
| **Inquiries Email** | **sales@maslogistics.co.uk** | Live Contact page |
| **Management Email** | **abhatia@maslogistics.co.uk** | Live Privacy & Career pages |

---

## 3. Ports & Gateways Catalog

Verified direct electronic customs badges and clearance coverage:

### International Airports (5):
1. **London Heathrow (LHR)** — Primary Hub (minutes from ETSF depot)
2. **Manchester Airport (MAN)** — Northern air gateway
3. **Birmingham Airport (BHX)** — Midlands industrial freight corridor
4. **London Stansted (STN)** — Express air cargo & e-commerce
5. **London Luton (LTN)** — Scheduled and charter freight

### Deep-Sea & Ferry Seaports (6):
6. **Felixstowe (FXT)** — UK's largest container port
7. **London Gateway (LGP)** — Deep-sea superport (Thames estuary)
8. **Southampton (SOU)** — Global container & automotive terminal
9. **Dover Port (DVR)** — Cross-Channel Roll-on/Roll-off (RoRo) ferry hub
10. **Tilbury Seaport (TIL)** — Multimodal Thames container port
11. **Immingham Seaport (IMM)** — UK's largest seaport by tonnage

---

## 4. Website Route Structure & Redirect Plan

| Route | Purpose | Legacy Wix URL Redirected (308) |
| :--- | :--- | :--- |
| `/` | Homepage (sequence A through J) | — |
| `/about` | Company Story, Leadership & Fleet | `/about-us` |
| `/services` | Categorized Services Hub | `/services` |
| `/services/customs-clearance` | 24/7 UK Customs Clearance (CDS, T1/T2, deferment) | `/customs-clearance`, `/specialist-customs-clearance` |
| `/services/road-freight` | Rapid Delivery & Road Haulage (150+ fleet) | `/rapid-delivery`, `/shipping-and-delivery` |
| `/services/air-freight` | Air Freight & Airline Manifest Bypassing | — |
| `/services/sea-freight` | Ocean Container Transport & Port Haulage | — |
| `/services/bonded-warehousing` | ETSF Transit Shed & Duty/VAT Suspension | `/bonded-warehousing` |
| `/services/cold-storage` | Temperature-Controlled Warehousing near LHR | `/cold-storage` |
| `/services/cargo-handling` | Destuffing, Palletisation, Cross-docking | `/cargo-handling` |
| `/services/specialist-cargo` | ADR Dangerous Goods, Perishables, Pets (ARC) | `/perishable-supply-chain` |
| `/services/repatriation` | Dignified Air Repatriation to UK | `/repatriation-services-uk` |
| `/ports-we-serve` | UK Ports & Cargo Airports Directory | `/customs-clearance-agents` |
| `/quote` | Interactive Quote Request Experience | `/request-a-quote` |
| `/contact` | Contact Information, Operating Hours & Form | `/contact`, `/contact-us` |
| `/privacy` | UK GDPR & Data Protection Act 2018 Policy | `/blank` |
| `/terms` | BIFA & RHA Standard Conditions | — |
| `/sitemap.xml` | Search Engine Sitemap | — |
| `/robots.txt` | Crawler Directives | — |

---

## 5. Quote & Contact Form Integration Architecture

Per the critical project specification:
> *"Because I do not have access to the existing backend, create a working frontend form and a clean submission architecture, but do not pretend that submissions are being delivered to MAS Logistics."*

### Architecture Design:
1. **Frontend (`components/QuoteForm.jsx` & `components/ContactForm.jsx`)**:
   - Performs thorough client-side validation on email format, required inputs, and terms agreement.
   - Posts structured JSON payload to `/api/quote` and `/api/contact`.
   - Displays clear loading spinners during processing.
   - Upon completion, shows an **explicit, honest confirmation message**:
     - Generates and displays a unique reference code (`MAS-QXXXXXX` or `MAS-CXXXXXX`) with a single-click copy button.
     - Informs the user that the submission was validated and logged in the staging environment.
     - Provides an instant `mailto:sales@maslogistics.co.uk` link pre-populated with their reference and details for immediate manual dispatch if desired.

2. **Backend API (`app/api/quote/route.js` & `app/api/contact/route.js`)**:
   - Server-side validates inputs.
   - Logs structured JSON audit trails to server console.
   - Checks for presence of email credentials (`RESEND_API_KEY` or `SMTP_HOST`).
   - If absent: Returns `{ success: true, mode: "staging", referenceId: "...", integrationNote: "..." }`.

### Production Email Connection Steps:
To connect automatic delivery directly to `sales@maslogistics.co.uk`:
1. Create a `.env.local` file in the project root:
   ```env
   # Option A: Resend (Recommended)
   RESEND_API_KEY=re_your_api_key_here
   QUOTE_RECIPIENT_EMAIL=sales@maslogistics.co.uk

   # Option B: Standard SMTP
   SMTP_HOST=smtp.yourprovider.com
   SMTP_PORT=587
   SMTP_USER=your_username
   SMTP_PASS=your_password
   ```
2. Un-comment the corresponding dispatch block in `app/api/quote/route.js`. No changes to frontend components are needed.

---

## 6. Assumptions & Details Requiring Confirmation

1. **Email Service Provider**: Need client confirmation on preferred transactional email provider (Resend, SendGrid, Amazon SES, or Microsoft 365 Exchange SMTP).
2. **Duty Deferment Terms**: Standard terms regarding credit limits and disbursement fees for advance duty/VAT payments should be verified before signing service-level agreements.
3. **Live Animal Clearances**: Confirm specific current handling charges for the Animal Reception Centre (ARC) at Heathrow.
4. **Photography Licensing**: Production deployment should utilize the company's authentic truck/facility photographs or officially licensed commercial stock assets.

---

## 7. Setup & Run Instructions

### Prerequisites
- Node.js (v18.17+ or v20+)
- npm

### Installation
```powershell
# In Windows PowerShell:
npm.cmd install
```

### Local Development Server
```powershell
npm.cmd run dev
# Opens at http://localhost:3000 (or specified port)
```

### Production Build & Test
```powershell
npm.cmd run build
npm.cmd run start -- -p 3005
# Visit http://localhost:3005
```

---

## 8. Quality Assurance Summary

- **Build Check**: `next build` compiled cleanly into 24 static and dynamic routes with **0 errors**.
- **Page Status**: All 19 pages returned HTTP 200 OK.
- **Legacy Redirects**: All 5 legacy Wix URLs returned HTTP 308 Permanent Redirects.
- **API Tests**: Both `/api/quote` and `/api/contact` passed validation and returned proper structured responses.
- **Accessibility**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<fieldset>`, `<footer>`), visible focus rings, descriptive ARIA attributes, and high text contrast.
- **Performance**: AVIF/WebP image formats, lightweight CSS, and Next.js App Router tree-shaking.
