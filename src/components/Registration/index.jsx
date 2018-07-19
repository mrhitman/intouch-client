import React, { Component } from 'react';
import { baseUri } from '../../constats';
import api, { } from '../../services/api';

class RegistrationForm extends Component {
    state = {
        email: '',
        password: '',
        repassword: '',
        loginError: null,
    }

    changeValue = e => {
        this.setState({
            [e.target.id.substr(1)]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { email, password, repassword } = this.state;
        if (password !== repassword) {
            this.setState({
                loginError: true
            });
            return;
        }
        return api.register({ email, password, repassword, id: 1 })
            .then(console.log)
            .catch(console.log);
      }


    render() {
        const { email, password, repassword, loginError } = this.state;
        return (
            <form target={`${baseUri}/user/register`} method='POST' onSubmit={this.onSubmit}>
                <input id='remail' type='text' value='' placeholder='email' value={email} onChange={this.changeValue}/>
                <input id='rpassword' type='password' value='' placeholder='password' value={password} onChange={this.changeValue}/>
                <input id='rrepassword' type='password' value='' placeholder='repeat password' value={repassword} onChange={this.changeValue}/>
                <button type='submit'>Register</button>
            </form>
        );
    }
}

export default RegistrationForm;