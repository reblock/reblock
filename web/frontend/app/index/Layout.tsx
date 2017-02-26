import * as React from 'react';

import { MuiTheme } from '../components/MuiTheme'
import AppBar from 'material-ui/AppBar';

export const Layout = props => {
	return (
		<MuiTheme>
			<div>
				<AppBar title="Reblock boilerplate" iconClassNameRight="muidocs-icon-navigation-expand-more" />
				<div>
					<h1>Welcome to Reblock</h1>
					<p>The toolkit for React.js developers</p>
				</div>
			</div>
		</MuiTheme>
	)
}