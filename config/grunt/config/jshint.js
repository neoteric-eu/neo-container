/*
 * Validate files with JSHint, ensuring consistent code style.
 */

module.exports = function (grunt) {
	'use strict';

	var defaultConf = {
		options: {
			reporter: require('jshint-stylish'),
			jshintrc: '.jshintrc'
		},
		container: {
			options: {
				ignores: [
					'<%= paths.src %>/require.js',
					'<%= paths.src %>/assets',
					'<%= paths.apps %>',
					'<%= paths.seed %>'
				]
			},
			src: [
				'<%= paths.src %>',
				'config/',
				'Gruntfile.js'
			]
		},
		seed: {
			options: {
				ignores: [
					'<%= paths.seed %>/__misc/'
				]
			},
			src: ['<%= paths.seed %>']
		}
	};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();

			defaultConf[appName] = {
				options: {
					ignores: [
						path + '/__misc/'
					]
				},
				src: [path]
			};
		});

	return defaultConf;
};
