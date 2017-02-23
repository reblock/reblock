import * as React from 'react'

import { Form } from './Form'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export const LoginForm = ({ title, admin, onResponse }) => {
	return (
		<Form name="login-form" admin={admin} resource="/auth/login" style={form} onResponse={onResponse}>
			<TextField name="id" hintText="ID" style={width100} />
			<TextField name="password" type="password" hintText="Password" style={width100} />
			<RaisedButton type="submit" label="Log in" primary={true} style={width100}/>
		</Form>
	)
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