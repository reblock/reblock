import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layout'
import { IndexPage } from './index/Page'
import { LoginPage } from './login/Page'
import { SignupPage } from './signup/Page'

export const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={IndexPage}/>
		<Route path="login" component={LoginPage} />
		<Route path="signup" component={SignupPage} />
	</Route>
)