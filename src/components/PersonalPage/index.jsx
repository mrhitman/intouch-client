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

    UNSAFE_componentWillMount() {
        const { token, match, getProfile, getFriends } = this.props;
        const user_id = match.params.id;
        Promise.all([
            api.getProfile(token, user_id).then(getProfile),
            api.getFriends(token, user_id).then(getFriends),
        ])
    }

    render() {
        return (
            <Layout>
                <Row>
                    <Col lg={5} xxl={4}>
                        <LeftMenu />
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Middle />
                    </Col>
                    <Col lg={13} xxl={10}>
                        <Profile />
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
});

export default connect(mapStateToProps, mapDispatchToState)(PersonalPage);
