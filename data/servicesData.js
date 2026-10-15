export const servicesCategories = [
  {
    id: "freight-transport",
    title: "Freight & Transport",
    description: "Reliable UK nationwide and European transport solutions across road, air, and sea with 150+ commercial vehicles.",
    services: ["road-freight", "air-freight", "sea-freight"]
  },
  {
    id: "customs-compliance",
    title: "Customs & Compliance",
    description: "Round-the-clock UK customs clearance for air, sea, and road freight directly linked with HMRC and UK Border Force.",
    services: ["customs-clearance"]
  },
  {
    id: "warehousing-storage",
    title: "Warehousing & Storage",
    description: "Fully customs-bonded ETSF facilities and temperature-controlled storage strategically positioned near London Heathrow.",
    services: ["bonded-warehousing", "cold-storage", "cargo-handling"]
  },
  {
    id: "specialist-cargo",
    title: "Specialist Cargo & Services",
    description: "Strictly compliant processing for temperature-sensitive perishables, ADR dangerous goods, live animals, and international repatriation.",
    services: ["specialist-cargo", "repatriation"]
  }
];

export const servicesData = [
  {
    slug: "customs-clearance",
    title: "Customs Clearance (Air & Sea)",
    shortDescription: "24/7 UK customs clearance services for imports and exports across all major UK air hubs, container ports, and RoRo ferry terminals.",
    category: "Customs & Compliance",
    icon: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "24/7 dedicated clearance operations through our London operations hub",
      "Direct link with HMRC Customs Declaration Service (CDS) & UK Border Force (UKBF)",
      "Duty and Import VAT advancement via MAS Logistics deferment account",
      "Full coverage of DEFRA (Plant Health), Port Health (Food Safety), and APHA regulations",
      "RoRo ferry clearances, T1/T2 European transit documentation & IPAFFS/EORI assistance",
      "Commercial goods, personal imports, vehicle clearances, and excess baggage"
    ],
    detailedDescription: `MAS Logistics operates a 24/7 UK customs clearance service designed to eliminate supply chain bottlenecks for road, sea, and air consignments entering or leaving the United Kingdom. Operating directly from our London corridor adjacent to Heathrow Airport, our customs team possesses in-depth regulatory expertise across HMRC, Border Force, and statutory inspection authorities.

Whether handling complex commercial consignments, perishable foodstuff subject to Port Health and DEFRA inspections, hazardous ADR materials, or personal vehicle imports, we manage full documentation compliance. For eligible clients, import duties and VAT can be deferred or advanced through our corporate deferment account, expediting cargo release without financial friction.`,
    capabilities: [
      {
        title: "Air & Sea Consignments",
        description: "Direct clearance connections across Heathrow, Manchester, Birmingham, Stansted, Felixstowe, London Gateway, Southampton, Dover, and Tilbury."
      },
      {
        title: "Port Health & DEFRA Compliance",
        description: "Specialist handling of SPS goods, organic certifications, IPAFFS notifications, and animal reception procedures at Heathrow ARC."
      },
      {
        title: "T1 & T2 Transit Declarations",
        description: "Issuance and discharge of European transit documents, preventing unexpected tax assessments and border stoppages."
      },
      {
        title: "Duty Deferment Support",
        description: "Assistance with tariff classification, customs valuation, and deferment account usage to optimize working capital."
      }
    ],
    faqs: [
      {
        q: "Do you offer 24/7 customs clearance for urgent freight?",
        a: "Yes. Our customs clearance desk operates around the clock to support overnight flights, cross-Channel ferry arrivals, and urgent time-critical shipments."
      },
      {
        q: "Can MAS Logistics pay import duty and VAT on our behalf?",
        a: "Yes, we can advance customs VAT and duty on your behalf utilizing our HMRC deferment account, subject to standard terms and credit approval."
      },
      {
        q: "Which documentation is needed for commercial import clearance?",
        a: "Standard requirements include the Commercial Invoice, Packing List, Bill of Lading (sea) or Air Waybill (air) / CMR (road), your UK EORI number, and any product-specific certificates (e.g., Phytosanitary or Health Certificates)."
      }
    ]
  },
  {
    slug: "road-freight",
    title: "Road Haulage & Rapid Delivery",
    shortDescription: "UK nationwide and Pan-European road transport with a dedicated fleet of 150+ commercial vehicles, from express vans to 44-tonne HGVs.",
    category: "Freight & Transport",
    icon: "Truck",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Modern operational capacity of 150+ commercial vehicles",
      "Vans (SWB & XLWB), 7.5t, 18t, 26t, and 44-tonne articulated lorries",
      "Curtainside, box trailers, and tail-lift delivery options",
      "UK nationwide express same-day and scheduled next-day distribution",
      "Pan-European road transport (T1/T2, EU trucking, door-to-door)",
      "Single or double-manned crews for expedited transit times"
    ],
    detailedDescription: `With an operational fleet of more than 150 commercial vehicles, MAS Logistics provides road freight capacity scaled to any freight challenge. From small rapid-response courier vans to 44-tonne articulated lorries, we operate throughout the UK and across continental Europe under BIFA and RHA conditions.

We understand that timing is critical in modern logistics. Our transport coordination center operates extended hours (05:30 to 03:00/04:00 daily), closely monitoring routes and real-time vehicle telematics. Whether you require same-day express delivery of urgent aircraft parts or scheduled full-truckload (FTL) distribution, our vehicles are equipped with tail-lifts, straps, and protective decking for cargo integrity.`,
    capabilities: [
      {
        title: "Fleet Diversity (150+ Vehicles)",
        description: "From small courier vans (SWB/XLWB) to 7.5t, 18t, 26t rigid trucks, and 44t articulated HGVs with curtainside or box configurations."
      },
      {
        title: "UK Nationwide Rapid Delivery",
        description: "Express same-day and scheduled next-day collection and delivery for loose parcels, palletised freight, and oversized machinery."
      },
      {
        title: "European Road Haulage",
        description: "Cross-border transport between the UK and EU, fully compliant with post-Brexit customs documentation, ATA Carnets, and T1 transit."
      },
      {
        title: "Tail-Lift & Specialist Access",
        description: "Tail-lift equipped vehicles for locations without forklift loading docks, with single or double-manned driver options."
      }
    ],
    faqs: [
      {
        q: "What vehicle sizes are available in your fleet?",
        a: "Our fleet exceeds 150 vehicles, ranging from small wheel-base vans to extra-long wheel-base vans, 7.5-tonne, 18-tonne, 26-tonne rigid lorries, and 44-tonne articulated HGVs with tail lifts and curtainside options."
      },
      {
        q: "Do you offer European road freight?",
        a: "Yes, we handle full-load (FTL) and part-load (LTL) road transport across Europe, backed by transit documentation (T1/T2) and customs clearance."
      },
      {
        q: "Can you provide same-day collection and delivery?",
        a: "Yes, we operate express rapid-delivery services across the UK, subject to vehicle availability and collection location."
      }
    ]
  },
  {
    slug: "air-freight",
    title: "Air Freight Cargo Handling",
    shortDescription: "Strategic air freight forwarding and handling services adjacent to London Heathrow, with direct airline manifests and rapid terminal turnaround.",
    category: "Freight & Transport",
    icon: "Plane",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Prime operational hub minutes from London Heathrow Airport (LHR)",
      "Direct manifested trucking authorities bypassing costly airline handling sheds",
      "Consignments handled across LHR, MAN, BHX, LTN, and STN",
      "Cold-chain temperature-controlled air freight handling",
      "Seamless integration with ETSF bonded warehouse",
      "Air Waybill (AWB) coordination and airline security compliance"
    ],
    detailedDescription: `Air freight demands rapid turnarounds, strict compliance, and rigorous custody handling. Situated in Barratt Industrial Park in Southall, directly on the Heathrow logistics corridor, MAS Logistics is ideally situated for inbound and outbound air cargo operations.

A significant operational differentiator of MAS Logistics is our direct manifested trucking authority from European air gateways and T1 multilateral trade agreements. By moving inbound shipments straight from the aircraft or tarmac to the door of our ETSF bonded facility, we help clients avoid excessive airline handling shed dwell times and storage surcharges.`,
    capabilities: [
      {
        title: "Heathrow Hub Connectivity",
        description: "Minutes from Terminals 4 and Cargo Centre, ensuring rapid collection, drop-off, and security screening."
      },
      {
        title: "Bypassing Handling Surcharges",
        description: "Utilising direct transit shed authorities to cut demurrage and handling fees charged by airport ground handlers."
      },
      {
        title: "Temperature-Sensitive Air Cargo",
        description: "Immediate transfer into our on-site cold storage chambers for perishable food items, pharmaceutical cargo, and flowers."
      },
      {
        title: "Express Airport Delivery",
        description: "Dedicated van and truck shuttles linking UK regional cargo airports including Manchester, Birmingham, and Stansted."
      }
    ],
    faqs: [
      {
        q: "How does MAS Logistics save on airport handling fees?",
        a: "Through our ETSF transit shed status and direct manifested trucking agreements, cargo is transferred promptly to our private bonded facility, bypassing escalating airline storage fees."
      },
      {
        q: "Which UK airports do you service?",
        a: "Our primary hub operates at London Heathrow, with regular operations at London Stansted, London Luton, Birmingham, and Manchester."
      }
    ]
  },
  {
    slug: "sea-freight",
    title: "Sea Freight & Container Logistics",
    shortDescription: "End-to-end maritime freight coordination, FCL/LCL ocean container transport, port customs clearance, and container devanning.",
    category: "Freight & Transport",
    icon: "Anchor",
    heroImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Full Container Load (FCL) and Less than Container Load (LCL)",
      "Active clearance at Felixstowe, London Gateway, Southampton, Tilbury, and Immingham",
      "RoRo (Roll-on/Roll-off) ferry clearances at Dover and east coast ports",
      "Container de-stuffing, devanning, and palletisation at our secure depot",
      "Direct onward UK delivery via 44-tonne container haulage",
      "Customs inspection coordination with Port Health and UKBF"
    ],
    detailedDescription: `Sea freight provides an economical backbone for global trade, but navigating UK deep-sea ports requires experienced port logistics partners. MAS Logistics provides comprehensive ocean freight clearance, container haulage, and warehouse deconsolidation across all major UK container ports.

From Felixstowe (the UK's largest container facility) and London Gateway to Southampton, Tilbury, and Immingham, our customs brokers submit entry declarations via the Customs Declaration Service (CDS). Upon customs release, our haulage network coordinates container collection, delivering full containers directly to your facility or transferring them to our Southall warehouse for devanning, palletisation, and secondary distribution.`,
    capabilities: [
      {
        title: "Major Seaport Integration",
        description: "Dedicated clearance badges and systems linked to Felixstowe, London Gateway, Southampton, Tilbury, and Immingham."
      },
      {
        title: "Container Deconsolidation & Devanning",
        description: "Unloading loose or palletised ocean containers with forklift capacity, cross-docking onto domestic delivery vehicles."
      },
      {
        title: "RoRo Ferry Clearances",
        description: "Rapid customs processing for accompanying trucks and unaccompanied trailers arriving via Dover and Eurotunnel."
      },
      {
        title: "Port Health Examination Assistance",
        description: "Coordination with veterinary and plant health port authorities for rapid sampling and inspection clearance."
      }
    ],
    faqs: [
      {
        q: "Can you collect sea containers from Felixstowe and Southampton?",
        a: "Yes, we handle container customs clearance and arrange container haulage or destuffing for onward delivery across the UK."
      },
      {
        q: "What is the difference between FCL and LCL shipping?",
        a: "FCL (Full Container Load) reserves an entire container for your goods. LCL (Less than Container Load) consolidates your cargo with other shipments, which we can deconsolidate at our warehouse."
      }
    ]
  },
  {
    slug: "bonded-warehousing",
    title: "Bonded Warehousing & ETSF Facility",
    shortDescription: "Customs-approved External Temporary Storage Facility (ETSF) allowing duty and import VAT suspension until commercial release.",
    category: "Warehousing & Storage",
    icon: "Warehouse",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Official HMRC-approved ETSF (External Temporary Storage Facility)",
      "Complete duty and Import VAT suspension while goods are held in bond",
      "Direct link with UK Border and customs inventory systems",
      "Avoids exorbitant airline handling sheds and port demurrage charges",
      "Secure, monitored warehousing with recorded stock management",
      "Strategic West London facility minutes from M4, M25, and Heathrow"
    ],
    detailedDescription: `Managing cash flow is a crucial advantage in international trade. MAS Logistics operates its very own HMRC-authorized External Temporary Storage Facility (ETSF) and customs bonded warehouse in Southall, West London.

When your consignments arrive in the UK under T1 transit declarations or direct air/sea manifests, they can be transferred straight into our bonded warehouse. Import duties and VAT are suspended during storage, allowing you to defer tax payments until the exact moment products are cleared for UK commercial sale or re-exported. This facility drastically reduces demurrage costs typically charged by airport and seaport operators.`,
    capabilities: [
      {
        title: "Tax & Duty Suspension",
        description: "Hold inventory legally in the UK without immediate payment of 20% import VAT and customs duties, protecting business cash flow."
      },
      {
        title: "ETSF Transit Shed Status",
        description: "Receive uncleared goods under T1 customs documents directly into our depot for examination or staged clearance."
      },
      {
        title: "Integrated Inventory Tracking",
        description: "Server-integrated warehouse management ensuring barcode traceability, batch control, and accurate customs accounting."
      },
      {
        title: "Lower Storage Overhead",
        description: "Significantly more cost-effective daily storage rates compared to commercial airline handling sheds at Heathrow."
      }
    ],
    faqs: [
      {
        q: "What is an ETSF warehouse?",
        a: "An ETSF (External Temporary Storage Facility) is an approved customs facility outside the airport or seaport boundary where uncleared goods can be transferred and held in temporary storage prior to customs declaration."
      },
      {
        q: "How does bonded storage improve working capital?",
        a: "Instead of paying duty and VAT upfront upon border arrival, payment is only triggered when goods are officially entered into free circulation in the UK."
      }
    ]
  },
  {
    slug: "cold-storage",
    title: "Cold Storage & Temperature-Controlled Warehousing",
    shortDescription: "State-of-the-art multi-temperature warehousing near Heathrow for perishable food, pharmaceuticals, and sensitive freight.",
    category: "Warehousing & Storage",
    icon: "ThermometerSnowflake",
    heroImage: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Dedicated multi-temperature zones: Ambient, Chilled, and Frozen",
      "Strategic facility minutes from Heathrow Airport for rapid cold-chain transfer",
      "Flexible pallet-based short, medium, and long-term storage agreements",
      "Strict temperature logging, monitoring, and compliance protocols",
      "Equipped for fresh foodstuffs, perishables, and pharmaceutical products",
      "Refrigerated vehicle collection and delivery capabilities"
    ],
    detailedDescription: `Cold chain logistics leaves zero margin for temperature deviation. At MAS Logistics, our cold storage facility in West London provides specialised, temperature-controlled warehousing engineered to preserve the integrity and shelf life of sensitive goods.

Our facility accommodates varied temperature regimes—from controlled ambient and chilled storage (+2°C to +8°C) to frozen chambers (-18°C and below). Located right on the Heathrow cargo perimeter, incoming air freight consignments of perishables, exotic produce, or temperature-sensitive goods can be transferred into cold storage within hours of touchdown.`,
    capabilities: [
      {
        title: "Multi-Regime Temperature Control",
        description: "Chilled (+2°C to +8°C), frozen (-18°C to -25°C), and controlled ambient chambers suited to diverse product specifications."
      },
      {
        title: "Rapid Perishable Tarmac Transfer",
        description: "Direct collection from Heathrow cargo sheds to eliminate temperature exposure during airport dwell."
      },
      {
        title: "Pallet-Basis Flexibility",
        description: "From single emergency pallet storage to regular seasonal container-load allocations without onerous long-term commitments."
      },
      {
        title: "Continuous Digital Monitoring",
        description: "24/7 automated temperature logging with redundant backup systems ensuring full hygiene and regulatory adherence."
      }
    ],
    faqs: [
      {
        q: "What temperature ranges does your cold storage support?",
        a: "We accommodate controlled ambient, chilled (+2°C to +8°C), and deep frozen (-18°C to -25°C) regimes."
      },
      {
        q: "Can I store perishables on a short-term pallet basis?",
        a: "Yes, we offer flexible pallet-based short, medium, and long-term arrangements tailored to cargo arrival cycles and supermarket delivery slots."
      }
    ]
  },
  {
    slug: "cargo-handling",
    title: "Cargo Handling, Devanning & Distribution",
    shortDescription: "Comprehensive warehouse services including container destuffing, palletisation, breaking bulk, cross-docking, and secure dispatch.",
    category: "Warehousing & Storage",
    icon: "Boxes",
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Forklift fleet and heavy handling equipment for loose and palletised cargo",
      "Container devanning, destuffing, and sorting services",
      "Professional shrink-wrapping, strapping, and palletisation",
      "Break-bulk and cross-docking for rapid onward distribution",
      "Direct cooperation with Port Health, APHA, and DEFRA inspectors",
      "Integrated server software ensuring full traceability"
    ],
    detailedDescription: `Efficient physical cargo handling is fundamental to smooth freight forwarding. MAS Logistics operates a fully equipped handling terminal in Southall, staffed by experienced material handling specialists and supported by modern forklift equipment.

We handle all classifications of goods: commercial dry cargo, foodstuffs, perishables, and non-perishables. When imports arrive loose in sea containers or road trailers, our team quickly destuffs, inspects, sorts, and palletises the goods according to UK pallet standards. Furthermore, when statutory agencies such as DEFRA, APHA, or Port Health mandate physical inspections, our facility provides compliant inspection environments.`,
    capabilities: [
      {
        title: "Palletisation & Re-work",
        description: "Re-stacking, banding, shrink-wrapping, and labelling non-standard or damaged pallets for UK warehouse conformity."
      },
      {
        title: "Cross-Docking",
        description: "Direct transfer of arriving freight from inbound linehaul trailers straight into local delivery vans, minimizing dwell time."
      },
      {
        title: "Inspection Management",
        description: "Preparation of consignments for official customs, DEFRA plant health, and port health officers at our secure facility."
      },
      {
        title: "Break-Bulk & Distribution",
        description: "Deconsolidating consolidated master consignments into individual sub-consignments for nationwide courier delivery."
      }
    ],
    faqs: [
      {
        q: "Can you re-palletise damaged or shifting cargo?",
        a: "Yes. Our team frequently remedies collapsed or non-compliant pallets, rebuilding them onto standard UK/Euro pallets with heavy-duty shrink wrap."
      },
      {
        q: "Do you have facilities for official cargo inspections?",
        a: "Yes, we regularly host HMRC, UK Border Force, and DEFRA/APHA inspectors at our facility for physical goods examination."
      }
    ]
  },
  {
    slug: "specialist-cargo",
    title: "Specialist & Regulated Cargo",
    shortDescription: "Expert logistical management for hazardous ADR goods, perishable food chains, vehicle entry clearances, and live animal clearances.",
    category: "Specialist Cargo",
    icon: "AlertTriangle",
    heroImage: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Dangerous Goods (ADR) transport compliance and documentation",
      "Perishable food supply chain handling conforming to DEFRA and Port Health",
      "Live animal & pet customs clearance coordinated with Heathrow ARC",
      "Port vehicle clearances for commercial and personal car imports/exports",
      "Personal effects and excess baggage customs declarations",
      "Trained staff fluent in 8 languages facilitating international compliance"
    ],
    detailedDescription: `Not all freight fits into standard shipping categories. MAS Logistics has developed dedicated capabilities to manage highly regulated, sensitive, and specialist cargo categories that require heightened vigilance and technical documentation.

From dangerous goods governed by ADR road transport regulations to perishable supply chain food imports governed by IPAFFS and DEFRA, our team ensures complete legal adherence. We also manage port clearances for imported motor vehicles and operate a specialized liaison service with the Animal Reception Centre (ARC) at Heathrow Airport for pet and animal clearances.`,
    capabilities: [
      {
        title: "Dangerous Goods (ADR)",
        description: "Certified transport and handling of hazardous substances, ensuring proper packaging, vehicle signage, and driver ADR qualifications."
      },
      {
        title: "Live Animal & Pet Clearance",
        description: "Collaborating directly with Heathrow Animal Reception Centre (ARC) to coordinate documentation and quarantine protocols."
      },
      {
        title: "Vehicle Import & Export Clearances",
        description: "NOVA notifications, chassis verification, and customs clearance for classic cars, commercial fleets, and private vehicles."
      },
      {
        title: "Perishable Food Chain",
        description: "Full IPAFFS notification, Phytosanitary document check, and temperature verification for fast-moving agricultural products."
      }
    ],
    faqs: [
      {
        q: "Can you assist with pet clearance at London Heathrow?",
        a: "Yes, we work in coordination with the Animal Reception Centre (ARC) at Heathrow Airport to process customs entries for pets and animals."
      },
      {
        q: "Do your drivers hold ADR certification for hazardous freight?",
        a: "Yes, we have ADR-certified vehicles and drivers capable of handling regulated hazardous classifications safely."
      }
    ]
  },
  {
    slug: "repatriation",
    title: "International Air Repatriation to the UK",
    shortDescription: "Compassionate, professional repatriation services: handling airport arrival, UK customs clearance, and dignified onward transportation to funeral directors.",
    category: "Specialist Cargo",
    icon: "HeartHandshake",
    heroImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Specialised compassionate team handling sensitive repatriation arrivals",
      "UK airport customs clearance and airline handling upon flight touchdown",
      "Dignified collection from Heathrow, Gatwick, Birmingham, or Manchester",
      "Safe, respectful onward road transportation to chosen UK funeral home",
      "Seamless liaison directly with legal next-of-kin and appointed funeral directors",
      "Client Letter of Authority and complete regulatory protocol compliance"
    ],
    detailedDescription: `Losing a loved one overseas is an emotional and difficult experience. During this critical time, MAS Logistics provides a respectful, professional, and compassionate air repatriation service to bring the deceased or ashes home to the United Kingdom.

Our dedicated team specialises in handling all statutory procedures the moment your loved one lands at a UK airport. We liaise with the airline, oversee customs and coroner documentation, collect the deceased with dignity, and coordinate safe onward road transport to the family's chosen funeral director anywhere across the UK.`,
    capabilities: [
      {
        title: "Airport Arrival & Customs Clearance",
        description: "Immediate custody upon aircraft landing, completing all airline cargo desk formalities and customs release without delays."
      },
      {
        title: "Dignified Collection Protocol",
        description: "Professional, respectful handling and transfer using specialized vehicles designed for compassionate transport."
      },
      {
        title: "Nationwide Handover to Funeral Directors",
        description: "Direct transport from Heathrow, Gatwick, Birmingham, or Manchester to funeral parlours across England, Scotland, Wales, and Northern Ireland."
      },
      {
        title: "Complete Documentation Assistance",
        description: "Managing death certificate translations, coroner certificates, airline airway bills, and next-of-kin letters of authority."
      }
    ],
    faqs: [
      {
        q: "At what point does MAS Logistics take responsibility?",
        a: "Our specialized repatriation service commences upon the flight's arrival at the UK airport, taking immediate charge of customs clearance and airline collection."
      },
      {
        q: "Do you deliver directly to our chosen funeral director?",
        a: "Yes, we coordinate directly with your appointed funeral director and provide dedicated, dignified transport anywhere in the United Kingdom."
      }
    ]
  }
];
