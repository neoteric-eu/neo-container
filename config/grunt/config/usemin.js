// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
	html: ['<%= paths.dist %>/index.html'],
	js: ['<%= paths.dist %>/apps/*.js'],
	css: ['<%= paths.dist %>/assets/css/*.css'],
	options: {
		assetsDirs: ['<%= paths.dist %>']
	}
};
