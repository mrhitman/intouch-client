import React, { Component } from "react";
import Header from '../common/Header';
import axios from 'axios';


const baseUrl = 'http://localhost:3001';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        userData: null,
    }

    onClick = () => {
        const { email, password } = this.state;
        axios.post(`${baseUrl}/user/login`, { email, password })
            .then(response => this.setState({ userData: response.data }));
    }

    onEnter = (e) => {
        if (e.key === 'Enter') {
            this.onClick();
        }
    }

    changeValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="app">
                <Header />

                <div className="content">
                    <div className="login">
                        <input id="email" type="text" placeholder="email" value={email} onChange={this.changeValue} />
                        <input id="password" type="password" placeholder="password" value={password} onChange={this.changeValue} onKeyPress={this.onEnter}/>
                        <button onClick={this.onClick}>Enter</button>
                    </div>
                </div>
            </div>
        );
    }

}


export default LoginForm;