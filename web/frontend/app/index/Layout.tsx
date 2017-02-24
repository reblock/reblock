import * as React from 'react';
import { Page } from '../../components/Page'

import AppBar from 'material-ui/AppBar';

export class Layout extends Page<{}, {}> {
	content() {
		return (
			<div>
				<AppBar title="Reblock boilerplate" iconClassNameRight="muidocs-icon-navigation-expand-more" />
				<div>
					<h1>Welcome to Reblock</h1>
					<p>The toolkit for React.js developers</p>
				</div>
			</div>
		)
	}
}