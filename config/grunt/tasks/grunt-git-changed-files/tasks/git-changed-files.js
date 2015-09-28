module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('git-changed-files', function () {

		var _ = require('lodash');
		var q = require('q');
		var done = this.async();
		var promiseArray = [];
		var dirs = [];

		grunt.file
			.expand({filter: 'isDirectory'}, ['src/apps/*', 'src/seed'])
			.forEach(function (path) {
				if (grunt.file.isDir(path + '/.git')) {
					dirs.push(path);
				}
			});

		_.each(dirs, function (dir) {
			var dfd = q.defer();
			promiseArray.push(dfd.promise);

			grunt.util.spawn({
				cmd: 'git',
				args: [
					'--git-dir=' + dir + '/.git',
					'--work-tree=' + dir,
					'diff',
					'HEAD',
					'--name-only',
					'--diff-filter=ACM'
				]
			}, function (error, result) {
				var changedFiles = String(result).split(grunt.util.linefeed);
				if (error) {
					dfd.reject(error);
				} else {
					grunt.log.debug('Changed files: ' + grunt.config.process(changedFiles).join(', '));
					dfd.resolve(changedFiles);
				}
			});
		});

		q.all(promiseArray).done(function (changedFiles) {
			if (changedFiles.length) {
				grunt.task.run('prompt:reset-changes');
				done();
			}
		});
	});
};



