import { render, screen } from "@testing-library/react";
import { Logo } from "..";

describe("Logo", () => {
  it("renders the logo", () => {
    render(<Logo />);

    const logoText = screen.getByText("Symbols");

    expect(logoText).toBeInTheDocument();
  });
});
