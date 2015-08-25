module.exports = {
	unit: {
		configFile: 'config/karma/karma.conf.js',
		plugins: [
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-junit-reporter'
		],
		reporters: ['dots', 'junit'],

		junitReporter: {
			outputFile: '<%= paths.test %>/results/unit/results.xml'
		}
	},
	coverage: {
		configFile: 'config/karma/karma.conf.js',
		plugins: [
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-junit-reporter'
		],

		preprocessors: {
			'<%= paths.apps %>/**/*.js': 'coverage'
		},

		reporters: ['coverage'],

		coverageReporter: {
			type: 'cobertura',
			dir: '<%= paths.test %>/results/coverage/',
			subdir: '.'
		},
		singleRun: true,
		autoWatch: false
	}
};
