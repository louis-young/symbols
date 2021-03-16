import { useState } from "react";
import { Symbol as SymbolProps } from "../../types/symbol";
import { RECENTLY_COPIED_DURATION } from "./constants";

export const Symbol = ({ name, symbol }: SymbolProps) => {
  const [hasRecentlyBeenCopied, setHasRecentlyBeenCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(symbol);

    setHasRecentlyBeenCopied(true);

    const timeout = setTimeout(() => {
      setHasRecentlyBeenCopied(false);
    }, RECENTLY_COPIED_DURATION);

    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <li>
      <button onClick={handleCopyClick}>{symbol}</button>
      <p>{name}</p>
      {hasRecentlyBeenCopied && <p>Copied</p>}
    </li>
  );
};
