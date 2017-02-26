import * as React from 'react';

import { Layout } from './Layout'
import { setToken } from '../../lib/token'

export const LoginPage = () => {
	return <Layout onResponse={
		result => {
			if (result.success) {
				setToken("app", result.token)
			} 
		}
	}/>
}