import { Avatar, Card, Col, Icon, Menu, Pagination, Popover, Row } from 'antd';
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
        // console.log(this.props.active_user);
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <Card title='All friends' type='inner'>
                            {friends.length ? friends.map((user) => {
                                return (
                                    <Card title={user.profile.name} key={user.id} extra={
                                        <Popover content={<a href='' >Delete from friends</a>} trigger="click" >
                                            <Icon type='ellipsis' />
                                        </Popover>} >
                                        <Card.Meta
                                            avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                            description={user.profile.birthday} />
                                        <Link to=''>Send message</Link>
                                    </Card>
                                );
                            }) : 'No any friends'}
                            <Pagination total={friends.length} hideOnSinglePage />
                        </Card>
                        <Card title='Followers' type='inner'>
                            {followers.length ? followers.map((user) => {
                                return (
                                    <Card title={user.profile.name} key={user.id} extra={
                                        <Popover content={<a href='' onClick={() => api.follow(id, user.id)} >Add to friends</a>} trigger="click" >
                                            <Icon type='ellipsis' />
                                        </Popover>}>
                                        <Card.Meta
                                            avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                            description={user.profile.birthday} />
                                    </Card>
                                );
                            }) : 'No any followers'}
                            <Pagination total={followers.length} hideOnSinglePage />
                        </Card>
                        <Card title='Followings' type='inner'>
                            {followings.length ? followings.map((user) => {
                                return (
                                    <Card title={user.profile.name} key={user.id} extra={
                                        <Popover content={<a href='' onClick={() => api.unfollow(id, user.id)} >Unfollow</a>} trigger="click" >
                                            <Icon type='ellipsis' />
                                        </Popover>}>
                                        <Card.Meta
                                            avatar={<Avatar size='large' shape='square' src='/photo-mini.jpg' />}
                                            description={user.profile.birthday} />
                                    </Card>
                                );
                            }) : 'No any followings'}
                            <Pagination total={followings.length} hideOnSinglePage />
                        </Card>
                        <Card title='Recomended friends' type='inner'>
                            {recommended.length ? recommended.map((user) => {
                                return (
                                    <Card title={user.profile.name} key={user.id} extra={
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
                        </Card>
                    </Col>
                    <Col span={5}>
                        <Menu>
                            <Menu.Item>
                                <span>My friends</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>Followers</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>Followings</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>Recomended</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>Search friends</span>
                            </Menu.Item>
                        </Menu>
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