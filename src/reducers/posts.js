import Chance from "chance";
import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from "../constats";

const chance = new Chance();

const PostItem = Record({
    id: undefined,
    author: '',
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
            return state
                .insert(0, ...action.payload.map(post => new PostItem(post)));
        case Actions.post:
            return state
                .insert(0, new PostItem(action.payload));
        default:
            return state;
    }
};

