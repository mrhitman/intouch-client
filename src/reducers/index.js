import { combineReducers } from 'redux';
import account from './account';
import active_user from './active_user';
import posts from './posts';

export default combineReducers({
    posts,
    account,
    active_user,
});
