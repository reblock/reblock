import * as React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'

export const Spinner = props => {
	return (
		<div style={{margin:"0 auto", height: `${props.size}px`}}>
			<div style={{position: "relative", width: `${props.size}px`}}>
				<RefreshIndicator left={0} top={0} {...props} />
			</div>
		</div>
	)
}