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

    sendMessage(id, friend_id, message) {

    },

}