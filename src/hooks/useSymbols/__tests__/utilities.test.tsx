import { getSymbolsBySearchQuery } from "../utilities";

describe("useSymbols/utilities", () => {
  describe("getSymbolsBySearchQuery", () => {
    it("returns the copyright symbol when it is in the search query", () => {
      const searchQuery = "©";

      const result = getSymbolsBySearchQuery(searchQuery);

      const symbol = { name: "Copyright", symbol: "©", categories: ["symbols", "popular"] };

      expect(result).toContainEqual(symbol);
    });

    it("does not return the copyright symbol when it is not in the search query", () => {
      const searchQuery = "ℹ";

      const result = getSymbolsBySearchQuery(searchQuery);

      const symbol = { name: "Copyright", symbol: "©", categories: ["symbols", "popular"] };

      expect(result).not.toContainEqual(symbol);
    });
  });
});
