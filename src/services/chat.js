import { wsPath } from '../constats';

export default (state) => {
    const { account, chat, newMessage } = state;
    if (!chat.get('socket')) {
        const socket = new WebSocket(wsPath);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                text: 'auth',
                from: account.id,
            }));
        };
        socket.onmessage = e => {
            try {
                newMessage(JSON.parse(e.data));
            } catch (e) {
            }
        };
        return socket;
    }
    return chat.get('socket');
};
