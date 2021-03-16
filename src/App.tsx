import { useState } from "react";
import { Header } from "./components/Header";
import { SymbolGrid } from "./components/SymbolGrid";
import { useSymbols } from "./hooks/useSymbols";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { symbols } = useSymbols(searchQuery);

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />

      <SymbolGrid symbols={symbols} />
    </>
  );
};
