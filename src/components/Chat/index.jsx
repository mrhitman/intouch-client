import { Col, Input, Row, Card } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';


class Chat extends Component {

    state = {
        socket: null,
        messages: ['asdasdas']
    }

    UNSAFE_componentWillMount() {
        this.setState({ socket: new WebSocket('ws://localhost:3001/ws') });
    }

    render() {
        const { socket, messages } = this.state;
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <div style={{ overflowY: false, height: '80vh' }}>
                            {messages.map(message => {
                                return <Card>{message}</Card>;
                            })}
                        </div>
                        <Input.TextArea onKeyPress={e => {
                            if (e.key === 'Enter') {
                                socket.send(e.target.value);
                                messages.push(e.target.value);
                                this.setState({ messages });
                                e.target.value = '';
                            }
                        }}
                            style={{ position: 'absolute', top: '80vh' }} >
                        </Input.TextArea>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Chat;