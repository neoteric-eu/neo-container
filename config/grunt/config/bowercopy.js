module.exports = function (grunt) {
	'use strict';

	var bowerFiles = [];
	var _ = require('lodash');

	grunt.file
		.expand({filter: 'isFile'}, ['src/apps/*/bower.json', 'bower_components/neo-seed/bower.json'])
		.forEach(function (bowerPath) {
			try {
				bowerFiles.push(grunt.file.readJSON(bowerPath));
			} catch (e) {
				grunt.log.error('Error reading files', e);
			}
		});

	var defaultConf = {
		seed: {
			options: {
				destPrefix: '<%=paths.src%>'
			},
			files: {
				'seed': 'neo-seed/build',
				'seed/bower.json': 'neo-seed/bower.json'
			}
		},
		js: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/js'
			},
			files: {}
		},
		less: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/less'
			},
			files: {}
		},
		fonts: {
			options: {
				destPrefix: '<%=paths.assets%>/vendor/fonts'
			},
			files: {}
		},
		require: {
			options: {
				destPrefix: '<%=paths.src%>'
			},
			files: {
				'require.js': 'requirejs/require.js'
			}
		},
		options: {
			runBower: false
		}
	};

	bowerFiles.forEach(function (bowerExtension) {
		if (_.has(bowerExtension, 'copy')) {
			// Extend js files
			_.assign(defaultConf.js.files, bowerExtension.copy.js);
			_.assign(defaultConf.less.files, bowerExtension.copy.less);
			_.assign(defaultConf.fonts.files, bowerExtension.copy.fonts);
		}
	});

	_.forOwn(defaultConf, function (value, key) {
		if (_.isEmpty(value.files)) {
			delete defaultConf[key];
		}
	});

	return defaultConf;
};
