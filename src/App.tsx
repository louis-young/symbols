import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { SymbolGrid } from "./components/SymbolGrid";
import { Footer } from "./components/Footer/Footer";
import { useSymbols } from "./hooks/useSymbols";
import { SymbolCategories } from "./types/symbolCategories";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<SymbolCategories>(SymbolCategories.Popular);

  const symbols = useSymbols(searchQuery, selectedCategory);

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const onSelectedCategoryChange = (newSelectedCategory: SymbolCategories) => {
    setSelectedCategory(newSelectedCategory);
  };

  return (
    <section className="bg-gray-50 min-h-screen md:pl-6">
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />

      <main className="flex flex-col-reverse md:flex-row md:gap-12 items-start">
        <Sidebar selectedCategory={selectedCategory} onSelectedCategoryChange={onSelectedCategoryChange} />

        <SymbolGrid symbols={symbols} />
      </main>

      <Footer />
    </section>
  );
};
