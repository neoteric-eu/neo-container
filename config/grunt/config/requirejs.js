module.exports = function (grunt) {
  'use strict';

  var requirejsConfigs = [];

  grunt.file
    .expand({filter: 'isFile'}, ['src/apps/*/require.conf.js', 'src/seed/require.conf.js'])
    .forEach(function (path) {
      try {
        requirejsConfigs.push(path);
      } catch (e) {
				grunt.util.error('Error reading files', e);
      }
    });

  return {
		production: {
			options: {
				baseUrl: 'src/',
				optimize: 'none',
				out: '<%= paths.dist %>/assets/js/container.js',
				generateSourceMaps: false,
				preserveLicenseComments: false,
				useStrict: true,
				mainConfigFile: requirejsConfigs,
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				waitSeconds: 0,
				replaceRequireScript: [{
					files: ['<%= paths.dist %>/index.html'],
					module: 'container'
				}],
				include: ['container']
			}
		}
  };
};
