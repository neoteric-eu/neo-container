module.exports = {
	options: {
		singleQuotes: true
	},
	build: {
		files: {'<%= paths.build %>/assets/js/container.js': '<%= paths.build %>/assets/js/container.js'}
	}
};
