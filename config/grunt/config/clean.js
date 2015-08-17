// Empties folders to start fresh
module.exports = {
	default: {
		files: [{
			expand: true,
			src: [
				'dist',
				'.tmp',
				'release',
				'test',
				'docs',
				'src/require.js',
				'src/apps/module.conf.js',
				'src/apps/!(*.js)',
				'src/seed',
				'bower_components',
				'src/assets'
			]
		}]
	}
};
