import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MainDash from "./components/dashboard/MainDash";

// Redux

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <MainDash />
    </Provider>
  );
}

export default App;
