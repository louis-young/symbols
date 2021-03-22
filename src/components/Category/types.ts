import type { ReactNode } from "react";
import type { SymbolCategories } from "../../types/symbolCategories";

export interface CategoryProps {
  name: string;
  category: SymbolCategories;
  isActive: boolean;
  icon: ReactNode;
  onCategoryChange: (newCategory: SymbolCategories) => void;
}
