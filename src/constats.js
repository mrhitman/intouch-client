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
    closeChannel: 'CLOSE_CHANNEL',
    post: 'DO_POST',
    getPosts: 'GET_POSTS',
    addLike: 'ADD_LIKE',
    deleteLike: 'DELETE_LIKE',
    addDislike: 'ADD_DISLIKE',
    deleteDislike: 'DELETE_DISLIKE',
}

const config = {
    port: 3001,
    protocol: 'http',
    host: 'localhost',
};
export const baseUri = `${config.protocol}://${config.host}:${config.port}`;
export const wsPath = `ws://${config.host}:${config.port}/ws`;

// const config = {
//     port: 443,
//     protocol: 'https',
//     host: 'hitman-intouchapp.herokuapp.com',
// };

// export const baseUri = `${config.protocol}://${config.host}:${config.port}`;
// export const wsPath = `wss://${config.host}/ws`;
