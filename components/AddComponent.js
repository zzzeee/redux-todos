import React from 'react';
import { addDepartment } from '../actions';
import '../style/AddDepartment.css';

const AddComponent = ({ dispatch }) => {
	let input1 = null, input2 = null;
	return (
		<div className="boxStyle">
			<div className="input-group">
				<span className="input-group-addon">部门名称：</span>
				<input type="text" ref={node=>input1=node} className="form-control" />
			</div>
			<div className="input-group">
				<span className="input-group-addon">显示名称：</span>
				<input type="text" ref={node=>input2=node} className="form-control" />
			</div>
			<input type="submit" className="btn-primary" value="提交" onClick={(e)=>{
				if(!input1 || !input2 || !input1.value || !input2.value) return;
				let name = input1.value.trim();
				let showName = input2.value.trim();
				dispatch(addDepartment(name, showName));
				input1.value = '';
				input2.value = '';
			}} />
		</div>
	);
}

export default AddComponent