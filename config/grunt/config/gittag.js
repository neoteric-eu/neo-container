module.exports = function () {
	'use strict';

	return {
		staging: {
			tag: 'STAG-<%= grunt.template.today("yyyy-mm-dd/HH:MM") %>',
			message: 'Release to staging environment'
		}
	};
};
