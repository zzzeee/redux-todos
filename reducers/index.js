import { combineReducers } from 'redux';
import department from './department';
import filter from './filter';

const reducer = combineReducers({
	department,
	filter,
});

export default reducer