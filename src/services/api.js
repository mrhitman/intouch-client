import axios from 'axios';
import { baseUri } from '../constats';

function getHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

export default {
    login(email, password) {
        return axios.post(`${baseUri}/user/login`, { email, password });
    },
    logout(token) {
        return axios.post(`${baseUri}/user/logout`, getHeaders);
    },
    getProfile(token, id) {
        return axios.get(`${baseUri}/user/profile/${id}`, getHeaders(token));
    },
    getFriends(token, id) {
        return axios.get(`${baseUri}/user/get-friends/${id}`, getHeaders(token));
    },
    follow(id, friend_id) {
        return axios.get(`${baseUri}/friend/follow/${id}/${friend_id}`);
    },
    unfollow(id, friend_id) {
        return axios.get(`${baseUri}/friend/unfollow/${id}/${friend_id}`);
    },
    setProfile(token, id, data) {
        return axios.post(`${baseUri}/user/profile/${id}`, data, getHeaders(token));
    },
    uploadProfileImage(token, id, data) {
        return axios.post(`${baseUri}/user/profile/${id}/photo`, data, getHeaders(token));
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
    getPosts(owner_id) {
        return axios.get(`${baseUri}/posts/${owner_id}`);
    },
    doPost(data) {
        return axios.post(`${baseUri}/posts/comment`, data);
    },
    addLike(item_id) {
        return axios.post(`${baseUri}/likes/likes/add`, { item_id });
    },
}