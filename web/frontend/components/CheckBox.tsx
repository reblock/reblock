import * as React from 'react'
import { default as MuiCheckBox } from 'material-ui/CheckBox'

export const CheckBox = props => {
	const { onChange, name, defaultValue, className } = props
	return (
		<div className={className}>
			<MuiCheckBox {...props} onCheck={handleInput(onChange, name)} defaultChecked={defaultValue} />
		</div>
	)
}

const handleInput = (onChange, name) => 
	(event, checked) => {
		onChange({
			target: {
				type: 'checkbox',
				name,
				checked,
			}
		})
	}