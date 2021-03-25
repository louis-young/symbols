import classNames from "classnames";
import type { CategoryProps } from "./types";

export const Category = ({
  name,
  category,
  icon,
  isActive,
  onCategoryChange,
}: CategoryProps) => {
  const categoryClasses = classNames({
    "flex items-center justify-start w-full text-left px-8 py-4 text-gray-600 dark:text-white font-semibold leading-none rounded-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-all": true,
    "text-blue-700 dark:text-white bg-blue-50 dark:bg-gray-700": isActive,
  });

  return (
    <li>
      <button
        onClick={() => onCategoryChange(category)}
        className={categoryClasses}
        aria-current={isActive}
      >
        <span className="w-4 block mr-3">{icon}</span>
        {name}
      </button>
    </li>
  );
};
