module.exports = function () {
	'use strict';

	return {
		container: {
			options: {
				paths: ['src/assets', 'src/config']
			},
			files: {
				'<%= paths.assets %>/vendor/css/apps.css': '<%= paths.config %>/styles/apps.less',
				'<%= paths.assets %>/vendor/css/seed.css': '<%= paths.config %>/styles/seed.less',
				'<%= paths.assets %>/vendor/css/smart-admin.css': '<%= paths.config %>/styles/smart-admin.less',
				'<%= paths.assets %>/vendor/css/container.css': '<%= paths.config %>/styles/container.less'
			}
		}
	};
};
