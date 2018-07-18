import React, { Component } from 'react';
import { baseUri } from '../../constats';

class RegistrationForm extends Component {
    state = {
        email: '',
        password: '',
        repassword: '',
        loginError: null,
    }

    changeValue = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { email, password, repassword, loginError } = this.state;
        return (
            <form target={`${baseUri}/user/register`} method='POST' onSubmit={console.log}>
                <input id='email' type='text' value='' placeholder='email' value={email} onChange={this.changeValue}/>
                <input id='password' type='password' value='' placeholder='password' value={password} onChange={this.changeValue}/>
                <input id='repassword' type='password' value='' placeholder='repeat password' value={repassword} onChange={this.changeValue}/>
                <button type='submit'>Register</button>
            </form>
        );
    }
}

export default RegistrationForm;