export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'barcode-labels', name: 'Barcode & Shipping Labels' },
  { id: 'thermal-labels', name: 'Direct Thermal & MRP' },
  { id: 'specialty-labels', name: 'Polyester & Jewelry' },
  { id: 'ribbons', name: 'Thermal Transfer Ribbons' },
  { id: 'paper-rolls', name: 'Food & Butter Paper Rolls' },
  { id: 'printers', name: 'Barcode Printers & Hardware' },
];

export const products = [
  {
    id: 'barcode-labels',
    name: 'Barcode Labels',
    category: 'barcode-labels',
    categoryName: 'Barcode & Shipping Labels',
    tagline: 'High-Density Scan Precision & Industrial Adhesion',
    description: 'Engineered for flawless 1D and 2D barcode scannability across high-speed automated sorting, retail inventory, and logistics hubs.',
    specifications: {
      'Material': 'Chromo / Semi-Gloss / Direct Thermal Paper',
      'Adhesive': 'High-Tack Acrylic Hot-Melt / Permanent Emulsion',
      'Core Size': '1" (25mm) / 3" (76mm) Industrial Core',
      'Compatibility': 'Zebra, TSC, Citizen, Honeywell, Godex',
      'Temperature Range': '-10°C to +80°C',
      'Standard Sizes': '50x25mm, 100x50mm, 50x38mm, 75x50mm, Custom'
    },
    features: [
      'Crisp thermal transfer edge definition for 100% first-pass barcode scans',
      'Engineered release liner prevents printer feeding jams and wrinkles',
      'Smudge-resistant face stock resistant to warehouse handling friction',
      'Custom die-cut shapes, perforations, and gap sensors available'
    ],
    applications: ['Warehouse Logistics', 'Retail POS', 'Pharma Inventory', 'Manufacturing Assets'],
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Barcode Labels Manufacturer in India'
  },
  {
    id: 'shipping-labels',
    name: 'Flipkart & Amazon Shipping Labels',
    category: 'barcode-labels',
    categoryName: 'Barcode & Shipping Labels',
    tagline: 'E-Commerce Marketplace Compliant Waybill Labels',
    description: 'Pre-slit self-adhesive waybill labels calibrated for Flipkart Smart, Amazon Easy Ship, Delhivery, BlueDart, and Shiprocket automated fulfillment.',
    specifications: {
      'Format': 'Roll Form & Fanfold Stack (Z-Fold)',
      'Label Dimensions': '4" x 6" (100mm x 150mm) / 4" x 4"',
      'Face Stock': 'Direct Thermal Top-Coated / Ultra White',
      'Perforation': 'Clean-Tear micro-perforated gap line',
      'Adhesive': 'Aggressive pressure-sensitive adhesive for poly mailers & corrugated cartons',
      'Roll Capacity': '400, 500, or 1000 labels per roll'
    },
    features: [
      'No ink or ribbon required for direct thermal configurations',
      'Waterproof, oil-proof, and alcohol-resistant coating layer',
      'High peel adhesion sticks permanently to recycled cardboard and plastic courier bags',
      'Zero curling technology prevents automated dispenser sensor errors'
    ],
    applications: ['E-Commerce Hubs', '3PL Fulfillment Centers', 'Courier Dispatch', 'Cross-Docking'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Flipkart / Amazon Shipping Label Manufacturer in India'
  },
  {
    id: 'direct-thermal-labels',
    name: 'Direct Thermal Labels',
    category: 'thermal-labels',
    categoryName: 'Direct Thermal & MRP',
    tagline: 'Ribbon-Free Heat-Sensitive High Contrast Rolls',
    description: 'Premium chemically treated direct thermal paper that delivers instantaneous, razor-sharp black impressions under standard thermal print heads.',
    specifications: {
      'Coating': 'Top-Coated Protective Barrier against moisture & UV',
      'Sensitivity': 'Standard & High-Speed Thermal Response',
      'Liner': 'Glassine Honey / White Kraft Siliconized Liner',
      'BPA Status': 'BPA-Free / REACH Compliant Safe Formulations',
      'Shelf Life': 'Up to 24 months in controlled storage',
      'Common Rolls': '55x35mm, 40x25mm, 100x150mm'
    },
    features: [
      'Eliminates ribbon costs and simplifies roll changeover time',
      'Ultra-smooth surface extends thermal printhead lifespan by up to 30%',
      'Available in continuous rolls, die-cut labels, and removable adhesive grades',
      'Optimized for rapid parcel weighing and point-of-sale receipt printers'
    ],
    applications: ['Supermarkets & Retail', 'Cold Storage Goods', 'Courier Waybills', 'Hospital Labs'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Direct Thermal Label Manufacturer'
  },
  {
    id: 'mrp-labels',
    name: 'MRP Labels & Price Stickers',
    category: 'thermal-labels',
    categoryName: 'Direct Thermal & MRP',
    tagline: 'Compliance-Ready Consumer Pricing & Batch Marking',
    description: 'Precision pre-printed and blank MRP labels compliant with Legal Metrology Regulations, featuring batch coding, expiration date, and packaging details.',
    specifications: {
      'Paper Type': 'Chromo Art Paper / Direct Thermal / Mirror Coated',
      'Adhesives': 'Ultra-Strong Permanent or Clean-Peel Removable',
      'Pre-Printing': 'Up to 6-color flexographic custom branding',
      'Dimensions': '30x20mm, 35x25mm, 50x30mm, or bespoke cut',
      'Finish': 'Gloss Varnished / Matte Protected',
      'Packaging': 'Rolls wrapped in moisture-barrier film'
    },
    features: [
      'Tamper-evident fiber-tear adhesives available for anti-counterfeit protection',
      'Custom pre-printed brand logos, regulatory text, and net weight guidelines',
      'Compatible with handheld price marking guns and desktop barcode printers',
      'Crisp readability under retail supermarket LED overhead lighting'
    ],
    applications: ['FMCG Packaging', 'Garment Price Tags', 'Pharma Cartons', 'Hardware Retail'],
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
    popular: false,
    seoKeyword: 'MRP Label Manufacturer in India'
  },
  {
    id: 'butter-paper-rolls',
    name: 'Butter Paper Rolls',
    category: 'paper-rolls',
    categoryName: 'Food & Butter Paper Rolls',
    tagline: 'Food-Grade Greaseproof Pure Cellulose Rolls',
    description: 'Certified 100% virgin pulp greaseproof butter paper rolls designed for sanitary food packaging, bakery wrapping, and eco-friendly food service lining.',
    specifications: {
      'GSM Range': '28 GSM to 45 GSM high-tensile paper',
      'Certification': 'FSSAI / US FDA Food Contact Compliant',
      'Grease Resistance': 'KIT Value 5 to KIT Value 8 grease barrier',
      'Temperature Tolerance': 'Microwave & Oven safe up to 220°C',
      'Roll Widths': '9 inches (225mm), 11 inches (280mm), 12 inches (300mm)',
      'Roll Length': '10 meters up to 1000 meter industrial jumbo rolls'
    },
    features: [
      'Non-stick surface prevents cheese, butter, and baked goods from adhering',
      'Chlorine-free unbleached and bleached white options available',
      'Custom printing with non-toxic, food-safe soy inks for QSR branding',
      'Breathable composition prevents condensation buildup and keeps bread crisp'
    ],
    applications: ['Bakeries & Cafes', 'QSR Chains & Cloud Kitchens', 'Butter & Cheese Packing', 'Home Kitchens'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Butter Paper Rolls Manufacturer'
  },
  {
    id: 'food-wrapping-paper',
    name: 'Food & Burger Wrapping Paper Rolls',
    category: 'paper-rolls',
    categoryName: 'Food & Butter Paper Rolls',
    tagline: 'Grease-Resistant Custom Printed Wrapping Solutions',
    description: 'High-performance specialty food wrapping paper rolls and pre-cut sheets, engineered to lock in freshness, absorb excess moisture, and present food attractively.',
    specifications: {
      'Base Paper': 'Virgin Bleached Kraft / Natural Brown Kraft',
      'Barrier Coating': 'Poly-Coated (PE) / Wax-Coated / Biodegradable Bio-Wax',
      'Sheet Sizing': '250x250mm, 300x300mm, 350x350mm, or continuous rolls',
      'Print Technology': 'High-definition flexo printing with water-based inks',
      'Tensile Strength': 'High wet-strength prevents tearing under greasy, steaming burgers'
    },
    features: [
      'Prevents oil seepage on customers hands and takeaway carry bags',
      'Vibrant custom logo printing reinforces restaurant brand recall',
      'Excellent fold memory ensures neat wrap holds firmly in transit',
      'Eco-friendly, recyclable, and compostable grades available'
    ],
    applications: ['Burger & Sandwich Joints', 'Roll & Shawarma Outlets', 'Food Trucks', 'Catering Operations'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Food and Burger Wrapping Paper Rolls'
  },
  {
    id: 'thermal-transfer-ribbons',
    name: 'Thermal Transfer Ribbons',
    category: 'ribbons',
    categoryName: 'Thermal Transfer Ribbons',
    tagline: 'Wax, Wax-Resin & Full Resin Precision Foils',
    description: 'Engineered ribbon formulations manufactured to produce dark, sharp, high-durability print results while safeguarding thermal printheads from static and abrasion.',
    specifications: {
      'Formulations': 'Economy Wax, Premium Wax-Resin, Industrial Pure Resin',
      'Backcoat': 'Proprietary silicone backcoating dissipates heat & static',
      'Core Inner Diameter': '0.5" (12.7mm) and 1" (25.4mm) with dual notches',
      'Standard Widths': '55mm, 85mm, 110mm, 160mm',
      'Standard Lengths': '74m, 110m, 300m, 450m',
      'Wind Direction': 'Ink-In (CSI) and Ink-Out (CSO)'
    },
    features: [
      'Wax: Ultra-economical, dark optical density on paper labels',
      'Wax-Resin: Exceptional smudge, smear, and moderate chemical resistance',
      'Pure Resin: Unmatched endurance against harsh solvents, gasoline, autoclaves, and outdoor UV',
      'Patented anti-static coating prevents ribbon wrinkling at 12 inches/sec print speeds'
    ],
    applications: ['Automotive Assemblies', 'Chemical Drum Labelling', 'Asset Tracking', 'Export Logistics'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Thermal Transfer Ribbon Manufacturer in India'
  },
  {
    id: 'polyester-labels',
    name: 'Polyester & Non-Tearable Labels',
    category: 'specialty-labels',
    categoryName: 'Polyester & Jewelry',
    tagline: 'Extreme Durability for Harsh Environments',
    description: 'Synthetic PET, PP, and BOPP self-adhesive labels engineered for permanent outdoor exposure, industrial machinery rating plates, and chemical resistance.',
    specifications: {
      'Face Material': 'Mylar / Matte Silver Polyester / White Gloss PET',
      'Caliper': '50 Micron / 75 Micron film thickness',
      'Adhesive': 'Cross-linked high shear solvent acrylic adhesive',
      'Heat Resistance': '-40°C to +150°C continuous service',
      'Chemical Proofing': 'Resistant to oils, brake fluids, mild acids, and detergents'
    },
    features: [
      '100% tear-proof and dimensionally stable under intense humidity and weather',
      'Silver matte surface matches brushed aluminium metal plates',
      'UL and CSA component recognized materials available for electronics certification',
      'Pairs with pure resin ribbons for scratch-proof asset tagging'
    ],
    applications: ['Electronics & PCBs', 'Automotive VIN Plates', 'Heavy Machinery', 'Outdoor Appliances'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    popular: false,
    seoKeyword: 'Barcode Labels, Polyester & Jewelry Labels'
  },
  {
    id: 'jewelry-labels',
    name: 'Jewelry & Optical Dumbbell Labels',
    category: 'specialty-labels',
    categoryName: 'Polyester & Jewelry',
    tagline: 'Non-Adhesive Center Loop with Ultrasonic Clean Resistance',
    description: 'Specialty butterfly and dumbbell shaped synthetic labels designed for fine gold, silver, diamond jewelry, watches, and designer eyewear frames.',
    specifications: {
      'Shapes': 'Dumbbell, T-shape, Butterfly, Flag Tag',
      'Center Stem': 'Glue-free adhesive deadened bridge prevents residue on rings',
      'Material': 'Gloss White Polyester with high tensile tear strength',
      'Print Compatibility': 'Compatible with desktop 300 DPI thermal printers',
      'Ultrasonic Bath Safe': 'Withstands chemical cleaning and steam baths without fading'
    },
    features: [
      'Leaves zero sticky residue on delicate precious metals or gemstones',
      'Exceptional thermal contrast for tiny micro-barcodes and QR codes',
      'Durable tail resists repeated customer handling and display case lighting heat',
      'Available in tamper-evident configurations to prevent price tag switching'
    ],
    applications: ['Gold & Diamond Showrooms', 'Optical Stores', 'Luxury Timepieces', 'Fashion Accessories'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    popular: false,
    seoKeyword: 'Barcode Labels, Polyester & Jewelry Labels'
  },
  {
    id: 'barcode-printers',
    name: 'Industrial & Desktop Barcode Printers',
    category: 'printers',
    categoryName: 'Barcode Printers & Hardware',
    tagline: 'High-Duty Thermal Transfer & Direct Thermal Engines',
    description: 'Authorized supply, installation, and integration of industrial grade label printers engineered for round-the-clock manufacturing plants and retail operations.',
    specifications: {
      'Print Resolution': '203 DPI, 300 DPI, and 600 DPI ultra-high definition',
      'Print Speed': 'Up to 14 inches per second (IPS)',
      'Connectivity': 'USB 2.0, Ethernet (LAN), Wi-Fi, RS-232 Serial, Bluetooth',
      'Brands Supported': 'TSC, Zebra Technologies, Honeywell, Godex, Citizen',
      'Chassis': 'All-metal die-cast aluminum frame with clear media viewing window'
    },
    features: [
      'Heavy-duty duty cycle supporting 10,000+ labels per shift without overheating',
      'Dual-motor gear-driven mechanism for whisper-quiet and reliable ribbon feeding',
      'Full sensor suite: transmissive gap sensor, black mark sensor, ribbon-end sensor',
      'Comprehensive warranty support, original printhead replacements, and on-site servicing'
    ],
    applications: ['Factory Production Lines', 'E-Commerce Dispatch Hubs', 'Diagnostic Labs', 'Textile Mills'],
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=900&q=80',
    popular: true,
    seoKeyword: 'Barcode Printer'
  },
  {
    id: 'food-wrapping-butter-paper',
    name: 'Food Wrapping Butter Paper',
    category: 'paper-rolls',
    categoryName: 'Food & Butter Paper Rolls',
    tagline: 'Hygienic Pure Vegetable Parchment Sheets & Rolls',
    description: 'Certified food-safe butter paper rolls and interfolded sheets tailored for bakeries, sweet shops, sandwich preparation, and fresh confectionery counters.',
    specifications: {
      'Quality': '100% Virgin Bleached Sulphate Pulp',
      'Water Barrier': 'Hydrophobic barrier prevents moisture bleedthrough',
      'Breathability': 'Balanced air permeability keeps rotis and parathas fresh without sogginess',
      'Format': 'Continuous rolls with built-in cutter box or bulk flat reams',
      'Standard Widths': '10 inch, 12 inch, 14 inch rolls'
    },
    features: [
      'Retains food warmth and aroma while preventing paper fibers from sticking to food',
      '100% recyclable, biodegradable, and free from optical brightening agents (OBA)',
      'High resistance to tearing even when saturated with warm oils or gravies',
      'Ideal for lining wicker baskets, serving platters, and takeaway food trays'
    ],
    applications: ['Halwai & Sweet Shops', 'Cafeterias', 'Artisan Bakeries', 'Meal Delivery Kits'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80',
    popular: false,
    seoKeyword: 'Food Wrapping Butter Paper Manufacturer in India'
  }
];

export const companyHighlights = [
  { value: '15+', label: 'Years of Expertise', suffix: '' },
  { value: '10M+', label: 'Labels Produced Daily', suffix: '' },
  { value: '1,200+', label: 'Industrial Clients', suffix: '' },
  { value: '10+', label: 'PAN-India Hubs', suffix: '' },
];
