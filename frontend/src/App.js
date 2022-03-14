import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Signup from "./components/signUp";
import Info from "./components/info/info";

const App = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Signup />} />
          <Route exact path="/info" render={() => <Info />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
