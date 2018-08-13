import { combineReducers } from 'redux';
import account from './account';
import active_user from './active_user';
import followers from './followers';
import friends from './friends';
import posts from './posts';

export default combineReducers({
    followers,
    friends,
    posts,
    account,
    active_user,
});
