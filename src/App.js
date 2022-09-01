import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/molecules/SearchResults/SearchResults";
import Home from "./components/pages/Home";


function App() {
  return (
    <Routes>
    <Route element={<Home />} path="/" exact />
    <Route element={<SearchResults />} path="search" exact />
    </Routes>
  
  );
}

export default App;
