import * as React from 'react';
import injectSheet from 'react-jss'

import { MuiTheme } from '../components/MuiTheme'
import { CenterPaper } from '../../components/CenterPaper'
import { Form } from '../../components/Form'
import { TextField } from '../../components/TextField'
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
	button: {
		width: "100%",
		marginTop: "12px",
	},
}

export const Layout = injectSheet(styles)(({ classes, onResponse }) => {
	var { form, textField, button, } = classes
	return (
		<MuiTheme>
			<CenterPaper title="Reblock Signup">
				<Form name="signup-form" resource="/signup" className={form} onResponse={onResponse} loadingMessage="Now signing up...">
					<TextField name="username" className={textField} hintText="user name" />
					<TextField type="email" name="email" className={textField} hintText="email" />
					<TextField type="password" name="password" className={textField} hintText="password" />
					<RaisedButton type="submit" label="Log in" className={button} primary={true} />
				</Form>
			</CenterPaper>
		</MuiTheme>
	)
})