var admin = require('yargs').argv.admin

var spawn = require('child_process').spawn;
var design = spawn('node', ['.\\build\\design\\watch.js'], {stdio: 'inherit'})

design.on('exit', function (code) {
	console.log('child process exited with code ' + code.toString());
});

var webpackCommand = `.\\node_modules\\.bin\\webpack-dev-server --config .\\build\\design\\webpack.config.js --env.mode=${admin? "admin":"app"}`
var webpack;
if(process.platform == 'win32') {
	webpack = spawn('cmd.exe', ['/c', webpackCommand], {stdio: 'inherit'})
} else {
	webpack = spawn(webpackCommand.replace(/\\/g, '/'), [], {stdio: 'inherit'})
}
 

webpack.on('exit', function (code) {
	console.log('child process exited with code ' + code.toString());
});