'use strict';
import * as React from 'react';

import { MuiTheme } from '../components/MuiTheme'
import { LoginForm } from '../../components/LoginForm'
import { CenterPaper } from '../../components/CenterPaper'

export const Layout = ({ onResponse }) => {
	return (
		<MuiTheme>
			<CenterPaper title="Reblock Admin" wrapStyle={wrap}>
				<LoginForm admin={true} onResponse={onResponse}/>
			</CenterPaper>
		</MuiTheme>
	);
}

const wrap = {
	background: "aliceblue",
}