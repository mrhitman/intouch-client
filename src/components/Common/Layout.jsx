import { Layout, BackTop } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import Header from '../Common/Header';

const { Sider, Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <BackTop />
                <Header />
                <Layout>
                    <Sider width={180} style={{ background: '#FDFEFE' }} />
                    <Content style={{ background: '#FDFEFE', height: 'calc(100vh - 80px)', paddingRight: 180 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }

}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    login: payload => {
        dispatch({ type: Actions.login, payload: payload.data });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasicLayout);