import * as express from 'express'
import * as marked from 'marked'
marked.setOptions({
	breaks: true
})
import * as shortcode from 'shortcode-parser'

import { handleGetRequest } from '../common/request'

const router = express.Router()

function compileContent(content) {
	return marked(shortcode.parse(content))
}

shortcode.add('image', (text, opts) => {
	return `<img src="/uploads/${text}" alt="${opts.alt || ''}" />`
})

shortcode.add('audio', (text, opts) => {
	return `<audio controls ${opts.loop && "loop"} ${opts.autoplay && "autoplay"}><source src="/uploads/${text}"></audio>`
})

export default router