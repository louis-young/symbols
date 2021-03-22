import { Logo } from "../Logo";
import { Search } from "../Search";
import type { HeaderProps } from "./types";

export const Header = ({ searchQuery, onSearchQueryChange }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-8">
      <Logo />
      <Search searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />
    </header>
  );
};
