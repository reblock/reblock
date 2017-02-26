import * as React from 'react';

import { MuiTheme } from '../components/MuiTheme'
import { Form } from '../../components/Form'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export const Layout = ({ onResponse }) => {
	return (
		<MuiTheme>
			<div style={wrap}>
				<Paper zDepth={3} style={paper}>
					<div style={titleStyle}>Reblock Signup</div>
					<Form name="signup-form" resource="/signup" style={form} onResponse={onResponse} loadingMessage="Now signing up...">
						<TextField name="username" style={textField} hintText="user name" />
						<TextField type="email" name="email" style={textField} hintText="email" />
						<TextField type="password" name="password" style={textField} hintText="password" />
						<RaisedButton type="submit" label="Log in" style={button} primary={true} />
					</Form>
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

const form: React.CSSProperties = {
	width: "280px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}

const textField = {
	width: "100%",
}

const button = {
	width: "100%",
	marginTop: "12px",
}