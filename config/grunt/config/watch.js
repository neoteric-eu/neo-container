/**
 * Created by hp on 2015-08-28.
 */


module.exports = function () {
	'use strict';

	return {
			js: {
				files: ['<%= paths.src %>/**/*.js'],
				options: {
					livereload: '<%= connect.livereload.options.livereload %>'
				}
			},
			html: {
				files: ['<%= paths.src %>/**/*.html'],
				//tasks: ['newer:jshint:all'],
				options: {
					livereload: '<%= connect.livereload.options.livereload %>'
				}
			}
	};
};




