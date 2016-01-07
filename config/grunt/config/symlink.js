module.exports = function (grunt) {
	'use strict';

	var defaultFiles = [{
		expand: true,
		overwrite: false,
		cwd: '<%= paths.seed %>/__misc/_assets',
		src: ['*'],
		dest: '<%= paths.assets %>/seed'
	}];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*'])
		.forEach(function (path) {
			defaultFiles.push({
				expand: true,
				cwd: path + '/__misc/_assets',
				src: ['*'],
				dest: '<%= paths.assets %>/' + path.split('/').pop()
			});
		});

	return {
		options: {
			overwrite: true
		},
		install: {
			files: defaultFiles
		}
	};
};
