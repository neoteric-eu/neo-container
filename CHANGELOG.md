<a name="1.2.0"></a>
# [1.2.0](//compare/v1.1.7...v1.2.0) (2015-12-03)

### Bug Fixes

* **Grunt:** #3219 - Resolving gitclone-bower versions da94bfc, closes #3219

### Features

* **configuration:** #3251 - Parametrise production configuration of the application 8e79e62, closes #3251
* **container:** #3251 - Parametrise environment configuration of the application 74e5e9f
* **Grunt:** #3348 - Jshint is not triggered when committing from application 945f01e, closes #3348
* **LanguageAPI:** #3330 - Add Accept-Language to neoRequestHeaders 5c2e94f
* **neoVersionTag:** #3394 - Add container version directive 8cdeb86

### Reverts

* Rollback gettext-compile task to correct module config 01929b5


### BREAKING CHANGES

* Container: Introduced set of Grunt tasks for CI:

	* `build--[development|production|staging]`
	* `release--[development|production|staging]`
	* `config--[local|build]`
	* `generate--container`

* LanguageAPI: 

	*	Update `.po` files languages from underscore to dash (`pl_PL` -> `pl-PL`)
	* Change `language.json` locale in your container configuration from underscore to dash (`pl_PL` -> `pl-PL`)

* Automatic wiredeping container dependencies based on defined set of micro-apps.
* All releases are now send to snapshot/release repository on Nexus.

* Please manually __update__ following files/catalogs:

	* `config/`
	* `src/index.html`
	* `package.json`
	* `Gruntfile.js`
	* `.gitignore`

* Please manually __remove__ following files/catalogs from GIT repository:

	* `src/container.js`
	* `src/apps/_includes.js`
	* `src/apps/module.js`


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
