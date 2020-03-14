import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/main";
import Repository from "./pages/repository";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:name" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
