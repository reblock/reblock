import * as React from 'react'

import { fetch } from '../lib/fetch'

interface FormProps {
	name: string
	style?: any
	resource: string
	ID?: string | number
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
	render() {
		if(this.state.loading) {
			return this.loading()
		} else {
			return this.content()
		}
	}

	content() {
		let { name, resource, ID, style } = this.props
		return (
			<form name={name} style={style} role="form" action="POST" onSubmit={this.submit}>
				{React.Children.map(this.props.children, child => {
					if (child) {
						return React.cloneElement(child as React.DOMElement<any, any>, {
							onChange: this.handleInputChange,
							state: this.state,
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