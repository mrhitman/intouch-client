import Chance from "chance";
import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from "../constats";

const chance = new Chance();

const intitialState = List(
    [
        {
            id: chance.guid(),
            author: { name: chance.name(), photo: "photo-mini.jpg" },
            title: chance.word(),
            content: chance.paragraph(),
            dislikes: chance.natural({ max: 40 }),
            likes: chance.natural({ max: 100 }),
            comments: chance.natural({ max: 100 }),
        },
        {
            id: chance.guid(),
            author: { name: chance.name(), photo: "photo-mini.jpg" },
            title: chance.word(),
            content: chance.paragraph(),
            dislikes: chance.natural({ max: 40 }),
            likes: chance.natural({ max: 100 }),
            comments: chance.natural({ max: 100 }),
        },
    ]
);

const Post = Record({
    id: undefined,
    author: '',
    title: '',
    content: '',
    dislikes: '',
    likes: '',
    comments: List([])
});

export default (state: List = intitialState, action: Action) => {
    switch (action.type) {
        case Actions.post:
            return state;
        default:
            return state;
    }
};

