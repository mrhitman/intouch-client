import { List, Map, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';

const Chat = Record({
    socket: undefined,
    channels: Map({}),
    messages: List([]),
});

const Channel = Record({
    interlocutor_id: undefined,
    name: '',
    photo: 'photo-mini.jpg',
});

const Message = Record({
    from: undefined,
    to: undefined,
    text: '',
    viewed: false,
    created_at: undefined,
});

const initialState = new Chat();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.connect:
            return state
                .set('socket', action.payload);
        case Actions.getChannels:
            const data = action
                .payload
                .reduce((acc, channel) =>
                    acc.set(String(channel.id), new Channel({ interlocutor_id: channel.id, name: channel.name })),
                    Map({})
                );
            return state
                .set('channels', data);
        case Actions.getMessages:
            const { messages } = action.payload;
            return state
                .set('messages', List(messages.map(message => new Message(message))));
        case Actions.newMessage:
            const message = action.payload;
            message.from = parseInt(message.from);
            message.to = parseInt(message.to);
            return state
                .update('messages', messages => messages.push(new Message(message)));
        case Actions.closeChannel:
            return state
                .deleteIn(['channels', action.payload.toString()]);
        default:
            return state;
    }
};
