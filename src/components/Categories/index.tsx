import { SymbolCategories } from "../../types/symbolCategories";
import { Category } from "../Category/Category";
import { isActiveCategory } from "./utilities";
import type { CategoriesProps } from "./types";
import { popular, symbols, punctuation, arrows, currency, math } from "../../assets/icons";

const categories = [
  { name: "Popular", icon: popular, category: SymbolCategories.Popular },
  { name: "Symbols", icon: symbols, category: SymbolCategories.Symbols },
  { name: "Punctuation", icon: punctuation, category: SymbolCategories.Punctuation },
  { name: "Arrows", icon: arrows, category: SymbolCategories.Arrows },
  { name: "Currency", icon: currency, category: SymbolCategories.Currency },
  { name: "Math", icon: math, category: SymbolCategories.Math },
];

export const Categories = ({ selectedCategory, onSelectedCategoryChange }: CategoriesProps) => {
  return (
    <ul className="flex flex-col gap-1 md:w-48 lg:w-52">
      {categories.map(({ name, category, icon }) => (
        <Category
          key={category}
          name={name}
          category={category}
          icon={icon}
          isActive={isActiveCategory(selectedCategory, category)}
          onCategoryChange={onSelectedCategoryChange}
        />
      ))}
    </ul>
  );
};
