import { Action } from 'redux';
import { Actions } from '../constats';

const intitialState = {
    token: null,
    profile: {
        name: '',
        first_name: '',
        last_name: '',
        birthday: '',
        town: '',
        company: '',
        quote: '',
        relationship: '',
        languages: '',
        photo: '',
        priorities: '',
        hobbies: '',
        comments: 0,
        messages: 0,
    },
    status: false,
};

export default (state = intitialState, action: Action ) => {
    switch (action.type) {
        case Actions.login:
            return { ...state, token: action.payload, status: true };
        case Actions.logout:
            return intitialState;
        default:
            return state;
    }
};