import App from './components/app/App';
import Chance from 'chance';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const chance = new Chance();
const reducer = (state) => state;
const initialState = {
     profile: {
         name: chance.name(),
         quote: chance.sentence()
     },
    followerCount: 5,
    followers : [
        { id: 1, name: chance.name().split(' ')[0] },
        { id: 2, name: chance.name().split(' ')[0] },
        { id: 3, name: chance.name().split(' ')[0] },
    ],
    friendCount: 8,
    friends: [
        { id: 1, name: chance.name().split(' ')[0] },
        { id: 2, name: chance.name().split(' ')[0] },
        { id: 3, name: chance.name().split(' ')[0] },
        { id: 4, name: chance.name().split(' ')[0] },
        { id: 5, name: chance.name().split(' ')[0] },
        { id: 6, name: chance.name().split(' ')[0] },
        { id: 7, name: chance.name().split(' ')[0] },
        { id: 8, name: chance.name().split(' ')[0] },
    ],
};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
