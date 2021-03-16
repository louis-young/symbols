import { Symbol as SymbolProps } from "../../types/symbol";

export const Symbol = ({ name, symbol }: SymbolProps) => {
  return (
    <div>
      <p>{name}</p>
      {symbol}
    </div>
  );
};
