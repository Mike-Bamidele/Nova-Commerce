export type Product = {
  id: number;

  slug: string;

  name: string;

  category: "Fashion" | "Tech" | "Productivity" | "Wellness";

  brand?: string;

  collection?: string;

  tags?: string[];

  price: number;

  comparePrice?: number;

  image: string;

  images?: string[];

  description?: string;

  features?: string[];

  specifications?: {
    material?: string;
    weight?: string;
    dimensions?: string;
    connectivity?: string;
    battery?: string;
    usageTime?: string;
    type?: string;
    caseweight?: string;
    strapLength?: string;
    standby?: string;
    playbackTime?: string;
    TotalBatteryTime?: string;
    sizes?: string;
    warranty?: string;
    fit?: string;
    closure?: string;
    soleMaterial?: string;
    waterResistance?: string;
  caseSize?: string;
  movement?: string;
  display?: string;
  chargingTime?: string;
  noiseCancellation?: string;
  storage?: string;
  transferSpeed?: string;
  interface?: string;
  compatibility?: string;
  capacity?: string;
  power?: string;
  coverageArea?: string;
  mistOutput?: string;
  timer?: string;
  thickness?: string;
  density?: string;
  gripType?: string;
  waterproof?: string;
    
  };

  colors?: string[];

  sizes?: string[];

  stock?: number;

  rating: number;

  reviews: number;

  badge?: string;

  featured?: boolean;

  newArrival?: boolean;

  bestSeller?: boolean;
};