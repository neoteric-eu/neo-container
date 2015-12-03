module.exports = function () {
	'use strict';

	return {
		staging: {
			options: {
				tag: 'STAG-<%= grunt.template.today("yyyymmdd.HHMMss") %>'
			}
		}
	};
};
