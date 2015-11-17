<a name="1.1.4"></a>
## [1.1.4](//compare/v1.1.2...v1.1.4) (2015-11-17)


### Features

* **neoNavigation:** #3133 - Remove smart-menu.js a513c41, closes #3133
* **neoPageTitle:** #3304 - Add missing neoPageTitle directive a62ca3b, closes #3304


### BREAKING CHANGES

* neoPageTitle: 
	Now application is bootstrapped on `<html>` tag instead of `<body>`. 
	Please manually update files: `src/container.js` and `config/protractor/protractor.conf.js` 
	in application container.
	
* neoNavigation: 
	From now every `_navigation.html` file has to be structured 
	based on `neoNavigationGroup` and `neoNavigationItem` directives. 
	See included examples in documentation of those directives.



<a name="1.1.3"></a>
## [1.1.3](//compare/v1.1.2...v1.1.3) (2015-11-10)

### Bug Fixes

* **config:** gitclone does not work for project without standard prefixes 1cd2cf4

### Features

* **workflow:** #3244 - add `conventionalChangelog` grunt task 8bf7993, closes #3244

<a name="1.2.0"></a>
# [1.2.0](//compare/v1.1.1...v1.1.2) (2015-11-05)

### Features

* **workflow:** #3244 - add chagelog generation grunt task dae3475, closes #3244

<a name="1.1."></a>
## [1.1.1](//compare/v1.1.0...v1.1.1) (2015-11-05)

## 1.1.1 
- *showEuLogotypes* in config/settings/general.json enables displaying EU logotypes
- cookiesProviderConfig object added to config/environments/*.json. 
  Properties: https://docs.angularjs.org/api/ngCookies/provider/$cookiesProvider#defaults
  i.e. 
  `
  	"cookiesProviderConfig": {
  		"domain": "neoteric.eu"
  	},
  `

## 1.1.0
- Migrated dependencies from container to seed
- Enabled changelog in relase

### BREAKING CHANGES
Please update manually the following files when upgrading from 1.0.0+ :

- container.js
- apps/_includes.js 
