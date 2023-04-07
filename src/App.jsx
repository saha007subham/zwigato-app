import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Body from "./components/pages/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
