module.exports = {
	/*
	 * ========================================
	 * --------- INSTALLATION TASKS -----------
	 * ========================================
	 */

	// Internally used by Grunt for installation,
	// Run along with npm install
	install: [
		'git-changed-files',
		'clean:install',
		'shell:bower-install',
		'gitclone-bower',
		'bowercopy',
		'githooks',
		'generate--container',
		'config:local',
		'symlink',
		'less'
	],

	// Generates container files based on installed apps
	// injecting modules and requirejs dependencies
	'generate--container': [
		'copy:container',
		'copy:module',
		'copy:includes'
	],

	/*
	 * ========================================
	 * --------- CONFIGURATION TASKS ----------
	 * ========================================
	 */

	// Set-up container configuration to local settings
	'config--local': [
		'config:local'
	],

	// Set-up container configuration to build (variable based) settings
	'config--build': [
		'config:build'
	],

	/*
	 * ========================================
	 * ------------- SERVER TASKS -------------
	 * ========================================
	 */

	// Set up local configuration of container
	// Runs local server for code development
	'serve': [
		'config:local',
		'gettext-compile',
		'templates-cache-clean',
		'connect:serve'
	],

	// Runs local server for built
	'serve--build': [
		'connect:build'
	],

	/*
	 * ========================================
	 * ------------ TESTING TASKS -------------
	 * ========================================
	 */

	// Checks unit-test code coverage
	'coverage': [
		'karma:coverage'
	],

	// Executes complete app testing
	'test': [
		'jshint',
		'test:e2e',
		'test:unit'
	],

	// Runs unit app testing
	'test--unit': [
		'karma:unit'
	],

	// Runs e2e app testing
	'test--e2e': [
		'connect:test',
		'shell:webdriver-update',
		'protractor:singlerun'
	],

	/*
	 * ========================================
	 * ------------- BUILD TASKS --------------
	 * ========================================
	 */

	// Creates development/CI version of code in /build catalog
	'build--development': [
		'jshint',
		'clean:preBuild',
		'config:build',
		'gettext-compile',
		'less',
		'useminPrepare',
		'templates-cache',
		'concat',
		'cssmin',
		'copy:build',
		'requirejs',
		'annotate',
		'uglify:development',
		'rev',
		'usemin',
		'clean:postBuild'
	],

	// Creates staging version of code in /build catalog
	'build--staging': [
		'jshint',
		'clean:preBuild',
		'config:build',
		'gettext-compile',
		'less',
		'useminPrepare',
		'templates-cache',
		'concat',
		'cssmin',
		'copy:build',
		'requirejs',
		'annotate',
		'uglify:staging',
		'rev',
		'usemin',
		'clean:postBuild'
	],

	// Creates production version of code in /build catalog
	'build--production': [
		'jshint',
		'clean:preBuild',
		'config:build',
		'gettext-compile',
		'less',
		'useminPrepare',
		'templates-cache',
		'concat',
		'cssmin',
		'copy:build',
		'requirejs',
		'annotate',
		'uglify:production',
		'rev',
		'usemin',
		'clean:postBuild'
	],

	/*
	 * ========================================
	 * ------------ RELEASE TASKS -------------
	 * ========================================
	 */

	// Deploys development snapshot to nexus artifact repository
	'release--development': [
		'clean:preRelease',
		'compress',
		'nexus:development'
	],

	// Deploys production code to nexus artifact repository
	// add git tag on development branch
	'release--staging': [
		'clean:preRelease',
		'gittag:staging',
		'gitpush:staging',
		'compress',
		'nexus:staging'
	],

	// Deploys production code to nexus artifact repository
	'release--production': [
		'clean:preRelease',
		'compress',
		'nexus:production'
	],

	/*
	 * ========================================
	 * --------- DOCUMENTATION TASKS ----------
	 * ========================================
	 */

	// Generates JSDoc documentation
	'docs': [
		'clean:preDocs',
		'jsdoc'
	]
};

