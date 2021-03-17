import symbols from "../../data/symbols.json";
import type { SymbolCategories } from "../../types/symbolCategories";

export const getSymbolsByCategory = (category: SymbolCategories) => {
  const symbolsByCategory = symbols.filter(({ categories }) => categories.includes(category));

  return symbolsByCategory;
};

export const getSymbolsBySearchQuery = (searchQuery: string) => {
  const symbolsBySearchQuery = symbols.filter(({ name, symbol }) => {
    const searchQueryMatchesName = name.toLowerCase().includes(searchQuery.toLowerCase());

    const searchQueryMatchesSymbol = symbol.includes(searchQuery);

    return searchQueryMatchesName || searchQueryMatchesSymbol;
  });

  return symbolsBySearchQuery;
};
