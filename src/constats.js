export const Actions = {
    login: 'USER_LOGIN',
    getProfile: 'USER_GET_PROFILE',
    logout: 'USER_LOGOUT',
    getFriends: 'FRIEND_GET',
    follow: 'FRIEND_FOLLOW',
    unfollow: 'FRIEND_UNFOLLOW',
}

const port = 3001;
const protocol = 'http';
const host = 'localhost';

export const baseUri = `${protocol}://${host}:${port}`