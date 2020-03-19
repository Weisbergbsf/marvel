import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route>
            <DefaultLayout />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
