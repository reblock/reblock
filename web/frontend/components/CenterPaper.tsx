import * as React from 'react'
import injectSheet from 'react-jss'
import * as classnames from 'classnames'

import Paper from 'material-ui/Paper'

interface CenterPaperProps {
	title?: string
	wrapStyle?: object
	paperStyle?: object
	titleStyle?: object
}

const styles = {
	wrap: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		background: "#699cc9",
	},
	paper: {
		padding: "20px 10px"
	},
	title: {
		fontWeight: "bold",
		fontSize: "1.2rem",
		textAlign: "center",
		marginBottom: "1rem",
	},
}

export const CenterPaper = (props:CenterPaperProps) => {
	props = Object.assign({
		wrapStyle: {},
		paperStyle: {},
		titleStyle: {},
	}, props)
	var titleText = props.title
	
	var { wrapStyle, paperStyle, titleStyle } = props
	var centerPaperStyle = Object.assign(styles, {
		wrapStyle,
		paperStyle,
		titleStyle,
	})

	return new (injectSheet(centerPaperStyle)(({ classes, children }) => {
		var { wrap, paper, title, 
			wrapStyle, paperStyle, titleStyle } = classes
		return (
			<div className={classnames(wrap, wrapStyle)}>
				<Paper zDepth={3} className={paper}>
					{title && title != "" && <div className={title}>{titleText}</div>}
					{children}		
				</Paper>
			</div>
		)
	}))
}