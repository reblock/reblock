'use strict';

import * as React from 'react';
import * as Radium from 'radium'

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
			</div>
		);
	}
}

export default Radium(Layout)