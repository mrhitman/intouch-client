
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Actions } from '../../constats';
import api from '../../services/api';

class Logout extends Component {
    logout = () => {
        const { logout } = this.props
        api.logout().then(logout)
    }

    render() {
        const { isAuthentificated } = this.props
        if (isAuthentificated) {
            return <div onClick={this.logout}>Logout</div>
        }
        return <Redirect to='/' />
    }
}

const mapStateToProps = (state, ownProps) => ({
    isAuthentificated: !!state.account.id,
    account: state.account,
})
const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch({ type: Actions.logout })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Logout)
