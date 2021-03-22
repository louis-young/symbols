import { SymbolCategories } from "../../types/symbolCategories";
import type { CategoriesProps } from "./types";
import classNames from "classnames";

const categories = [
  { name: "Popular", category: SymbolCategories.Popular },
  { name: "Symbols", category: SymbolCategories.Symbols },
  { name: "Punctuation", category: SymbolCategories.Punctuation },
  { name: "Arrows", category: SymbolCategories.Arrows },
  { name: "Currency", category: SymbolCategories.Currency },
  { name: "Math", category: SymbolCategories.Math },
];

export const Categories = ({ category, onCategoryChange }: CategoriesProps) => {
  const isActiveCategory = (selectedCategory: SymbolCategories) => {
    return selectedCategory === category;
  };

  return (
    <ul className="w-52">
      {categories.map(({ name, category }) => {
        const categoryClasses = classNames({
          "block w-full text-left px-8 py-4 text-gray-600 font-semibold transition-colors": true,
          "text-purple-600": isActiveCategory(category),
        });

        return (
          <li key={category}>
            <button onClick={() => onCategoryChange(category)} className={categoryClasses}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
