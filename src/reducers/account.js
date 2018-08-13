import { Record } from 'immutable';
import { Action } from 'redux';

const Accout = Record({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    refresh_token: undefined,
    new_message: 0,
    new_followers: 0,
    chat: undefined,
});

const initialState = new Accout();

export default (state = initialState, action: Action) => {
    switch (action.type) {

        default:
            return state;
    }
};
