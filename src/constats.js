export const Actions = {
    login: 'USER_LOGIN',
    getProfile1: 'USER_GET_PROFILE',
    logout: 'USER_LOGOUT',
    getFriends: 'FRIEND_GET',
    follow: 'FRIEND_FOLLOW',
    unfollow: 'FRIEND_UNFOLLOW',
    getProfile: 'GET_PROFILE',
    chatAuth: 'CHAT_AUTH',
}

const port = 3001;
const protocol = 'http';
const host = 'localhost';

export const baseUri = `${protocol}://${host}:${port}`;
export const wsPath = `ws://${host}:${port}/ws`;
