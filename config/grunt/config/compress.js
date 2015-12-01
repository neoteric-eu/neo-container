module.exports = function () {
	'use strict';

	return {
		build: {
			options: {
				archive: '<%= paths.release %>/<%= meta.name %>-<%= meta.version %>.zip'
			},
			files: [{
				expand: true,
				src: ['<%= paths.build %>/**']
			}]
		}
	};
};
