import type { SymbolCategories } from "../../types/symbolCategories";

export interface CategoryProps {
  name: string;
  category: SymbolCategories;
  isActive: boolean;
  onCategoryChange: (newCategory: SymbolCategories) => void;
}
