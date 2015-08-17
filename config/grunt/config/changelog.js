module.exports = function (grunt) {
	'use strict';

	var bowerConf = grunt.file.readJSON('src/bower.json');
	var version = bowerConf.version === '1.0.0' ? '' : bowerConf.version;

	return {
		default: {
			options: {
				logArguments: [
					'--pretty=* %h - %ad: %s',
					'--no-merges',
					'--date=short'
				],
				after: version,
				dest: 'dist/release-notes.txt',
				fileHeader: '## Changelog ##',
				template: '{{> features}}',
				featureRegex: /^(.*)$/gim,
				partials: {
					features: '{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
					feature: '- {{this}} {{this.date}}\n'
				}
			}
		}
	}
};
