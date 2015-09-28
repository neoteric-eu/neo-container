module.exports = function () {
	'use strict';

	return {
		'reset-changes': {
			options: {
				questions: [{
					config: 'rest-repos',
					type: 'confirm',
					message: function () {
						return 'Detected changes on git repositories. ' +
							'Installation process will reset all of your repos overriding changes. ' +
							'Do you want to continue?'
					}
				}],
				then: function (result, done) {
					if (result['rest-repos'] === true) {
						done();
					} else {
						process.exit(0);
					}

					return true;
				}
			}
		}
	}
};
