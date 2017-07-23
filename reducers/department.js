import {
	ADD_DEPARTMENT,
	DEL_DEPARTMENT,
} from '../actions';

const department = (state = [], action) => {
	switch(action.type) {
		case ADD_DEPARTMENT:
			return [
				...state, {
					id: action.id,
					name: action.name,
					showName: action.showName,
					isDel: false,
				}
			];
		case DEL_DEPARTMENT:
			return state.map(item=>{
				if(action.id === item.id) {
					return Object.assign({}, item, {
							isDel: true,
						});
				}else {
					return item;
				}
			});
		default:
			return state;
	}
}

export default department