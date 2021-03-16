import { Logo } from "../Logo";
import { Search } from "../Search";
import type { HeaderProps } from "./types";

export const Header = ({ searchQuery, onSearchQueryChange }: HeaderProps) => {
  return (
    <header>
      <Logo />
      <Search searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />
    </header>
  );
};
