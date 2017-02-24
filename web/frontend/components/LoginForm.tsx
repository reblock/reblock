import * as React from 'react'

import { Styler } from './Styler'
import { Form } from './Form'
import { CheckBox } from './CheckBox'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

interface LoginFormProps {
	admin: boolean
	onResponse?: (any) => any
	showRememberMe?: boolean
	rememberUser?: boolean
	
	textFieldStyle?: any
	rememberMeStyle?: any
	buttonStyle?: any
}

export const LoginForm = Styler((props: LoginFormProps) => {
	props = Object.assign({
		admin: false,
		onResponse: a => (a),
		showRememberMe: false,
		rememberUser: true,
		textFieldStyle: {},
		rememberMeStyle: {},
		buttonStyle: {},
	}, props)
	var { admin, onResponse, showRememberMe, rememberUser, 
		textFieldStyle, rememberMeStyle, buttonStyle } = props
	
	return (
		<Form name="login-form" admin={admin} resource="/auth/login" style={form} onResponse={onResponse}>
			<TextField name="id" hintText="ID" style={[textField, textFieldStyle]} />
			<TextField name="password" type="password" hintText="Password" style={[textField, textFieldStyle]} />
			<CheckBox name="rememberMe" style={[(showRememberMe ? {} : hidden), rememberMeStyle]} label="Remember me" defaultValue={rememberUser} />
			<RaisedButton type="submit" label="Log in" primary={true} style={[button, buttonStyle]}/>
		</Form>
	)
})

const form: React.CSSProperties = {
	width: "280px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}

const textField = {
	width: "100%",
}

const hidden = {
	display: "none",
}

const button = {
	width: "100%",
	marginTop: "12px",
}