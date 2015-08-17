module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');
	var version = bowerConf.version;

	return {
		release: {
			options: {
				groupId: "com.neoteric.b2b",
				artifactId: "tasks",
				version: version,
				packaging: 'zip',
				auth: {
					username: 'deployment',
					password: 'deployment123'
				},
				pomDir: 'build/pom',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/releases',
				artifact: 'release/release-' + version + '.zip',
				noproxy: 'localhost',
				cwd: ''
			}
		}
	}
};
