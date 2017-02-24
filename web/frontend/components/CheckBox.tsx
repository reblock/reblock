import * as React from 'react'
import { default as MuiCheckBox } from 'material-ui/CheckBox'

export const CheckBox = props => {
	const { onChange, name, defaultValue } = props
	return <MuiCheckBox {...props} onCheck={handleInput(onChange, name)} defaultChecked={defaultValue} />
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