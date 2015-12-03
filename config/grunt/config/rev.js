module.exports = {
	build: {
		files: {
			src: [
				'<%= paths.build %>/assets/js/*.js',
				'<%= paths.build %>/assets/css/*.css'
			]
		}
	}
};
