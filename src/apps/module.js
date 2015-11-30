/**
 * @namespace app
 */

define(['angular', 'angular-gettext'], function (ng) {
	'use strict';

	var container = ng.module('app', [
		'seed',
		'app.conf',
		'app.dashboard'
	]);

	container.config(function ($cookiesProvider, appConf) {
		_.extend($cookiesProvider, appConf.environmentSettings.cookiesProviderConfig);
	});

	container.run(function ($log, $rootScope) {
		$log = $log.getInstance('app.module');

		$rootScope.appReady = true;

		$log.debug('Set up container configuration');
	});

	return container;
});
