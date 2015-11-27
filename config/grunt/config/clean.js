module.exports = {
	install: {
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
				'!<%= paths.apps %>/dashboard',
				'<%= paths.seed %>',
				'<%= paths.assets %>'
			]
		}]
	},
	bower: {
		files: [{
			expand: true,
			src: [
				'bower_components'
			]
		}]
	},
	build: {
		files: [{
			expand: true,
			src: [
				'<%= paths.dist %>',
				'<%= paths.release %>',
				'<%= paths.test %>',
				'<%= paths.docs %>'
			]
		}]
	},
	postBuild: {
		files: [{
			expand: true,
			src: [
				'<%= paths.tmp %>'
			]
		}]
	}
};
