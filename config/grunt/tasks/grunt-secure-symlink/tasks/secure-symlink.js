module.exports = function (grunt) {
	'use strict';

	var _ = require('lodash');

	grunt.registerTask('secure-symlink', function () {

		var done = this.async();

		var defaultFiles = [];

		grunt.file
			.expand({}, ['src/apps/**', 'src/seed/**'])
			.forEach(function (path) {
				defaultFiles.push(path);
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



