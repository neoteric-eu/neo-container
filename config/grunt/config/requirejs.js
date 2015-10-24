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
        out: '<%= paths.dist %>/apps/container.js',
        generateSourceMaps: true,
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
        uglify2: {
          mangle: false
        },
        include: ['container']
      }
    }
  };
};
