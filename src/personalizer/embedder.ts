import {
  pipeline,
  type FeatureExtractionPipeline,
  type ProgressInfo,
} from "@huggingface/transformers";
import { CATEGORIES, type Category } from "../types";
import { rankCategories } from "./rankCategories";

let embedder: FeatureExtractionPipeline | null = null;

const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  tech: "technology, gadgets, electronics, computers, phones, gaming, headphones, music gear, coding",
  home: "home, furniture, decor, bedding, kitchenware, living room, garden",
  food: "food, groceries, snacks, cooking, recipes, coffee, drinks",
};

export async function initEmbedder(progressCallback?: (info: ProgressInfo) => void) {
  if (embedder) {
    return embedder;
  }

  embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
    device: "webgpu",
    progress_callback: progressCallback,
  });
  return embedder;
}

// How close the preference is in meaning to each category, in CATEGORIES order.
//
// MiniLM turns a sentence into a 384-number vector. Sentences with similar meaning point
// in similar directions, so the angle between two vectors measures how related they are.
// We describe each category as a word list instead of a single word ("food") because one
// word gives a thin, noisy vector; the list pulls it toward the whole topic, so "fried
// chicken" can match food without the word "food" appearing anywhere.
//
// Steps:
// 1. Embed the preference and the 3 descriptions in one batch (one model call, not four).
// 2. `pooling: "mean"` averages the per-token vectors into one vector per sentence.
// 3. `normalize: true` scales every vector to length 1.
// 4. For length-1 vectors, cos(angle) = a·b, so a plain dot product is the cosine
//    similarity: about 1 means same meaning, about 0 means unrelated.
//
// The raw scores sit close together (e.g. 0.12 to 0.26), because every description is
// a vaguely "shopping" sentence. Only their order and the gaps between them are useful,
// which is why rankCategories judges by distance from the top score, not by a fixed cutoff.
async function scoreCategories(preference: string): Promise<number[]> {
  const embed = await initEmbedder();
  const output = await embed([preference, ...CATEGORIES.map((c) => CATEGORY_DESCRIPTIONS[c])], {
    pooling: "mean",
    normalize: true,
  });
  const [query = [], ...categoryVectors] = output.tolist() as number[][];
  return categoryVectors.map((v) => v.reduce((sum, x, i) => sum + x * (query[i] ?? 0), 0));
}

export async function pickCategories(preference: string): Promise<Category[]> {
  return rankCategories(await scoreCategories(preference));
}
