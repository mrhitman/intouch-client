import { List } from 'immutable';
import { Action } from 'redux';
import Chance from "chance";
import { Actions } from '../constats';

const chance = new Chance();
const getName = () => chance.name().split(" ")[0];

const intitialState = {
    friends: [],
    followers: [],
    followings: [],
}

export default (state: List = intitialState, action: Action) => {
    switch (action.type) {
        case Actions.getFriends:
            return { ...state, ...action.payload.data };
        case Actions.follow:
            return state;
        case Actions.unfollow:
            return state;
        default:
            return state;
    }
};

