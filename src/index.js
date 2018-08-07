import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PersonalPage from "./components/PersonalPage";
import News from "./components/News";
import LoginForm from "./components/Login";
import Friends from "./components/Friends";
import FriendsRecommend from "./components/Friends/FriendsRecommend";

import reducer from "./reducers";

import 'antd/dist/antd.css';
import UpdateProfile from "./components/PersonalPage/Update";


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/update" component={UpdateProfile} />
        <Route path="/news" component={News} />
        <Route path="/friends" component={FriendsRecommend} />
        <Route path="/:id" component={PersonalPage} />
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
