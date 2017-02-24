'use strict';

import * as React from 'react';

import { Layout } from './Layout'

export const PostPage = props => {
	return (
		<Layout dataKey={{ ID: props.params.id }} />
	)
}