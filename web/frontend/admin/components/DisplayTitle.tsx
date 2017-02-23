import * as React from 'react';
import _ from 'lodash'

import { StateToProps } from '../../components/StateToProps'
import { Title } from './Title'

interface DisplayTitleProps {
	type: string
	state?: any
}

export const DisplayTitle = (props: DisplayTitleProps) => {
	var { state, type } = props
	return (
		<StateToProps state={state} mapStateToProps={mapper}>
			<Title type={type} title="" update={false} />
		</StateToProps>
	)
}

const mapper = state => {
	return {
		update: !_.isEmpty(state.initialValues),
		title: state.initialValues.title,
	}
}