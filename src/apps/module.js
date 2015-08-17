/**
 * @namespace app
 */

define(['angular', 'angular-gettext'], function (ng) {
	'use strict';

	var container = ng.module('app', [
		'seed',
		'app.templates',
		'app.conf',
		'app.dashboard'
	]);

	container.run(function ($log, $rootScope, $state, appConf) {
		$log = $log.getInstance('app.module');

		container.name = appConf.appName;
		$rootScope.appReady = true;

		$rootScope.$state = $state;

		$log.debug('Set up container configuration');
	});

	return container;
});
