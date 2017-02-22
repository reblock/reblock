'use strict';

import * as React from 'react';
import { Link } from 'react-router'
import MainBar from '../common/menu/MainBar'
import * as CSSModules from 'react-css-modules';
import styles from './style.css'

class IndexPage extends React.Component<{}, {}> {
	render() {
		return (
			<div styleName="index-wrap">
				<div className="wrap">
					<h1>Welcome to Reblock</h1>
					<p>The toolkit for React.js developers</p>
				</div>
			</div>
		);
	}
}

export default CSSModules(IndexPage, styles)