import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { HomeIndex } from "../pages/home";
import { AdminLogin } from "../pages/adminLogin";


export default function RouterIndex() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/adminlogin" component={AdminLogin} />
    </Switch>
  );
}
