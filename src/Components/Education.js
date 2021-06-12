import React from 'react';

function Education(props) {
	return (
		<div>
			<h4>{props.college}</h4>
			<p>{props.study}</p>
			<p>Years studied: {props.years}</p>
		</div>
	);
}

export default Education;
