import React from "react";
import ReactDOM from "react-dom";
import Navv from "./Nav";
import Mainn from "./Main";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navv />
      <Mainn />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
