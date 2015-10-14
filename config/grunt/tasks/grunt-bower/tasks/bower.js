module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('bower', function () {
		grunt.task.run('clean:bower');
		grunt.task.run('bowercopy');
	});
};



