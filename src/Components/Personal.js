import React from 'react';

function Personal(props) {
	// const { firstName, lastName, email, phone } = this.props;
	return (
		<div>
			<h1>{`${props.firstName} ${props.lastName}`}</h1>
			<p>{props.email}</p>
			<p>{props.phone}</p>
		</div>
	);
}

export default Personal;
