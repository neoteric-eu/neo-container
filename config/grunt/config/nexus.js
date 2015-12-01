module.exports = function () {
	'use strict';

	return {
		options: {
			packaging: 'zip',
			auth: {
				username: 'deployment',
				password: 'deployment123'
			},
			pomDir: '<%= paths.release %>/pom',
			noproxy: 'localhost',
			cwd: ''
		},
		development: {
			options: {
				groupId: 'com.neoteric.frontend.development.<%= meta.project %>',
				artifactId: '<%= meta.name %>',
				version: '<%= meta.version %>-SNAPSHOT',
				classifier: '<%= grunt.template.today("yyyymmdd.HHMMss") %>',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/snapshots',
				artifact: '<%= paths.release %>/<%= meta.name %>-<%= meta.version %>.zip'
			}
		},
		staging: {
			options: {
				groupId: 'com.neoteric.frontend.staging.<%= meta.project %>',
				artifactId: '<%= meta.name %>',
				version: '<%= meta.version %>-SNAPSHOT',
				classifier: '<%= grunt.template.today("yyyymmdd.HHMMss") %>',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/snapshots',
				artifact: '<%= paths.release %>/<%= meta.name %>-<%= meta.version %>.zip'
			}
		},
		production: {
			options: {
				groupId: 'com.neoteric.frontend.<%= meta.project %>',
				artifactId: '<%= meta.name %>',
				version: '<%= meta.version %>',
				url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/releases',
				artifact: '<%= paths.release %>/<%= meta.name %>-<%= meta.version %>.zip'
			}
		}
	};
};
