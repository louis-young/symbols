import symbols from "../../data/symbols.json";

export const getMatchingSymbols = (searchQuery: string) => {
  const matchingSymbols = symbols.filter(({ name, symbol }) => {
    const searchQueryMatchesName = name.toLowerCase().includes(searchQuery.toLowerCase());

    const searchQueryMatchesSymbol = symbol.includes(searchQuery);

    return searchQueryMatchesName || searchQueryMatchesSymbol;
  });

  return matchingSymbols;
};
