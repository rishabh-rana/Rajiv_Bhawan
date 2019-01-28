import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
      </BrowserRouter>
    );
  }
}

export default App;
