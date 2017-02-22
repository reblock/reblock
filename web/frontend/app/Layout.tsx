'use strict';

import * as React from 'react';
import * as Radium from 'radium'

import AuthUI from './pages/common/auth/UIPackage'

const style = {
	height: '100%',
}

class Layout extends React.Component<{}, {}> {
	render() {
		return (
			<div style={style} className="app-container">
				<div style={style} className="app-content">
					{this.props.children}
				</div>
				<AuthUI />
			</div>
		);
	}
}

export default Radium(Layout)