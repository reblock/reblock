'use strict';

import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { Form } from '../../components/Form'
import { DisplayTitle } from '../components/DisplayTitle'

export const Layout = ({ dataKey }) => {
	return (
		<MuiThemeProvider>
			<Form style={form} dataKey={dataKey} name="lecture-form" admin={true} resource="/post" >
				<DisplayTitle type='Post' />
				<input type="hidden" name="ID" value="" />
				<TextField name="title" hintText="Title" floatingLabelText="Title" fullWidth={true} />
				<TextField name="slug" hintText="Slug" floatingLabelText="Slug" fullWidth={true} />
				<TextField name="content" hintText="Content" floatingLabelText="Content" fullWidth={true} multiLine={true} rows={15} />
				<div style={buttonWrap}>
					<RaisedButton type="submit" primary={true}>Save</RaisedButton>
				</div>
			</Form>
		</MuiThemeProvider>
	)
}

const buttonWrap: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
}

const form = {
	width: "100%",
	'@media (min-width: 960px)': {
		width: '960px',
	}
}