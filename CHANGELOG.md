<a name="1.2.4"></a>
## [1.2.4](//compare/v1.2.4...v1.2.4) (2015-12-14)


### Bug Fixes

* **package.json:** Fixed grunt installation problem. 251bbda



<a name="1.2.4"></a>
## [1.2.4](//compare/v1.2.3...v1.2.4) (2015-12-11)


### Bug Fixes

* Fixed broken builds in container versions 1.2.2 and 1.2.3 794eef9

### BREAKING CHANGES
* aliases.js: Manually update `config/grunt/config/aliases.js` and `package.json`


<a name="1.2.3"></a>
## [1.2.3](//compare/v1.2.2...v1.2.3) (2015-12-11)



<a name="1.2.2"></a>
## [1.2.2](//compare/v1.2.1...v1.2.2) (2015-12-11)


### Bug Fixes

* **aliases.js:** #3426 - Split grunt installation into preInstall and postInstall 57d9602, closes #3426
* **gettext-compile:** Fixed order of loading translations in Require.js e883be1
* **githooks.js:** #3417 - Rebuild container-generated files when switching container branches 04280b7, closes #3417
* **LanguageAPI:** #3424 - Enable both ISO and POSIX language codes 1b5ca1a, closes #3424


### BREAKING CHANGES

* aliases.js: Manually update `config/grunt/config/aliases.js` and `package.json`
* LanguageAPI: Manually update `config/settings/language.json`
* gettext-compile: Manually update `config/grunt/config/gettext-compile.js` file.
* githooks.js:  Manually update `config/grunt/config/githooks.js` file.



<a name="1.2.1"></a>
# [1.2.1](//compare/v1.2.1...v1.2.0) (2015-12-03)


### Bug Fixes

* **config.js:** Fixed installation problem 98a0729


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
