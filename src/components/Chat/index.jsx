import { Avatar, Card, Col, Icon, Row } from 'antd';
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
        const { getProfile, getChannels, chatAuth, account, active_user } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => chat(this.props))
            .then(chatAuth)
            .then(() => api.getChannels(id))
            .then(getChannels);
    }

    render() {
        const { chat } = this.props;
        const channels = chat.get('channels').toJS();
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        {Object.values(channels).map(channel =>
                            (<Card key={`channel_${channel.interlocutor_id}`}>
                                <Row>
                                    <Col span={23}>
                                        <Avatar size='small' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                                    </Col>
                                    <Col>
                                        <Link to={`/messages/${channel.interlocutor_id}`}>
                                            <Icon type="ellipsis" />
                                        </Link>
                                    </Col>
                                </Row>
                                <span style={{ marginLeft: 40 }}>{channel.name}</span>
                            </Card>)
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
        dispatch({ type: Actions.connect, payload });
    },
    getProfile: payload => {
        dispatch({ type: Actions.getProfile, payload });
    },
    getChannels: payload => {
        dispatch({ type: Actions.getChannels, payload: payload.data });
    },
});
export default connect(mapStateToProps, mapDispatchToState)(Chat);
