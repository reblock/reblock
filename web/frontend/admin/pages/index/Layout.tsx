'use strict';
import * as React from 'react';

import { LoginForm } from '../../../components/LoginForm'
import Paper from 'material-ui/Paper'

export const Layout = ({ onResponse }) => {
	return (
		<div style={wrap}>
			<Paper zDepth={3}>
				<LoginForm title="Reblock Admin" admin={true} onResponse={onResponse}/>
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