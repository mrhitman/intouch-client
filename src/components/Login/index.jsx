import React, { Component } from "react";
import Header from '../common/Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Actions, baseUri } from "../../constats";
import '../../styles/login.css';


class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        loginError: null
    }

    onClick = () => {
        const { email, password } = this.state;
        const { login } = this.props;
        axios.post(`${baseUri}/user/login`, { email, password })
            .then(response => {
                login(response.data);
            })
            .catch(response => this.setState({ loginError: true }));
    }

    onEnter = e => {
        if (e.key === 'Enter') {
            this.onClick();
        }
    }

    changeValue = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { email, password, loginError } = this.state;
        const { status } = this.props;
        return (
            <div className="app">
                <Header />
                <div className="content">
                    <div className="login">
                        <input id="email" type="text" placeholder="email" value={email} onChange={this.changeValue} />
                        <input id="password" type="password" placeholder="password" value={password} onChange={this.changeValue} onKeyPress={this.onEnter}/>
                        {loginError && <div className="loginError">Invalid user email or password</div>}
                        <button onClick={this.onClick}>Login</button>
                        <button onClick={this.onClick}>Register</button>
                        {status && <Redirect to="/" />}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
        login: payload => {
            dispatch({ type: Actions.login, payload: payload });
        }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);