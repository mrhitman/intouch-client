export const Actions = {
    login: 'LOGIN',
    getProfile: 'GET_PROFILE',
    logout: 'LOGOUT',
}

const port = 3001;
const protocol = 'http';
const host = 'localhost';

export const baseUri = `${protocol}://${host}:${port}`