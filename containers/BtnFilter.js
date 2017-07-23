import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

let BtnFilter = ({active, title, clickDepartment}) => {
	return (
		<button style={{
			background: active ? 'red' : '#fff', 
		}} onClick={clickDepartment}>
			{title}
		</button>
	)
}

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.type === state.filter,
	title: ownProps.title,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	clickDepartment: ()=>dispatch(setFilter(ownProps.type))
});

BtnFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(BtnFilter);

export default BtnFilter