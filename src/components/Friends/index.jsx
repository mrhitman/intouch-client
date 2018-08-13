import { Col, Menu, Row, Tabs } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Layout from '../Common/Layout';
import LeftMenu from '../Common/LeftMenu';

class Friends extends Component {

    UNSAFE_componentWillMount() {
        const { id, token } = this.props;
        api.getFriends(token, id)
            .then(console.log)
    }

    render() {
        return (
            <Layout>
                <Row>
                    <Col span={5}>
                        <LeftMenu />
                    </Col>
                    <Col span={14}>
                        <Tabs>
                            <Tabs.TabPane tab='All friends' key={1}>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab='Online' key={2}>
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                    <Col span={5}>
                        <Menu>
                            <Menu.Item>
                                <span>My friends</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span><Link to='/friends/recommends'>Followers</Link></span>
                            </Menu.Item>
                            <Menu.Item>
                                <span>Followings</span>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

const mapStateToProps = state => state.user;
const mapDispatchToState = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState
)
    (Friends);