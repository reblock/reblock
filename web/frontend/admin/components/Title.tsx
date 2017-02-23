import * as React from 'react';

export const Title = ({ update, type, title}) => {
	if(!update) {
		return <h1>Add New {type}</h1>
	} else {
		return <h1>Edit {type}: {title}</h1>
	}
}