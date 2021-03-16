import { render, screen } from "@testing-library/react";
import { Search } from "..";

const defaultSearchProps = {
  searchQuery: "",
  onSearchQueryChange: jest.fn(),
};

describe("Search", () => {
  it("renders the search input", () => {
    render(<Search {...defaultSearchProps} />);

    const searchInput = screen.getByPlaceholderText("Search");

    expect(searchInput).toBeInTheDocument();
  });
});
