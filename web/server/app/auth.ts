import * as express from 'express'
import * as async from 'async'
import * as _ from 'lodash'
import * as zxcvbn from 'zxcvbn'
import * as jwt from 'jsonwebtoken'
var sodium = require('sodium').api

import * as fs from 'fs'
import * as path from 'path'

import { User } from '../common/data'
import { validEmailFormat } from '../common/email'

const router = express.Router()

export const INVALID_EMAIL = "INVALID_EMAIL"
export const LONG_USERNAME = "LONG_USERNAME"
export const DUPLICATE_EMAIL = "DUPLICATE_EMAIL"
export const WEAK_PASSWORD = "WEAK_PASSWORD"

router.post('/signup', (req, res) => {
	const { email, username, password } = req.body
	var pwFeedback;
	async.parallel([
		done => {
			if(username.length <= 50) {
				done()
			} else {
				done(null, LONG_USERNAME)
			}
		},
		// Check email
		done => {
			if(validEmailFormat(email)) {
				User.then(db => {
					db.count({ where: { email }})
					.then(count => {
						if (count == 0) {
							done()
						} else {
							done(null, DUPLICATE_EMAIL)
						}
					})
				})
			} else {
				done(null, INVALID_EMAIL)
			}
		},
		// Check password
		done => {
			let pwCheck = zxcvbn(password)
			if(pwCheck.score > 2) {
				done()
			} else {
				done(null, WEAK_PASSWORD)
				pwFeedback = pwCheck.feedback
			}
		}
	],
	(err, results) => {
		_.pull(results, undefined)
		if(results.length == 0) {
			User.then(db => {
				return db.create({
					username: username,
					email: email,
					password: sodium.crypto_pwhash_str(
						Buffer.from(password, 'utf8'),
						sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
						sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
					),
					accessLevel: "free",
					signupDate: new Date(),
					lastLogin: new Date(),
				})
			})
			.then(result => {
				res.json(Object.assign({
					success: true
				}, loginData(result)))
			})
		} else {
			res.json({
				success: false,
				error: results,
				feedback: pwFeedback
			})
		}
	})
})

router.post('/login', (req, res) => {
	var config = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json')).toString())
	let { email, password } = req.body

	User.then(db => {
		return db.find({ where: { email }})
	})
	.then((user:any) => {
		if(user.email == email && 
			sodium.crypto_pwhash_str_verify(user.password, Buffer.from(password, 'utf8'))) {
			res.json(Object.assign({
				success: true,
			}, loginData(user)))
		} else {
			res.json({
				success: false,
			})
		}
	})
	.catch(err => {
		res.json({
			success: false,
		})
	})
})

function loginData(result) {
	var config = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json')).toString())
	const { username, accessLevel } = result
	let token = jwt.sign({ email: result.email }, config.secret, {
		expiresIn: "3d"
	})
	return {
		username,
		accessLevel,
		token,
	}
}

router.post('/renew-token', (req, res) => {
	var config = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json')).toString())

	jwt.verify(req.body.token, config.secret, (err, decoded) => {
		if (err) {
			res.json({
				success: false,
			})
		} else {
			let email = decoded.email
			User.then(db => {
				return db.find({ where: { email }})
			})
			.then((result:any) => {
				if(result) {
					let token = jwt.sign({ email }, config.secret, {
						expiresIn: "3d"
					})
					res.json({
						success: true,
						token,
						username: result.username,
						accessLevel: result.accessLevel
					})
				} else {
					res.json({
						success: false,
					})
				}
			})
		}
	})
})

export default router