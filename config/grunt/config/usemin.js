module.exports = {
	html: ['<%= paths.build %>/index.html'],
	js: ['<%= paths.build %>/assets/js/*.js'],
	css: ['<%= paths.build %>/assets/css/*.css'],
	options: {
		assetsDirs: ['<%= paths.build %>']
	}
};
