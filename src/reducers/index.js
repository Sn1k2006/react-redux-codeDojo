import {combineReducers} from 'redux';

import todos, * as fromTodos from './todo';
import filter from './filter';
import fetching from './fetching';

export default combineReducers({
  todos,
  filter,
  fetching
});

export function getFiltersTodos(state) {
  return fromTodos.getFilteredTodos(state.todos, state.filter)
}