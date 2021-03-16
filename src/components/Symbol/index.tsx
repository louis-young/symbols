import { useState } from "react";
import { RECENTLY_COPIED_DURATION } from "./constants";
import type { SymbolProps } from "./types";

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
