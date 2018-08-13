import { Avatar, Badge, Col, Divider, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../Common/Logout';

class Header extends Component {
    render() {
        const { new_messages, new_followers, isAuthentificated } = this.props;
        return (
            <Layout.Header className='header' style={{ background: '#2980B9' }}>
                <Row>
                    <Col offset={4} span={2} >
                        <Link to='/' style={{ fontSize: 24, color: '#FDFEFE' }}>in touch</Link>
                    </Col>
                    <Col span={4}>
                        <Input.Search placeholder='search ...' style={{ width: 260 }} />
                    </Col>
                    {isAuthentificated && (
                        <Fragment>
                            <Col offset={7} span={1}>
                                <Badge count={new_messages}>
                                    <Icon type="message" />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={0}>
                                    <Icon type="mail" />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={new_followers}>
                                    <Icon type="user" />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Dropdown overlay={this.drawMenu()} trigger={['click']}>
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </Dropdown>
                            </Col>
                        </Fragment>
                    )}
                </Row>
            </Layout.Header>
        );
    }

    drawMenu() {
        return (
            <Menu>
                <Menu.Item>
                    <Link to='/update'>Settings</Link>
                </Menu.Item>
                <Divider />
                <Menu.Item>
                    <Logout />
                </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { new_messages, new_followers } = state.account;
    return {
        new_messages,
        new_followers,
        isAuthentificated: true,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
