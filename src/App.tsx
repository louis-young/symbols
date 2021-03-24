import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Symbols } from "./components/Symbols";
import { Footer } from "./components/Footer/Footer";
import { useSymbols } from "./hooks/useSymbols";
import { useDarkMode } from "./hooks/useDarkMode";
import { SymbolCategories } from "./types/symbolCategories";
import classNames from "classnames";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<SymbolCategories>(SymbolCategories.Popular);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const symbols = useSymbols(searchQuery, selectedCategory);

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  const onSelectedCategoryChange = (newSelectedCategory: SymbolCategories) => {
    setSelectedCategory(newSelectedCategory);
  };

  const applicationClasses = classNames({ dark: darkMode });

  return (
    <div className={applicationClasses} data-testid="application-wrapper">
      <section className="flex flex-col bg-gray-50 dark:bg-gray-800 min-h-screen md:pl-6 transition-all">
        <Header
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
          onSelectedCategoryChange={onSelectedCategoryChange}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="flex flex-col-reverse md:flex-row md:gap-12 items-start mb-auto">
          <Sidebar selectedCategory={selectedCategory} onSelectedCategoryChange={onSelectedCategoryChange} />

          <Symbols symbols={symbols} />
        </main>

        <Footer />
      </section>
    </div>
  );
};
