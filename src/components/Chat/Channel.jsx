import { Avatar, Card, Col, Input, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import chat from '../../services/chat';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Channel extends Component {

    UNSAFE_componentWillMount() {
        const { chatAuth, getProfile, getChannels, getMessages, account, active_user, user_id } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => chat(account, active_user))
            .then(chatAuth)
            .then(() => api.getChannels(id))
            .then(getChannels)
            .then(() => api.getMessages(id, user_id))
            .then((response) => getMessages(response, user_id))
    }

    send = e => {
        const { account, active_user, user_id, newMessage } = this.props;
        const socket = account.chat.socket;
        if (e.key === 'Enter') {
            socket.send(JSON.stringify({
                text: e.target.value,
                from: account.id,
                to: user_id,
                name: active_user.profile.name
            }));
            newMessage({ text: e.target.value, viewed: false })
            e.target.value = '';
            e.preventDefault();
            e.stopPropagation();
        }
    };

    render() {
        const { account, user_id, chat } = this.props;
        const channel = chat.channels.get(user_id);
        if (!channel) {
            return null;
        }
        const messages = channel.get('messages');
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <div style={{ overflowY: 'scroll', height: '80vh' }}>
                            {messages.map(message => {
                                return <Card style={{ fontSize: 13, margin: 0, padding: 0 }}>
                                    <Card.Meta title={'asd'} avatar={<Avatar size='small' src='/photo-mini.jpg' />} />
                                    {message.text}
                                </Card>;
                            })}
                        </div>
                        <Input.TextArea onKeyPress={this.send}
                            style={{ position: 'absolute', top: '80vh' }} >
                        </Input.TextArea>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

const mapStateToProps = (state, own) => ({
    account: state.account,
    active_user: state.active_user,
    chat: state.account.get('chat'),
    user_id: own.match.params.id,
});
const mapDispatchToState = dispatch => ({
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
    chatAuth: payload => {
        dispatch({ type: Actions.connect, payload });
    },
    getChannels: payload => {
        dispatch({ type: Actions.getChannels, payload: payload.data });
    },
    getMessages: (payload, user_id) => {
        dispatch({ type: Actions.getMessages, payload: { messages: payload.data, user_id } })
    },
    newMessage: payload => {
        dispatch({ type: Actions.newMessage, payload });
    }
});
export default connect(mapStateToProps, mapDispatchToState)(Channel);