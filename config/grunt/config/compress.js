module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');

	return {
		options: {
			mode: 'zip'
		},
		development: {
			options: {
				archive: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '-SNAPSHOT.zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.build %>/**']
			}]
		},
		staging: {
			options: {
				archive: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '-SNAPSHOT.zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.build %>/**']
			}]
		},
		production: {
			options: {
				archive: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '.zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.build %>/**']
			}]
		}
	};
};
