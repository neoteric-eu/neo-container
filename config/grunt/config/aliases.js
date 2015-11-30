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
		'clean:bower',
		'clean:install',
		'shell:bower-install',
		'force:gitclone-bower',
		'bowercopy',
		'githooks',
		'copy:container',
		'config:local',
		'symlink',
		'less'
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

	// Set-up container configuration to development settings
	'config--development': [
		'config:development'
	],

	// Set-up container configuration to staging settings
	'config--staging': [
		'config:staging'
	],

	// Set-up container configuration to production settings
	'config--production': [
		'config:production'
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
		'config:development',
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
		'config:staging',
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
		'config:production',
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
		'compress:development',
		'nexus:development'
	],

	// Deploys production code to nexus artifact repository
	// add git tag on development branch
	'release--staging': [
		'gittag:staging',
		'compress:staging',
		'nexus:staging'
	],

	// Deploys production code to nexus artifact repository
	'release--production': [
		'compress:production',
		'nexus:production'
	],

	/*
	 * ========================================
	 * --------- DOCUMENTATION TASKS ----------
	 * ========================================
	 */

	// Generates JSDoc documentation
	'docs': [
		'jsdoc'
	]
};

