module.exports = function (grunt) {
	'use strict';

	_ = require('lodash');

	var options = {};

	var bower = grunt.file.readJSON('src/bower.json');

	_.forOwn(bower.dependencies, function (value, key) {
		var repoStrings = value.split('#');

		if (_.startsWith(repoStrings[0], 'git')) {
			options[key] = {options: {}};

			options[key].options.repository = repoStrings[0];

			if (key === 'neo-seed') {
				options[key].options.directory = 'src/' + _.trim(key, ['neo-', 'b2b-']);
			} else {
				options[key].options.directory = 'src/apps/' + _.trim(key, ['neo-', 'b2b-']);
			}

			if (_.isString(repoStrings[1])) {
				options[key].options.branch = repoStrings[1];
			}
		}
	});

	return options;
};
