import { wsPath } from '../constats';

export default (account, active_user) => {
    const chat = account.chat;
    if (!account.chat.socket) {
        const socket = new WebSocket(wsPath);
        socket.onopen = () => {
            socket.send(JSON.stringify({
                text: 'auth',
                from: account.id,
                name: active_user.profile.name
            }));
        };
        socket.onmessage = e => {
            const messages = [];
            try {
                // messages.push(JSON.parse(e.data));
                console.log(JSON.parse(e.data));
            } catch (e) {
            }
        };
        return socket;
    }
    return chat.socket;
};
