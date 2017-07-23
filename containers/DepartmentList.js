import { connect } from 'react-redux';
import { 
	delDepartment,
	// SHOW_ALL,
	SHOW_JOB,
	SHOW_QUIT,
} from '../actions';
import Departments from '../components/Departments';

let getDepartmentList = (state, filte) => {
	switch(filte) {
		case SHOW_JOB:
			return state.filter((depart)=>!depart.isDel);
		case SHOW_QUIT:
			return state.filter((depart)=>depart.isDel);
		default:
			return state;
	}
};

const mapStateToProps = (state) => ({
	deplist: getDepartmentList(state.department, state.filter),
});

const mapDispatchToProps = {
	clickDelete: delDepartment,
}

const DepartmentList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Departments);

export default DepartmentList