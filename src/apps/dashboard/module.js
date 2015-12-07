define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('app.dashboard', []);

	module.config(function ($stateProvider, gettext) {
		$stateProvider
			.state('app.dashboard', {
				url: '/dashboard',
				views: {
					content: {
						templateUrl: 'apps/dashboard/views/dashboard.html'
					}
				},
				data: {
					title: gettext('Dashboard')
				}
			});
	});

	return module;
});
