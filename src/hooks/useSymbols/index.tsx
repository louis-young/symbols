import { useEffect, useState } from "react";
import { getMatchingSymbols } from "./utilities";
import type { Symbol } from "../../types/symbol";
import type { SymbolCategories } from "../../types/symbolCategories";
import initialSymbols from "../../data/symbols.json";

export const useSymbols = (searchQuery: string, category: SymbolCategories) => {
  const [symbols, setSymbols] = useState<Symbol[]>(initialSymbols);

  useEffect(() => {
    const matchingSymbols = getMatchingSymbols(searchQuery, category) ?? initialSymbols;

    setSymbols(matchingSymbols);
  }, [searchQuery, category]);

  return symbols;
};
