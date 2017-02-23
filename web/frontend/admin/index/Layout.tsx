'use strict';
import * as React from 'react';

import { LoginForm } from '../../components/LoginForm'
import Paper from 'material-ui/Paper'

export const Layout = ({ onResponse }) => {
	return (
		<div style={wrap}>
			<Paper zDepth={3} style={paper}>
				<div style={titleStyle}>Reblock Admin</div>
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

const paper = {
	padding: "20px 10px"
}

const titleStyle: React.CSSProperties = {
	fontWeight: "bold",
	fontSize: "1.2rem",
	textAlign: "center",
	marginBottom: "1rem",
}