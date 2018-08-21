import { wsPath } from '../constats';

let delay = 1000;
let instance;

const open = (account, newMessage) => {
    console.log('connect chat');
    instance = new WebSocket(wsPath);
    instance.onopen = () => {
        instance.send(JSON.stringify({
            text: 'auth',
            from: account.id,
        }));
    };
    instance.onmessage = e => {
        try {
            newMessage(JSON.parse(e.data));
        } catch (e) {
        }
    };
    return instance;
};

export default (state) => {
    const { account, chat, newMessage } = state;
    if (!chat.get('socket')) {
        open(account, newMessage);
        instance.onclose = e => {
            console.log('connection closed');
            setTimeout(() => () => {
                console.log('reconnect');
                open(account, newMessage);
            }, delay);
            if (delay < 20000) {
                delay *= 2;
            }
        };
        return instance;
    }
    return chat.get('socket');
};
