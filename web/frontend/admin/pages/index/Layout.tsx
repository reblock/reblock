'use strict';
import * as React from 'react';
import { connect } from 'react-redux'

import { setToken } from '../../../common/lib/token'
import { FetchableComponent } from '../../../common/lib/fetch'
import { FetchProps } from '../../../common/lib/fetch/props'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Page } from '../../../components/Page'
import Paper from 'material-ui/Paper'

export interface LayoutProps extends FetchProps {
}

class Layout extends Page<LayoutProps, {}> {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	content() {
		return (
			<div style={wrap}>
				<Paper zDepth={3} style={paper}>
					<div style={title}>Reblock Admin</div>
					<form name="login-form" style={form} role="form">
						{this.props.failed && (<div>Wrong ID or Password</div>)}
						<TextField name="id" hintText="ID" style={width100} />
						<TextField name="password" type="password" hintText="Password" style={width100} />
						{this.props.waiting && (<div>Now logging in...</div>)}
						{this.props.succeeded && (<div>Login Success</div>)}
						<RaisedButton type="submit" onClick={this.submit} label="Log in" primary={true} style={width100}/>
					</form>
				</Paper>
			</div>
		);
	}

	submit(e) {
		e.preventDefault()

		var form = document.forms['login-form']
		let user = {
			id: form.id.value,
			password: form.password.value
		}

		this.props.submit(user)
	}
}

export const IndexPage = FetchableComponent({
	admin: true,
	id: "login",
	resource: "/auth/login",
	processResult: result => {
		if (result.success) {
			setToken(result.token)
		} 
	}
})(Layout)

const wrap: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
	background: "aliceblue",
}

const paper = {
	padding: "20px 10px",
}

const title: React.CSSProperties = {
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