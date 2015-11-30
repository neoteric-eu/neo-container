module.exports = {
	install: {
		files: [{
			expand: true,
			src: [
				'<%= paths.build %>',
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
	preBuild: {
		files: [{
			expand: true,
			src: [
				'<%= paths.build %>',
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
