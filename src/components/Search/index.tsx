import type { ChangeEvent } from "react";
import type { SearchProps } from "./types";

export const Search = ({ searchQuery, onSearchQueryChange }: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newSearchQuery } = event.target;

    onSearchQueryChange(newSearchQuery);
  };
  return (
    <form>
      <input type="text" name="search" placeholder="Search" required value={searchQuery} onChange={handleChange} />
    </form>
  );
};
