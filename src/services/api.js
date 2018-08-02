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

    setProfile(token, id, data) {
        return axios.post(`${baseUri}/user/profile/${id}`, data, { headers: { Authorization: `${token}` } })
    },

    register({ email, password, id }) {
        return axios.post(`${baseUri}/user/register`, {
            email,
            password,
            first_name: "",
            last_name: "",
            birthday: 1123
        });
    }
}