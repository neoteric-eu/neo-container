module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');
	var version = bowerConf.version;

	return {
		default: {
			options: {
				archive: '<%= paths.release %>/release-' + version + '.zip',
				mode: 'zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.dist %>/**']
			}]
		}
	};
};
