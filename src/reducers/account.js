import { Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';

const Account = Record({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    refresh_token: undefined,
    new_message: 0,
    new_followers: 0,
});

const initialState = new Account();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.login:
            const { token, user } = action.payload;
            localStorage.setItem('id', user.id);
            localStorage.setItem('token', token);
            return state
                .set('id', user.id)
                .set('token', token);
        case Actions.logout:
            localStorage.clear();
            return initialState;
        default:
            return state;
    }
};
