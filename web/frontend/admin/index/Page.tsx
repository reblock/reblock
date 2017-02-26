'use strict';
import * as React from 'react';

import { Layout } from './Layout'
import { setToken } from '../../lib/token'

export const IndexPage = () => {
	return (
		<Layout onResponse={
			result => {
				if (result.success) {
					setToken("admin", result.token)
				} 
			}
		}/>
	)
}