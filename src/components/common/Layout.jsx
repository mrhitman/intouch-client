import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import Header from '../common/Header';

const { Sider, Content, Footer } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <Layout>
                    <Sider style={{ background: '#F2F3F4' }} ></Sider>
                    <Content style={{ background: '#FDFEFE', height: 'calc(100vh - 80px)' }}>
                        {this.props.children}
                    </Content>
                    <Sider style={{ background: '#EAF2F8' }} ></Sider>
                </Layout>
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
)(BasicLayout);
