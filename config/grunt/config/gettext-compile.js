module.exports = function (grunt) {
	'use strict';

	var lang = grunt.file.readJSON('src/config/settings/language.json');

	var defaultConf = {
		seed: {
			options: {
				requirejs: true,
				modulePath: 'seed/module',
				module: 'seed',
				defaultLanguage: lang.defaultLanguage.locale
			},
			files: [{
				dest: '<%= paths.seed %>/__misc/_locale/translation.js',
				src: '<%= paths.seed %>/__misc/_locale/*.po'
			}]
		}
	};


	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			var appName = path.split('/').pop();
			defaultConf[appName] = {
				options: {
					requirejs: true,
					modulePath: 'apps/' + appName + '/module',
					module: 'app.'+appName,
					defaultLanguage: lang.defaultLanguage.locale
				},
				files: [{
					src: path + '/__misc/_locale/*.po',
					dest: path + '/__misc/_locale/translation.js'
				}]
			};
		});

	return defaultConf;
};
