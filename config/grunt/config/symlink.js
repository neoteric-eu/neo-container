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
			try {
				defaultFiles.push({
					expand: true,
					overwrite: false,
					cwd: path + '/__misc/_assets',
					src: ['*'],
					dest: '<%= paths.assets %>/' + path.split('/').pop()
				});
			} catch (e) {
				// Handle exception
			}
		});

	return {
		options: {
			overwrite: true
		},
		default: {
			files: defaultFiles
		}
	};
};
