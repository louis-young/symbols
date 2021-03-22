import { Logo } from "../Logo";
import { Search } from "../Search";
import type { HeaderProps } from "./types";

export const Header = ({ searchQuery, onSearchQueryChange }: HeaderProps) => {
  return (
    <header className="flex gap-4 md:gap-12 flex-col md:flex-row items-start md:items-center justify-start p-6 md:p-8">
      <Logo />
      <Search searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />
    </header>
  );
};
