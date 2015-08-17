module.exports = {
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
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true
		}
	},

	seed: {
		files: [{
			src: ['seed/**/*.html'],
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/seed/templates/module.js'
		}],
		options: {
			bootstrap: function (module, script) {
				'use strict';
				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { ' +
					'/*jshint quotmark: false*/ "use strict"; ' +
					'return angular' +
					'.module("seed.templates",[])' +
					'.run(function ($templateCache, $log) {' +
					'$log = $log.getInstance(\'seed.templates.module\');' +
					script +
					' $log.debug(\'Initiated module\');});});';
			}
		}
	},

	seed_init: {
		files: [{
			src: ['index.html'],
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/seed/templates/module.js'
		}],
		options: {
			bootstrap: function () {
				return 'define([\'angular\'], function(angular) { ' +
					'/*jshint quotmark: false*/ "use strict"; ' +
					'return angular' +
					'.module("seed.templates",[])' +
					'.run(function ($log) { ' +
					'$log = $log.getInstance(\'seed.templates.module\');' +
					'$log.debug(\'Initiated module\'); });});';
			}
		}
	},

	apps: {
		files: [{
			src: 'apps/**/*.html',
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/apps/templates/module.js'
		}],
		options: {
			bootstrap: function (module, script) {
				'use strict';

				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { ' +
					'/*jshint quotmark: false*/ "use strict"; ' +
					'return angular' +
					'.module("app.templates",[])' +
					'.run(function ($templateCache, $log) {' +
					'$log = $log.getInstance(\'apps.templates.module\');' +
					script +
					' $log.debug(\'Initiated module\');});});';
			}
		}
	},

	apps_init: {
		files: [{
			src: ['index.html'],
			cwd: '<%= yeoman.app %>/',
			dest: '<%= yeoman.app %>/apps/templates/module.js'
		}],
		options: {
			bootstrap: function (module) {
				return 'define([\'angular\'], function(angular) { ' +
					'/*jshint quotmark: false*/ "use strict"; ' +
					'return angular' +
					'.module("app.templates",[])' +
					'.run(function ($log) { ' +
					'$log = $log.getInstance(\'apps.templates.module\');' +
					'$log.debug(\'Initiated module\'); });});';
			}
		}
	}
};
