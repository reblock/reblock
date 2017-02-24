'use strict';

import * as React from 'react';
import { isTokenValid } from '../lib/token'

const style = {
	height: '100%',
}

class Layout extends React.Component<{}, {}> {
	componentWillMount() {
		if (!isTokenValid("admin")) {
			this.context.router.push('/admin')
		}
	}

	render() {
		return (
			<div style={style} className="app-container">
				<div style={style} className="app-content">
					{this.props.children}
				</div>
			</div>
		);
	}

	static contextTypes = {
		router: React.PropTypes.func.isRequired
    }
}

export default Layout