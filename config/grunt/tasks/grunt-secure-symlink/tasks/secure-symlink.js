module.exports = function (grunt) {
	'use strict';

	var _ = require('lodash');

	grunt.registerTask('secure-symlink', function () {

		var done = this.async();

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

		function waitForFiles() {
			var dirsExist = _.every(defaultFiles, function (dir) {
				return grunt.file.exists(dir);
			});

			if (dirsExist) {
				grunt.task.run('symlink');
				done();
			} else {
				setTimeout(waitForFiles, 2000);
			}
		}

		waitForFiles();
	});
};



