import { useEffect, useState } from "react";
import { getSymbolsByCategory, getSymbolsBySearchQuery } from "./utilities";
import type { Symbol } from "../../types/symbol";
import type { SymbolCategories } from "../../types/symbolCategories";
import initialSymbols from "../../data/database.json";

export const useSymbols = (searchQuery: string, category: SymbolCategories) => {
  const [symbols, setSymbols] = useState<Symbol[]>(initialSymbols);

  useEffect(() => {
    if (!searchQuery) {
      const symbolsByCategory = getSymbolsByCategory(category);

      setSymbols(symbolsByCategory);

      return;
    }

    const symbolsBySearchQuery = getSymbolsBySearchQuery(searchQuery) ?? initialSymbols;

    setSymbols(symbolsBySearchQuery);
  }, [searchQuery, category]);

  return symbols;
};
