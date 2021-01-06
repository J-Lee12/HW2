import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

ReactDOM.render(<Header />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Note />, document.getElementById("note")); 



