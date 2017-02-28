import * as React from 'react';

import { MuiTheme } from '../components/MuiTheme'
import { LoginForm } from '../../components/LoginForm'
import { CenterPaper } from '../../components/CenterPaper'
import Paper from 'material-ui/Paper'

export const Layout = ({ onResponse }) => {
	return (
		<MuiTheme>
			<CenterPaper title="Reblock Login">
				<LoginForm admin={true} onResponse={onResponse}/>
			</CenterPaper>
		</MuiTheme>
	)
}