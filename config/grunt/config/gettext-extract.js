module.exports = function (grunt) {
	'use strict';

	var defaultConf = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();
			defaultConf[appName] = {
				files: [{
					src: [path + '/**/*@(.html|.js)'],
					dest: path + '/__misc/_locale/template.pot'
				}]
			};
		});

	return defaultConf;
};
