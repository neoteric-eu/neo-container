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
				setTimeout(function () {
					grunt.task.run('symlink');
					done();
				}, 10000);
			} else {
				setTimeout(waitForFiles, 10000);
			}
		}

		waitForFiles();
	});
};



