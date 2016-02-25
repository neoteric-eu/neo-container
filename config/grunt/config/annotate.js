module.exports = {
	options: {
		singleQuotes: true
	},
	build: {
		files: [{
			src: ['**/*.js'],
			cwd: '<%= paths.src %>',
			dest: '<%= paths.tmp %>',
			expand: true
		}]
	}
};
