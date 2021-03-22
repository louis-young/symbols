import classNames from "classnames";
import type { CategoryProps } from "./types";

export const Category = ({ name, category, isActive, onCategoryChange }: CategoryProps) => {
  const categoryClasses = classNames({
    "block w-full text-left px-8 py-4 text-gray-600 font-semibold leading-none rounded-sm hover:bg-blue-50 transition-all": true,
    "text-blue-600 bg-blue-50": isActive,
  });

  return (
    <li>
      <button onClick={() => onCategoryChange(category)} className={categoryClasses}>
        {name}
      </button>
    </li>
  );
};
