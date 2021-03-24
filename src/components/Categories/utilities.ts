import type { SymbolCategories } from "../../types/symbolCategories";

export const isActiveCategory = (
  selectedCategory: SymbolCategories,
  category: SymbolCategories
) => {
  return selectedCategory === category;
};
