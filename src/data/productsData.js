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
    image: '/products/Barcode-labels/bar-code-1.jpg',
    banner: '/products/Barcode-labels/bg-banner.jpeg',
    gallery: [
      '/products/Barcode-labels/bar-code-1.jpg',
      '/products/Barcode-labels/colored-barcode-label-sticker--20251230020901022.webp',
      '/products/Barcode-labels/product-jpeg-500x500.webp',
      '/products/Barcode-labels/images (1).jpg',
      '/products/Barcode-labels/images (2).jpg'
    ],
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
    image: '/products/Flipkart-Amazon-shipping-label/51-iGkEwLWL._AC_UF1000,1000_QL80_.jpg',
    banner: '/products/Flipkart-Amazon-shipping-label/bg-banner.jpeg',
    gallery: [
      '/products/Flipkart-Amazon-shipping-label/51-iGkEwLWL._AC_UF1000,1000_QL80_.jpg',
      '/products/Flipkart-Amazon-shipping-label/shipment_label_requirements_image.png',
      '/products/Flipkart-Amazon-shipping-label/1-500-flipktshippinglabelspack1-smartson-original-imah8hzxgzurfpgy.webp',
      '/products/Flipkart-Amazon-shipping-label/images (1).jpg',
      '/products/Flipkart-Amazon-shipping-label/images (2).jpg'
    ],
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
    image: '/products/Direct-Thermal-Label/direct-thermal-labels.jpg',
    banner: '/products/Direct-Thermal-Label/BG-BANNER.jpeg',
    gallery: [
      '/products/Direct-Thermal-Label/direct-thermal-labels.jpg',
      '/products/Direct-Thermal-Label/Direct-Thermal-Label-Rolls.jpg',
      '/products/Direct-Thermal-Label/Thermal-Labels.jpg',
      '/products/Direct-Thermal-Label/direct-thermal-labels-554.jpg',
      '/products/Direct-Thermal-Label/images (4).jpg'
    ],
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
    image: '/products/MRP-Label-Manufacturer/81ssQQdgNfL._AC_UF1000,1000_QL80_.jpg',
    banner: '/products/MRP-Label-Manufacturer/bg-banner.jpeg',
    gallery: [
      '/products/MRP-Label-Manufacturer/81ssQQdgNfL._AC_UF1000,1000_QL80_.jpg',
      '/products/MRP-Label-Manufacturer/mrp-labels-printing-services-1000x1000.webp',
      '/products/MRP-Label-Manufacturer/71LklMLBl2L._AC_UF1000,1000_QL80_.jpg',
      '/products/MRP-Label-Manufacturer/1775908059-8614-ID-Labels.jpg',
      '/products/MRP-Label-Manufacturer/printed-price-labels-500x500.webp'
    ],
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
    image: '/products/butter-paper.jpg',
    banner: '/products/Butter-Paper-Rolls/bg-banner.jpeg',
    gallery: [
      '/products/butter-paper.jpg',
      '/products/Butter-Paper-Rolls/Butter-Paper-Jumbo-Roll.jpg',
      '/products/Butter-Paper-Rolls/Parchment-Paper-2-Side-Coated.jpg',
      '/products/Butter-Paper-Rolls/images.jpg',
      '/products/Butter-Paper-Rolls/images (1).jpg'
    ],
    popular: true,
    seoKeyword: 'Butter Paper Rolls Manufacturer'
  },
  {
    id: 'burger-wrapping-paper-rolls',
    aliases: ['food-wrapping-paper'],
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
    applications: ['Burger & Sandwiches', 'QSR & Cafes', 'Food Trucks', 'Catering Operations'],
    image: '/products/Food_and_Burger_Rolls/b1.png',
    banner: '/products/Food_and_Burger_Rolls/bg-banner.jpeg',
    gallery: [
      '/products/Food_and_Burger_Rolls/b1.png',
      '/products/Food_and_Burger_Rolls/b2.png',
      '/products/Food_and_Burger_Rolls/b3.png',
      '/products/Food_and_Burger_Rolls/B4.png',
      '/products/Food_and_Burger_Rolls/B5.png'
    ],
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
    image: '/products/Thermal-Transfer-Ribbon/1a.png',
    banner: '/products/Thermal-Transfer-Ribbon/bg-banner.jpeg',
    gallery: [
      '/products/Thermal-Transfer-Ribbon/1a.png',
      '/products/Thermal-Transfer-Ribbon/1b.png',
      '/products/Thermal-Transfer-Ribbon/1c.png',
      '/products/Thermal-Transfer-Ribbon/1d.png',
      '/products/Thermal-Transfer-Ribbon/1e.png'
    ],
    popular: true,
    seoKeyword: 'Thermal Transfer Ribbon Manufacturer in India'
  },
  {
    id: 'polyester-jewelry-labels',
    aliases: ['polyester-labels', 'jewelry-labels'],
    name: 'Barcode Labels, Polyester & Jewelry Labels',
    category: 'specialty-labels',
    categoryName: 'Polyester & Jewelry',
    tagline: 'High-Durability Synthetic PET & Glue-Free Stem Jewelry Tags',
    description: 'Specialty synthetic polyester (PET/BOPP) non-tearable labels and non-adhesive center-stem jewelry dumbbell & butterfly tags engineered for harsh industrial environments, electronics asset tagging, and fine jewelry showrooms.',
    specifications: {
      'Face Material': 'Mylar / Matte Silver Polyester / White Gloss PET',
      'Shapes': 'Dumbbell, T-shape, Butterfly, Industrial Rectangles, Die-Cut',
      'Adhesive': 'Cross-linked solvent acrylic with glue-free deadened bridge for jewelry',
      'Chemical Proofing': 'Resistant to oils, solvents, ultrasonic baths, steam, mild acids',
      'Temperature Range': '-40°C to +150°C continuous service',
      'Print Compatibility': 'Compatible with 300 DPI thermal transfer printers using Pure Resin'
    },
    features: [
      '100% tear-proof and dimensionally stable under intense humidity and weather',
      'Glue-free center stem leaves zero sticky residue on gold, silver, rings, or eyewear',
      'Withstands ultrasonic cleaning and chemical solvent exposure without print degradation',
      'Pairs with pure resin ribbons for scratch-proof asset tagging and tamper resistance'
    ],
    applications: ['Gold & Diamond Showrooms', 'Optical Eyewear', 'Electronics & PCBs', 'Automotive Rating Plates'],
    image: '/products/Barcode_Labels_Polyster_Jewellery/1.png',
    banner: '/products/Barcode_Labels_Polyster_Jewellery/bg-banner.jpeg',
    gallery: [
      '/products/Barcode_Labels_Polyster_Jewellery/1.png',
      '/products/Barcode_Labels_Polyster_Jewellery/2.png',
      '/products/Barcode_Labels_Polyster_Jewellery/3.png',
      '/products/Barcode_Labels_Polyster_Jewellery/4.png',
      '/products/Barcode_Labels_Polyster_Jewellery/5.png'
    ],
    popular: true,
    seoKeyword: 'Barcode Labels, Polyester & Jewelry Labels'
  },
  {
    id: 'barcode-printers',
    name: 'Barcode Printer',
    category: 'printers',
    categoryName: 'Barcode Printers & Hardware',
    tagline: 'High-Duty Thermal Transfer & Direct Thermal Engines',
    description: 'Authorized supply, installation, and integration of industrial grade label printers engineered for round-the-clock manufacturing plants, courier dispatch hubs, and retail operations.',
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
    image: '/products/Barcode-Printer/p1.png',
    banner: '/products/Barcode-Printer/bg-banner.jpeg',
    gallery: [
      '/products/Barcode-Printer/p1.png',
      '/products/Barcode-Printer/P2.png',
      '/products/Barcode-Printer/P3.png',
      '/products/Barcode-Printer/P4.png',
      '/products/Barcode-Printer/P5.png'
    ],
    popular: true,
    seoKeyword: 'Barcode Printer'
  },
  {
    id: 'food-wrapping-paper',
    name: 'Food and Burger Wrapping Paper Rolls',
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
    applications: ['Burger & Sandwiches', 'QSR & Cafes', 'Food Trucks', 'Catering Operations'],
    image: '/products/Food_and_Burger_Rolls/b2.png',
    banner: '/products/Food_and_Burger_Rolls/bg-banner.jpeg',
    gallery: [
      '/products/Food_and_Burger_Rolls/b2.png',
      '/products/Food_and_Burger_Rolls/b1.png',
      '/products/Food_and_Burger_Rolls/b3.png',
      '/products/Food_and_Burger_Rolls/B4.png',
      '/products/Food_and_Burger_Rolls/B5.png'
    ],
    popular: true,
    seoKeyword: 'Food and Burger Wrapping Paper Rolls'
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
    image: '/products/Food_Wrapping_Butter_Paper/F1.png',
    banner: '/products/Food_Wrapping_Butter_Paper/bg-banner.jpeg',
    gallery: [
      '/products/Food_Wrapping_Butter_Paper/F1.png',
      '/products/Food_Wrapping_Butter_Paper/F2.png',
      '/products/Food_Wrapping_Butter_Paper/F3.png',
      '/products/Food_Wrapping_Butter_Paper/F4.png',
      '/products/Food_Wrapping_Butter_Paper/F5.png'
    ],
    popular: false,
    seoKeyword: 'Food Wrapping Butter Paper Manufacturer in India'
  },
  {
    id: 'butter-paper-rolls-featured',
    aliases: ['butter-paper-rolls'],
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
    applications: ['Bakeries & Cafes', 'QSR Chains & Cloud Kitchens', 'Custom Sizes'],
    image: '/products/butter-paper.jpg',
    banner: '/products/Butter-Paper-Rolls/bg-banner.jpeg',
    gallery: [
      '/products/butter-paper.jpg',
      '/products/Butter-Paper-Rolls/Butter-Paper-Jumbo-Roll.jpg',
      '/products/Butter-Paper-Rolls/Parchment-Paper-2-Side-Coated.jpg',
      '/products/Butter-Paper-Rolls/images.jpg'
    ],
    popular: true,
    seoKeyword: 'Butter Paper Rolls Manufacturer'
  }
];

export const companyHighlights = [
  { value: '15+', label: 'Years of Expertise', suffix: '' },
  { value: '10M+', label: 'Labels Produced Daily', suffix: '' },
  { value: '1,200+', label: 'Industrial Clients', suffix: '' },
  { value: '10+', label: 'PAN-India Hubs', suffix: '' },
];
