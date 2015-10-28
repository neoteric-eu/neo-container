requirejs([
	'seed/require.conf'
], function () {
	'use strict';

	requirejs([
		'apps/_includes',
		'apps/module'
	], function () {
		angular
			.element(document)
			.ready(function () {
				angular.bootstrap(angular.element('body').addClass('ng-app'), ['app']);
			});
	});
});
