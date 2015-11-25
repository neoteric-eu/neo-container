// Command line actions configuration
module.exports = {
	// Command line conf
	options: {
		async: false
	},
	// Protractor drivers update
	'webdriver-update': {
		command: 'node ./node_modules/protractor/bin/webdriver-manager update'
	},

	'bower-apps': {
		command: 'bower install'
	}
};
