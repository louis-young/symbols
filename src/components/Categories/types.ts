import type { SymbolCategories } from "../../types/symbolCategories";

export interface CategoriesProps {
  category: SymbolCategories;
  onCategoryChange: (newCategory: SymbolCategories) => void;
}
