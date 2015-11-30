module.exports = function (grunt) {
  'use strict';

  var bowerConf = grunt.file.readJSON('src/bower.json');

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
        groupId: 'com.neoteric.frontend.development.' + bowerConf.project,
        artifactId: bowerConf.name,
        version: bowerConf.version,
        url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/snapshots',
        artifact: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '-SNAPSHOT.zip'
      }
    },
    staging: {
      options: {
        groupId: 'com.neoteric.frontend.staging.' + bowerConf.project,
        artifactId: bowerConf.name,
        version: bowerConf.version,
        url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/snapshots',
        artifact: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '-SNAPSHOT.zip'
      }
    },
    production: {
      options: {
        groupId: 'com.neoteric.frontend.' + bowerConf.project,
        artifactId: bowerConf.name,
        version: bowerConf.version,
        url: 'http://naga.neoteric.eu:8081/nexus/content/repositories/releases',
        artifact: '<%= paths.release %>/' + bowerConf.name + '-' + bowerConf.version + '.zip'
      }
    }
  };
};
