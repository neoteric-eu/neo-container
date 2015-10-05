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
			var isChanged = _.dropWhile(changedFiles, function (arr) {
				return _.isEmpty(_.compact(arr));
			});

			if (isChanged.length) {
				grunt.log.writeln('Changed files: '['yellow'].bold);
				_.each(changedFiles, function (files) {
					_.each(files, function (file) {
						grunt.log.writeln('> ' + file ['yellow']);
					});
				});

				grunt.task.run('prompt:reset-changes');
				done();
			} else {
				done();
			}
		});
	});
};



