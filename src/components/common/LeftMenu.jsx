import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import { Menu, Icon, Divider } from 'antd';

const { Item } = Menu;

class LeftMenu extends Component {
    render() {
        return (
            <Menu mode='inline'>
                <Item>
                    <Icon type="profile" />
                    <span>Personal page</span>
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
                    <Icon type="picture" />
                    <span>Pictures</span>
                </Item>
                <Divider />
                <Item>
                    <Icon type="setting" />
                    <span>Setting</span>
                </Item>
            </Menu>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch({ type: Actions.logout });
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LeftMenu);
