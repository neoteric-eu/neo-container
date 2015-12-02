/*
 * IMPORTANT!
 * This file is generated by grunt tasks during installation, injecting automatically micro apps dependencies.
 * Please do not modify this file manually. To re-build dependencies use `grunt generate--container` task.
 */

/**
 * @namespace app
 */

define(['angular', 'angular-gettext'], function (ng) {
	'use strict';

	var container = ng.module('app', [
		'seed',
		'app.conf',
		/* modules */
	]);

	container.config(function ($cookiesProvider, appConf) {
		_.extend($cookiesProvider, appConf.environmentSettings.cookiesProviderConfig);
	});

	container.run(function ($log, $rootScope, appConf) {
		$log = $log.getInstance('app.module');

		$rootScope.appReady = true;

		$log.debug('Set up container configuration');

		$log.info('Launching ' + appConf.generalSettings.name + ' in version: ' + appConf.generalSettings.version);

		_.each(appConf.appsSettings, function (settings) {
			$log.info('Launching ' + settings.dependency + ' in version: ' + settings.version);
		});
	});

	return container;
});
