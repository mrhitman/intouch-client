import { Avatar, Card, Col, Icon, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, wsPath } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Chat extends Component {

    UNSAFE_componentWillMount() {
        const { getProfile, chatAuth, account, active_user } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => this.initChat)
            .then(chatAuth);
    }

    initChat = () => {
        const { account, active_user } = this.props;
        const chat = account.chat;
        if (!account.chat.socket) {
            const socket = new WebSocket(wsPath);
            socket.onopen = () => {
                socket.send(JSON.stringify({
                    text: 'auth',
                    from: account.id,
                    name: active_user.profile.name
                }));
            };
            socket.onmessage = e => {
                const messages = [];
                try {
                    // messages.push(JSON.parse(e.data));
                    // this.setState({ messages });
                } catch (e) {
                }
            };
            return socket;
        }
        return chat.socket;
    };

    render() {
        const account = this.props.account.toJS();
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        {account.chat.channels.map(channel =>
                            <Card >
                                <Row>
                                    <Col span={23}>
                                        <Avatar size='small' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    </Col>
                                    <Col>
                                        <a href={`/messages/${channel.with.id}`}>
                                            <Icon type="ellipsis" />
                                        </a>
                                    </Col>
                                </Row>
                                <span style={{ marginLeft: 40 }}>{channel.with.name}</span>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Layout>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({
    chatAuth: payload => {
        dispatch({ type: Actions.chatAuth, payload });
    },
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
});
export default connect(mapStateToProps, mapDispatchToState)(Chat);
