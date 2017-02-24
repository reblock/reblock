import * as React from 'react'
import _ from 'lodash'

import { fetch } from '../lib/fetch'

interface FormProps {
	name: string
	style?: any
	resource: string
	dataKey?: any
	admin?: boolean
	afterLoad?: (any) => any
	onRequest?: (any) => any
	onResponse?: (any) => any
}

interface FormState {
	loaded: boolean
	loading: boolean
	defaultValues: any
	values: any
}

export class Form extends React.Component<FormProps, FormState> {
	componentWillMount() {
		if(this.isValidKey()) {
			this.load()
		}
	}

	render() {
		if(this.state.loading) {
			return this.loading()
		} else {
			return this.content()
		}
	}

	content() {
		let { name, resource, style } = this.props
		return (
			<form name={name} style={style} role="form" action="POST" onSubmit={this.submit}>
				{React.Children.map(this.props.children, (child:any) => {
					if (child) {
						return React.cloneElement(child as React.DOMElement<any, any>, {
							onChange: this.handleInputChange,
							state: this.state,
							defaultValue: child.props && this.state.defaultValues[child.props.name],
						})
					}
				})}
			</form>
		)
	}

	loading() {
		return (
			<div>
				Loading...
			</div>
		)
	}

	handleInputChange(e) {
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			values: Object.assign(this.state.values || {}, {
				[name]: value,
			})
		} as FormState)
	}

	isValidKey() {
		let dataKey = this.props.dataKey
		if(!_.isObject(dataKey)) {
			return false
		}

		let keys = Object.keys(dataKey)
		for(let i = 0; i < keys.length; i++) {
			if(dataKey[keys[i]]) {
				return true
			}
		}
		return false
	}

	load() {
		this.setState({
			loading: true
		} as FormState)
		
		var { admin, dataKey, resource, afterLoad } = this.props
		fetch({
			admin,
			args: dataKey,
			method: 'GET',
			resource,
		})
		.then((result:any) => {
			afterLoad = afterLoad || ((a) => a)
			result = afterLoad(result)
			this.setState({
				loading: false,
				loaded: true,
				defaultValues: result.values,
				values: result.values,
			} as FormState)
		})
	}

	submit(e) {
		e.preventDefault()

		var { resource, admin, onRequest, onResponse } = this.props
		var values = this.state.values
		onRequest = onRequest || ((a) => a)
		onResponse = onResponse || ((a) => a)
		values = onRequest(values)

		this.setState({
			loading: true,
		} as FormState)

		fetch({
			args: values,
			resource,
			admin,
		})
		.then((result:any) => {
			onResponse(result)
			this.setState({
				loading: false,
				values: result.values || {},
			} as FormState)
		})

	}

	constructor(props) {
		super(props)

		this.state = {
			loaded: false,
			loading: false,
			values: {},
			defaultValues: {},
		}

		React.Children.forEach(props.children, (child:any) => {
			if(child && child.props && 
				child.props.name && child.props.defaultValue) {
				this.state.values[child.props.name] = child.props.defaultValue
			}
		})

		this.submit = this.submit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}
}