import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';
import Middle from './Middle';
import Photos from './Photos';
import Profile from './Profile';
import Wall from './Wall';

class PersonalPage extends Component {

    state = {
        isLoading: true,
    }

    UNSAFE_componentWillMount() {
        const { token, match, getProfile, getFriends, getPosts } = this.props;
        const user_id = match.params.id;
        Promise.all([
            api.getProfile(token, user_id).then(getProfile),
            api.getFriends(token, user_id).then(getFriends),
            api.getPosts(user_id).then(getPosts),
        ])
        .then(() => this.setState({ isLoading: false }))
        .catch(console.log)
    }

    render() {
        const { isLoading } = this.state;
        return (
            <Layout>
                <Row>
                    <Col span={6} style={{ minWidth: 200 }}>
                        <LeftMenu />
                    </Col>
                    <Col span={6} style={{ minWidth: 200 }}>
                        <Middle />
                    </Col>
                    <Col span={12} style={{ minWidth: 400 }}>
                        <Profile isLoading={isLoading} />
                        <Photos />
                        <Wall />
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
    getFriends: payload => {
        dispatch({ type: Actions.getFriends, payload });
    },
    getPosts: payload => {
        dispatch({ type: Actions.getPosts, payload: payload.data });
    }
});

export default connect(mapStateToProps, mapDispatchToState)(PersonalPage);
