import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import RouterIndex from "./router";
import "moment/locale/zh-cn";
import moment from "moment";
import {post,get} from "./ajax/index";
window.$post=post;
window.$get=get;
moment.locale("zh-cn");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <RouterIndex />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
