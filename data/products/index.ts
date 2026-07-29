import { techProducts } from "./tech";
import { fashionProducts } from "./fashion";
import { wellnessProducts } from "./wellness";
import { productivityProducts } from "./productivity";

export * from "./types";

export const products = [
  ...techProducts,
  ...fashionProducts,
  ...wellnessProducts,
  ...productivityProducts,
];