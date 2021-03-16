import { render, screen } from "@testing-library/react";
import { Symbol } from "..";

const defaultSymbolProps = {
  name: "__NAME__",
  symbol: "__SYMBOL__",
};

describe("Symbol", () => {
  it("renders a symbol", () => {
    render(<Symbol {...defaultSymbolProps} />);

    const symbolText = screen.getByText("__NAME__");

    expect(symbolText).toBeInTheDocument();
  });
});
