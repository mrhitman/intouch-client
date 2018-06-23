import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
    render() {
        
        return (
            <div className="middle">
                <div className="photo">
                    <img src="photo.jpg" alt="" />
                </div>
                <div className="sendButton">Send a message</div>
                <div className="info">Unknown is your friend</div>
                <div className="line" />
                <div>
                    <div className="status">{this.props.followerCount} followers</div>
                    {this.renderPeople(this.props.followers)}
                    <div className="line" />
                    <div className="status">{this.props.friendCount} friends</div>
                    {this.renderPeople(this.props.friends)}
                </div>
                <div className="line" />
            </div>
        );
    }

    renderPeople(people) {
        return (
            <div className="people">
                {people.map(person => (
                    <div className="person" key={person.id}>
                        <img src="photo-mini.jpg" alt="" />
                        <a href="#">
                            <div className="name">{person.name}</div>
                        </a>
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        followerCount: state.followerCount,
        friendCount: state.friendCount,
        followers: state.followers,
        friends: state.friends,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Content);
