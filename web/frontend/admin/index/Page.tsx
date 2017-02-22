'use strict';
import * as React from 'react';

import { Layout } from './Layout'
import { setToken } from '../../lib/token'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export const IndexPage = () => {
	return (
		<MuiThemeProvider>
			<Layout onResponse={
				result => {
					if (result.success) {
						setToken("admin", result.token)
					} 
				}
			}/>
		</MuiThemeProvider>
	)
}