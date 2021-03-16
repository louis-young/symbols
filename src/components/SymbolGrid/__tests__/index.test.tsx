import { render, screen } from "@testing-library/react";
import { SymbolGrid } from "..";

const defaultSymbolGridProps = {
  symbols: [{ name: "__NAME__", symbol: "__SYMBOL__" }],
};

describe("SymbolGrid", () => {
  it("renders a symbol in the symbol grid", () => {
    render(<SymbolGrid {...defaultSymbolGridProps} />);

    const symbolText = screen.getByText("__NAME__");

    expect(symbolText).toBeInTheDocument();
  });
});
