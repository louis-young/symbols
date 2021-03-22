import { SymbolCategories } from "../../types/symbolCategories";
import type { CategoriesProps } from "./types";
import { Category } from "../Category/Category";

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
    <ul className="md:w-36 lg:w-52">
      {categories.map(({ name, category }) => (
        <Category
          key={category}
          name={name}
          category={category}
          isActive={isActiveCategory(category)}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </ul>
  );
};
