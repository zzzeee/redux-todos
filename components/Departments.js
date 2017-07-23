import React from 'react';
import '../style/Departments.css';

const Departments = ({deplist, clickDelete,}) => {
	if(!deplist || deplist.length === 0) return null;
	return (
		<ul className="listBox">
			{deplist.map((item, index)=>{
				return (
					<li key={index} className="listRow" style={{
						color: item.isDel ? '#bbb' : '#333',
					}}>
						{item.showName + ' (' + item.name + ')'}
						{item.isDel ?
							null :
							<span className="deleteText" onClick={e=>{
								!item.isDel && clickDelete(item.id);
							}} >灭门</span>
						}
					</li>
				)
			})}
		</ul>
	);
};

export default Departments