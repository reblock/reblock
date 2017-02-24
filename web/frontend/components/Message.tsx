import * as React from 'react'

import {
	/* background, border, text */
	blueGrey200, blueGrey300, grey900,
	green200, green300, /* grey900 */
	red200, red300, /* grey900 */
	blue200, blue300, /* grey900 */
	amber200, amber300, /* grey900 */
} from 'material-ui/styles/colors'
import { Styler } from './Styler'

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

export const Message = Styler((props: MessageProps) => {
	var {title, content, purpose} = props
	purpose = purpose || "EXPLANATION"
	var color = purposeToColor[purpose]
	let theme = themeScheme[color]

	return (
		<div style={[backgroundStyle, theme.background]}>
			{props.children && 
				<div style={iconStyle}>
					{React.cloneElement(props.children as React.DOMElement<any, any>, {style: theme.font})}
				</div>
			}
			<div>
				<div style={[titleStyle, theme.font]}>{title}</div>
				<div style={[contentStyle, theme.font]}>{content}</div>
			</div>
		</div>
	)
})

export function messageTheme(customTheme) {
	themeScheme = Object.assign(themeScheme, customTheme)
}

const backgroundStyle = {
	display: "flex",
	padding: "8px",
	border: "2px solid",
	borderRadius: "5px",
	margin: "8px 0",
}

const iconStyle: React.CSSProperties = {
	display: "flex",
	marginRight: "8px",
	alignItems: "center",
	justifyContent: "center",
}

const titleStyle: React.CSSProperties = {
	fontWeight: "bold",
}

const contentStyle = {
	fontSize: "0.8rem",
	marginTop: "5px",
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

var themeScheme = {
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