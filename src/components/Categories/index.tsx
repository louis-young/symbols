import { SymbolCategories } from "../../types/symbolCategories";
import type { CategoriesProps } from "./types";

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
    <ul>
      <li>
        {categories.map(({ name, category }) => (
          <button onClick={() => onCategoryChange(category)}>
            {name} {isActiveCategory(category) && <>(Active)</>}
          </button>
        ))}
      </li>
    </ul>
  );
};
