import { List, Record, fromJS } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';

const Account = Record({
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    refresh_token: undefined,
    new_message: 0,
    new_followers: 0,
    chat: new (Record({
        socket: null,
        channels: new List([
            { with: { id: 2, name: 'Test name' }, messages: [] },
            { with: { id: 3, name: 'Test name 2' }, messages: [] }
        ]),
    })),
});

const initialState = new Account();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.login:
            const user = action.payload;
            localStorage.set('id', user.id);
            localStorage.set('token', user.token);
            return state
                .set('id', user.id)
                .set('token', user.token);
        case Actions.chatAuth:
            const socket = action.payload;
            return state
                .setIn(['chat', 'socket'], socket);
        case Actions.logout:
            localStorage.clear();
            return initialState;
        default:
            return state;
    }
};
