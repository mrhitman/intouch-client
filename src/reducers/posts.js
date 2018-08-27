import { List, Map, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from "../constats";

const PostItem = Record({
    id: undefined,
    author: undefined,
    author_id: '',
    header: '',
    content: '',
    views: 0,
    dislikes: 0,
    likes: 0,
    created_at: 0,
    updated_at: 0,
    comments: List([]),
});

const intitialState = List([]);

export default (state: List = intitialState, action: Action) => {
    switch (action.type) {
        case Actions.getPosts:
            const { posts, authors } = action.payload;
            const authorsMap = authors.reduce((acc, author) => acc.set(author.id, author), Map({}));
            return List(posts.map(post => new PostItem({ ...post, author: authorsMap.get(post.author_id) })))
                .reverse();
        case Actions.post:
            const { post, author } = action.payload;
            return state
                .insert(0, new PostItem({ ...post, author }));
        case Actions.addLike:
            const id = action.payload;
            return state.update(state.findIndex(item => item.id == id), item => item.set('likes', item.likes + 1));
        default:
            return state;
    }
};

