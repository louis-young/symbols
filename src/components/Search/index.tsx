import type { ChangeEvent } from "react";
import type { SearchProps } from "./types";

export const Search = ({ searchQuery, onSearchQueryChange }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newSearchQuery } = event.target;

    onSearchQueryChange(newSearchQuery);
  };

  const handleClearSearchQueryClick = () => {
    onSearchQueryChange("");
  };

  return (
    <form className="w-full md:w-96 max-w-3xl mr-auto relative">
      <input
        type="text"
        name="search"
        aria-label="Search Symbols"
        placeholder="Symbol"
        required
        autoFocus
        value={searchQuery}
        onChange={handleChange}
        className="p-3 w-full shadow-sm rounded-sm placeholder-gray-400 dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
      />

      {searchQuery && (
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 text-sm font-bold w-8 h-8 rounded-full bg-blue-50 transition hover:bg-blue-100 dark:bg-gray-500 dark:hover:bg-gray-400"
          aria-label="Clear Search"
          onClick={handleClearSearchQueryClick}
        >
          ❌
        </button>
      )}
    </form>
  );
};
