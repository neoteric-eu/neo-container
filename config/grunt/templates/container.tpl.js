requirejs([
	/* deps */
], function () {
	'use strict';

	requirejs([
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
