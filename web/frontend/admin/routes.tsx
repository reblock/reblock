import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './Layout'
import { IndexPage } from './index/Page'
import { PostPage } from './post/Page'

export const routes = (
	<Route path="/admin" component={Layout}>
		<IndexRoute component={IndexPage}/>
		<Route path="post(/:id)" component={PostPage} />
	</Route>
)