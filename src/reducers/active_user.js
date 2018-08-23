import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';

const Profile = Record({
    name: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    quote: 'Do and win',
    birthday: '',
    home_town: '',
    city: '',
    country: '',
    company: '',
    gender: 1,
    relation: '',
    language: '',
    life_priorities: '',
    hobbies: '',
    photo: '',
    books: '',
});

const ActiveUser = Record({
    id: undefined,
    profile: new Profile({}),
    friends: List([]),
    followers: List([]),
    followings: List([]),
    recommended: List([]),
});

const initialState = new ActiveUser();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.getProfile:
            const user = action.payload.data;
            return state
                .set('id', user.id)
                .set('profile', new Profile(user.profile));
        case Actions.getFriends:
            const friends = action.payload.data;
            return state
                .set('friends', List(friends.friends))
                .set('followers', List(friends.followers))
                .set('followings', List(friends.followings))
                .set('recommended', List(friends.recommendUsers))
        default:
            return state;
    }
}