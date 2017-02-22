import * as express from 'express'
import { handleRequest } from '../common/request'
import { Post, } from '../common/data'

const router = express.Router()

handleRequest({
	router, 
	Model: Post, 
	path: '/post'
})


export default router