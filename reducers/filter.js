import {
	SET_FILTER,
} from '../actions';

const filter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case SET_FILTER:
			return action.filte
		default:
			return state;
	}
}

export default filter