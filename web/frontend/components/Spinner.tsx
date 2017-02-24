import * as React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'

export const Spinner = props => {
	return (
		<div style={{height: `${props.size}px`}}>
			<div style={{position: "relative", margin:`${props.marginVertical || 20}px auto`, width: `${props.size}px`}}>
				<RefreshIndicator left={0} top={0} {...props} />
			</div>
		</div>
	)
}