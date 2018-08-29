import { Api } from '../services/api'
import assert from 'assert'
import Axios from 'axios'
import { baseUri } from '../constats'

describe('Api', () => {
    let api
    let client
    const LOGIN = { email: 'test@test.com', password: '1' }

    beforeEach(() => {
        client = Axios.create({ baseURL: baseUri })
        api = new Api({ client })
    })

    it('login', done => {
        api.login(LOGIN)
            .then(response => {
                assert(typeof response.data.token === 'string')
                assert(typeof response.data.refreshToken === 'string')
                done()
            })
    })

    it('request with token', done => {
        api.login(LOGIN)
            .then(() => api.getChannels(1))
            .then(response => {
                assert(response.status === 200)
                assert(typeof response.config.headers.Authorization === 'string')
                assert(response.config.headers.Authorization.substr(0, 7) === 'Bearer ')
                done()
            })
    })

    it('refresh token', done => {
        let token, refreshToken
        api.login(LOGIN)
            .then(response => {
                token = response.data.token
                refreshToken = response.data.refreshToken
            })
            .then(api.refresh.bind(api))
            .then(response => {
                assert(response.data.refreshToken !== refreshToken)
                done()
            })
    })
})
