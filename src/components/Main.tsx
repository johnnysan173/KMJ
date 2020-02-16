import React from "react";
import { Switch, Route } from "react-router-dom";

import Hiroba from "./Hiroba";
import Plan from "./Plan";
import Shuchu from "./Shuchu";

const Main = () => (
  <Switch>
    <Route exact path="/"  component={Hiroba} />
    <Route exact path="/Plan"  component={Plan} />
    <Route exact path="/Hiroba" component={Hiroba} />
    <Route exact path="/Shuchu"  component={Shuchu} />
  </Switch>
);

export default Main;