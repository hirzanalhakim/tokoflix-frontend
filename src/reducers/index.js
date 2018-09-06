import {combineReducers} from 'redux';
import user from './user';
import movie from './movie';

export default combineReducers({
  user : user,
  movie : movie,
})