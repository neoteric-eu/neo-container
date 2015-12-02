module.exports = function () {
	'use strict';

	return {
		options: {
			banner: '<%= banner %>',
			preserveComments: false
		},
		development: {
			options: {
				mangle: true,
				sourceMap: true
			},
			files: {
				'<%= paths.build %>/assets/js/container.js': '<%= paths.build %>/assets/js/container.js'
			}
		},
		staging: {
			options: {
				mangle: true,
				sourceMap: false
			},
			files: {
				'<%= paths.build %>/assets/js/container.js': '<%= paths.build %>/assets/js/container.js'
			}
		},
		production: {
			options: {
				mangle: true,
				sourceMap: false
			},
			files: {
				'<%= paths.build %>/assets/js/container.js': '<%= paths.build %>/assets/js/container.js'
			}
		}
	};
};
