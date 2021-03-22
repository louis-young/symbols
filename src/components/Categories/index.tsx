import { SymbolCategories } from "../../types/symbolCategories";
import { Category } from "../Category/Category";
import { isActiveCategory } from "./utilities";
import type { CategoriesProps } from "./types";

const categories = [
  { name: "Popular", category: SymbolCategories.Popular },
  { name: "Symbols", category: SymbolCategories.Symbols },
  { name: "Punctuation", category: SymbolCategories.Punctuation },
  { name: "Arrows", category: SymbolCategories.Arrows },
  { name: "Currency", category: SymbolCategories.Currency },
  { name: "Math", category: SymbolCategories.Math },
];

export const Categories = ({ selectedCategory, onSelectedCategoryChange }: CategoriesProps) => {
  return (
    <ul className="flex flex-col gap-1 md:w-36 lg:w-52">
      {categories.map(({ name, category }) => (
        <Category
          key={category}
          name={name}
          category={category}
          isActive={isActiveCategory(selectedCategory, category)}
          onCategoryChange={onSelectedCategoryChange}
        />
      ))}
    </ul>
  );
};
