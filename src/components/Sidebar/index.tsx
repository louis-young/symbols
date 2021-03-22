import { Categories } from "../Categories";
import { Copyright } from "../Copyright";
import type { SidebarProps } from "./types";

export const Sidebar = ({ selectedCategory, onSelectedCategoryChange }: SidebarProps) => {
  return (
    <aside className="sticky top-6 pl-6 md:pl-0">
      <Categories selectedCategory={selectedCategory} onSelectedCategoryChange={onSelectedCategoryChange} />

      <Copyright />
    </aside>
  );
};
