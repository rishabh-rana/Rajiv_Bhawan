import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Administration from "./components/admin";
import Gallery from "./components/gallery";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Administration} />
          <Route path="/gallery" exact component={Gallery} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
