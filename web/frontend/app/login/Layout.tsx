import * as React from 'react';

import { MuiTheme } from '../components/MuiTheme'
import { LoginForm } from '../../components/LoginForm'
import Paper from 'material-ui/Paper'

export const Layout = ({ onResponse }) => {
	return (
		<MuiTheme>
			<div style={wrap}>
				<Paper zDepth={3} style={paper}>
					<div style={titleStyle}>Reblock Login</div>
					<LoginForm admin={true} onResponse={onResponse}/>
				</Paper>
			</div>
		</MuiTheme>
	)
}

const wrap: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	background: "#699cc9",
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