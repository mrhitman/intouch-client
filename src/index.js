import 'antd/dist/antd.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import Chat from "./components/Chat";
import Channel from "./components/Chat/Channel";
import FriendsRecommend from "./components/Friends/FriendsRecommend";
import LoginForm from "./components/Login";
import News from "./components/News";
import PersonalPage from "./components/PersonalPage";
import UpdateProfile from "./components/PersonalPage/Update";
import RegistrationForm from './components/Registration';
import reducer from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/update" component={UpdateProfile} />
        <Route path="/news" component={News} />
        <Route path="/friends" component={FriendsRecommend} />
        <Route path="/registrate" component={RegistrationForm} />
        <Route exact path="/messages" component={Chat} />
        <Route path="/messages/:id" component={Channel} />
        <Route path="/:id" component={PersonalPage} />
        <Route exact path="/" component={LoginForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
