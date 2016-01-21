module.exports = function (grunt) {
	'use strict';

	var path = require('path');
	var pkg = require('./package.json');
	var bower = grunt.file.readJSON('src/bower.json');

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt/config'),

		data: {
			meta: {
				version: bower.version,
				name: bower.name,
				project: bower.project
			},
			banner: '/**\n' +
			' * <%= meta.name %>\n' +
			' * @version v<%= meta.version %> - <%= grunt.template.today("yyyy-mm-dd/HH:MM") %>\n' +
			' */\n',
			paths: {
				src: 'src',
				build: 'build',
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
	grunt.task.renameTask('conventionalChangelog', 'changelog');

	grunt.task.renameTask('ngtemplates', 'templates-cache');
	// make duplicate config of tasks
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.task.renameTask('ngtemplates', 'templates-cache-clean');

	grunt.task.renameTask('nggettext_compile', 'gettext-compile');
	grunt.task.renameTask('nggettext_extract', 'gettext-extract');
	grunt.task.renameTask('ngconstant', 'config');
	grunt.task.renameTask('ngAnnotate', 'annotate');
};
