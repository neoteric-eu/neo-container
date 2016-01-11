module.exports = {
	install: {
		files: [{
			expand: true,
			src: [
				'bower_components',
				'<%= paths.build %>',
				'<%= paths.tmp %>',
				'<%= paths.release %>',
				'<%= paths.test %>',
				'<%= paths.src %>/require.js',
				'<%= paths.apps %>/module.conf.js',
				'<%= paths.apps %>/!(*.js)',
				'<%= paths.seed %>',
				'<%= paths.assets %>'
			]
		}]
	},
	preBuild: {
		files: [{
			expand: true,
			src: [
				'<%= paths.build %>',
				'<%= paths.test %>'
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
	},
	preRelease: {
		files: [{
			expand: true,
			src: [
				'<%= paths.release %>'
			]
		}]
	}
};
