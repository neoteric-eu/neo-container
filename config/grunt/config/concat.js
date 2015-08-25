module.exports = function () {
	'use strict';

	return {
		options: {
			src: ['<%= paths.src %>/assets/**/*.css'],
			dest: '<%= paths.src %>/assets/css/style.css'
		}
	};
};
