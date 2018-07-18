import axios from 'axios';
import { baseUri } from '../constats';

export default {
    login(email, password) {
        return axios.post(`${baseUri}/user/login`, { email, password });
    },

    getProfile(token, id) {
        return axios.get(`${baseUri}/user/get-profile/${id}`, {
            headers: { Authorization: `${token}` }
        })
    }
}