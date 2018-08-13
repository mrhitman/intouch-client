
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Actions } from '../../constats';

class Logout extends Component {
    render() {
        const { isAuthentificated, logout } = this.props;
        if (isAuthentificated) {
            return <div onClick={logout}>Logout</div>;
        }
        return <Redirect to='/' />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { isAuthentificated: state.user.status };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => {
        dispatch({ type: Actions.logout })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Logout);
