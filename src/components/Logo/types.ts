import type { SymbolCategories } from "../../types/symbolCategories";

export interface LogoProps {
  onSelectedCategoryChange: (newSelectedCategory: SymbolCategories) => void;
}
