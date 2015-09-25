module.exports = function (grunt) {
	'use strict';

	var defaultConf = {
		options: {
			source: function (code) {
				'use strict';
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
			},
			htmlmin: {
				removeCommentsFromCDATA: true,
				// Do not use COMMENT DIRECTIVES!
				removeComments: true,
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: false,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		},

		seed: {
			files: [{
				src: ['seed/**/*.html'],
				cwd: '<%= paths.src %>',
				dest: '<%= paths.seed %>/__misc/_templates/module.js'
			}],
			options: {
				bootstrap: function (module, script) {
					'use strict';

					script = script.replace('\'use strict\';', '');
					return 'define([\'angular\'], function(angular) { ' +
						'/*jshint quotmark: false*/ "use strict"; ' +
						'return angular' +
						'.module("seed.templateCache",[])' +
						'.run(function ($templateCache, $log) {' +
						'$log = $log.getInstance(\'seed.templateCache.module\');' +
						script +
						' $log.debug(\'Initiated module\');});});';
				}
			}
		}
	};

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {

			var appName = _.last(path.split('/'));
			var prefix = path.replace('src/', '');

			defaultConf[appName] = {
				files: [{
					src: ['**/*.html'],
					cwd: path,
					dest: path + '/__misc/_templates/module.js'
				}],
				options: {
					prefix: prefix,
					bootstrap: function (module, script) {
						'use strict';

						return 'define([\'angular\'], function(angular) { ' +
							'/*jshint quotmark: false*/ "use strict"; ' +
							'return angular' +
							'.module("app.' + appName + '.templateCache",[])' +
							'.run(function ($templateCache, $log) {' +
							'$log = $log.getInstance(\'apps.' + appName + '.templateCache.module\');' +
							script +
							' $log.debug(\'Initiated module\');});});';
					}
				}
			};
		});

	return defaultConf;
};
