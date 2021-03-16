import { Symbol } from "../Symbol";
import type { SymbolGridProps } from "./types";

export const SymbolGrid = ({ symbols }: SymbolGridProps) => {
  return (
    <ul>
      {symbols.map(({ name, symbol }) => (
        <Symbol name={name} symbol={symbol} key={name} />
      ))}
    </ul>
  );
};
