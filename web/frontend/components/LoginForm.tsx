import * as React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export const LoginForm = ({ title, submit, status }) => {
	return (
		<div style={wrap}>
			<div style={titleStyle}>{title}</div>
			<form name="login-form" style={form} role="form">
				{status.failed && (<div>Wrong ID or Password</div>)}
				<TextField name="id" hintText="ID" style={width100} />
				<TextField name="password" type="password" hintText="Password" style={width100} />
				{status.waiting && (<div>Now logging in...</div>)}
				{status.succeeded && (<div>Login Success</div>)}
				<RaisedButton type="submit" onClick={submit} label="Log in" primary={true} style={width100}/>
			</form>
		</div>
	)
}

const wrap = {
	padding: "20px 10px",
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

const width100 = {
	width: "100%",
}