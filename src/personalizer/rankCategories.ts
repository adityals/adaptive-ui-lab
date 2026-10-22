import { CATEGORIES, type Category } from "../types";

// How far behind the best category another one may score and still be shown.
//
// Why a margin and not "take the top one": a sentence can mix interests. "Fried chicken
// while I watch tech news" scored food 0.258, tech 0.206, home 0.121. Taking only the top
// throws away tech, which is clearly part of the sentence.
//
// Why a margin and not a fixed cutoff (e.g. score > 0.2): the absolute level moves with
// sentence length and wording, so a cutoff that works for one sentence shows nothing or
// everything for another. The gap from the best score is stable: a real second interest
// lands close behind the top, an unrelated category falls well behind it.
//
// Why 0.07: in the example tech is 0.052 behind food (kept) and home is 0.137 behind (dropped).
// 0.07 sits between those gaps.
// shortcut: tuned on one sentence only, retune once there are more sample preferences.
export const SCORE_MARGIN = 0.07;

// Returns every category within SCORE_MARGIN of the best score, best first. The best one
// always passes, so the result is never empty. `scores` must follow CATEGORIES order.
export function rankCategories(scores: number[]): Category[] {
  const top = Math.max(...scores);
  return CATEGORIES.map((category, i) => ({ category, score: scores[i] ?? -Infinity }))
    .filter(({ score }) => score >= top - SCORE_MARGIN)
    .sort((a, b) => b.score - a.score)
    .map(({ category }) => category);
}
