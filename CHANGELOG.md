## 1.1.1 

- cookiesProviderConfig object added to config/environments/*.json. 
  Properties: https://docs.angularjs.org/api/ngCookies/provider/$cookiesProvider#defaults
  i.e. 
  `
  	"cookiesProviderConfig": {
  		"domain": "ccc"
  	},
  `

## 1.1.0
- Migrated dependencies from container to seed
- Enabled changelog in relase

*Please update manually the following files when upgrading from 1.1.0<:*
- container.js
- apps/_includes.js 
