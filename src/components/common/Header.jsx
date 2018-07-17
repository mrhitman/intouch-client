import React, { Component } from "react";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import "../../styles/header.css";

class Header extends Component {
  render() {
    const { messages, comments, isAuthentificated } = this.props;
    return (
      <div className="header">
        <div className="title">in touch</div>
        <div className="find">
          <input type="text" size="40" placeholder="Search" />
          <i id="search-icon" className="fa fa-search" />
        </div>
        {isAuthentificated && <div className="message-badge" data-badge={messages}>
          <i className="fa fa-envelope" />
        </div>}
        {isAuthentificated && <div className="notify-badge" data-badge={comments}>
          <i className="fa fa-comment" />
        </div>}
        {isAuthentificated && <div className="profile-badge">
          <i className="fa fa-user" />
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { messages, comments } = state.user.profile;
  return {
     messages: messages > 0 ? messages : undefined,
     comments: comments > 0 ? comments : undefined,
     isAuthentificated: state.user.status,
  };
}
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
