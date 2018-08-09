import { Col, Input, Row, Card, Avatar } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';
import { connect } from 'react-redux';

class Chat extends Component {

    state = {
        socket: null,
        messages: [],
    }

    UNSAFE_componentWillMount() {
        if (!this.state.socket) {
            const socket = new WebSocket('ws://localhost:3001/ws');
            socket.onopen = () => {
                socket.send(JSON.stringify({ text: 'auth', from: this.props.id, name: this.props.profile.name }));
            };
            socket.onmessage = this.onmessage;
            this.setState({ socket });
        }
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
        if (e.key === 'Enter') {
            const { socket, messages } = this.state;
            socket.send(JSON.stringify({ text: e.target.value, from: this.props.id, to: this.props.id == 1 ? 2 : 1, name: this.props.profile.name }));
            messages.push({ text: e.target.value, name: this.props.profile.name });
            this.setState({ messages });
            e.target.value = '';
            e.preventDefault();
            e.stopPropagation();
        }
    };

    render() {
        const { socket, messages } = this.state;
        const { profile } = this.props;
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

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToState)(Chat);