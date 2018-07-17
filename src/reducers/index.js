import { combineReducers } from 'redux';
import user from './user';
import followers from './followers';
import friends from './friends';
import posts from './posts';

export default combineReducers({
    user,
    followers,
    friends,
    posts,
});
