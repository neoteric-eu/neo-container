module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('gitclone-bower', function () {
		var done = this.async();

		var _ = require('lodash');
		var q = require('q');
		var prefixes = ['neo-', 'b2b-'];


		var RegistryClient = require('bower-registry-client');
		var appPrefix = 'src/apps/';
		var seedPrefix = 'src/';

		var bowerConfig = grunt.file.readJSON('.bowerrc');
		var registry = new RegistryClient(bowerConfig);

		var options = {};
		var promiseArray = [];
		var bowerFile = grunt.file.readJSON('src/bower.json');

		_.forOwn(bowerFile.dependencies, function (dependencyPath, dependencyName) {

			if (dependencyName === 'neo-seed') {
				resolveCloneProperties(seedPrefix, dependencyName, dependencyPath);
			} else {
				resolveCloneProperties(appPrefix, dependencyName, dependencyPath);
			}

		});

		function resolveCloneProperties(prefix, dependencyName, dependencyPath) {
			options[dependencyName] = {options: {}};

			var catalogName = dependencyName;
			_.each(prefixes, function (_pre) {
				if(dependencyName.indexOf(_pre) !== -1) {
					catalogName = catalogName.replace(_pre, '');
				}
			});

			// If path is repo url clone it
			if (_.startsWith(dependencyPath, 'git')) {
				var repoStrings = dependencyPath.split('#');

				options[dependencyName].options.repository = repoStrings[0];
				options[dependencyName].options.directory = prefix + catalogName;

				if (_.isString(repoStrings[1])) {
					options[dependencyName].options.branch = repoStrings[1];
				}
			} else {

				var dfd = q.defer();
				promiseArray.push(dfd.promise);

				registry.lookup(dependencyName, function (err, entry) {

					if (err) {
						grunt.log.errorlns(err.message);
						dfd.reject();
						return;
					}

					var config = grunt.file.readJSON('bower_components/'+dependencyName+'/bower.json');

					options[dependencyName].options.repository = entry.url;
					options[dependencyName].options.branch = 'v'+config.version;
					options[dependencyName].options.directory = prefix + catalogName;
					dfd.resolve();
				});
			}
		}

		q.all(promiseArray).done(function () {
			grunt.config.set('gitclone', options);
			grunt.task.run(['gitclone']);
			done();
		});
	});
};
