import type { SymbolCategories } from "../../types/symbolCategories";

export interface LogoProps {
  onSearchQueryChange: (newSearchQuery: string) => void;
  onSelectedCategoryChange: (newSelectedCategory: SymbolCategories) => void;
}
