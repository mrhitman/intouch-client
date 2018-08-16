import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Actions } from '../constats';

const Profile = Record({
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
    photo: 'photo.jpg',
});

const ActiveUser = Record({
    id: undefined,
    profile: new Profile(),
    friends: List([]),
    followers: List([]),
    followings: List([]),
    recommended: List([]),
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