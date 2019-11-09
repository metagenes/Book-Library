import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Detail from "./Pages/Detail";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const EnhancedApp = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/detail/:index" component={Detail} />
    </Router>
  );
};

ReactDOM.render(<EnhancedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
