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
	preDocs: {
		files: [{
			expand: true,
			src: [
				'<%= paths.docs %>'
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
