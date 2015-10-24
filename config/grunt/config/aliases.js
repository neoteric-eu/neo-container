module.exports = function () {
	return {
		'serve': {
			description: 'Runs locally server with application',
			tasks: [
				'config:development',
				'templates-cache-clean',
				'connect:server'
			]
		},
		'servedev': {
			description: 'Runs locally server with application',
			tasks: [
				'config:development',
				'connect:livereload',
				'watch'
			]
		},
		'coverage': {
			description: 'Checks unit-test code coverage',
			tasks: [
				'karma:coverage'
			]
		},

		'test': {
			description: 'Executes complete app testing',
			tasks: [
				'jshint:test',
				'test:e2e',
				'test:unit'
			]
		},

		'test:unit': {
			description: 'Runs unit app testing',
			tasks: [
				'karma:unit'
			]
		},

		'test:e2e': {
			description: 'Runs e2e app testing',
			tasks: [
				'connect:test',
				'shell:webdriver-update',
				'protractor:singlerun'
			]
		},

		'dist': {
			description: 'Creates production version of code in /dist catalog',
			tasks: [
				'clean:dist',
				'config:production',
				'gettext-compile',
				'less',
				'useminPrepare',
				'templates-cache',
				'concat',
				'cssmin',
				'copy',
				'requirejs',
				'rev',
				'usemin'
			]
		},

		release: {
			description: 'Deploy built app on nexus and bump version of code on master branch',
			tasks: [
				'compress',
				'nexus'
			]
		},

		'docs': {
			description: 'Generates JSDoc documentation',
			tasks: [
				'jsdoc'
			]
		},

		'default': {
			description: 'Create production version on app after testing',
			tasks: [
				'jshint:app',
				'test',
				'dist'
			]
		},

		install: {
			description: 'Internally used form "npm install" installation task',
			tasks: [
				'git-changed-files',
				'clean:install',
				'force:gitclone-bower',
				'bower',
				'githooks',
				'config:development',
				'secure-symlink',
				'gettext-compile',
				'templates-cache-clean',
				'less'
			]
		}
	}
};

