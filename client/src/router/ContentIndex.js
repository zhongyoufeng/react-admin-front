import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../pages/index";
import AdminIndex from "../pages/adminIndex";
import Feedback from "../pages/feedback/feedback";
import AdminUserInfoIndex from "../pages/adminUserInfo";


export default function ContentIndex() {
  return (
    <Switch>
      <Route path="/home" exact render={() => <Redirect to="/home/index" />} />
      <Route path="/home/index" component={Index} />
      <Route path="/home/feedback" component={Feedback} />
      <Route path="/adminhome" exact render={() => <Redirect to="/admin/index" />}  />
      <Route path="/adminhome/index" component={AdminIndex} />
      <Route path="/adminhome/userinfo" component={AdminUserInfoIndex} />


    </Switch>
  );
}
