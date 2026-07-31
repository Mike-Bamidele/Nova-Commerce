import { Product } from "./types";

export const techProducts: Product[] = [
  {
  id: 11,
  name: "Smart Fitness Watch",
  slug: "premium-smart-watch",
  category: "Tech",
  price: 80.99,
  brand: "NovaTech",
  collection: "Wearable Tech",
  tags: ["Smartwatch", "Fitness Tracker", "Health Monitor", "Wearable Tech", "Bluetooth", "Water Resistant", "Touchscreen", "Heart Rate Monitor", "Sleep Tracking", "Notifications", "Long Battery Life"],

  image: "/images/products/tech/ceramic-watch-01.JPG",

  images: [
    "/images/products/tech/ceramic-watch-04.JPG",
    "/images/products/tech/ceramic-watch-02.JPG",
    "/images/products/tech/ceramic-watch-03.JPG",
    "/images/products/tech/smart-watch-01.JPG",
    "/images/products/tech/ceramic-watch-05.JPG",
    "/images/products/tech/ceramic-watch-06.JPG",
  ],

  
  description:
    "Stay connected and track your health with the Smart Fitness Watch. Featuring a vibrant touchscreen display, real-time fitness tracking, heart rate monitoring, sleep analysis, notifications, and long battery life, it's the perfect everyday wearable.",
features: [
  "Sleep tracking",
  "HD full-touch display",
  "Touchscreen interface",
  "Heart rate monitoring",
  "Weather updates",
  "Advanced heart rate and sleep monitoring",
  "IP67 water resistance",
  "Multiple sports modes",
  "Call & message notifications",
  "Water resistant for workouts and everyday wear",
  "Fast magnetic wireless charging",
  "Music control"
],
specifications: {
  material: "Ceramic & Aluminum + Silicone Strap",
  type: "Android & iOS compatible",
  weight: "46g",
  dimensions: "1.8 × 1.5 × 0.45 in",
  connectivity: "Bluetooth 5.0",
  battery: "5-7 Days",
  strapLength: "Adjustable 5.5 - 9.5 in",
  standby: "15 days",
  warranty: "12 Months",
},
colors: [
  "Black",
  "Silver",
  "Rose Gold",
  "Midnight Blue",
],
stock: 18,
  rating: 4.9,
  reviews: 324,
  badge: "Trending",
  featured: true,
},  

{
  id: 12,
  name: "16-Inch 3K OLED Portable Monitor (120Hz)",
  slug: "16-inch-3k-oled-portable-monitor",
  category: "Tech",
  brand: "UPERFECT",
  collection: "Workstation Essentials",
  tags  : ["monitor", "OLED Display", "gaming", "3K Resolution", "USB-C", "HDMI", "Travel-Friendly", "Professional Use", "Gaming Monitor", "Color Accuracy"],
  price: 499.99,

  image: "/images/products/tech/monitor-01.JPG",

  images: [
    "/images/products/tech/monitor-02.JPG",
    "/images/products/tech/monitor-03.JPG",
    "/images/products/tech/monitor-04.JPG",
    "/images/products/tech/monitor-05.JPG",
    "/images/products/tech/monitor-06.JPG",

  ],

  description:
    "Experience exceptional visual performance wherever you work or play. Featuring a stunning 16-inch 3K OLED display, ultra-fast 120Hz refresh rate, and vibrant color accuracy, this portable monitor is ideal for creators, professionals, gamers, and travelers seeking premium performance in a slim, portable design.",

  features: [
    "16-inch OLED display",
    "3K (2880 × 1800) resolution",
    "120% DCI-P3 color gamut",
    "Adjustable kickstand",
    "Compatible with laptops, smartphones, tablets, gaming consoles, and PCs",
    "Display Size: 16 inches",
    "Panel Type: OLED",
    "Response Time: 0.1ms",
    "Contrast Ratio: 500,000:1",
    "Built-in speakers"

  ],

  specifications: {
    material: "Aluminum Alloy + Tempered Glass",
    weight: "1.1 kg (2.43 lbs)",
    dimensions: "114.1 × 9.2 × 0.4 in (358 × 234 × 10 mm)",
    connectivity: "USB-C, HDMI, 3.5 mm Audio Jack,USB OTG",
    battery: "No Internal Battery (USB-C Powered)",
    sizes: "16 inches",
    warranty: "24 Months Limited Warranty",
  },

  colors: [
    "Space Gray",
    "Black",
  ],

  stock: 25,

  rating: 4.9,
  reviews: 190,
  badge: "Editor's Choice",
  featured: true,
},

  {
  id: 13,
  name: "True Wireless Bluetooth Earbuds",
  slug: "true-wireless-bluetooth-earbuds",
  category: "Tech",
  collection: "Audio Essentials",
  tags: ["wireless", "earbuds", "Bluetooth 5.3", "noise reduction", "touch controls", "voice assistant", "USB-C fast charging", "compact charging case", "automatic pairing", "built-in microphones", "sweat-resistant design"],
  price: 59.99,
  brand: "SonicCore",

  image: "/images/products/tech/wireless-buds-01.JPG",

  images: [
    "/images/products/tech/wireless-bud-01.JPG",
    "/images/products/tech/wireless-buds-02.JPG",
    "/images/products/tech/wireless-buds-03.JPG",
    "/images/products/tech/wireless-buds-04.JPG",
    "/images/products/tech/wireless-buds-05.JPG",
    "/images/products/tech/wireless-buds-06.JPG",
    "/images/products/tech/wireless-buds-07.JPG",
    "/images/products/tech/wireless-buds-08.JPG",
    "/images/products/tech/wireless-buds-09.JPG",
    "/images/products/tech/wireless-buds-10.JPG",
  
  ],

  description:
    "Experience immersive wireless audio with the True Wireless Bluetooth Earbuds. Designed for music lovers and professionals alike, they deliver crystal-clear sound, deep bass, environmental noise reduction, and all-day battery life inside a sleek charging case.",

  features: [
    "Deep bass audio",
    "Stereo audio",
    "Environmental noise reduction",
    "Touch controls",
    "Voice assistant support",
    "USB-C fast charging",
    "Compact charging case",
    "Automatic pairing",
    "Built-in microphones",
    "Sweat-resistant design",
  ],

  specifications: { 
    material: "ABS Plastic + Silicone Ear Tips",
    weight: "4.5 g each",
    caseweight: "42 g",
    dimensions: "2.5 × 2.0 × 1.1 in)",
    connectivity: "Bluetooth 5.3",
    battery: "400mAh",
    playbackTime: "Up to 8 Hours",
    TotalBatteryTime: "Up to 32 Hours",
    warranty: "12 Months",
  },

  colors: [
    "Matte Black",
    "White",
    "Navy Blue",
  ],

  stock: 25,

  rating: 4.9,
  reviews: 821,
  badge: "Customer Favorite",
  featured: true,
},

{
  id: 14,

  slug: "android-tablet-keyboard-stylus",

  name: "Android Tablet with Keyboard & Stylus",

  category: "Tech",

  brand: "Generic",

  collection: "Smart Productivity",

  tags: [
    "Tablet",
    "Android",
    "Stylus",
    "Keyboard",
    "Productivity",
    "Office",
    "Student",
    "Entertainment",
    "Portable",
    "Touchscreen"
  ],

  price: 329,

  comparePrice: 399,

  image: "/images/products/tech/Android-Tablet-2.JPG",

  images: [
    "/images/products/tech/Android-Tablet-2.JPG",
  
  ],

  description:
    "Experience productivity and entertainment in one sleek device. This premium Android tablet features a stunning 12-inch Full HD display and comes complete with a wireless keyboard, precision stylus, and wireless mouse for a seamless desktop-like workflow. Perfect for work, note-taking, online learning, streaming, and creative projects.",

  features: [
    "12-inch Full HD IPS display",
    "Wireless Bluetooth keyboard included",
    "Precision active stylus",
    "Wireless mouse included",
    "Slim aluminum body",
    "Split-screen multitasking",
    "Face Unlock",
    "Expandable storage up to 1TB",
    "Fast USB-C charging",
    "Long-lasting battery"
  ],

  specifications: {
    material: "Aluminum Alloy + Tempered Glass",
    weight: "610 g",
    dimensions: "280 × 175 × 7.5 mm",
    connectivity: "Wi-Fi 6, Bluetooth 5.2, USB-C, GPS, OTG",
    battery: "10,000mAh",
    usageTime: "Up to 12 Hours",
    type: "Android Tablet",
    warranty: "12 Months"
  },

  colors: [
    "Space Gray",
    "Silver",
    "Sky Blue"
  ],

  sizes: [
    '12"'
  ],

  stock: 38,

  rating: 4.9,

  reviews: 312,

  badge: "Featured",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 15,

  slug: "razer-wireless-gaming-mouse-white",

  name: "Razer Wireless Gaming Mouse",

  category: "Tech",

  brand: "Razer",

  collection: "Gaming Essentials",

  tags: [
    "Gaming Mouse",
    "Wireless",
    "Razer",
    "Esports",
    "RGB",
    "Gaming",
    "Bluetooth",
    "USB-C",
    "PC",
    "Laptop"
  ],

  price: 149,

  comparePrice: 179,

  image: "/images/products/tech/Gaming-Mouse-01.JPG",

  images: [
    "/images/products/tech/Gaming-Mouse-02.JPG",
    "/images/products/tech/Gaming-Mouse-03.JPG",
    "/images/products/tech/Gaming-Mouse-04.JPG",
    "/images/products/tech/Gaming-Mouse-05.JPG",
    "/images/products/tech/Gaming-Mouse-06.JPG",
    "/images/products/tech/Gaming-Mouse-07.JPG"
  ],

  description:
    "Dominate every game with the Razer Wireless Gaming Mouse. Engineered for esports professionals, it combines an ultra-lightweight body, lightning-fast optical switches, and precision tracking with exceptional battery life for competitive performance.",

  features: [
    "Ultra-lightweight 63g design",
    "Optical gaming switches",
    "30,000 DPI optical sensor",
    "RGB lighting indicator",
    "6 programmable buttons",
    "Wireless & wired modes",
    "Ergonomic right-hand design",
    "USB-C fast charging",
    "Low-latency gaming performance",
    "Long battery life"
  ],

  specifications: {
    material: "ABS Plastic",
    weight: "63 g",
    dimensions: "127 × 64 × 40 mm",
    connectivity: "Bluetooth, 2.4GHz Wireless, USB-C",
    battery: "Rechargeable Lithium Battery",
    usageTime: "Up to 90 Hours",
    type: "Wireless Gaming Mouse",
    warranty: "2 Years"
  },

  colors: [
    "White",
    "Black"
  ],

  sizes: [
    "One Size"
  ],

  stock: 72,

  rating: 4.9,

  reviews: 894,

  badge: "Best Seller",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 16,

  slug: "lbsc-8-in-1-usb-c-multiport-hub",

  name: "8-in-1 USB-C Multiport Hub",

  category: "Tech",

  brand: "LBSC",

  collection: "Workspace Accessories",

  tags: [
    "USB-C Hub",
    "Dock",
    "Laptop",
    "MacBook",
    "USB",
    "Power Delivery",
    "Productivity",
    "Accessories",
    "Aluminum",
    "Data Transfer"
  ],

  price: 45,

  comparePrice: 59,

  image: "/images/products/tech/Multi-Port-Hub-1.JPG",

  images: [
    "/images/products/tech/Multi-Port-Hub-2.JPG",
    "/images/products/tech/Multi-Port-Hub-3.JPG",
    "/images/products/tech/Multi-Port-Hub-4.JPG",
    "/images/products/tech/Multi-Port-Hub-5.JPG",
    "/images/products/tech/Multi-Port-Hub-6.JPG",
  ],

  description:
    "Expand your laptop's connectivity with this premium 8-in-1 USB-C hub. Crafted from CNC-machined aluminum, it delivers high-speed data transfer, USB-C Power Delivery, and multiple USB ports in an ultra-slim portable design.",

  features: [
    "8-in-1 multifunction hub",
    "Plug-and-play setup",
    "USB 3.0 high-speed ports",
    "100W USB-C Power Delivery",
    "USB-C data port",
    "Slim aluminum body",
    "LED status indicator",
    "Portable travel design",
    "Fast data transfer",
    "Compatible with multiple devices"
  ],

  specifications: {
    material: "CNC Aluminum Alloy",
    weight: "95 g",
    dimensions: "135 × 28 × 10 mm",
    connectivity: "USB-C",
    battery: "Not Required",
    type: "USB-C Multiport Hub",
    warranty: "12 Months"
  },

  colors: [
    "Space Gray",
    "Silver"
  ],

  sizes: [
    "8-Port"
  ],

  stock: 110,

  rating: 4.8,

  reviews: 436,

  badge: "Popular",

  featured: true,

  newArrival: true,

  bestSeller: false
},

{
  id: 17,

  slug: "usb-3-1-nvme-ssd-enclosure",

  name: "USB 3.1 to PCIe NVMe SSD Enclosure",

  category: "Tech",

  brand: "Generic",

  collection: "Storage Solutions",

  tags: [
    "NVMe",
    "SSD Enclosure",
    "USB-C",
    "Portable Storage",
    "10Gbps",
    "External SSD",
    "Backup",
    "Storage Expansion"
  ],

  price: 35,

  comparePrice: 49,

  image: "/images/products/tech/NVMe SSD-1.JPG",

  images: [
    "/images/products/tech/NVMe SSD-1.JPG",
    "/images/products/tech/NVMe SSD-2.JPG",
  ],

  description:
    "Turn your M.2 PCIe NVMe SSD into a high-speed portable external drive with this premium USB 3.1 Gen 2 enclosure. Featuring tool-free installation, aluminum heat dissipation, and UASP acceleration, it delivers ultra-fast file transfers, backups, and storage expansion for professionals and everyday users.",

  features: [
    "Supports M.2 PCIe NVMe SSDs",
    "USB 3.1 Gen 2 up to 10Gbps",
    "Tool-free installation",
    "CNC aluminum heat dissipation",
    "LED activity indicator",
    "Plug-and-play operation",
    "UASP acceleration support",
    "Backward compatible with USB 3.0",
    "Compact portable design",
    "Wide operating system compatibility"
  ],

  specifications: {
    material: "CNC Aluminum Alloy",
    weight: "82 g",
    dimensions: "118 × 38 × 12 mm",
    connectivity: "USB-C, USB-A (included cable)",
    battery: "Not Required",
    type: "NVMe SSD Enclosure",
    warranty: "12 Months"
  },

  colors: ["Black", "Space Gray", "Silver"],

  sizes: ["2230", "2242", "2260", "2280"],

  stock: 95,

  rating: 4.8,

  reviews: 421,

  badge: "Popular",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 18,

  slug: "jbl-boombox-3-portable-bluetooth-speaker",

  name: "JBL Boombox 3 Portable Bluetooth Speaker",

  category: "Tech",

  brand: "JBL",

  collection: "Portable Audio",

  tags: [
    "Bluetooth Speaker",
    "JBL",
    "Portable Audio",
    "Waterproof",
    "Party Speaker",
    "Bass",
    "Outdoor",
    "IP67"
  ],

  price: 499,

  comparePrice: 549,

  image: "/images/products/tech/Boombox 3.JPG",

  images: [
    "/images/products/tech/Boombox 3.JPG",
    "/images/products/tech/Boombox 3.JPG"
  ],

  description:
    "Enjoy massive JBL Original Pro Sound with deep bass and crystal-clear audio. The Boombox 3 features IP67 waterproof and dustproof protection, Bluetooth 5.3, PartyBoost support, and up to 24 hours of playback, making it the ultimate speaker for outdoor adventures and parties.",

  features: [
    "JBL Original Pro Sound",
    "Deep bass performance",
    "Bluetooth 5.3 wireless streaming",
    "IP67 waterproof and dustproof",
    "PartyBoost stereo pairing",
    "Portable carrying handle",
    "USB power bank function",
    "24-hour battery life",
    "Rugged outdoor design",
    "High-power 3-way speaker system"
  ],

  specifications: {
    material: "Fabric Mesh + Rubber + ABS Plastic",
    weight: "6.7 kg",
    dimensions: "482 × 257 × 200 mm",
    connectivity: "Bluetooth 5.3, USB, AUX Input",
    battery: "Rechargeable Lithium-Ion Battery",
    usageTime: "Up to 24 Hours",
    type: "Portable Bluetooth Speaker",
    warranty: "12 Months"
  },

  colors: ["Black", "Squad (Camouflage)"],

  sizes: ["One Size"],

  stock: 24,

  rating: 4.9,

  reviews: 1287,

  badge: "Best Seller",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 19,

  slug: "jbl-partybox-portable-party-speaker",

  name: "JBL PartyBox Portable Party Speaker",

  category: "Tech",

  brand: "JBL",

  collection: "Party Audio",

  tags: [
    "Party Speaker",
    "JBL",
    "Bluetooth",
    "RGB",
    "Karaoke",
    "Guitar Input",
    "Portable",
    "Outdoor"
  ],

  price: 899,

  comparePrice: 999,

  image: "/images/products/tech/PartyBox Portable-1.JPG",

  images: [
    "/images/products/tech/PartyBox Portable-1.JPG",
  ],

  description:
    "Bring the party anywhere with the JBL PartyBox Portable Party Speaker. Featuring powerful JBL Pro Sound, synchronized RGB lighting effects, microphone and guitar inputs, built-in wheels, and a telescopic handle, it is designed for unforgettable events and performances.",

  features: [
    "JBL Pro Sound",
    "Dynamic RGB light show",
    "Bluetooth wireless streaming",
    "Microphone input",
    "Guitar input",
    "Telescopic carry handle",
    "Built-in transport wheels",
    "Splash-resistant design",
    "USB playback support",
    "Up to 18 hours battery life"
  ],

  specifications: {
    material: "ABS Plastic + Metal Grille",
    weight: "16.5 kg",
    dimensions: "430 × 700 × 385 mm",
    connectivity: "Bluetooth, USB, AUX, Microphone Input, Guitar Input",
    battery: "Rechargeable Lithium Battery",
    usageTime: "Up to 18 Hours",
    type: "Portable Party Speaker",
    warranty: "12 Months"
  },

  colors: ["Black"],

  sizes: ["One Size"],

  stock: 12,

  rating: 4.9,

  reviews: 742,

  badge: "Party Favorite",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 20,

  slug: "50000mah-fast-charging-power-bank",

  name: "50,000mAh Fast Charging Power Bank",

  category: "Tech",

  brand: "Generic",

  collection: "Power Essentials",

  tags: [
    "Power Bank",
    "Fast Charging",
    "Portable Charger",
    "USB-C",
    "Travel",
    "Battery",
    "Mobile",
    "Laptop",
    "Charging",
    "Accessories"
  ],

  price: 69,

  comparePrice: 89,

  image: "/images/products/tech/50,000mAh-1.JPG",

  images: [
    "/images/products/tech/50,000mAh-1.JPG"
  ],

  description:
    "Stay powered throughout the day with this high-capacity 50,000mAh portable power bank. Designed for smartphones, tablets, laptops, and USB-powered devices, it delivers fast charging, multiple output ports, and intelligent safety protection in a compact design ideal for travel, work, and everyday use.",

  features: [
    "50,000mAh ultra-high capacity",
    "22.5W fast charging",
    "USB-C Power Delivery",
    "Quick Charge USB-A output",
    "Charge multiple devices simultaneously",
    "Built-in charging cables",
    "Digital battery percentage display",
    "Smart protection against overcharging and overheating",
    "Travel-friendly design",
    "Universal device compatibility"
  ],

  specifications: {
    material: "Fireproof ABS + Polycarbonate",
    weight: "780 g",
    dimensions: "150 × 72 × 55 mm",
    connectivity: "USB-C, USB-A",
    battery: "50,000mAh Lithium Polymer",
    type: "Portable Power Bank",
    warranty: "12 Months"
  },

  colors: [
    "Black with Orange",
    "White with Orange"
  ],

  sizes: [
    "50,000mAh"
  ],

  stock: 75,

  rating: 4.8,

  reviews: 624,

  badge: "Best Seller",

  featured: true,

  newArrival: false,

  bestSeller: true
},

{
  id: 21,

  slug: "roypow-portable-power-station-300wh",

  name: "RoyPow Portable Power Station",

  category: "Tech",

  brand: "RoyPow",

  collection: "Power Essentials",

  tags: [
    "Portable Power Station",
    "Camping",
    "Emergency",
    "Outdoor",
    "Travel",
    "Backup Power",
    "USB-C",
    "AC Output",
    "Wireless Charging",
    "Generator"
  ],

  price: 249,

  comparePrice: 299,

  image: "/images/products/tech/RoyPow Portable-1.JPG",

  images: [
    "/images/products/tech/RoyPow Portable-1.JPG",
  ],

  description:
    "Reliable portable power for camping, road trips, outdoor adventures, and emergency backup. The RoyPow Portable Power Station combines multiple output options with a durable design, allowing you to safely power laptops, phones, cameras, small appliances, and other essential devices wherever you go.",

  features: [
    "300Wh battery capacity",
    "300W AC output",
    "100W USB-C Power Delivery",
    "15W wireless charging pad",
    "LCD battery display",
    "Multiple charging ports",
    "Safe battery management system",
    "Compact portable design",
    "Quiet operation",
    "Ideal for outdoor and emergency use"
  ],

  specifications: {
    material: "ABS Plastic + Aluminum Frame",
    weight: "3.8 kg",
    dimensions: "220 × 140 × 180 mm",
    connectivity: "AC Outlet, USB-C, USB-A, DC Output, Wireless Charging",
    battery: "300Wh Lithium-Ion Battery",
    type: "Portable Power Station",
    warranty: "24 Months"
  },

  colors: [
    "Black",
    "Black/Orange"
  ],

  sizes: [
    "300Wh"
  ],

  stock: 42,

  rating: 4.9,

  reviews: 318,

  badge: "Editor's Choice",

  featured: true,

  newArrival: true,

  bestSeller: false
},

{
  id: 22,

  slug: "magnetic-wireless-charger",

  name: "Magnetic Wireless Charger",

  category: "Tech",

  brand: "Generic",

  collection: "Charging Essentials",

  tags: [
    "Wireless Charger",
    "MagSafe",
    "Qi Charger",
    "USB-C",
    "Charging",
    "Desk",
    "Travel",
    "Minimal",
    "Fast Charging",
    "Accessories"
  ],

  price: 29,

  comparePrice: 39,

  image: "/images/products/tech/MagSafe-2.JPG",

  images: [
    "/images/products/tech/MagSafe-1.JPG",
   "/images/products/tech/MagSafe-3.JPG",
   "/images/products/tech/MagSafe-4.JPG",
   "/images/products/tech/MagSafe-5.JPG"
  ],

  description:
    "A sleek magnetic wireless charger engineered for MagSafe-compatible smartphones. Featuring precise magnetic alignment, fast wireless charging, and a slim minimalist profile, it's perfect for home, office, or travel while keeping your workspace clean and organized.",

  features: [
    "Strong magnetic alignment",
    "15W fast wireless charging",
    "Qi & MagSafe compatible",
    "Ultra-slim design",
    "USB-C powered",
    "LED charging indicator",
    "Foreign object detection",
    "Temperature protection",
    "Over-voltage protection",
    "Portable lightweight construction"
  ],

  specifications: {
    material: "Tempered Glass + Aluminum Alloy + ABS Plastic",
    weight: "78 g",
    dimensions: "95 × 65 × 8 mm",
    connectivity: "USB-C",
    battery: "Not Required",
    type: "Magnetic Wireless Charger",
    warranty: "12 Months"
  },

  colors: [
    "White",
    "Black"
  ],

  sizes: [
    "One Size"
  ],

  stock: 120,

  rating: 4.8,

  reviews: 547,

  badge: "Trending",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 23,

  slug: "apple-ipad-with-apple-pencil",

  name: "Apple iPad with Apple Pencil",

  category: "Tech",

  brand: "Apple",

  collection: "iPad",

  tags: [
    "Apple",
    "iPad",
    "Tablet",
    "Apple Pencil",
    "Productivity",
    "Creativity",
    "Education",
    "Entertainment",
    "Drawing",
    "Portable"
  ],

  price: 699,

  comparePrice: 749,

  image: "/images/products/tech/Apple-iPad-1.JPG",

  images: [
    "/images/products/tech/Apple-iPad-1.JPG"
  ],

  description:
    "Experience powerful performance and incredible versatility with Apple iPad. Designed for productivity, creativity, entertainment, and education, it works seamlessly with Apple Pencil for note-taking, sketching, digital illustration, and precision editing. Its premium aluminum design, immersive display, and intuitive iPadOS deliver an exceptional tablet experience. **Specifications may vary depending on the exact iPad model.**",

  features: [
    "Apple Pencil compatible",
    "High-resolution display",
    "Premium aluminum design",
    "Ultra-responsive touchscreen",
    "Wi-Fi connectivity",
    "USB-C charging",
    "Powerful multitasking",
    "Ideal for work and creativity",
    "Long battery life",
    "Secure biometric authentication"
  ],

  specifications: {
    material: "Aluminum + Glass",
    weight: "Varies by Model",
    dimensions: "Varies by Model",
    connectivity: "Wi-Fi, Bluetooth, USB-C",
    battery: "Rechargeable Lithium Battery",
    usageTime: "Up to 10 Hours",
    type: "Apple Tablet",
    warranty: "12 Months"
  },

  colors: [
    "Space Gray",
    "Silver",
    "Blue",
    "Purple",
    "Starlight"
  ],

  sizes: [
    "Varies by Model"
  ],

  stock: 35,

  rating: 4.9,

  reviews: 1852,

  badge: "Premium",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 24,

  slug: "samsung-galaxy-tab-with-s-pen",

  name: "Samsung Galaxy Tab with S Pen",

  category: "Tech",

  brand: "Samsung",

  collection: "Galaxy Tab",

  tags: [
    "Samsung",
    "Galaxy Tab",
    "Tablet",
    "S Pen",
    "Android",
    "Productivity",
    "Entertainment",
    "Drawing",
    "Education",
    "Portable"
  ],

  price: 549,

  comparePrice: 629,

  image: "/images/products/tech/Samsung-Galaxy-01.JPG",

  images: [
   "/images/products/tech/Samsung-Galaxy-01.JPG",
  ],

  description:
    "Boost your productivity and creativity with the Samsung Galaxy Tab featuring the included S Pen. Designed for note-taking, digital art, multitasking, entertainment, and everyday work, it combines a premium design with a vivid display and the flexibility of Android. **Hardware specifications vary depending on the exact Galaxy Tab model.**",

  features: [
    "Included S Pen",
    "Android operating system",
    "Large immersive display",
    "Multi-window productivity",
    "Samsung Notes support",
    "USB-C charging",
    "Expandable storage (model dependent)",
    "Premium metal construction",
    "Long battery life",
    "Ideal for study and work"
  ],

  specifications: {
    material: "Aluminum + Glass",
    weight: "Varies by Model",
    dimensions: "Varies by Model",
    connectivity: "Wi-Fi, Bluetooth, USB-C",
    battery: "Rechargeable Lithium Battery",
    usageTime: "Up to 12 Hours",
    type: "Android Tablet",
    warranty: "12 Months"
  },

  colors: [
    "Graphite",
    "Silver",
    "Beige"
  ],

  sizes: [
    "Varies by Model"
  ],

  stock: 48,

  rating: 4.8,

  reviews: 1241,

  badge: "Trending",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 25,

  slug: "3-in-1-magnetic-wireless-charging-station",

  name: "3-in-1 Magnetic Wireless Charging Station",

  category: "Tech",

  brand: "Generic",

  collection: "Charging Essentials",

  tags: [
    "Wireless Charger",
    "MagSafe",
    "Charging Station",
    "Apple Watch",
    "AirPods",
    "Qi Charger",
    "Fast Charging",
    "Desk Setup",
    "Minimalist",
    "USB-C"
  ],

  price: 49,

  comparePrice: 69,

  image: "/images/products/tech/Magnetic Wireless-1.JPG",

  images: [
    "/images/products/tech/Magnetic Wireless-1.JPG"
  ],

  description:
    "Simplify your charging setup with this premium 3-in-1 Magnetic Wireless Charging Station. Designed to charge your smartphone, smartwatch, and wireless earbuds simultaneously, it features strong magnetic alignment, fast wireless charging, and a sleek foldable design that complements any desk, bedside table, or workspace.",

  features: [
    "Charge three devices simultaneously",
    "Strong magnetic phone alignment",
    "Dedicated smartwatch charger",
    "Wireless earbuds charging pad",
    "Adjustable viewing angle",
    "LED charging indicator",
    "Temperature protection",
    "Over-voltage protection",
    "Foreign object detection",
    "Minimalist foldable design"
  ],

  specifications: {
    material: "ABS Plastic + Aluminum Alloy + Silicone",
    weight: "260 g",
    dimensions: "145 × 90 × 120 mm",
    connectivity: "USB-C Input, Qi Wireless Charging",
    battery: "No Built-in Battery",
    type: "3-in-1 Wireless Charging Station",
    warranty: "12 Months"
  },

  colors: [
    "White",
    "Black"
  ],

  sizes: [
    "One Size"
  ],

  stock: 90,

  rating: 4.8,

  reviews: 624,

  badge: "Best Seller",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 26,

  slug: "magnetic-keyboard-case-with-trackpad",

  name: "Magnetic Keyboard Case with Trackpad",

  category: "Productivity",

  brand: "Generic",

  collection: "Workspace Essentials",

  tags: [
    "Keyboard Case",
    "iPad Keyboard",
    "Trackpad",
    "Productivity",
    "Tablet",
    "Bluetooth",
    "Smart Connector",
    "Laptop Replacement",
    "Protective Case",
    "Backlit Keyboard"
  ],

  price: 129,

  comparePrice: 169,

  image: "/images/products/tech/Magic Keyboard-1.JPG",

  images: [
    "/images/products/tech/Magic Keyboard-1.JPG"
  ],

  description:
    "Transform your compatible iPad into a professional workstation with this premium floating magnetic keyboard case. Featuring a precision multi-touch trackpad, adjustable backlit keyboard, and protective magnetic case, it's ideal for professionals, students, and creators seeking laptop-like productivity.",

  features: [
    "Floating magnetic design",
    "Precision glass trackpad",
    "Multi-touch gesture support",
    "Adjustable backlit keyboard",
    "Laptop-style typing experience",
    "USB-C pass-through charging",
    "Magnetic attachment",
    "Protective case",
    "Premium aluminum construction",
    "Multiple viewing angles"
  ],

  specifications: {
    material: "Aluminum + Polycarbonate + PU Leather",
    weight: "650–720 g",
    dimensions: "Varies by iPad Model",
    connectivity: "Smart Connector / Bluetooth",
    battery: "Rechargeable (Bluetooth Models)",
    type: "Keyboard Case",
    warranty: "12 Months"
  },

  colors: [
    "Black",
    "White",
    "Gray"
  ],

  sizes: [
    "11-inch",
    "12.9-inch",
    "13-inch"
  ],

  stock: 60,

  rating: 4.9,

  reviews: 486,

  badge: "Editor's Choice",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 27,

  slug: "asus-zenbook-15-oled",

  name: "ASUS Zenbook 15 OLED",

  category: "Productivity",

  brand: "ASUS",

  collection: "Zenbook",

  tags: [
    "Laptop",
    "OLED",
    "Windows",
    "Creator",
    "Productivity",
    "Intel Core Ultra",
    "ASUS",
    "Ultrabook",
    "Professional",
    "Portable"
  ],

  price: 1299,

  comparePrice: 1499,

  image: "/images/products/tech/ASUS Zenbook-1.JPG",

  images: [
    "/images/products/tech/ASUS Zenbook-1.JPG"
  ],

  description:
    "Designed for professionals and creators, the ASUS Zenbook 15 OLED combines premium craftsmanship with exceptional performance. Its stunning OLED NanoEdge display, Intel Core Ultra processor, AI-powered features, and lightweight aluminum chassis deliver an immersive computing experience for work, creativity, and entertainment.",

  features: [
    "15.6-inch OLED NanoEdge display",
    "Intel Core Ultra processor",
    "AI acceleration",
    "Harman Kardon audio",
    "Fingerprint login",
    "Thunderbolt 4 connectivity",
    "Wi-Fi 6E",
    "Fast charging",
    "Lightweight aluminum body",
    "Windows 11"
  ],

  specifications: {
    material: "CNC Aluminum",
    weight: "1.5 kg",
    dimensions: "354 × 226 × 15 mm",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI, USB-A",
    battery: "75Wh",
    usageTime: "Up to 15 Hours",
    type: "OLED Laptop",
    warranty: "12 Months"
  },

  colors: [
    "Ponder Blue",
    "Basalt Gray"
  ],

  sizes: [
    "14-inch",
    "15-inch"
  ],

  stock: 28,

  rating: 4.9,

  reviews: 873,

  badge: "Premium",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 28,

  slug: "microsoft-surface-laptop",

  name: "Microsoft Surface Laptop",

  category: "Productivity",

  brand: "Microsoft",

  collection: "Surface",

  tags: [
    "Laptop",
    "Surface",
    "Windows 11",
    "Copilot AI",
    "Productivity",
    "Touchscreen",
    "Business",
    "Student",
    "Professional",
    "Portable"
  ],

  price: 1499,

  comparePrice: 1699,

  image: "/images/products/tech/Microsoft Surface-1.JPG",

  images: [
    "/images/products/tech/Microsoft Surface-1.JPG"
  ],

  description:
    "The Microsoft Surface Laptop combines elegant craftsmanship with exceptional performance, delivering a premium Windows experience for professionals, students, and creators. Featuring a vibrant PixelSense touchscreen, Copilot AI integration, long battery life, and an ultra-light aluminum chassis, it is designed to keep you productive wherever you work.",

  features: [
    "PixelSense touchscreen display",
    "Microsoft Copilot AI",
    "Windows Hello facial recognition",
    "Dolby Atmos speakers",
    "Backlit keyboard",
    "Precision touchpad",
    "Fast charging",
    "All-day battery life",
    "Premium aluminum construction",
    "Windows 11"
  ],

  specifications: {
    material: "Aluminum",
    weight: "1.34 kg",
    dimensions: "301 × 220 × 17.5 mm",
    connectivity: "Wi-Fi 7, Bluetooth 5.4, USB-C, USB-A",
    battery: "Up to 20 Hours",
    usageTime: "Up to 20 Hours",
    type: "Touchscreen Laptop",
    warranty: "12 Months"
  },

  colors: [
    "Platinum",
    "Black",
    "Sage",
    "Sandstone"
  ],

  sizes: [
    "13.8-inch",
    "15-inch"
  ],

  stock: 22,

  rating: 4.9,

  reviews: 1106,

  badge: "Premium",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 29,

  slug: "samsung-galaxy-s24-ultra",

  name: "Samsung Galaxy S24 Ultra",

  category: "Tech",

  brand: "Samsung",

  collection: "Galaxy S",

  tags: [
    "Samsung",
    "Galaxy AI",
    "Android",
    "Flagship",
    "Smartphone",
    "S Pen",
    "5G",
    "Camera Phone",
    "AMOLED",
    "Premium"
  ],

  price: 1299,

  comparePrice: 1499,

  image: "/images/products/tech/Samsung Galaxy-1.JPG",

  images: [
    "/images/products/tech/Samsung Galaxy-1.JPG",
  ],

  description:
    "The Samsung Galaxy S24 Ultra redefines flagship smartphones with Galaxy AI, a built-in S Pen, a stunning Dynamic AMOLED 2X display, and an advanced quad-camera system led by a 200MP sensor. Engineered with a durable titanium frame and powered by Snapdragon 8 Gen 3 for Galaxy, it delivers exceptional performance for productivity, photography, gaming, and creativity.",

  features: [
    "Galaxy AI",
    "Integrated S Pen",
    "200MP quad camera system",
    "Snapdragon 8 Gen 3 for Galaxy",
    "Titanium frame",
    "Dynamic AMOLED 2X display",
    "120Hz adaptive refresh rate",
    "IP68 water resistance",
    "Samsung DeX",
    "Fast wired & wireless charging"
  ],

  specifications: {
    material: "Titanium Frame + Gorilla Glass Armor",
    weight: "232 g",
    dimensions: "162.3 × 79 × 8.6 mm",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, NFC, USB-C",
    battery: "5,000mAh",
    usageTime: "Up to 30 Hours Video Playback",
    type: "Flagship Smartphone",
    warranty: "12 Months"
  },

  colors: [
    "Titanium Black",
    "Titanium Gray",
    "Titanium Violet",
    "Titanium Yellow",
    "Titanium Blue",
    "Titanium Green",
    "Titanium Orange"
  ],

  sizes: [
    "256GB",
    "512GB",
    "1TB"
  ],

  stock: 35,

  rating: 5.0,

  reviews: 3986,

  badge: "Flagship",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 30,

  slug: "samsung-galaxy-s24-ultra-titanium-white",

  name: "Samsung Galaxy S24 Ultra (Titanium White)",

  category: "Tech",

  brand: "Samsung",

  collection: "Galaxy S",

  tags: [
    "Samsung",
    "Galaxy AI",
    "Titanium White",
    "Android",
    "Premium",
    "5G",
    "S Pen",
    "Camera Phone",
    "AMOLED",
    "Flagship"
  ],

  price: 1299,

  comparePrice: 1499,

  image: "/images/products/tech/Samsung Galaxy S24-1.JPG",

  images: [
    "/images/products/tech/Samsung Galaxy S24-1.JPG"
  ],

  description:
    "Experience Samsung's most advanced smartphone in an elegant Titanium White finish. Featuring Galaxy AI, a built-in S Pen, professional-grade quad cameras, an ultra-bright 6.8-inch Dynamic AMOLED 2X display, and premium titanium construction, the Galaxy S24 Ultra delivers outstanding performance for work, entertainment, photography, and creativity.",

  features: [
    "Galaxy AI",
    "Built-in S Pen",
    "Titanium White finish",
    "200MP professional camera",
    "Snapdragon 8 Gen 3 for Galaxy",
    "Dynamic AMOLED 2X display",
    "Adaptive 120Hz refresh rate",
    "Samsung DeX support",
    "Wireless PowerShare",
    "IP68 water resistance"
  ],

  specifications: {
    material: "Titanium Frame + Gorilla Glass Armor",
    weight: "232 g",
    dimensions: "162.3 × 79 × 8.6 mm",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, NFC, USB-C",
    battery: "5,000mAh",
    usageTime: "Up to 30 Hours Video Playback",
    type: "Flagship Smartphone",
    warranty: "12 Months"
  },

  colors: [
    "Titanium White",
    "Titanium Black",
    "Titanium Gray",
    "Titanium Violet",
    "Titanium Yellow"
  ],

  sizes: [
    "256GB",
    "512GB",
    "1TB"
  ],

  stock: 18,

  rating: 5.0,

  reviews: 1847,

  badge: "Editor's Choice",

  featured: true,

  newArrival: true,

  bestSeller: true
},

{
  id: 31,

  slug: "baseus-magnetic-monitor-light-bar-pro",

  name: "Baseus Magnetic Monitor Light Bar Pro",

  category: "Tech",

  brand: "Baseus",

  collection: "Workspace Essentials",

  tags: [
    "Monitor Light",
    "Desk Setup",
    "LED",
    "Workspace",
    "Office",
    "Gaming",
    "USB-C",
    "Baseus",
    "Eye Care",
    "Lighting"
  ],

  price: 69,

  comparePrice: 89,

  image: "/images/products/tech/Monitor Light Bar-6.JPG",

  images: [
    "/images/products/tech/Monitor Light Bar-2.JPG",
    "/images/products/tech/Monitor Light Bar-1.JPG",
    "/images/products/tech/Monitor Light Bar-3.JPG",
    "/images/products/tech/Monitor Light Bar-5.JPG",
  ],

  description:
    "Upgrade your workspace with the Baseus Magnetic Monitor Light Bar Pro. Featuring asymmetric anti-glare illumination, adjustable brightness, and customizable color temperature, it delivers comfortable flicker-free lighting for work, gaming, studying, and creative projects while saving valuable desk space.",

  features: [
    "Asymmetric anti-glare illumination",
    "Wireless rotary controller",
    "Adjustable brightness",
    "Adjustable color temperature",
    "Memory function",
    "USB-C powered",
    "CRI ≥95 color accuracy",
    "Flicker-free lighting",
    "Easy monitor mounting",
    "Modern minimalist design"
  ],

  specifications: {
    material: "Aluminum Alloy + ABS Plastic",
    weight: "520 g",
    dimensions: "450 × 22 × 22 mm",
    connectivity: "USB-C, 2.4GHz Wireless Controller",
    battery: "CR Battery (Controller Only)",
    type: "Monitor Light Bar",
    warranty: "12 Months"
  },

  colors: [
    "Black",
    "Space Gray"
  ],

  sizes: [
    "45 cm"
  ],

  stock: 48,

  rating: 4.9,

  reviews: 842,

  badge: "Editor's Choice",

  featured: true,

  newArrival: true,

  bestSeller: true
},


];