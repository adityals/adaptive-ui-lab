import type { Block } from "../types";

export const blocks: Block[] = [
  { id: 1, tags: ["tech", "home", "food"], component: "title", content: "Picked for you" },
  { id: 2, tags: ["tech"], component: "banner", content: "20% off all headphones this week" },
  { id: 3, tags: ["home"], component: "banner", content: "Free delivery on furniture" },
  { id: 4, tags: ["food"], component: "banner", content: "Fresh groceries in 1 hour" },
  { id: 5, tags: ["tech"], component: "product", content: { name: "Wireless Mouse", price: 19 } },
  {
    id: 6,
    tags: ["tech", "home"],
    component: "product",
    content: { name: "Smart Lamp", price: 35 },
  },
  { id: 7, tags: ["home"], component: "product", content: { name: "Linen Pillow", price: 24 } },
  { id: 8, tags: ["food"], component: "product", content: { name: "Arabica Coffee", price: 12 } },
  {
    id: 9,
    tags: ["tech"],
    component: "product",
    content: { name: "Noise-Cancelling Headphones", price: 89 },
  },
  { id: 10, tags: ["home"], component: "product", content: { name: "Ceramic Planter", price: 18 } },
  {
    id: 11,
    tags: ["food"],
    component: "product",
    content: { name: "Ceremonial Matcha", price: 15 },
  },
];
