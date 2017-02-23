'use strict';

import * as React from 'react';
import * as Radium from 'radium'

import { Layout } from './Layout'

export const PostPage = props => {
	return (
		<Layout dataKey={{ ID: props.params.id }} />
	)
}