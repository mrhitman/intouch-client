import { Avatar, Badge, Col, Divider, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../common/Logout';
import { Actions } from '../../constats';

class Header extends Component {
    render() {
        const { messages, comments, isAuthentificated } = this.props;
        return (
            <Layout.Header className='header' style={{ background: '#2980B9' }}>
                <Row>
                    <Col offset={4} span={2} style={{ fontSize: 24, color: '#FDFEFE' }}>
                        in touch
                        </Col>
                    <Col span={4}>
                        <Input.Search placeholder='search ...' style={{ width: 260 }} />
                    </Col>
                    {isAuthentificated && (
                        <Fragment>
                            <Col offset={7} span={1}>
                                <Badge count={messages}>
                                    <Icon type="message" />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={comments}>
                                    <Icon type="mail" />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={3}>
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
    const { messages, comments } = state.user.profile;
    return {
        messages,
        comments,
        isAuthentificated: state.user.status,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
