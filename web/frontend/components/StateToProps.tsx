import * as React from 'react';

interface StateToPropsProps {
	state: any
	mapStateToProps: (any) => any
	children?: React.ReactNode
}

export const StateToProps = (props: StateToPropsProps) => {
	var { state, mapStateToProps, children } = props
	var childrenProps = mapStateToProps(state)

	return (
		<div>
		{React.Children.map(children, child => {
			if(child) {
				return React.cloneElement(child as React.DOMElement<any, any>, childrenProps)
			}
		})}
		</div>
	)
}