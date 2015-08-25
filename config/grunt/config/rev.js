module.exports = {
	dist: {
		files: {
			src: [
				'<%= paths.dist %>/apps/{,*/}*.js',
				'<%= paths.dist %>/assets/css/{,*/}*.css'
			]
		}
	}
};
