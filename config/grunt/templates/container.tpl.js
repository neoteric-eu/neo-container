/*
 * IMPORTANT!
 * This file is generated by grunt tasks during installation, injecting automatically micro apps dependencies.
 * Please do not modify this file manually. To re-build dependencies use `grunt generate--container` task.
 */
(function () {
	'use strict';

	function handleStackTrace(error) {
		console.error(error);
	
		var url = '__LOGSTASH_URL__';
		if(url.indexOf('__') === 0) {
			return;
		}
		StackTrace.fromError(error).then(function(stack) {
			StackTrace.report(stack, '', {
				payload: error.message,
				type: error.requireType,
				modules: error.requireModules
			});
		});
	}
	
	requirejs.onError = function (error) {
		handleStackTrace(error);
	};
	
	require([
		/* deps */
	], function () {
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
})();
