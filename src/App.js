import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/molecules/SearchResults/SearchResults";
import Home from "./components/pages/Home";
import CocktailsContext from "./store";

function App() {
  function setContextValue(drinks) {
    setCocktails(drinks);
    setCocktails({drinks, set: setContextValue})
  }

  const [cocktails, setCocktails] = useState({
    drinks: [],
    set: setContextValue
  });

  return (
    <CocktailsContext.Provider value={cocktails}>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<SearchResults />} path="search" exact />
      </Routes>
    </CocktailsContext.Provider>
  );
}

export default App;
