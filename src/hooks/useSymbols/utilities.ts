import database from "../../data/database.json";
import type { Symbol } from "../../types/symbol";
import type { SymbolCategories } from "../../types/symbolCategories";

const symbols: Symbol[] = database;

export const getSymbolsByCategory = (category: SymbolCategories) => {
  const symbolsByCategory = symbols.filter(({ categories }) => categories.includes(category));

  return symbolsByCategory;
};

export const getSymbolsBySearchQuery = (searchQuery: string) => {
  const symbolsBySearchQuery = symbols.filter(({ name, symbol, tags }) => {
    const searchQueryMatchesName = name.toLowerCase().includes(searchQuery.toLowerCase());

    const searchQueryMatchesSymbol = symbol.includes(searchQuery);

    const searchQueryMatchesTag = tags && tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return searchQueryMatchesName || searchQueryMatchesSymbol || searchQueryMatchesTag;
  });

  return symbolsBySearchQuery;
};
