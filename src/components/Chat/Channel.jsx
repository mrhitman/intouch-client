import { Avatar, Card, Col, Input, Row } from 'antd';
import { List } from 'immutable';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import chatApi from '../../services/chat';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Channel extends Component {
    messagesEl;

    UNSAFE_componentWillMount() {
        const { chatAuth, getProfile, getChannels, getMessages, account, active_user, chat, user_id, newMessage } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => chatApi({ account, active_user, chat, newMessage }))
            .then(chatAuth)
            .then(() => api.getChannels(id))
            .then(getChannels)
            .then(() => api.getMessages(id, user_id))
            .then((response) => getMessages(response, user_id))
    }

    send = e => {
        const { chat, active_user, user_id, newMessage } = this.props;
        const socket = chat.get('socket');
        if (e.key === 'Enter') {
            if (e.target.value.trim()) {
                const message = {
                    text: e.target.value,
                    from: active_user.id,
                    to: user_id,
                };
                socket.send(JSON.stringify(message));
                newMessage(message)
                this.scrollToBottom();
            }
            e.target.value = '';
            e.preventDefault();
            e.stopPropagation();
        }
    };

    scrollToBottom = () => {
        const messagesEl = this.messagesEl;
        if (messagesEl) {
            messagesEl.scrollTop = 1e+10;
        }
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const { user_id, chat, account, active_user, getChannels } = this.props;
        const channel = chat.getIn(['channels', user_id]);
        if (!channel) {
            api.createChannel(account.id, user_id)
                .then(response => getChannels({ data: [response.data] }));
        }
        const messages = chat.get('messages');
        //.filter(message =>
        //    List([Number(message.from), Number(message.to)])
        //        .sort()
        //        .equals(List([Number(account.id), Number(user_id)]).sort()));
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <div style={{ overflowY: 'scroll', height: '80vh' }} ref={el => { this.messagesEl = el; }}>
                            {messages.map(message => {
                                const title = Number(message.get('from')) === Number(account.get('id')) ? active_user.get('profile').name : channel.get('name');
                                return (
                                    <Card style={{ fontSize: 13, margin: 0, padding: 0 }}>
                                        <Card.Meta title={title} avatar={<Avatar size='small' src='/photo-mini.jpg' />} />
                                        {message.get('text')}
                                    </Card>
                                );
                            })}
                        </div>
                        <Input.TextArea onKeyPress={this.send}
                            style={{ position: 'absolute', top: '80vh' }} >
                        </Input.TextArea>
                    </Col>
                </Row>
            </Layout >
        );
    }
}

const mapStateToProps = (state, own) => ({
    account: state.account,
    active_user: state.active_user,
    user_id: own.match.params.id,
    chat: state.chat,
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