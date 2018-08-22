import { Avatar, Icon, List } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUri } from '../../constats';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Wall extends Component {
    render() {
        const { posts } = this.props;
        return (
            <List
                size='large'
                dataSource={posts}
                renderItem={post => (
                    <List.Item
                        key={post.id}
                        actions={[
                            <IconText type="dislike-o" text={post.dislikes} />,
                            <IconText type="like-o" text={post.likes} />,
                            <IconText type="message" text={post.comments} />
                        ]}
                        style={{ margin: 15 }}
                    >
                        <List.Item.Meta
                            avatar={<Avatar shape='square' src={`${baseUri}/mini_${post.author.photo}`} />}
                            title={<Link to={`${post.author_id}`} > {post.author.name}</Link>}
                            description={post.header}
                        />
                        {post.content}
                    </List.Item>
                )}
            />
        );
    }
}

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToState = (dispatch, ownProps) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Wall);
