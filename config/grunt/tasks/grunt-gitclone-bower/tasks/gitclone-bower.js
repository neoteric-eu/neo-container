module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('gitclone-bower', function () {
		var done = this.async();

		var _ = require('lodash');
		var q = require('q');
		var RegistryClient = require('bower-registry-client');

		var bowerConfig = grunt.file.readJSON('.bowerrc');
		var registry = new RegistryClient(bowerConfig);

		var options = {};
		var promiseArray = [];
		var bowerFile = grunt.file.readJSON('src/bower.json');

		_.forOwn(bowerFile.dependencies, function (value, key) {
			options[key] = {options: {}};

			// If path is repo url clone it
			if (_.startsWith(value, 'git')) {
				var repoStrings = value.split('#');

				options[key].options.repository = repoStrings[0];
				options[key].options.directory = 'src/apps/' + _.trim(key, ['neo-', 'b2b-']);

				if (_.isString(repoStrings[1])) {
					options[key].options.branch = repoStrings[1];
				}
			} else {

				var dfd = q.defer();
				promiseArray.push(dfd.promise);

				// If path is semver tag resolve it and clone
				registry.lookup(key, function (err, entry) {

					if (err) {
						grunt.log.errorlns(err.message);
						dfd.reject();
						return;
					}

					options[key].options.repository = entry.url;
					options[key].options.directory = 'src/' + _.trim(key, ['neo-', 'b2b-']);
					dfd.resolve();
				});
			}
		});

		q.all(promiseArray).done(function () {
			grunt.config.set('gitclone', options);
			grunt.task.run(['gitclone']);
			done();
		});
	});
};



