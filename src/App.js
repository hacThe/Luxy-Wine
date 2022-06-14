import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import ConfirmAgeModal from "./views/component/ConfirmAgeModal/ConfirmAgeModal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ConfirmAgeModal />
        <Routers />
      </BrowserRouter>
    );
  }
}

export default App;
