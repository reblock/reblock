import * as React from 'react'
import injectSheet from 'react-jss'
import * as classnames from 'classnames'

import {
	/* background, border, text */
	blueGrey200, blueGrey300, grey900,
	green200, green300, /* grey900 */
	red200, red300, /* grey900 */
	blue200, blue300, /* grey900 */
	amber200, amber300, /* grey900 */
} from 'material-ui/styles/colors'

export type MessagePurpose =
	"GRAY" | "EXPLANATION" | 
	"GREEN" | "GOOD" | "SUCCESS" |
	"RED" | "BAD" | "FAIL" | "WRONG" |
	"BLUE" | "NOTICE" | "INFO" |
	"ORANGE" | "WARNING"

interface MessageProps {
	title: string
	purpose?: MessagePurpose
	content?: string
	children?: React.ReactNode
}

interface MessageState {

}

export class Message extends React.Component<MessageProps, MessageState> {
	render() {
		return (
			<Layout {...this.props}>
				{this.props.children}
			</Layout>
		)
	}
}

interface LayoutProps extends MessageProps {
	classes: any
}

const styles = {
	backgroundStyle: {
		display: "flex",
		padding: "8px",
		border: "2px solid",
		borderRadius: "5px",
		margin: "8px 0",
	},

	iconStyle: {
		display: "flex",
		marginRight: "8px",
		alignItems: "center",
		justifyContent: "center",
	},

	titleStyle: {
		fontWeight: "bold",
	},

	contentStyle: {
		fontSize: "0.8rem",
		marginTop: "5px",
	},
}

const themeScheme = {
	"GRAY": {
		background: {
			borderColor: blueGrey300,
			background: blueGrey200,
		},
		font: {
			color: grey900,
		},
	},
	"GREEN": {
		background: {
			borderColor: green300,
			background: green200,
		},
		font: {
			color: grey900,
		},
	},
	"RED": {
		background: {
			borderColor: red300,
			background: red200,
		},
		font: {
			color: grey900,
		},
	},
	"BLUE": {
		background: {
			borderColor: blue300,
			background: blue200,
		},
		font: {
			color: grey900,
		},
	},
	"ORANGE": {
		background: {
			borderColor: amber300,
			background: amber200,
		},
		font: {
			color: grey900,
		},
	},
}

export const Layout = (props:LayoutProps) => {
	var {title, content, purpose, classes} = props
	purpose = purpose || "EXPLANATION"
	var color = purposeToColor[purpose]
	var theme = themeScheme[color]
	var messageStyle = Object.assign(styles, theme)

	return new (injectSheet(messageStyle)(({classes, children}) => {
		return (
			<div className={classnames(classes.backgroundStyle, classes.background)}>
				{children && 
					<div className={classes.iconStyle}>
						{React.cloneElement(children as React.DOMElement<any, any>, {style: theme.font})}
					</div>
				}
				<div>
					<div className={classes.titleStyle}>{title}</div>
					{content && 
						<div className={classes.contentStyle}>{content}</div>
					}
				</div>
			</div>
		)
	}))
}


const purposeToColor = {
	"GRAY": "GRAY",
	"EXPLANATION": "GRAY",

	"GREEN": "GREEN",
	"GOOD": "GREEN",
	"SUCCESS": "GREEN",

	"RED": "RED",
	"BAD": "RED",
	"FAIL": "RED",
	"WRONG": "RED",

	"BLUE": "BLUE",
	"NOTICE": "BLUE",
	"INFO": "BLUE",
	
	"ORANGE": "ORANGE",
	"WARNING": "ORANGE",
}