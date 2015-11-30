module.exports = function () {
	'use strict';

	return {
		options: {
			src: ['<%= paths.src %>/assets/**/*.css'],
			dest: '<%= paths.build %>/assets/css/style.css'
		}
	};
};
