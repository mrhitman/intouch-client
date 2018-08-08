import { Avatar, Card, Col, Icon, Menu, Pagination, Popover, Row } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Layout from '../common/Layout';
import LeftMenu from '../common/LeftMenu';

class FriendsRecommend extends Component {
    state = {
        recommendUsers: [],
        friends: [],
        followers: [],
        followings: [],
    }

    pages = {
        friends: {},
        followers: {},
        followings: {},
        recommends: {},
    }

    UNSAFE_componentWillMount() {
        const { id, token } = this.props;
        api.getFriends(token, id)
            .then((response) => {
                this.setState({ ...response.data });
            })
            .catch(console.log);
    }

    render() {
        const { friends, followers, followings, recommendUsers } = this.state;
        const { id } = this.props;
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
                            {recommendUsers.length ? recommendUsers.map((user) => {
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
                            <Pagination total={recommendUsers.length} hideOnSinglePage />
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

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToState
)(FriendsRecommend);