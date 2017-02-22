'use strict'
import * as React from 'react'
import { SignupDialog } from './SignupDialog'
import { LoginDialog } from './LoginDialog'

export default class AuthUI extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<SignupDialog />
				<LoginDialog />
			</div>
		);
	}
}