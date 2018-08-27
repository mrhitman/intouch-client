import { Avatar, Icon, List, Input, Col, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUri, Actions } from '../../constats';
import api from '../../services/api';

const IconText = ({ type, text, onClick }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} onClick={onClick} />
        {text}
    </span>
);

class Wall extends Component {

    post = e => {
        const { account, active_user, doPost } = this.props;
        if (e.key === 'Enter') {
            if (e.target.value.trim()) {
                const post = {
                    header: '',
                    content: e.target.value,
                    author_id: account.id,
                    owner_id: active_user.id,
                };
                api.doPost(post)
                    .then(doPost);
            }
            e.target.value = '';
            e.preventDefault();
            e.stopPropagation();
        }
    }

    addLike = item_id => {
        api.addLike(item_id);
    }

    render() {
        const { posts, account } = this.props;
        return (
            <Fragment >
                <Row>
                    <Col span={22}>
                        <Input.TextArea autosize={{ minRows: 1, maxRows: 3 }} onKeyDown={this.post} />
                    </Col>
                </Row>
                <List
                    size='large'
                    dataSource={posts}
                    itemLayout='vertical'
                    renderItem={post => (
                        <List.Item
                            key={post.id}
                            actions={[
                                <IconText type="dislike-o" text={post.dislikes} />,
                                <IconText type="like-o" text={post.likes} onClick={() => this.addLike(post.id)} />,
                                <IconText type="message" text={post.comments} />
                            ]}
                            style={{ margin: 15 }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar shape='square' src={`${baseUri}/mini_${post.author.photo}`} />}
                                title={post.author_id != account.id && <Link to={`${post.author_id}`} > {post.author.name}</Link>}
                            />
                            {post.content}
                        </List.Item>
                    )}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
});
const mapDispatchToState = dispatch => ({
    doPost: payload => {
        dispatch({ type: Actions.post, payload: payload.data });
    },
    addLike: payload => {
        dispatch({ type: Actions.addLike, payload });
    },
    deleteLike: payload => {

    },
});

export default connect(
    mapStateToProps,
    mapDispatchToState,
)(Wall);
