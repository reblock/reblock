'use strict';
import * as React from 'react';
import { connect } from 'react-redux'

import { Page } from '../../../components/Page'
import { setToken } from '../../../common/lib/token'
import { FetchableComponent } from '../../../common/lib/fetch'
import { FetchProps } from '../../../common/lib/fetch/props'
import { Layout } from './Layout'

export interface LayoutProps extends FetchProps {
}

class PageController extends Page<LayoutProps, {}> {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	content() {
		return <Layout submit={this.submit} status={this.props} />
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
})(PageController)