import axios from 'axios';
import { baseUri } from '../constats';


export class Api {

    constructor(options = {}) {
        this.client = options.client || axios.create({ baseURL: baseUri })
        this.token = options.token
        this.refreshToken = options.refreshToken

        this.client.interceptors.request.use(
            config => {
                if (!this.token) {
                    return config;
                }

                const newConfig = {
                    headers: {},
                    ...config,
                }

                newConfig.headers.Authorization = `Bearer ${this.token} `
                return newConfig
            },
            e => Promise.reject(e)
        )

        this.client.interceptors.response.use(
            response => response,
            async error => {
                if (!this.refreshToken || error.response.status !== 401 || error.config.retry) {
                    throw error
                }
                const response = await this.refresh()
                this.token = response.token
                this.refreshToken = response.refreshToken
                const newRequest = {
                    ...error.config,
                    retry: true,
                }
                return this.client(newRequest)
            }
        )
    }

    login(data) {
        return this.client(`user/login`, { method: 'post', data })
            .then(response => {
                this.token = response.data.token
                this.refreshToken = response.data.refreshToken
                return response
            })
    }

    refresh() {
        return this.client(`user/refresh`, { method: 'post', data: { token: this.refreshToken } })
    }

    logout() {
        return this.client(`user/logout`, { method: 'post' })
    }

    getProfile(id) {
        return this.client(`user/profile/${id}`)
    }

    getFriends(id) {
        return this.client(`user/get-friends/${id}`)
    }

    follow({ id, friend_id }) {
        return this.client(`friend/follow/${id}/${friend_id}`)
    }

    unfollow({ id, friend_id }) {
        return this.client(`friend/unfollow/${id}/${friend_id}`)
    }

    setProfile({ id, data }) {
        return this.client(`user/profile/${id}`, { method: 'post', data })
    }

    uploadProfileImage(id, data) {
        return this.client(`user/profile/${id}/photo`, { method: 'post', data })
    }

    register(data) {
        return this.client(`user/register`, { method: 'post', data })
    }

    getChannels(id) {
        return this.client(`chat/channels/${id}`)
    }

    createChannel(from, to) {
        return this.client(`chat/channels/create`, { method: 'post', data: { from, to } })
    }

    closeChannel(from, to) {
        return this.client(`chat/channels/delete`, { method: 'post', data: { from, to } })
    }

    getMessages(from, to) {
        return this.client(`chat/messages/${from}/${to}`)
    }

    getPosts(owner_id) {
        return this.client(`posts/${owner_id}`)
    }

    addPost(data) {
        return this.client(`posts/comment`, { method: 'post', data })
    }

    deletePost(id) {
        return this.client(`posts/comment/delete`, { method: 'post', data: { id } })
    }

    addLike(item_id) {
        return this.client(`likes/likes/add`, { method: 'post', data: { item_id } })
    }

    logout() {
        return this.client(`user/logout`, { method: 'post' })
    }

    getProfile(id) {
        return this.client(`user/profile/${id}`)
    }

    getFriends(id) {
        return this.client(`user/get-friends/${id}`)
    }

    follow({ id, friend_id }) {
        return this.client(`friend/follow/${id}/${friend_id}`)
    }

    unfollow({ id, friend_id }) {
        return this.client(`friend/unfollow/${id}/${friend_id}`)
    }

    setProfile({ id, data }) {
        return this.client(`user/profile/${id}`, { method: 'post', data })
    }

    uploadProfileImage(id, data) {
        return this.client(`user/profile/${id}/photo`, { method: 'post', data })
    }

    register(data) {
        return this.client(`user/register`, { method: 'post', data })
    }

    getChannels(id) {
        return this.client(`chat/channels/${id}`)
    }

    createChannel(from, to) {
        return this.client(`chat/channels/create`, { method: 'post', data: { from, to } })
    }

    closeChannel(from, to) {
        return this.client(`chat/channels/delete`, { method: 'post', data: { from, to } })
    }

    getMessages(from, to) {
        return this.client(`chat/messages/${from}/${to}`)
    }

    getPosts(owner_id) {
        return this.client(`posts/${owner_id}`)
    }

    addPost(data) {
        return this.client(`posts/comment`, { method: 'post', data })
    }

    deletePost(id) {
        return this.client(`posts/comment/delete`, { method: 'post', data: { id } })
    }

    addLike(item_id) {
        return this.client(`likes/likes/add`, { method: 'post', data: { item_id } })
    }
}

export default new Api()