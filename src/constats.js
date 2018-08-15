export const Actions = {
    login: 'USER_LOGIN',
    logout: 'USER_LOGOUT',
    getFriends: 'FRIEND_GET',
    follow: 'FRIEND_FOLLOW',
    unfollow: 'FRIEND_UNFOLLOW',
    getProfile: 'GET_PROFILE',
    connect: 'CONNECT_SOCKET',
    getMessages: 'GET_MESSAGES',
    getChannels: 'GET_CHANNELS',
    newMessage: 'NEW_MESSAGE',
}

const port = 3001;
const protocol = 'http';
const host = 'localhost';

export const baseUri = `${protocol}://${host}:${port}`;
export const wsPath = `ws://${host}:${port}/ws`;
