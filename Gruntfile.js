module.exports = function (grunt) {
	'use strict';

	var path = require('path');
	var pkg = require('./package.json');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt/config'),

		data: {
			paths: {
				src: 'src',
				dist: 'dist',
				tmp: '.tmp',
				test: 'test',
				docs: 'docs',
				release: 'release',
				assets: 'src/assets',
				apps: 'src/apps',
				seed: 'src/seed',
				config: 'src/config'
			}
		},

		// Pass config to load-grunt-tasks.
		loadGruntTasks: {
			config: pkg
		}
	});

	grunt.task.renameTask('nexusDeployer', 'nexus');

	grunt.task.renameTask('ngtemplates', 'templates-cache');
	// make duplicate config of tasks
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.task.renameTask('ngtemplates', 'templates-cache-clean');

	grunt.task.renameTask('nggettext_compile', 'gettext-compile');
	grunt.task.renameTask('nggettext_extract', 'gettext-extract');
	grunt.task.renameTask('ngconstant', 'config');
};
