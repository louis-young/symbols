import { Symbol } from "../Symbol";
import type { SymbolGridProps } from "./types";

export const SymbolGrid = ({ symbols }: SymbolGridProps) => {
  return (
    <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 pr-12 pb-12">
      {symbols.map(({ name, symbol }) => (
        <Symbol name={name} symbol={symbol} key={name} />
      ))}
    </ul>
  );
};
