import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wall extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="wall">
                <div className="line" />
                <div className="wallPosts">{posts.map(this.renderPost)}</div>
            </div>
        );
    }

    renderPost(post) {
        return (
            <div className="wallPost" key={post.id}>
                <div className="wallPost__photo">
                    <img src={post.author.photo} alt="" />
                </div>
                <div className="wallPost__name">{post.author.name}</div>
                <div className="wallPost__content">{post.content}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { posts: state.posts };
};
const mapDispatchToState = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Wall);
