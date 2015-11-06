<a name="1.2.0"></a>
# [1.2.0](//compare/v1.1.1...v1.2.0) (2015-11-05)


### Features

* **workflow:** #3244 - add chagelog generation grunt task dae3475, closes #3244

<a name="1.1.0"></a>
## [1.1.0](//compare/v1.1.1...v1.1.1) (2015-11-05)



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
