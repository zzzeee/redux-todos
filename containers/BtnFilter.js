import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import '../style/AddDepartment.css';

let BtnFilter = ({active, title, clickDepartment}) => {
	return (
		<button className="btn-primary" style={{
			background: active ? '#951203' : '#888', 
			margin: '20px',
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