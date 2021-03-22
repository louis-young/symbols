import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SymbolGrid } from "./components/SymbolGrid";
import { Footer } from "./components/Footer/Footer";
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
    <section className="bg-gray-50 min-h-screen">
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />

      <main className="flex flex-col-reverse md:flex-row md:gap-12 items-start">
        <Sidebar category={category} onCategoryChange={onCategoryChange} />

        <SymbolGrid symbols={symbols} />
      </main>

      <Footer />
    </section>
  );
};
