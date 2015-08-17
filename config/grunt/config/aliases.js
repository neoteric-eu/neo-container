module.exports = {
	'serve': {
		description: 'Runs locally server with application',
		tasks: [
			'templates:seed_init',
			'templates:apps_init',
			'config:development',
			'connect:server'
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
		tasks: ['clean:test',
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
			'config:production',
			'less',
			'useminPrepare',
			'templates:apps',
			'templates:seed',
			'concat',
			'cssmin',
			'copy',
			'requirejs',
			'rev',
			'usemin',
			'jsdoc'
		]
	},

	release: {
		description: 'Deploy built app on nexus and bump version of code on master branch',
		tasks: [
			'changelog',
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
			'clean',
			'bower',
			'force:gitclone',
			'symlink',
			'shell:webdriver-update',
			'githooks',
			'config:development',
			'gettext-compile',
			'templates:seed_init',
			'templates:apps_init',
			'less'
		]
	}
};

