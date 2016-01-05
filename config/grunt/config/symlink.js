module.exports = function (grunt) {
	'use strict';

	var defaultFiles = [];

	grunt.file
		.expand({filter: 'isDirectory'}, ['src/apps/*', 'src/seed'])
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
