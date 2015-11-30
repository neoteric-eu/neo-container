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
		.expand({filter: 'isFile', cwd: 'src/'}, ['apps/*/_includes.js', 'seed/_includes.js'])
		.forEach(function (path) {
			includes.push(path);
		});

	var modules = [];

	grunt.file
		.expand({filter: 'isFile', cwd: 'src/'}, ['apps/*/module.js', 'seed/module.js'])
		.forEach(function (path) {
			modules.push(path);
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
					'index.html',
					'assets/*/fonts/**',
					'assets/*/img/**',
					'assets/*/sounds/**'
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
		}
	};
};
