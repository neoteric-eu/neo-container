<a name="2.6.5"></a>
## [2.6.5](//compare/v2.6.4...v2.6.5) (2016-06-02)


### Bug Fixes

* **container:** Change logstash placeholder format to unify with build.json one, fix missing url 1f74b07


<a name="2.6.4"></a>
## [2.6.4](//compare/v2.6.2...v2.6.4) (2016-06-01)


### Features

* **config:** added appCode to config files, also modify app.conf output 7e12718
* **config/general:** added configuration for param serializer in SaasMgr models 7c1103d
* **exceptionHandler:** handle exception and log it to logstash 5be78b1



<a name="2.6.2"></a>
## [2.6.2](//compare/v2.6.1...v2.6.2) (2016-05-11)


### Bug Fixes

* **bower:** upgrade seed version in depdencies 1ce7007

### Features

* **config/general:** added configuration for param serializer in SaasMgr models 7c1103d



<a name="2.6.1"></a>
## [2.6.1](//compare/v2.6.0...v2.6.1) (2016-05-11)


### Bug Fixes

* **bower:** upgrade seed version in depdencies 1ce7007



<a name="2.6.0"></a>
# [2.6.0](//compare/v2.5.1...v2.6.0) (2016-05-06)


### Features

* **config/general:** added configuration for param serializer in SaasMgr models 90e182a



<a name="2.5.1"></a>
## [2.5.1](//compare/v2.5.0...v2.5.1) (2016-04-15)

### Bug Fixes

* **Users:** missing appConf dependency


<a name="2.5.0"></a>
# [2.5.0](//compare/v2.4.6...v2.5.0) (2016-04-14)


### Bug Fixes

* **settings:** missing favicons settings in config 093c4cc

### Features

* **favicon:** possibility to set up favicon for project 829ebfc
* index.html taken out from got ignore list acd5823



<a name="2.4.6"></a>
## [2.4.6](//compare/v2.4.5...v2.4.6) (2016-03-25)


### Features

* **bower.json:** #155 - Replace neo-dashboard with neo-components ee59802



<a name="2.4.5"></a>
## [2.4.5](//compare/v2.4.0...v2.4.5) (2016-03-16)


### Bug Fixes

* **.bowerc:** Updated bower repository path 586a770


<a name="2.4.0"></a>
# [2.4.0](//compare/v2.3.7...v2.4.0) (2016-03-04)


### Bug Fixes

* **prompt:** #129 - Task prompt:reset-changes fails 027ce4b, closes #129


### BREAKING CHANGES

* prompt: Use command `npm start` to run container initialization with `grunt preInstall && grunt install && grunt postInstall`.



<a name="2.3.7"></a>
## [2.3.7](//compare/v2.3.6...v2.3.7) (2016-03-04)

### Features

* **jarvis-widget:** Removed jarvis-widgets support a1b894a5


<a name="2.3.6"></a>
## [2.3.6](//compare/v2.3.5...v2.3.6) (2016-02-29)


### Bug Fixes

* **config:** Reverted environment variable name changes. 3c851c6



<a name="2.3.5"></a>
## [2.3.5](//compare/v2.3.4...v2.3.5) (2016-02-25)


### Bug Fixes

* **Grunt:** Fixed source map generation for development and staging environment c8329c8



<a name="2.3.4"></a>
## [2.3.4](//compare/v2.3.3...v2.3.4) (2016-02-25)


### Bug Fixes

* **config:** Enabled html5mode configuration f15eff2



<a name="2.3.3"></a>
## [2.3.3](//compare/v2.2.13...v2.3.3) (2016-02-24)


<a name="2.2.13"></a>
## [2.2.13](//compare/v2.2.12...v2.2.13) (2016-02-08)


### Bug Fixes

* **bower:** changed order of resolving registries bef20f3

### Features

* **cookieConsent:** #39 general config to show/hide cookie consent e3fae4f
* **graphs:** #47 - remove morris graphs a763ee4


### BREAKING CHANGES

* graphs: From now this import can not be used:
@import "/src/assets/seed/less/smartadmin/modules/charts";



<a name="2.2.12"></a>
## [2.2.12](//compare/v2.2.9...v2.2.12) (2016-02-03)


<a name="2.2.9"></a>
## [2.2.9](//compare/v2.2.8...v2.2.9) (2016-02-01)


### Bug Fixes

* **nexus:** Updated config to make releases work #2 1de3ded



<a name="2.2.8"></a>
## [2.2.8](//compare/v2.2.7...v2.2.8) (2016-02-01)


### Bug Fixes

* **nexus:** Updated config to make releases work 6a1cb23



<a name="2.2.7"></a>
## [2.2.7](//compare/v2.2.6...v2.2.7) (2016-02-01)


### Bug Fixes

* **grunt compress:** Added missing project prefix to zip name. a709657

### Features

* **package.json:** Remove unused npm dependecies. 5acf6f4


### BREAKING CHANGES

* package.json: Now protractor have to be installed globally to make command `grunt test` work with command: `[sudo] npm install protractor -g`



<a name="2.2.5"></a>
## [2.2.5](//compare/v2.2.4...v2.2.5) (2016-01-27)


### Features

* **config:** Added cookie policy banner .less cef3ba9



<a name="2.2.4"></a>
## [2.2.4](//compare/v2.2.3...v2.2.4) (2016-01-25)

### Bug Fixes

* element and by added to jshintrc 8b4db34



<a name="2.2.3"></a>
## [2.2.3](//compare/v2.2.2...v2.2.3) (2016-01-24)

### Bug Fixes

* Removed pre-install task in package.json e42b49c


<a name="2.2.2"></a>
## [2.2.1](//compare/v2.2.1...v2.2.2) (2016-01-24)


### Bug Fixes

* Removed post-install task in .bowerrc e42b49c

Script was causing thrown error in newly created containers.

<a name="2.2.1"></a>
## [2.2.1](//compare/v2.2.0...v2.2.1) (2016-01-21)


### Bug Fixes

* **bowercopy:** Fix generator and npm based installation 0e45072



<a name="2.2.0"></a>
# [2.2.0](//compare/v2.1.6...v2.2.0) (2016-01-21)


### Features

* **config:** Removed bower installation from npm install task aa56ef9


### BREAKING CHANGES

* config: Before running `npm install` run `bower install --force` to update bower dependencies or use always`yo neo`



<a name="2.1.5"></a>
## [2.1.5](//compare/v2.1.4...v2.1.5) (2016-01-13)




<a name="2.1.4"></a>
## [2.1.4](//compare/v2.1.3...v2.1.4) (2016-01-11)




<a name="2.1.6"></a>
## [2.1.6](//compare/v2.1.5...v2.1.6) (2016-01-18)


### Features

* **config:** Optimized app installation time. e51133b
* **package.json:** Added chai.js peer-dependency a2b8e12



<a name="2.1.5"></a>
## [2.1.5](//compare/v2.1.4...v2.1.5) (2016-01-13)


### Features

* **config:** #3487 -  Enable default redirect customization af4930d



<a name="2.1.4"></a>
## [2.1.4](//compare/v2.1.3...v2.1.4) (2016-01-11)

### Bug Fixes

* **grunt:** Removed cleaning of bower_components catalog in favor of `bower cache clean` + extended .gitignore



<a name="2.1.3"></a>
## [2.1.3](//compare/v2.1.2...v2.1.3) (2016-01-08)


### Features

* Bumped gitclone-bower task to newer version 90e8128



<a name="2.1.2"></a>
# [2.1.2](//compare/v2.0.2...v2.1.2) (2016-01-07)


### Features

* #3123 - Create independent seed building process d2aae7c, closes #3123



<a name="2.0.2"></a>
## [2.0.2](//compare/v2.0.1...v2.0.2) (2015-12-21)

### Features

* **grunt:** Moved tasks from local to private npm 42b4fa34


<a name="2.0.1"></a>
## [2.0.1](//compare/v2.0.0...v2.0.1) (2015-12-17)


### Bug Fixes

* **less:** Fixed missing vendor.less in index.html 8d33cd1



<a name="2.0.0"></a>
# [2.0.0](//compare/v1.2.6...v2.0.0) (2015-12-17)


### Features

* **styles:** #3448 - Abstract less configuration from seed to container configuration 66c09a3, closes #3448


### BREAKING CHANGES

* styles: From now on Yeoman generator have to be used to install container.

NPM set-up:
```
npm set registry http://ntrc-delta.neoteric.eu:4873
npm install -g generator-neo
```

And from container catalog run:
`yo neo`

Remove from container **all** files except:
- `src/config`
- `src/bower.json`
- `.bowerrc`

Include all custom application styles from index.html to `src/config/styles/apps.less`.


<a name="1.2.6"></a>
## [1.2.5](//compare/v1.2.5...v1.2.6) (2015-12-14)


### Bug Fixes

* **aliases:** Added new Grunt task `build--local` that allows to browse build code with local configuration 4763869
* **permission:** Fixed problem with initial unset permissions. 2de5fa6



<a name="1.2.5"></a>
## [1.2.4](//compare/v1.2.4...v1.2.5) (2015-12-14)


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
