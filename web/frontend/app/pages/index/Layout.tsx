'use strict';

import * as React from 'react';
import { Page } from '../../../common/Page'

import AppBar from 'material-ui/AppBar';

class IndexPage extends Page<{}, {}> {
	content() {
		return (
			<div>
				<AppBar title="Reblock boilerplate" iconClassNameRight="muidocs-icon-navigation-expand-more" />
				<div className="wrap">
					<h1>Welcome to Reblock</h1>
					<p>The toolkit for React.js developers</p>
				</div>
			</div>
		)
	}
}

export default IndexPage