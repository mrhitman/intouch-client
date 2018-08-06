import { Divider, Icon, Menu } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const { Item } = Menu;

class LeftMenu extends Component {
    render() {
        const { isAuthentificated } = this.props;
        if (isAuthentificated) return (
            <Menu mode='inline'>
                <Item>
                    <Icon type="profile" />
                    <span><Link to='/' >Personal page</Link></span>
                </Item>
                <Item>
                    <Icon type="message" />
                    <span>Feed</span>
                </Item>
                <Item>
                    <Icon type="mail" />
                    <span>Messages</span>
                </Item>
                <Item>
                    <Icon type="team" />
                    <span>Groups</span>
                </Item>
                <Item>
                    <Icon type="team" />
                    <span><Link to='/friends' >Friends</Link></span>
                </Item>
                <Item>
                    <Icon type="picture" />
                    <span>Pictures</span>
                </Item>
                <Divider />
                <Item>
                    <Icon type="setting" />
                    <span><Link to='/update'>Setting</Link></span>
                </Item>
            </Menu>
        );
        return null;
    }
}

const mapStateToProps = state => ({ isAuthentificated: state.user.status })
const mapDispatchToProps = dispatch => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LeftMenu);
