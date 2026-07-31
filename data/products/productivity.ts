import { Product } from "./types";

export const productivityProducts: Product[] = [

{
  id: 4,
  name: "Laptop Stand",
  slug: "laptop-stand",
  category: "Productivity",
  collection: "Ergonomic Essentials",
  tags: ["laptop stand", "ergonomic", "productivity", "office supplies"],
  price: 49.99,


  image: "/images/products/productivity/laptop-stand.JPG",

  images: [
    "/images/products/productivity/laptop-stand-pad-01.JPG",
    "/images/products/productivity/laptop-stand-pad-02.JPG",
    "/images/products/productivity/laptop-stand-pad-03.JPG",
    "/images/products/productivity/laptop-stand-pad-04.JPG",
    "/images/products/productivity/laptop-stand-pad-05.JPG",
  ],

  description:
    "Designed for professionals, creators, and remote workers, the Adjustable Aluminum Laptop Stand combines ergonomic comfort with active cooling technology. Featuring a premium aluminum alloy frame, adjustable viewing angles, and dual silent cooling fans, it improves airflow while elevating your laptop for a healthier, more productive workspace.",

  features: [
    "Ergonomic height adjustment",
    "Dual ultra-quiet cooling fans",
    "Foldable and portable design",
    "Strong aluminum construction",
    "Anti-slip silicone pads",
    "Open ventilation design",
    "Compatible with most laptops"
  ],  

  specifications: {
    material: "Premium CNC Aluminum Alloy + Silicone",
    weight: "220g",
    warranty: "12 Month Limited Warranty",
  },

  colors: [
    "Silver",
    "Space Grey",
  ],

  stock: 21,

  rating: 4.7,
  reviews: 150,
  badge: "Best Seller",
  featured: true,
},

{
    id: 48,
    slug: "executive-laptop-briefcase-black",
    name: "Executive Laptop Briefcase",
    category: "Productivity",
    brand: "TechPro",
    collection: "Executive Series",
    tags: ["laptop", "office", "briefcase", "travel"],
    price: 54.99,
    comparePrice: 69.99,
    image: "/images/products/productivity/laptop-backpack-01.JPG",
    images: [
      "/images/products/productivity/laptop-backpack-02.JPG",
      "/images/products/productivity/laptop-backpack-05.JPG",
      "/images/products/productivity/laptop-backpack-06.JPG"
      
    ],
    description:
      "Professional laptop briefcase with padded compartments for work, travel, and daily commuting.",
    features: [
      "Fits up to 15.6-inch laptop",
      "Water-resistant fabric",
      "Adjustable shoulder strap",
      "Multiple storage compartments",
      "Shockproof interior"
    ],
    specifications: {
      material: "Water-resistant Polyester",
      dimensions: "40 × 30 × 8 cm",
      compatibility: "Up to 15.6-inch laptops",
      warranty: "1 Year"
    },
    colors: ["Black"],
    stock: 34,
    rating: 4.9,
    reviews: 165,
    badge: "Best Seller",
    featured: true,
    bestSeller: true
  },

  {
  id: 5,
  name: "Executive Ergonomic Leather Office Chair",
  slug: "executive-ergonomic-leather-office-chair",
  category: "Productivity",
  collection: "Ergonomic Essentials",
  tags: ["office chair", "ergonomic", "leather", "executive", "productivity", "home office"],   
  price: 330.99,


  image: "/images/products/productivity/Office-Chair-01.JPG",

  images: [
    "/images/products/productivity/Office-Chair-02.JPG",
    "/images/products/productivity/Office-Chair-03.JPG",
    "/images/products/productivity/Office-Chair-04.JPG",
    "/images/products/productivity/Office-Chair-05.JPG",
    "/images/products/productivity/Office-Chair-06.JPG",
    "/images/products/productivity/Office-Chair-07.JPG",
  ],

  description:
    "Elevate your workspace with the Executive Ergonomic Leather Office Chair, crafted for professionals who value comfort, style, and durability. Upholstered in premium leather with elegant diamond-quilted stitching, this chair features ergonomic lumbar support, adjustable height, reclining functionality, and smooth-rolling casters—perfect for long hours in the office or home workspace.",

  features: [
    "Ergonomic high-back design",
    "Premium leather upholstery",
    "Diamond-quilted backrest",
    "Adjustable seat height",
    "Reclining backrest with tilt lock",
    "Built-in lumbar support",
    "360° swivel rotation",
    "Smooth and quiet caster wheels",
    "Modern executive design",
  ],  

  specifications: {
    material: "Premium PU Leather, High-Density Foam, Steel Frame, Chrome-Plated Aluminum Base",
    weight: "38 lbs (17.2 kg)",
    sizes: "Adjustable Seat Height: 18–22 in (45–56 cm), Backrest Height: 28 in (71 cm)",
    dimensions: "26 × 28 × 47–51 in (66 × 71 × 119–130 cm)",
    warranty: "24 Month Limited Warranty",
  },

  colors: [
    "Black",
    "Camel Brown",
    "Dark Brown",
    "White",
    "Gray"
  ],

  stock: 21,

  rating: 4.7,
  reviews: 323,
  badge: "Customer Favorite",
  featured: true,

},

{
  id: 7,
  slug: "novoo-usb-c-hub",
  name: "NOVOO USB-C Hub",
  category: "Productivity",
  brand: "NOVOO",
  collection: "Workspace Essentials",
  tags: [
    "USB-C",
    "Hub",
    "Laptop",
    "HDMI",
    "Portable",
    "Productivity"
  ],
  price: 69,
  comparePrice: 89,
  image: "/images/products/productivity/USB-C Card-1.JPG",
  images: [
    "/images/products/productivity/USB-C Card-1.JPG"
  ],
  description:
    "The NOVOO USB-C Hub adds essential connectivity to your laptop or tablet with HDMI output, USB 3.0 ports, SD/TF card readers, and 100W Power Delivery charging in a compact aluminum design.",
  features: [
    "4K HDMI output",
    "100W USB-C Power Delivery",
    "USB 3.0 ports",
    "SD & TF card readers",
    "Compact travel design",
    "High-speed data transfer",
    "Plug-and-play",
    "Premium aluminum body",
    "Portable",
    "Wide compatibility"
  ],
  specifications: {
    material: "Aluminum Alloy",
    weight: "88 g",
    dimensions: "115 × 45 × 16 mm",
    connectivity: "USB-C",
    battery: "Not Required",
    type: "USB-C Hub",
    warranty: "12 Months"
  },
  colors: [
    "Space Gray",
    "Silver"
  ],
  sizes: [
    "One Size"
  ],
  stock: 60,
  rating: 4.8,
  reviews: 186,
  badge: "Portable",
  featured: true,
  newArrival: true,
  bestSeller: false
},

{
  id: 8,
  slug: "satechi-usb-c-docking-station",
  name: "SATECHI USB-C Docking Station",
  category: "Productivity",
  brand: "SATECHI",
  collection: "Workspace Essentials",
  tags: [
    "Dock",
    "USB-C",
    "Laptop",
    "Productivity",
    "Hub",
    "Workstation"
  ],
  price: 129,
  comparePrice: 149,
  image: "/images/products/productivity/USB-C Multi-1.JPG",
  images: [
    "/images/products/productivity/USB-C Multi-1.JPG",
  ],
  description:
    "Transform your laptop into a professional workstation with the SATECHI USB-C Docking Station. Featuring multiple display outputs, USB expansion, Gigabit Ethernet, SD card readers, and Power Delivery charging, it provides seamless connectivity for creative professionals and remote workers.",
  features: [
    "Dual display support",
    "USB-C Power Delivery",
    "Gigabit Ethernet",
    "SD & microSD card readers",
    "USB-A & USB-C expansion",
    "3.5mm audio jack",
    "Premium aluminum finish",
    "Plug-and-play setup",
    "Compact desktop design",
    "Fast data transfer"
  ],
  specifications: {
    material: "Aluminum",
    weight: "180 g",
    dimensions: "120 × 80 × 18 mm",
    connectivity: "USB-C",
    battery: "Not Required",
    type: "USB-C Docking Station",
    warranty: "24 Months"
  },
  colors: [
    "Space Gray"
  ],
  sizes: [
    "One Size"
  ],
  stock: 35,
  rating: 4.9,
  reviews: 241,
  badge: "Professional",
  featured: true,
  newArrival: false,
  bestSeller: true
},

{
  id: 9,

  slug: "parker-im-premium-fountain-pen",

  name: "Parker IM Premium Fountain Pen",

  category: "Productivity",

  brand: "Parker",

  collection: "Executive Writing",

  tags: [
    "Fountain Pen",
    "Luxury Pen",
    "Office",
    "Writing",
    "Executive",
    "Business",
    "Parker",
    "Stationery",
    "Professional",
    "Gift"
  ],

  price: 69,

  comparePrice: 89,

  image: "/images/products/productivity/Parker IM-1.JPG",

  images: [
    "/images/products/productivity/Parker IM-1.JPG",
    "/images/products/productivity/Parker IM-2.JPG",
    "/images/products/productivity/Parker IM-3.JPG",
    "/images/products/productivity/Parker IM-4.JPG",
    "/images/products/productivity/Parker IM-5.JPG",
    "/images/products/productivity/Parker IM-7.JPG",
  ],

  description:
    "The Parker IM Premium Fountain Pen combines timeless craftsmanship with modern elegance. Designed for professionals, executives, and writing enthusiasts, it features a precision stainless-steel nib, premium lacquer finish, and Parker's iconic arrow clip, delivering a consistently smooth and refined writing experience.",

  features: [
    "Premium stainless steel nib",
    "Luxury matte finish",
    "Iconic Parker arrow clip",
    "Smooth ink flow",
    "Refillable ink system",
    "Cartridge & converter compatible",
    "Balanced writing feel",
    "Gift-ready presentation box",
    "Professional appearance",
    "Precision engineering"
  ],

  specifications: {
    material: "Brass Barrel + Stainless Steel Nib + Lacquer Coating",
    weight: "30 g",
    dimensions: "138 mm Length",
    battery: "Not Required",
    type: "Fountain Pen",
    warranty: "24 Months"
  },

  colors: [
    "Matte Black",
    "Royal Blue",
    "Burgundy",
    "Brushed Silver",
    "Gold Trim"
  ],

  sizes: [
    "One Size"
  ],

  stock: 62,

  rating: 4.9,

  reviews: 1281,

  badge: "Premium",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 10,

  slug: "adjustable-architect-desk-lamp",

  name: "Adjustable Architect Desk Lamp",

  category: "Productivity",

  brand: "Generic",

  collection: "Workspace Essentials",

  tags: [
    "Desk Lamp",
    "Office",
    "Study",
    "Reading",
    "Workspace",
    "LED",
    "Lighting",
    "Architect Lamp",
    "Home Office",
    "Minimalist"
  ],

  price: 39,

  comparePrice: 55,

  image: "/images/products/productivity/Architect Desk-3.JPG",

  images: [
    "/images/products/productivity/Architect Desk-1.JPG",
    "/images/products/productivity/Architect Desk-2.JPG",
    "/images/products/productivity/Architect Desk-5.JPG",
    "/images/products/productivity/Architect Desk-4.JPG"
  ],

  description:
    "Illuminate your workspace with this adjustable architect desk lamp. Featuring a durable spring-balanced arm, fully adjustable lamp head, and stable weighted base, it provides focused lighting for reading, studying, drafting, crafting, and professional office work.",

  features: [
    "Adjustable spring-balanced arm",
    "360° rotating lamp head",
    "Stable weighted base",
    "LED bulb compatible",
    "Industrial minimalist design",
    "Durable steel construction",
    "Flexible positioning",
    "Ideal for office and study",
    "Energy-efficient lighting",
    "Easy assembly"
  ],

  specifications: {
    material: "Steel + Aluminum",
    weight: "1.8 kg",
    dimensions: "Up to 70 cm Height",
    connectivity: "AC Power Cable",
    battery: "Not Required",
    type: "Desk Lamp",
    warranty: "12 Months"
  },

  colors: [
    "Black",
    "White",
    "Silver",
    "Red"
  ],

  sizes: [
    "Standard"
  ],

  stock: 55,

  rating: 4.8,

  reviews: 694,

  badge: "Trending",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 33,

  slug: "mini-wireless-lightning-lavalier-microphone",

  name: "Mini Wireless Lightning Lavalier Microphone",

  category: "Productivity",

  brand: "Generic",

  collection: "Mobile Creator",

  tags: [
    "Wireless Microphone",
    "Lightning",
    "iPhone",
    "Creator",
    "Vlogging",
    "Podcast",
    "Recording",
    "TikTok",
    "YouTube",
    "Interview"
  ],

  price: 24,

  comparePrice: 39,

  image: "/images/products/productivity/Lavalier Microphone-1.JPG",

  images: [
    "/images/products/productivity/Lavalier Microphone-1.JPG"
  ],

  description:
    "Designed specifically for iPhone users, this ultra-compact wireless lavalier microphone provides exceptional voice clarity for vlogs, interviews, livestreams, podcasts, and social media content. Its lightweight clip-on design, intelligent noise cancellation, and plug-and-play operation make professional recording effortless wherever you go.",

  features: [
    "Apple Lightning receiver",
    "Plug-and-play operation",
    "AI noise reduction",
    "Ultra-low latency",
    "Rechargeable transmitter",
    "Long wireless range",
    "LED charging indicator",
    "Portable clip-on design",
    "Crystal-clear voice pickup",
    "Ideal for iPhone creators"
  ],

  specifications: {
    material: "ABS Plastic",
    weight: "20 g",
    dimensions: "58 × 20 × 10 mm",
    connectivity: "Apple Lightning",
    battery: "Rechargeable Lithium Battery",
    usageTime: "Up to 8 Hours",
    type: "Wireless Lavalier Microphone",
    warranty: "6 Months"
  },

  colors: [
    "Black",
    "White"
  ],

  sizes: [
    "Single Mic",
    "Dual Mic"
  ],

  stock: 124,

  rating: 4.8,

  reviews: 913,

  badge: "Trending",

  featured: true,

  newArrival: true,

  bestSeller: true
},

];
