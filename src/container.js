requirejs([
	'seed/require.conf'
], function () {
	'use strict';

	requirejs([
		'require',
		'angular',
		'domReady',
		'lodash-extensions',
		'bootstrap',
		'appConfig',
		'apps/_includes',
		'apps/module'
	], function (require, ng, domReady) {
		domReady(function () {
			var el = document.querySelector('body');
			ng.bootstrap(ng.element(el).addClass('ng-app'), ['app']);
		});
	});
});
