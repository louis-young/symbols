import { Symbol } from "../Symbol";
import type { SymbolsProps } from "./types";

export const Symbols = ({ symbols }: SymbolsProps) => {
  if (!symbols.length) {
    return (
      <h2 className="text-gray-600 dark:text-white pt-0 p-6 md:p-0">
        No symbols matched your search query. Please try a different word.
      </h2>
    );
  }

  return (
    <ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 p-6 pt-0 md:pl-0 md:pr-12 md:pb-12 lg:pr-12 lg:pb-12">
      {symbols.map(({ name, symbol }) => (
        <Symbol name={name} symbol={symbol} key={name} />
      ))}
    </ul>
  );
};
