module.exports = function (grunt) {
	'use strict';

	var requireConfigs = [];

	grunt.file
		.expand({filter: 'isFile', cwd: 'src/'}, ['apps/*/require.conf.js', 'seed/require.conf.js'])
		.forEach(function (path) {
			requireConfigs.push(path.replace('.js', ''));
		});

	var includes = [];

	grunt.file
		.expand({
			filter: 'isFile',
			cwd: 'src/'
		}, ['apps/*/@(_includes|module).js'])
		.forEach(function (path) {
			includes.push(path.replace('.js', ''));
		});

	var modules = [];

	grunt.file
		.expand({filter: 'isDirectory', cwd: 'src/'}, ['apps/*'])
		.forEach(function (path) {
			modules.push('app.' + path.split('/').pop());
		});

	return {
		build: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= paths.src %>',
				dest: '<%= paths.build %>',
				src: [
					'require.js',
					'.htaccess',
					'index.html',
					'assets/*/fonts/**',
					'assets/*/img/**',
					'assets/*/json/**'
				]
			}]
		},
		container: {
			src: 'config/grunt/templates/container.tpl.js',
			dest: '<%= paths.src %>/container.js',
			options: {
				process: function (content) {
					return content.replace('/* deps */', '\'' + requireConfigs.join('\',\'') + '\'');
				}
			}
		},
		includes: {
			src: 'config/grunt/templates/includes.tpl.js',
			dest: '<%= paths.apps %>/_includes.js',
			options: {
				process: function (content) {
					return content.replace('/* includes */', '\'' + includes.join('\',\n\t\'') + '\'');
				}
			}
		},
		module: {
			src: 'config/grunt/templates/module.tpl.js',
			dest: '<%= paths.apps %>/module.js',
			options: {
				process: function (content) {
					return content.replace('/* modules */', '\'' + modules.join('\',\n\t\'') + '\'');
				}
			}
		}
	};
};
