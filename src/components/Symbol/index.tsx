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
    <li className="bg-white shadow-sm rounded-sm relative">
      {hasRecentlyBeenCopied && (
        <p className="absolute top-0 right-0 bg-green-400 opacity-80 text-white text-center text-sm p-2 rounded-sm">
          Copied
        </p>
      )}

      <button onClick={handleCopyClick} className="block p-6 h-full w-full flex flex-col items-center">
        <p className="block text-4xl">{symbol}</p>

        <p className="block text-sm mt-auto">{name}</p>
      </button>
    </li>
  );
};
