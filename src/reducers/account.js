import { Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';
import { ActiveUser } from './active_user';

const Account = Record({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    refresh_token: localStorage.getItem('refreshToken'),
    user: new ActiveUser({})
});

const initialState = new Account();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.login:
            const { token, user, refreshToken } = action.payload;
            localStorage.setItem('id', user.id);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            return state
                .set('id', user.id)
                .set('token', token);
        case Actions.logout:
            localStorage.clear();
            return new Account();
        default:
            return state;
    }
};
