import React from 'react';

function WorkExp(props) {
	return (
		<div>
			<h4>{props.companyName}</h4>
			<p>{props.position}</p>
			<p>{props.jobTasks}</p>
			<p>{props.date}</p>
		</div>
	);
}

export default WorkExp;
