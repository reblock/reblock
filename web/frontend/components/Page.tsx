'use strict';

import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export abstract class Page<P, S> extends React.Component<P, S> {
	render() {
		return (
			<MuiThemeProvider>
				{this.content()}
			</MuiThemeProvider>
		);
	}

	abstract content() : JSX.Element
}