import { Avatar, Card, Col, Collapse, Icon, Pagination, Popover, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from '../../constats';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class FriendsRecommend extends Component {
    UNSAFE_componentWillMount() {
        const { account, getProfile, getFriends } = this.props;
        const { id, token } = account;
        api.getProfile(token, id)
            .then(getProfile)
            .then(() => {
                return api.getFriends(token, id).then(getFriends);
            });
    }

    render() {
        const { id, friends, followers, followings, recommended } = this.props.active_user;
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <Collapse bordered={false} defaultActiveKey={['1']}>
                            <Collapse.Panel header='All friends' key={1}>
                                {friends.length ? friends.map((user) => {
                                    return (
                                        <Card title={(<Link to={`/${user.id}`}>{user.profile.name}</Link>)} key={user.id} extra={
                                            <Popover content={<a href='' >Delete from friends</a>} trigger="click" >
                                                <Icon type='ellipsis' />
                                            </Popover>} >
                                            <Card.Meta
                                                avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                                description={user.profile.birthday} />
                                            <Link to={`/messages/${user.id}`}>Send message</Link>
                                        </Card>
                                    );
                                }) : 'No any friends'}
                                <Pagination total={friends.length} hideOnSinglePage />
                            </Collapse.Panel>
                            <Collapse.Panel header='Followers' key={2}>
                                {followers.length ? followers.map((user) => {
                                    return (
                                        <Card title={(<Link to={`/${user.id}`}>{user.profile.name}</Link>)} key={user.id} extra={
                                            <Popover content={<a href='' onClick={() => api.follow(id, user.id)} >Add to friends</a>} trigger="click" >
                                                <Icon type='ellipsis' />
                                            </Popover>}>
                                            <Card.Meta
                                                avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                                description={user.profile.birthday} />
                                            <Link to={`/messages/${user.id}`}>Send message</Link>
                                        </Card>
                                    );
                                }) : 'No any followers'}
                                <Pagination total={followers.length} hideOnSinglePage />
                            </Collapse.Panel>
                            <Collapse.Panel header='Followings' key={3}>
                                {followings.length ? followings.map((user) => {
                                    return (
                                        <Card title={(<Link to={`/${user.id}`}>{user.profile.name}</Link>)} key={user.id} extra={
                                            <Popover content={<a href='' onClick={() => api.unfollow(id, user.id)} >Unfollow</a>} trigger="click" >
                                                <Icon type='ellipsis' />
                                            </Popover>}>
                                            <Card.Meta
                                                avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                                description={user.profile.birthday} />
                                            <Link to={`/messages/${user.id}`}>Send message</Link>
                                        </Card>
                                    );
                                }) : 'No any followings'}
                                <Pagination total={followings.length} hideOnSinglePage />
                            </Collapse.Panel>
                            <Collapse.Panel header='Recommended' key={4}>
                                {recommended.length ? recommended.map((user) => {
                                    return (
                                        <Card title={(<Link to={`/${user.id}`}>{user.profile.name}</Link>)} key={user.id} extra={
                                            <Popover content={<a href='' onClick={() => api.follow(id, user.id)} >Follow</a>} trigger="click" >
                                                <Icon type='ellipsis' />
                                            </Popover>}>
                                            <Card.Meta
                                                avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                                description={user.profile.birthday} />
                                        </Card>
                                    );
                                }) : 'No any recommended friends'}
                                <Pagination total={recommended.length} hideOnSinglePage />
                            </Collapse.Panel>
                        </Collapse>
                    </Col>
                    <Col span={5}>
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

export default connect(
    mapStateToProps,
    mapDispatchToState
)(FriendsRecommend);