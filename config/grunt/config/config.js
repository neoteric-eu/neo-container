module.exports = function (grunt) {
	'use strict';

	var _ = require('lodash');

	var appSettings = grunt.file.readJSON('src/config/settings/apps.json');
	var generalSettings = grunt.file.readJSON('src/config/settings/general.json');

	// Add application version to configuration
	_.each(appSettings, function (settings) {
		try {
			if (grunt.file.exists('bower_components/' + settings.dependency + '/bower.json')) {
				settings.version = grunt.file.readJSON('bower_components/' + settings.dependency + '/bower.json').version;
			} else {
				settings.version = grunt.file.readJSON('src/apps/' + settings.directory + '/bower.json').version;
			}
		} catch (e) {
			grunt.fail.fatal('Could not find "bower.json" file with "version" property for dependency: ' + settings.dependency);
		}
	});

	// Add container version to general configuration
	generalSettings.version = grunt.file.readJSON('src/bower.json').version;

	return {
		options: {
			name: 'app.conf',
			dest: '<%= paths.src %>/apps/module.conf.js',
			wrap: 'define([\'angular\'], function() { \n\n \'use strict\'\;\n return {%= __ngModule %} \n\n});'
		},
		local: {
			constants: {
				appConf: {
					appsSettings: appSettings,
					environmentSettings: grunt.file.readJSON('src/config/environments/local.json'),
					generalSettings: generalSettings,
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		development: {
			constants: {
				appConf: {
					appsSettings: appSettings,
					environmentSettings: grunt.file.readJSON('src/config/environments/development.json'),
					generalSettings: generalSettings,
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		staging: {
			constants: {
				appConf: {
					appsSettings: appSettings,
					environmentSettings: grunt.file.readJSON('src/config/environments/staging.json'),
					generalSettings: generalSettings,
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		production: {
			constants: {
				appConf: {
					appsSettings: appSettings,
					environmentSettings: grunt.file.readJSON('src/config/environments/production.json'),
					generalSettings: generalSettings,
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		}
	};
};
