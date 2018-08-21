import Chance from "chance";
import { List } from 'immutable';
import { Action } from 'redux';

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

export default (state: List = intitialState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

