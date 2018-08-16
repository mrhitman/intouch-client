import { combineReducers } from 'redux';
import account from './account';
import active_user from './active_user';
import chat from './chat';
import posts from './posts';

export default combineReducers({
    account,
    active_user,
    chat,
    posts,
});
