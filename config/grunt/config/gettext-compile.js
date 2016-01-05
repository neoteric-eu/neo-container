module.exports = function (grunt) {
	'use strict';

	var defaultConf = {};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();
			defaultConf[appName] = {
				options: {
					requirejs: true,
					modulePath: 'angular-gettext'
				},
				files: [{
					src: path + '/__misc/_locale/*.po',
					dest: path + '/__misc/_locale/translation.js'
				}]
			};
		});

	return defaultConf;
};
