'use strict';

import * as React from 'react';
import { EditorLayout, EditorLayoutProps } from './common/Editor'
import { FetchableComponent } from '../../common/lib/fetch'

import * as Radium from 'radium'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export interface LayoutProps extends EditorLayoutProps {

}

class PageLayout extends EditorLayout<LayoutProps, {}> {
	constructor(props) {
		super(props)
		this.formName = 'lecture-form'
	}

	main() {
		const { ID, title, slug, content } = this.props.content
		return (
			<MuiThemeProvider>
			<div>
				<form style={form} name={this.formName} action="POST" onSubmit={this.submit}>
					{this.title(this.update, 'Post', title)}
					<input type="hidden" name="ID" value={ID} />
					<TextField name="title" hintText="Title" floatingLabelText="Title" defaultValue={title} fullWidth={true} />
					<TextField name="slug" hintText="Slug" floatingLabelText="Slug" defaultValue={slug} fullWidth={true} />
					<TextField name="content" hintText="Content" floatingLabelText="Content" defaultValue={content} fullWidth={true} multiLine={true} rows={15} />
					{this.props.waiting && (<div>Now saving lecture...</div>)}
					{this.props.succeeded && (<div>Lecture saved</div>)}
					{this.props.failed && (<div>Save failed. Maybe slug problem.</div>)}
					<div style={buttonWrap}>
						<RaisedButton type="submit" primary={true}>Save</RaisedButton>
					</div>
				</form>
			</div>
			</MuiThemeProvider>
		);
	}
}

export const PostPage = FetchableComponent({
	admin: true,
	id: "lecture",
	resource: "/lecture",
})(PageLayout)

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