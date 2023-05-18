import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const searchContextValue = {
    searchValue,
    updateSearchValue,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};
