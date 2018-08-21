import { Avatar, Icon, List } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                itemLayout='vertical'
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
                            avatar={<Avatar src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' />}
                            title={<a href='#'>{post.author.name}</a>}
                            description={post.title}
                        />
                        {post.content}
                    </List.Item>
                )}
            />
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
