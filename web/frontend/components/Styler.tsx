import * as React from 'react'
import _ from 'lodash'

export const Styler = component => {
	return props => {
		return mergeStyle(component(props))
	}
}

const mergeStyle = element => {
	if (element && element.props) {
		let props = element.props
		if (props.__styled) {
			return element
		}

		let style = props.style
		if (props.style && Array.isArray(props.style)) {
			style = props.style.reduce((style, obj) => {
				obj = obj || {}
				return Object.assign(style, obj)
			}, {})
		}

		let children = props.children
		if (props.children) {
			if (Array.isArray(props.children)) {
				children = props.children.map(child => {
					return mergeStyle(child)
				})
			} else if(_.isObject(props.children)) {
				children = mergeStyle(props.children)
			} else {
				children = props.children
			}
		}

		return React.cloneElement(element, {
			style,
			children,
			__styled: true,
		})
	}

	return element
}