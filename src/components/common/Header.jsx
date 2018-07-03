import React, { Component } from "react";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import "../../styles/header.css";

class Header extends Component {
  render() {
    const { messages, comments } = this.props;
    return (
      <div className="header">
        <div className="title">in touch</div>
        <div className="find">
          <input type="text" size="40" placeholder="Search" />
          <i id="search-icon" className="fa fa-search" />
        </div>
        <div className="message-badge" data-badge={messages}>
          <i className="fa fa-envelope" />
        </div>
        <div className="notify-badge" data-badge={comments}>
          <i className="fa fa-comment" />
        </div>
        <div className="profile-badge">
          <i className="fa fa-user" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.profile.messages,
  comments: state.profile.comments
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
