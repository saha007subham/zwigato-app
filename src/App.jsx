import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Body from "../src/pages/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
