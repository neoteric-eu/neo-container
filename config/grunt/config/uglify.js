module.exports = function () {
	'use strict';

	return {
		development: {
			options: {
				mangle: false,
				sourceMap: true,
				preserveComments: true
			},
			files: {
				'<%= paths.dist %>/assets/js/container.js': '<%= paths.dist %>/assets/js/container.js'
			}
		},
		staging: {
			options: {
				mangle: false,
				sourceMap: true,
				preserveComments: false
			},
			files: {
				'<%= paths.dist %>/assets/js/container.js': '<%= paths.dist %>/assets/js/container.js'
			}
		},
		production: {
			options: {
				mangle: false,
				sourceMap: false,
				preserveComments: false
			},
			files: {
				'<%= paths.dist %>/assets/js/container.js': '<%= paths.dist %>/assets/js/container.js'
			}
		}
	};
};
