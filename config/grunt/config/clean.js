module.exports = {
	default: {
		files: [{
			expand: true,
			src: [
				'<%= paths.dist %>',
				'<%= paths.tmp %>',
				'<%= paths.release %>',
				'<%= paths.test %>',
				'<%= paths.docs %>',
				'<%= paths.src %>/require.js',
				'<%= paths.apps %>/module.conf.js',
				'<%= paths.apps %>/!(*.js)',
				'<%= paths.seed %>',
				'<%= paths.assets %>',
				'bower_components'
			]
		}]
	}
};
