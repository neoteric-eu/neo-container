module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');

	return {
		default: {
			options: {
				archive: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '.zip',
				mode: 'zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.dist %>/**']
			}]
		}
	};
};
