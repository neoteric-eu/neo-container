module.exports = function (grunt) {
	'use strict';

	var requirejsConfigs = [];

	grunt.file
		.expand({filter: 'isFile'}, ['src/apps/*/require.conf.js', 'assets/seed/js/require.conf.js'])
		.forEach(function (path) {
			requirejsConfigs.push(path);
		});

	return {
		build: {
			options: {
				baseUrl: 'src/',
				optimize: 'none',
				out: '<%= paths.build %>/assets/js/container.js',
				generateSourceMaps: false,
				preserveLicenseComments: false,
				useStrict: true,
				mainConfigFile: requirejsConfigs,
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				waitSeconds: 0,
				include: ['container']
			}
		}
	};
};
