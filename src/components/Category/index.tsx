import classNames from "classnames";
import type { CategoryProps } from "./types";

export const Category = ({ name, category, icon, isActive, onCategoryChange }: CategoryProps) => {
  const categoryClasses = classNames({
    "flex items-center justify-start w-full text-left px-8 py-4 text-gray-600 font-semibold leading-none rounded-sm hover:bg-blue-50 transition-all": true,
    "text-blue-700 bg-blue-50": isActive,
  });

  return (
    <li>
      <button onClick={() => onCategoryChange(category)} className={categoryClasses}>
        <span className="w-4 block mr-3">{icon}</span>
        {name}
      </button>
    </li>
  );
};
