require([
	/* deps */
], function () {
	'use strict';

	require([
		'apps/_includes',
		'apps/module'
	], function () {
		angular
			.element(document)
			.ready(function () {
				angular.bootstrap(angular.element('html').addClass('ng-app'), ['app']);
			});
	});
});
