import { wsPath } from '../constats';

export default (state) => {
    const { account, active_user, chat, newMessage } = state;
    if (!chat.get('socket')) {
        const socket = new WebSocket(wsPath);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                text: 'auth',
                from: account.get('id'),
                name: active_user.getIn(['profile', 'name']),
            }));
        };
        socket.onmessage = e => {
            try {
                newMessage(JSON.parse(e.data));
                console.log(JSON.parse(e.data));
            } catch (e) {
            }
        };
        return socket;
    }
    return chat.socket;
};
