module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');
	var version = bowerConf.version;

	return {
		default: {
			options: {
				archive: 'release/release-' + version + '.zip',
				mode: 'zip'
			},
			files: [{
				expand: true,
				src: ['dist/**/*']
			}]
		}
	};
};
