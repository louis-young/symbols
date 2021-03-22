import classNames from "classnames";
import type { CategoryProps } from "./types";

export const Category = ({ name, category, isActive, onCategoryChange }: CategoryProps) => {
  const categoryClasses = classNames({
    "block w-full text-left px-8 py-4 text-gray-600 font-semibold transition-colors leading-none": true,
    "text-purple-500": isActive,
  });

  return (
    <li>
      <button onClick={() => onCategoryChange(category)} className={categoryClasses}>
        {name}
      </button>
    </li>
  );
};
