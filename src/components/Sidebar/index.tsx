import { Categories } from "../Categories";
import type { SidebarProps } from "./types";

export const Sidebar = ({ category, onCategoryChange }: SidebarProps) => {
  return (
    <aside className="sticky top-0 hidden md:block">
      <Categories category={category} onCategoryChange={onCategoryChange} />
    </aside>
  );
};
