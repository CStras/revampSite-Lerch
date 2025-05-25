import { useState } from "react";
import Header from "../Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";

function App() {
  const [pageType, setPageType] = useState("List");

  return (
    <>
      <Header></Header>
      <SearchPage pageType={pageType} setPageType={setPageType}></SearchPage>
    </>
  );
}

export default App;
