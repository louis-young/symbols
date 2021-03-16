import symbolsDatabase from "../../data/symbols.json";

export const getMatchingSymbols = (searchQuery: string) => {
  const matchingSymbols = symbolsDatabase.filter((symbol) =>
    symbol.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return matchingSymbols;
};
