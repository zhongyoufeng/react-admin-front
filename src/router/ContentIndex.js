import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../pages/index";
import Feedback from "../pages/feedback/feedback";

export default function ContentIndex() {
  return (
    <Switch>
      <Route path="/home" exact render={() => <Redirect to="/home/index" />} />
      <Route path="/home/index" component={Index} />
      <Route path="/home/feedback" component={Feedback} />
    </Switch>
  );
}
