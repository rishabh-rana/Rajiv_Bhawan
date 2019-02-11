import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Administration from "./components/admin";
import Gallery from "./components/gallery";
import Facilities from "./components/facilities";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Administration} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/facilities" exact component={Facilities} />
          <Route path="/" component={Footer} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
