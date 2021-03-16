import { useState } from "react";
import { Header } from "./components/Header";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchQueryChange = (newSearchQuery: string) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <Header searchQuery={searchQuery} onSearchQueryChange={onSearchQueryChange} />
    </>
  );
};
