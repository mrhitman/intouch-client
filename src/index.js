import App from './components/app/App';
import Chance from 'chance';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const chance = new Chance();
const reducer = (state) => state;
const initialState = {
     profile: {
         name: chance.name(),
         quote: chance.sentence(),
         status: chance.bool(),
         messages: chance.natural({ min: 3, max: 10 }),
         comments: chance.natural({ min: 3, max: 10 }),
     },
    followerCount: chance.natural({ min: 3, max: 10 }),
    followers : [
        { id: 1, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 2, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 3, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
    ],
    friendCount: chance.natural({ min: 8, max: 16 }),
    friends: [
        { id: 1, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 2, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 3, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 4, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 5, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 6, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 7, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
        { id: 8, name: chance.name().split(' ')[0], photoMini: "photo-mini.jpg" },
    ],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
