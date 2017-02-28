import * as React from 'react'
import { default as MuiTextField } from 'material-ui/TextField'

export const TextField = props => {
	return (
		<div className={props.className}>
			<MuiTextField style={{width:"inherit"}} {...props} />
		</div>
	)
}