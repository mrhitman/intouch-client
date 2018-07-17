import { List } from 'immutable';
import { Action } from 'redux';
import Chance from "chance";

const chance = new Chance();
const getName = () => chance.name().split(" ")[0];

const intitialState = List([
   { id: 1, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 2, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 3, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 4, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 5, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 6, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 7, name: getName(), photoMini: "photo-mini.jpg" },
   { id: 8, name: getName(), photoMini: "photo-mini.jpg" }
]);

export default (state: List = intitialState, action: Action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

