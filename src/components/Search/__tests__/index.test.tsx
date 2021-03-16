import { render, screen } from "@testing-library/react";
import { Search } from "..";

describe("Search", () => {
  it("renders the search bar", () => {
    render(<Search />);
  });
});
