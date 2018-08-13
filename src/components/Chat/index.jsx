import { Avatar, Card, Col, Input, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Chat extends Component {

    state = {
        socket: null,
        messages: [],
    }

    UNSAFE_componentWillMount() {
        const { getProfile, account, active_user } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => {
                if (!this.state.socket) {
                    const socket = new WebSocket('ws://localhost:3001/ws');
                    socket.onopen = () => {
                        socket.send(JSON.stringify({
                            text: 'auth',
                            from: account.id,
                            name: active_user.profile.name
                        }));
                    };
                    socket.onmessage = this.onmessage;
                    this.setState({ socket });
                }
            });
    }

    onmessage = e => {
        const messages = this.state.messages;
        try {
            messages.push(JSON.parse(e.data));
            this.setState({ messages });
        } catch (e) {

        }
    }

    send = e => {
        const { account, active_user } = this.props;
        if (e.key === 'Enter') {
            const { socket, messages } = this.state;
            socket.send(JSON.stringify({
                text: e.target.value,
                from: account.id,
                to: account.id == 1 ? 2 : 1,
                name: active_user.profile.name
            }));
            messages.push({ text: e.target.value, name: active_user.profile.name });
            this.setState({ messages });
            e.target.value = '';
            e.preventDefault();
            e.stopPropagation();
        }
    };

    render() {
        const { socket, messages } = this.state;
        const { profile } = this.props.active_user;
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
                                    <Card.Meta title={message.name} avatar={<Avatar size='small' src='/photo-mini.jpg' />} />
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

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
});
export default connect(mapStateToProps, mapDispatchToState)(Chat);