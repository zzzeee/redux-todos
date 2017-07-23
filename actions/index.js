let nextId = 0;

export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const DEL_DEPARTMENT = 'DEL_DEPARTMENT';
export const SET_FILTER = 'SET_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_JOB = 'SHOW_JOB';
export const SHOW_QUIT = 'SHOW_QUIT';

export const addDepartment = (name, showName) => ({
	type: ADD_DEPARTMENT,
	id: nextId++,
	name,
	showName,
});

export const delDepartment = (id) => ({
	type: DEL_DEPARTMENT,
	id,
});

export const setFilter = (filte) => ({
	type: SET_FILTER,
	filte,
})