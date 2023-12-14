import React from "react";
import ReactDOM from "react-dom";
import {legacy_createStore as createStore} from 'redux'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { reducer } from "./reducers";
const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
