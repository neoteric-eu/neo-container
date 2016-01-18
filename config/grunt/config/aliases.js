module.exports = {
	/*
	 * ========================================
	 * --------- INSTALLATION TASKS -----------
	 * ========================================
	 */

	// Internally used by Grunt for installation,
	// Run along with npm install
	// Set up application repositories
	preInstall: [
		'git-changed-files',
		'clean:install',
		'shell:bower-install',
		'gitclone-bower'
	],

	// Internally used by Grunt for installation,
	// Run along with npm install
	install: [
		'bowercopy',
		'githooks',
		'symlink'
	],

	// Internally used by Grunt for installation,
	// Run along with npm install
	// Compile assets & prepare environment
	postInstall: [
		'generate--container',
		'less',
		'gettext-compile',
		'templates-cache-clean'
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

	// Executes complete app testing
	'test': [
		'jshint',
		'connect:test',
		'shell:webdriver-update',
		'protractor:singlerun'
	],

	/*
	 * ========================================
	 * ------------- BUILD TASKS --------------
	 * ========================================
	 */

	// Creates local version of development code
	'build--local': [
		'jshint',
		'clean:preBuild',
		'config:local',
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
	]
};

