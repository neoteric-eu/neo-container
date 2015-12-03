module.exports = {
	build: {
		src: [
			'<%= paths.apps %>/**/*.js',
			'!<%= paths.apps %>/*/__misc/**'
		],
		options: {
			destination: 'docs',
			template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
			configure: 'config/jsdocs/jsdoc.conf.json'
		}
	}
};
