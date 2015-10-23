module.exports = function (grunt) {
	'use strict';

	var requirejsConfigs = [];

	grunt.file
		.expand({filter: 'isFile'}, ['src/apps/*/require.conf.js', 'src/seed/require.conf.js'])
		.forEach(function (path) {
			try {
				requirejsConfigs.push(path);
			} catch (e) {
				// Handle exception
			}
		});

	return {
		default: {
			options: {
				baseUrl: 'src/',
				optimize: 'none',
				generateSourceMaps: true,
				preserveLicenseComments: false,
				useStrict: true,
				dir: '<%= paths.dist %>',
				mainConfigFile: requirejsConfigs,
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				modules: [{
					name: 'appConfig',
					excludeShallow: [
						'angular'
					],
					out: 'app.conf'
				}, {
					name: 'container',
					excludeShallow: [
						'appConfig'
					],
					out: 'container'
				}],
				replaceRequireScript: [{
					files: ['<%= paths.dist %>/index.html'],
					module: 'container',
					out: 'container'
				}],
				uglify2: {
					mangle: false
				},
				include: ['container']
			}
		}
	};
};
