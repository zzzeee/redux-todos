import React from 'react';
import '../style/Departments.css';

const Departments = ({deplist, clickDelete,}) => {
	return (
		<ul className="listBox">
			{deplist.map((item, index)=>{
				return (
					<li key={index} className="listRow" onClick={e=>{
						clickDelete(item.id);
					}}>
						{item.showName + ' (' + item.name + ')'}
					</li>
				)
			})}
		</ul>
	);
};

export default Departments