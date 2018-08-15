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
        const { chatAuth, getProfile, account, active_user } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => chat(account, active_user))
            .then(chatAuth);
    }

    send = e => {
        const { account, active_user, match } = this.props;
        const user_id = match.params.id;
        const socket = account.chat.socket;
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            socket.send(JSON.stringify({
                text: e.target.value,
                from: account.id,
                to: user_id,
                name: active_user.profile.name
            }));
            // messages.push({ text: e.target.value, name: active_user.profile.name });
            e.target.value = '';
        }
    };

    render() {
        const { account, active_user, match } = this.props;
        const user_id = match.params.id;
        const socket = account.socket;
        const channel = account.chat.channels[user_id];
        const { profile } = this.props.active_user;
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <div style={{ overflowY: 'scroll', height: '80vh' }}>
                            {channel.messages.map(message => {
                                return <Card style={{ fontSize: 13, margin: 0, padding: 0 }}>
                                    <Card.Meta title={channel.with.name} avatar={<Avatar size='small' src='/photo-mini.jpg' />} />
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
    chatAuth: payload => {
        dispatch({ type: Actions.chatAuth, payload });
    },
});
export default connect(mapStateToProps, mapDispatchToState)(Channel);