module.exports = function (grunt) {
	'use strict';

	var defaultConf = {
		container: {
			'pre-commit': 'jshint:container'
		},
		seed: {
			options: {
				dest: 'seed/.git/hooks'
			},
			'pre-commit': 'jshint:container'
		}
	};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();

			// Check if dir is git repo
			if (grunt.file.isDir(path + '/.git')) {
				defaultConf[appName] = {
					options: {
						dest: path + '/.git/hooks'
					},
					'pre-commit': 'jshint:container'
				};
			}
		});

	return defaultConf;
};
