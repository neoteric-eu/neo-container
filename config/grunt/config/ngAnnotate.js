module.exports = {
	options: {
		singleQuotes: true
	},
	production: {
		files: {'<%= paths.dist %>/assets/js/container.js': '<%= paths.dist %>/assets/js/container.js'}
	}
};
