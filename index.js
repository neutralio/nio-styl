var stylus = require('stylus')
//var path = require('path')
//var nodes = stylus.nodes
//var utils = stylus.utils

exports = module.exports = plugin;
exports.path = __dirname;

function plugin() {
	return function(style){
		style.include(__dirname)
	}
}
