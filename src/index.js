import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";

const App = () => {
  return <div className="app">Hello Raeact, Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
