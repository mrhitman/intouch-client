import { Action } from 'redux';
import { Record, Map, List } from 'immutable';
import { Actions } from '../constats';


const ActiveUser = Record({
    id: undefined,
    profile: new Record({
        name: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        quote: 'Do and win',
        birtday: '',
        hometown: '',
        company: '',
        relationships: '',
        language: '',
        life_priorities: '',
        hobbies: '',
    }),
    friends: new List([
    ]),
    followers: new List([
    ]),
    followings: new List([
    ]),
    recommended: new List([
    ]),
});

const initialState = new ActiveUser();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.getProfile:
            const user = action.payload.data.shift();
            return state
                .set('id', user.id)
                .set('profile', user.profile);
        case Actions.getFriends:
            const friends = action.payload.data;
            return state
                .set('friends', friends.friends)
                .set('followers', friends.followers)
                .set('followings', friends.followings)
                .set('recommended', friends.recommendUsers)
        default:
            return state;
    }
}