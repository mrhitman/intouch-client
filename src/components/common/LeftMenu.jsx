import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions } from '../../constats';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/leftMenu.css';

class LeftMenu extends Component {
    render() {
        return (
            <div className="left-menu">
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fa fa-file-text-o" />My page
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            <i className="fa fa-newspaper-o" />News
                        </Link>
                    </li>
                    <li>
                        <Link to="/update">
                            <i className="fa fa-comment" />Feedback
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-envelope" />Messages
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-user" />Friends
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-users" />Communities
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-image" />Photos
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-bookmark" />Bookmarks
                        </Link>
                    </li>
                </ul>
                <div className="line" />
                <ul>
                    <li>
                        <Link to="">
                            <i className="fa fa-question-circle" />Help
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fa fa-gear" />Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={this.props.logout}>
                            <i className="fa fa-sign-out" />Logout
                        </Link>
                    </li>
                </ul>
            </div>
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
