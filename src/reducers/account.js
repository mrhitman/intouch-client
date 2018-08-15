import { Map, Record, fromJS, List } from 'immutable';
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
        channels: new Map({}),
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
        case Actions.connect:
            const socket = action.payload;
            return state
                .setIn(['chat', 'socket'], socket);
        case Actions.getChannels:
            const data = action
                .payload
                .reduce((acc, channel) => acc.set(channel.id, {
                    with: { id: channel.id, name: channel.name, photo: '' },
                    messages: []
                }), new Map({}));
            return state
                .setIn(['chat', 'channels'], fromJS(data));
        case Actions.getMessages:
            const { messages, user_id } = action.payload;
            return state
                .setIn(['chat', 'channels', user_id, 'messages'], messages);
        case Actions.newMessage:
            const message = action.payload;
            return state
                .updateIn(['chat', 'channels', user_id, 'messages'], messages => {
                    console.log(messages);
                    return messages.push(message);
                });
        case Actions.logout:
            localStorage.clear();
            return initialState;
        default:
            return state;
    }
};
