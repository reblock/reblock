import * as React from 'react'
import injectSheet from 'react-jss'
import jss from 'jss'
import preset from 'jss-preset-default'
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
	showCloseButton?: boolean
	content?: string
	children?: React.ReactNode
}

interface MessageState {
	hide: boolean
}

export class Message extends React.Component<MessageProps, MessageState> {
	render() {
		return (
			<Layout {...this.props} hideMessage={this.state.hide} onClickClose={this.onClickClose}>
				{this.props.children}
			</Layout>
		)
	}

	onClickClose(e) {
		e.preventDefault()

		this.setState({
			hide: true,
		} as MessageState)
	}

	constructor(props) {
		super(props)

		this.state = {
			hide: false,
		}

		this.onClickClose = this.onClickClose.bind(this)
	}
}

interface LayoutProps extends MessageProps {
	hideMessage: boolean
	onClickClose: (any) => any
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

	textArea: {
		width: "100%",
	},

	titleStyle: {
		display: "flex",
		fontWeight: "bold",
	},

	closeButton: {
		width: "16px",
		marginLeft: "auto",
	},

	buttonLink: {
		textDecoration: "none",
		color: "inherit",
	},

	contentStyle: {
		fontSize: "0.8rem",
		marginTop: "5px",
	},

	hide: {
		display: "none",
	},
}

jss.setup(preset())
const {classes} = jss.createStyleSheet(styles).attach()

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
	var {title, content, children, purpose, showCloseButton, onClickClose, hideMessage} = props
	purpose = purpose || "EXPLANATION"
	var color = purposeToColor[purpose]
	var theme = themeScheme[color]
	var { background, font } = jss.createStyleSheet(theme).attach().classes
	var { backgroundStyle, iconStyle, textArea, titleStyle, 
			closeButton, buttonLink, contentStyle, hide, } = classes

	return (
		<div className={classnames(backgroundStyle, background, {[hide]: hideMessage})}>
			{children && 
				<div className={classnames(iconStyle, font)}>
					{React.cloneElement(children as React.DOMElement<any, any>, {style: theme.font})}
				</div>
			}
			<div className={textArea}>
				<div className={classnames(titleStyle, font)}>
					<div>{title}</div>
					{ showCloseButton && 
						<div className={closeButton}><a className={buttonLink} href="#" onClick={onClickClose}>x</a></div>
					}
				</div>
				{content && 
					<div className={classnames(contentStyle, font)}>{content}</div>
				}
			</div>
		</div>
	)
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