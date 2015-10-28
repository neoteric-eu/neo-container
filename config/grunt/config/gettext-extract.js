module.exports = function (grunt) {
	'use strict';

	var defaultConf = {
		seed: {
			files: [{
				dest: '<%= paths.seed %>/__misc/_locale/template.pot',
				src: [
					'<%= paths.seed %>/**/*@(.html|.js)'
				]
			}]
		}
	};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();
			defaultConf[appName] = {
				files: [{
					src: [path + '/**/*@(.html|.js)', '!' + path + '/__misc/**'],
					dest: path + '/__misc/_locale/template.pot'
				}]
			}
		});

	return defaultConf;
};
