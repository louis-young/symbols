import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SymbolGrid } from "./components/SymbolGrid";
import { getMatchingSymbols } from "./utilities/getMatchingSymbols";
import type { Symbol } from "./types/symbol";
import symbolsDatabase from "./data/symbols.json";

const initialSymbols = symbolsDatabase;

export const App = () => {
  const [symbols, setSymbols] = useState<Symbol[]>(initialSymbols);
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  useEffect(() => {
    const matchingSymbols = getMatchingSymbols(searchQuery) ?? initialSymbols;

    setSymbols(matchingSymbols);
  }, [searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />

      <SymbolGrid symbols={symbols} />
    </>
  );
};
