import { List } from 'immutable';
import { Action } from 'redux';
import Chance from "chance";

const chance = new Chance();

const intitialState = List([
    {
      id: chance.guid(),
      author: { name: chance.name(), photo: "photo-mini.jpg" },
      content: chance.paragraph()
    },
    {
      id: chance.guid(),
      author: { name: chance.name(), photo: "photo-mini.jpg" },
      content: chance.paragraph()
    }
]);

export default (state: List = intitialState, action: Action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

