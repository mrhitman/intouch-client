import { Avatar, Badge, Col, Divider, Dropdown, Icon, Input, Layout, Menu, Row } from 'antd'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../Common/Logout'

const OverlayMenu = () => (
    <Menu>
        <Menu.Item>
            <Link to='/update'>Settings</Link>
        </Menu.Item>
        <Divider />
        <Menu.Item>
            <Logout />
        </Menu.Item>
    </Menu>
)

class Header extends Component {
    render() {
        const { isAuthentificated } = this.props
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
                                <Badge count={0}>
                                    <Icon type='message' />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={0}>
                                    <Icon type='mail' />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Badge count={0}>
                                    <Icon type='user' />
                                </Badge>
                            </Col>
                            <Col span={1}>
                                <Dropdown overlay={<OverlayMenu />} trigger={['click']}>
                                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                                </Dropdown>
                            </Col>
                        </Fragment>
                    )}
                </Row>
            </Layout.Header>
        )
    }

    drawMenu() {
        return
    }
}

const mapStateToProps = state => {
    return {
        isAuthentificated: !!state.account.id,
    }
}
const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)
