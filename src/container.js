requirejs([
	'seed/require.conf'
], function () {
	'use strict';

	requirejs([
		'require',
		'angular',
		'lodash-extensions',
		'bootstrap',
		'appConfig',
		'apps/_includes',
		'apps/module'
	], function (require, ng) {
		ng.element(document).ready(function () {
			ng.bootstrap(ng.element('body').addClass('ng-app'), ['app']);
		});
	});
});
