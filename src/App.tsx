import { useState } from "react";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { SymbolGrid } from "./components/SymbolGrid";
import { useSymbols } from "./hooks/useSymbols";
import { SymbolCategories } from "./types/symbolCategories";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [category, setCategory] = useState<SymbolCategories>(SymbolCategories.Popular);

  const symbols = useSymbols(searchQuery, category);

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const onCategoryChange = (newCategory: SymbolCategories) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />

      <SymbolGrid symbols={symbols} />

      <Categories category={category} onCategoryChange={onCategoryChange} />
    </>
  );
};
