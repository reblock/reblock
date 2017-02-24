const rollup = require('rollup').rollup
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const nodeGlobals = require('rollup-plugin-node-globals')
const nodeBuiltins = require('rollup-plugin-node-builtins')
const json = require('rollup-plugin-json')
const rollupReplace = require('rollup-plugin-replace')

const uglify = require('uglify-js')
const CleanCss = require('clean-css')

const fs = require('fs')
const path = require('path')
const { destDir, destFilePath, ensureWrite, files, removeFrontend } = require('./util')

var cache;

exports.js = (dir, production) => {
	console.log(`JavaScript bundling for ${dir} started`)
	var entryName = destFilePath(dir + '/client.js', production, '.client')
	var destFileName = destFilePath(dir + '/bundle.js', production, 'static')
	destFileName = removeFrontend(destFileName)
	return rollup({
		entry: entryName,
		context: 'window',
		plugins: [
			rollupReplace({
				'process.env.NODE_ENV': JSON.stringify( 'production' ),
			}),
			nodeResolve({ 
				browser: true, 
				preferBuiltins: true,
			}),
			json(),
			commonjs({
				namedExports: {
					'node_modules/react/react.js': [ 'Children', 'Component', 'PropTypes', 'createElement' ],
				}
			}),
			nodeGlobals(),
			nodeBuiltins(),
		],
		cache: cache
	})
	.then(bundle => {
		var result = bundle.generate({
			format: 'iife'
		});

		// Cache our bundle for later use (optional)
		cache = bundle;

		ensureWrite(destFileName, result.code );
		return bundle;
	})
	.then(bundle => {
		if(production) {
			console.log(`Javascript minify for ${dir} started`)
			let result = uglify.minify(destFileName)
			ensureWrite(destFileName, result.code)
			console.log(`Javascript minify for ${dir} ended`)
		}
		console.log(`JavaScript bundling for ${dir} finished`)
		return bundle
	})
}