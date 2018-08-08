import { Col, Input, Row, Card, Avatar } from 'antd';
import React, { Component } from 'react';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';
import { connect } from 'react-redux';


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
        const { profile } = this.props;
        console.log(profile);
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <div style={{ overflowY: 'scroll', height: '80vh' }}>
                            {messages.map(message => {
                                return <Card>
                                    <Card.Meta title={profile.name} avatar={<Avatar size='small' src='/photo-mini.jpg' />} />
                                    {message}
                                </Card>;
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

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToState)(Chat);