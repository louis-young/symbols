import classNames from "classnames";
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

  const recentlyCopiedClasses = classNames({
    "absolute top-1 right-1 bg-green-400 text-white text-center text-sm p-2 rounded-sm transition duration-300 opacity-0 bg-opacity-80": true,
    "opacity-100 z-20": hasRecentlyBeenCopied,
  });

  return (
    <li className="bg-white dark:bg-gray-700 shadow-sm rounded-sm relative transition">
      <p className={recentlyCopiedClasses}>Copied</p>

      <button
        onClick={handleCopyClick}
        className="p-6 h-full w-full flex flex-col items-center relative z-10 transition text-black dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
      >
        <p className="block text-5xl mb-4 text-black dark:text-white">
          {symbol}
        </p>

        <p className="block text-sm mt-auto text-current">{name}</p>
      </button>
    </li>
  );
};
