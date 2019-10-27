import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Situation from "./Situation";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/situation" component={Situation} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
