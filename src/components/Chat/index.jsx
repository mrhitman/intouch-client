import { Avatar, Card, Col, Row } from 'antd';
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
            .then(() => {
                if (!account.chat.socket) {
                    const socket = new WebSocket(wsPath);
                    socket.onopen = this.onopen(socket);
                    socket.onmessage = this.onmessage;
                    return socket;
                }
                return account.chat.socket;
            })
            .then(chatAuth);
    }

    onopen(socket) {
        return () => {
            socket.send(JSON.stringify({
                text: 'auth',
                from: this.props.account.id,
                name: this.props.active_user.profile.name
            }));
        }
    };

    onmessage = e => {
        const messages = this.state.messages;
        try {
            messages.push(JSON.parse(e.data));
            this.setState({ messages });
        } catch (e) {
        }
    };

    send = e => {
        const { account, active_user, match } = this.props;
        const user_id = match.params.id;
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            const { socket, messages } = this.state;
            socket.send(JSON.stringify({
                text: e.target.value,
                from: account.id,
                to: user_id,
                name: active_user.profile.name
            }));
            messages.push({ text: e.target.value, name: active_user.profile.name });
            this.setState({ messages });
            e.target.value = '';
        }
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
                            <Card extra={<a href={`/messages/${channel.with.id}`}>view</a>}>
                                <Avatar size='small' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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