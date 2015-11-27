module.exports = function () {
	'use strict';

	return {
		'serve': [
			'config:development',
			'templates-cache-clean',
			'connect:server'
		],

		// Runs locally server with application
		'servedev': [
			'config:development',
			'connect:livereload',
			'watch'
		],

		// Checks unit-test code coverage
		'coverage': [
			'karma:coverage'
		],

		// Executes complete app testing
		'test': [
			'jshint:test',
			'test:e2e',
			'test:unit'
		],

		// Runs unit app testing
		'test:unit': [
			'karma:unit'
		],

		// Runs e2e app testing
		'test:e2e': [
			'connect:test',
			'shell:webdriver-update',
			'protractor:singlerun'
		],

		// Creates production version of code in /dist catalog
		'build:production': [
			'clean:dist',
			'config:production',
			'gettext-compile',
			'less',
			'useminPrepare',
			'templates-cache',
			'concat',
			'cssmin',
			'copy',
			'requirejs:production',
			'ngAnnotate:production',
			'uglify:production',
			'rev',
			'usemin'
		],

		// Deploy built app on nexus and bump version of code on master branch
		release: [
			'compress',
			'nexus'
		],

		// Generates JSDoc documentation
		'docs': [
			'jsdoc'
		],

		// Internally used form "npm install" installation task
		install: [
			'git-changed-files',
			'clean:install',
			'shell:bower-apps',
			'force:gitclone-bower',
			'clean:bower',
			'bowercopy',
			'githooks',
			'config:development',
			'secure-symlink',
			'gettext-compile',
			'templates-cache-clean',
			'less'
		]
	};
};

