'use strict';
import * as React from 'react';

import { LoginForm } from '../../../components/LoginForm'
import Paper from 'material-ui/Paper'

export const Layout = ({ submit, status }) => {
	return (
		<div style={wrap}>
			<Paper zDepth={3}>
				<LoginForm title="Reblock Admin" submit={submit} status={status}/>
			</Paper>
		</div>
	);
}

const wrap: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	background: "aliceblue",
}