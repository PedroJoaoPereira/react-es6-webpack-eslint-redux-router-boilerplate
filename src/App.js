import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import store from "Redux/store";

import NotFound from "Components/NotFound";
import Home from "Components/Home";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
