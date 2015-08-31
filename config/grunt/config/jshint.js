// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		reporter: require('jshint-stylish')
	},
	app: {
		options: {
			jshintrc: '.jshintrc',
			ignores: [
				'<%= paths.src %>/require.js',
				'<%= paths.apps %>/*/__misc/',
				'<%= paths.apps %>/*/test/',
				'<%= paths.seed %>/__misc/',
				'<%= paths.seed %>/test/'
			]
		},
		src: [
			'Gruntfile.js',
			'<%= paths.apps %>',
			'<%= paths.seed %>'
		]
	},
	test: {
		options: {
			jshintrc: '.jshintrc',
			newcap: false
		},
		src: [
			'<%= paths.apps %>/**/*.spec.js',
			'<%= paths.seed %>/**/*.spec.js'
		]
	}
};
