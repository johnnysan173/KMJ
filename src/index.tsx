import React from "react";
import ReactDOM from "react-dom";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
      <LabelBottomNavigation />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
