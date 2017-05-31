import { combineReducers } from 'redux';
import users from './users'
import quizzesReducer from './quizzes-reducer'

const reducers = combineReducers({
  users,
  quizzesReducer
})

export default reducers;
