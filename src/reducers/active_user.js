import { Action } from 'redux';
import { Record, Map } from 'immutable';
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
});

const initialState = new ActiveUser();

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.getProfile:
            const payload = action.payload.data.shift();
            return state
                .set('id', payload.id)
                .set('profile', payload.profile);

        default:
            return state;
    }
}