import React from 'react';
import '../style/Departments.css';

const Departments = ({deplist, clickDelete,}) => {
	return (
		<ul className="listBox">
			{deplist.map((item, index)=>{
				return (
					<li key={index} className="listRow" onClick={e=>{
						!item.isDel && clickDelete(item.id);
					}} style={{
						color: item.isDel ? '#bbb' : '#333',
						cursor: item.isDel ? 'text' : 'pointer',
					}}>
						{item.showName + ' (' + item.name + ')'}
					</li>
				)
			})}
		</ul>
	);
};

export default Departments