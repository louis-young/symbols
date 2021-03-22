import type { ChangeEvent } from "react";
import type { SearchProps } from "./types";

export const Search = ({ searchQuery, onSearchQueryChange }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newSearchQuery } = event.target;

    onSearchQueryChange(newSearchQuery);
  };
  return (
    <form className="w-full max-w-3xl mr-auto">
      <input
        type="text"
        name="search"
        placeholder="Search"
        required
        autoFocus
        value={searchQuery}
        onChange={handleChange}
        className="p-3 w-full shadow-sm rounded-sm placeholder-gray-500"
      />
    </form>
  );
};
