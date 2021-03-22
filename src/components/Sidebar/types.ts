import type { SymbolCategories } from "../../types/symbolCategories";

export interface SidebarProps {
  selectedCategory: SymbolCategories;
  onSelectedCategoryChange: (newSelectedCategory: SymbolCategories) => void;
}
