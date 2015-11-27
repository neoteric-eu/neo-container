/*
 * Reads HTML for usemin blocks to enable smart builds that automatically concat, minify and revision files.
 */
module.exports = {
	html: '<%= paths.src %>/index.html',
	options: {
		dest: '<%= paths.dist %>/'
	}
};
