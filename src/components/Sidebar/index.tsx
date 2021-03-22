import { Categories } from "../Categories";
import { Copyright } from "../Copyright";
import type { SidebarProps } from "./types";

export const Sidebar = ({ category, onCategoryChange }: SidebarProps) => {
  return (
    <aside className="sticky top-0">
      <Categories category={category} onCategoryChange={onCategoryChange} />

      <Copyright />
    </aside>
  );
};
