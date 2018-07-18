import React, { Component } from 'react';

class RegistrationForm extends Component {

    render() {
        return (
        <form target='' method='POST' onSubmit={console.log}>
            <input type='text' value='' placeholder='email' />
            <input type='password' value='' placeholder='password' />
            <input type='password' value='' placeholder='repeat password' />
            <button type='submit'>Register</button>
        </form>
        );
    }
}

export default RegistrationForm;