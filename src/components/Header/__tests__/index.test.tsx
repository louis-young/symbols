import ReactDOM from "react-dom";
import { Header } from "..";

const defaultHeaderProps = {
  searchQuery: "",
  onSearchQueryChange: jest.fn(),
};

describe("Header", () => {
  it("renders the header", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Header {...defaultHeaderProps} />, div);
  });
});
