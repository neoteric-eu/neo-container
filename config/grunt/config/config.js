module.exports = function (grunt) {
	'use strict';

	return {
		options: {
			name: 'app.conf',
			dest: '<%= paths.src %>/apps/module.conf.js',
			wrap: 'define([\'angular\'], function() { \n\n \'use strict\'\;\n return {%= __ngModule %} \n\n});'
		},
		local: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/local.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		development: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/development.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		staging: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/staging.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		},
		production: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/production.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json')
				}
			}
		}
	};
};
