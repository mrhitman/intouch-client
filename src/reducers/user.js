import { Action } from 'redux';
import { Actions } from '../constats';

const intitialState = {
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id'),
    profile: {
        name: '',
        email: '',
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
    status: !!localStorage.getItem('id'),
};

export default (state = intitialState, action: Action ) => {
    switch (action.type) {
        case Actions.login:
            localStorage.setItem('id', action.payload.user.id);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                id: action.payload.user.id,
                status: true
            };
        case Actions.logout:
            localStorage.clear();
            return intitialState;
        case Actions.getProfile:
            const userData = action.payload.data[0];
            return { 
                ...state,
                email: userData.email,
                profile: {
                    ...state.profile,
                    ...userData.profile,
                }
            };
        default:
            return state;
    }
};