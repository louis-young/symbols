import type { SymbolCategories } from "../../types/symbolCategories";

export interface SidebarProps {
  category: SymbolCategories;
  onCategoryChange: (newCategory: SymbolCategories) => void;
}
