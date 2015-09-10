module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');

	return {
		release: {
			options: {
				groupId: "com.neoteric." + bowerConf.project,
				artifactId: bowerConf.name,
				version: bowerConf.version,
				packaging: 'zip',
				auth: {
					username: 'deployment',
					password: 'deployment123'
				},
				pomDir: 'build/pom',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/releases',
				artifact: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '.zip',
				noproxy: 'localhost',
				cwd: ''
			}
		}
	}
};
