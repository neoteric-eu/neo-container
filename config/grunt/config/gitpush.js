module.exports = function () {
	'use strict';

	return {
		staging: {
			options: {
				branch: 'development',
				tags: true
			}
		}
	};
};
