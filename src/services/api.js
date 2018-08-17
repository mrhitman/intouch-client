import axios from 'axios';
import { baseUri } from '../constats';

export default {
    login(email, password) {
        return axios.post(`${baseUri}/user/login`, { email, password });
    },

    getProfile(token, id) {
        return axios.get(`${baseUri}/user/profile/${id}`, {
            headers: { Authorization: `${token}` }
        })
    },

    getFriends(token, id) {
        return axios.get(`${baseUri}/user/get-friends/${id}`, {
            headers: { Authorization: `${token}` }
        })
    },

    follow(id, friend_id) {
        return axios.get(`${baseUri}/friend/follow/${id}/${friend_id}`);
    },

    unfollow(id, friend_id) {
        return axios.get(`${baseUri}/friend/unfollow/${id}/${friend_id}`);
    },

    setProfile(token, id, data) {
        return axios.post(`${baseUri}/user/profile/${id}`, data, { headers: { Authorization: `${token}` } })
    },

    register(data) {
        return axios.post(`${baseUri}/user/register`, data);
    },

    getChannels(id) {
        return axios.get(`${baseUri}/chat/channels/${id}`);
    },

    createChannel(from, to) {
        return axios.post(`${baseUri}/chat/channels/create`, { from, to });
    },

    closeChannel(from, to) {
        return axios.post(`${baseUri}/chat/channels/delete`, { from, to });
    },

    getMessages(from, to) {
        return axios.get(`${baseUri}/chat/messages/${from}/${to}`);
    },
}