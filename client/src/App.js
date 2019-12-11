import React from "react";
import "./App.css";
import Article from "./components/pages/Article";
import SiteHeader from "./components/common/header/header";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Article />
    </div>
  );
}

export default App;
