/*
 * Copies static files from src to dist folder
 */
module.exports = {
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= paths.src %>',
			dest: '<%= paths.dist %>',
			src: [
				'require.js',
				'index.html',
				'assets/*/fonts/**',
				'assets/*/img/**',
				'assets/*/sounds/**'
			]
		}]
	}
};
