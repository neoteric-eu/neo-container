module.exports = function (grunt) {
	'use strict';

	var requirejsConfigs = [];

	grunt.file
		.expand({filter: 'isFile'}, ['src/apps/*/require.conf.js', 'src/seed/require.conf.js'])
		.forEach(function (path) {
			requirejsConfigs.push(path);
		});

	return {
		options: {
			baseUrl: '.tmp/',
			optimize: 'uglify2',
			out: '<%= paths.build %>/assets/js/container.js',
			preserveLicenseComments: false,
			useStrict: true,
			mainConfigFile: requirejsConfigs,
			findNestedDependencies: true,
			removeCombined: true,
			optimizeAllPluginResources: true,
			waitSeconds: 0,
			include: ['container']
		},

		development: {
			options: {
				generateSourceMaps: true
			}
		},

		staging: {
			options: {
				generateSourceMaps: true
			}
		},

		production: {
			options: {
				generateSourceMaps: false
			}
		}
	};
};
