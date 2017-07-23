import React from 'react';
import AddDepartment from '../containers/AddDepartment';
import DepartmentList from '../containers/DepartmentList';
import Footer from './Footer';
import '../style/index.css';

const App = () => (
	<div className="bodyContent">
		<AddDepartment />
		<DepartmentList />
		<Footer />
	</div>
);

export default App