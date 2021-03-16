import symbols from "../../data/symbols.json";
import type { SymbolCategories } from "../../types/symbolCategories";

export const getMatchingSymbols = (searchQuery: string, category: SymbolCategories) => {
  const matchingSymbols = symbols.filter(({ name, symbol, categories }) => {
    const searchQueryMatchesName = name.toLowerCase().includes(searchQuery.toLowerCase());

    const searchQueryMatchesSymbol = symbol.includes(searchQuery);

    const symbolMatchesCategory = categories.includes(category);

    return symbolMatchesCategory && (searchQueryMatchesName || searchQueryMatchesSymbol);
  });

  return matchingSymbols;
};
