import type { SymbolCategories } from "../../types/symbolCategories";

export interface HeaderProps {
  searchQuery: string;
  onSearchQueryChange: (newSearchQuery: string) => void;
  onSelectedCategoryChange: (newSelectedCategory: SymbolCategories) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
