import * as React from 'react'
import injectSheet from 'react-jss'
import * as classnames from 'classnames'

import { Form } from './Form'
import { CheckBox } from './CheckBox'
import { TextField } from './TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
	form: {
		width: "280px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	textField: {
		width: "100%",
	},
	hidden: {
		display: "none",
	},
	button: {
		width: "100%",
		marginTop: "12px",
	},
}

interface LoginFormProps {
	admin: boolean
	onResponse?: (any) => any
	showRememberMe?: boolean
	rememberUser?: boolean
	
	textFieldStyle?: any
	rememberMeStyle?: any
	buttonStyle?: any
}

export const LoginForm = (props: LoginFormProps) => {
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
	
	var formStyle = Object.assign(styles, {
		textFieldStyle,
		rememberMeStyle,
		buttonStyle,
	})

	return new (injectSheet(formStyle)(({classes, children}) => {
		var { form, textField, hidden, button, 
			textFieldStyle, rememberMeStyle, buttonStyle } = classes
		return (
			<Form name="login-form" admin={admin} resource="/auth/login" className={`${form}`} onResponse={onResponse}>
				<TextField name="id" hintText="ID" className={classnames(textField, textFieldStyle)} />
				<TextField name="password" type="password" hintText="Password" className={classnames(textField, textFieldStyle)} />
				<CheckBox name="rememberMe" className={classnames({[hidden]: !showRememberMe}, rememberMeStyle)} label="Remember me" defaultValue={rememberUser} />
				<RaisedButton type="submit" label="Log in" primary={true} className={classnames(button, buttonStyle)}/>
			</Form>
		)
	}))
}