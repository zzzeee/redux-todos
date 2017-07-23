import React from 'react';
import {
	SHOW_ALL,
	SHOW_JOB,
	SHOW_QUIT,
} from '../actions';
import BtnFilter from '../containers/BtnFilter';

const Footer = () => {
	return (
		<div>
			<BtnFilter title="全部" type={SHOW_ALL} />
			<BtnFilter title="在职" type={SHOW_JOB} />
			<BtnFilter title="离职" type={SHOW_QUIT} />
		</div>
	);
};

export default Footer