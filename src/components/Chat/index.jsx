import { Avatar, Card, Col, Icon, Row, List } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from '../../constats';
import api from '../../services/api';
import chat from '../../services/chat';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Chat extends Component {

    UNSAFE_componentWillMount() {
        const { getProfile, getChannels, chatAuth, account } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => chat(this.props))
            .then(chatAuth)
            .then(() => api.getChannels(id))
            .then(getChannels);
    }

    render() {
        const { chat, account, closeChannel } = this.props;
        const channels = chat.get('channels');
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <List
                            size='large'
                            dataSource={channels.toArray()}
                            renderItem={channel => (
                                <List.Item
                                    actions={[
                                        <Link to={`/messages/${channel.interlocutor_id}`}>
                                            <Icon type="wechat" />
                                        </Link>,
                                        <Link to='/messages' >
                                            <Icon onClick={() => closeChannel(account.id, channel.interlocutor_id)} type="close" />
                                        </Link>,
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                                        title={channel.name}
                                        description=' '
                                        style={{ marginLeft: 30 }}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToState = dispatch => ({
    chatAuth: payload => {
        dispatch({ type: Actions.connect, payload });
    },
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
    getChannels: payload => {
        dispatch({ type: Actions.getChannels, payload: payload.data });
    },
    closeChannel: (id, interlocutor_id) => {
        api.closeChannel(id, interlocutor_id)
            .then(() => {
                dispatch({ type: Actions.closeChannel, payload: interlocutor_id });
            });
    }
});
export default connect(mapStateToProps, mapDispatchToState)(Chat);
