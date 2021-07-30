import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./layout/App";
import { StateProvider } from "./store/StateProvider";

export const history = createBrowserHistory();

render(
  <Router history={history}>
    <StateProvider>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
