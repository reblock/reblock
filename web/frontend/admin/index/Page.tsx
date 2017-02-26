'use strict';
import * as React from 'react';

import { Layout } from './Layout'
import { setToken } from '../../lib/token'

import { MuiTheme } from '../components/MuiTheme'

export const IndexPage = () => {
	return (
		<MuiTheme>
			<Layout onResponse={
				result => {
					if (result.success) {
						setToken("admin", result.token)
					} 
				}
			}/>
		</MuiTheme>
	)
}