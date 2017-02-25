const chokidar = require('chokidar')
const compile = require('../compile')

chokidar.watch(['./frontend'], {
	ignoreInitial: true
})
.on('add', path => {
	compile([path])
	console.log(`compiled ${path}`)
})
.on('change', path => {
	compile([path])
	console.log(`compiled ${path}`)
})

console.log('Design Compiler Server Started')