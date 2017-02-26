import * as React from 'react'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

interface MuiThemeBaseProps {
	theme: any
}

export class MuiThemeBase extends React.Component<MuiThemeBaseProps, {}> {
	componentWillMount() {
		injectTapEventPlugin()
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(this.props.theme)}>
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}