import * as React from 'react'

import { MuiThemeBase } from '../../components/MuiThemeBase'

export const MuiTheme = props =>  {
	return (
		<MuiThemeBase theme={{}}>
			{props.children}
		</MuiThemeBase>
	)
}