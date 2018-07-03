import Chance from "chance";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PersonalPage from "./components/PersonalPage";
import News from "./components/News";
import "./styles/index.css";

const chance = new Chance();
const reducer = state => state;
const getName = () => chance.name().split(" ")[0];
const initialState = {
  profile: {
    name: chance.name(),
    quote: chance.sentence(),
    status: chance.bool(),
    info: {
      birthday: chance.birthday({ string: true, child: true }),
      town: chance.city(),
      relationship: null,
      company: null,
      languages: ["Русский", "English"]
    },
    messages: chance.natural({ min: 3, max: 10 }),
    comments: chance.natural({ min: 3, max: 10 })
  },
  followerCount: chance.natural({ min: 3, max: 10 }),
  followers: [
    { id: 1, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 2, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 3, name: getName(), photoMini: "photo-mini.jpg" }
  ],
  friendCount: chance.natural({ min: 8, max: 16 }),
  friends: [
    { id: 1, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 2, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 3, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 4, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 5, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 6, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 7, name: getName(), photoMini: "photo-mini.jpg" },
    { id: 8, name: getName(), photoMini: "photo-mini.jpg" }
  ],
  posts: [
    {
      id: chance.guid(),
      author: {
        name: chance.name(),
        photo: "photo-mini.jpg"
      },
      content: chance.paragraph()
    },
    {
      id: chance.guid(),
      author: {
        name: chance.name(),
        photo: "photo-mini.jpg"
      },
      content: chance.paragraph()
    }
  ]
};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/personal_page" component={PersonalPage} />
        <Route path="/news" component={News} />
        <Route path="" component={PersonalPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
