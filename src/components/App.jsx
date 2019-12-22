import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../redux/reducers";
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import PageEmployeesList from "./PageEmployeesList";
import PageEmployeeCreate from "./PageEmployeeCreate";

const store = createStore(rootReducer, {}, applyMiddleware(reduxLogger,reduxThunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <PageEmployeesList/>
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate/>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;