import logo from "../../assets/logo/symbols.png";
import { SymbolCategories } from "../../types/symbolCategories";
import type { LogoProps } from "./types";

export const Logo = ({ onSelectedCategoryChange }: LogoProps) => {
  return (
    <button className="w-48 lg:w-52 p-4" onClick={() => onSelectedCategoryChange(SymbolCategories.Popular)}>
      <h1 className="text-2xl text-gray-600 font-semibold flex items-center justify-start">
        <img className="w-6 block mr-3" src={logo} alt="Symbols" />
        Symbols
      </h1>
    </button>
  );
};
