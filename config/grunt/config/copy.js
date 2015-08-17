// Copies remaining files to places other tasks can use
module.exports = {
	default: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= yeoman.app %>',
			dest: '<%= yeoman.dist %>',
			src: [
				'require.js',
				'.htaccess',
				'index.html',
				'404.html',
				'assets/*/fonts/**',
				'assets/*/img/**',
				'assets/*/sounds/**'
			]
		}]
	}
};
