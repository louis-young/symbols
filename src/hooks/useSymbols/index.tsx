import { useEffect, useState } from "react";
import { getMatchingSymbols } from "./utilities";
import type { Symbol } from "../../types/symbol";
import initialSymbols from "../../data/symbols.json";

export const useSymbols = (searchQuery: string) => {
  const [symbols, setSymbols] = useState<Symbol[]>(initialSymbols);

  useEffect(() => {
    const matchingSymbols = getMatchingSymbols(searchQuery) ?? initialSymbols;

    setSymbols(matchingSymbols);
  }, [searchQuery]);

  return symbols;
};
