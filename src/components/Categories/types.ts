import type { SymbolCategories } from "../../types/symbolCategories";

export interface CategoriesProps {
  selectedCategory: SymbolCategories;
  onSelectedCategoryChange: (newSelectedCategory: SymbolCategories) => void;
}
