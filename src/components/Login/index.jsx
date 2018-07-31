import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import Header from '../common/Header';

class LoginForm extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Layout>
                    <Layout.Sider style={{ background: '#F2F3F4' }} ></Layout.Sider>
                    <Layout.Content style={{ background: '#FDFEFE', height: 'calc(100vh - 114px)' }}>Content</Layout.Content>
                    <Layout.Sider style={{ background: '#EAF2F8' }} ></Layout.Sider>
                </Layout>
                <Layout.Footer />
            </Layout>
        );
    }

}

const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
    login: payload => {
        dispatch({ type: Actions.login, payload: payload.data });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm);
