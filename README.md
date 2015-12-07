![Neoteric Logo](http://burczu-programator.pl/wp-content/uploads/2015/02/yeoman_io.png)

## ![Installation](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/stop-icon.png) Installation
Project requires having installed:

* [NodeJS](http://nodejs.org/)
* [Node Package Manager](https://www.npmjs.com/)
* [Grunt Command Line Interface](https://github.com/gruntjs/grunt-cli)

After downloading the project form Gitlab repository run command from command line:

```javascript
npm install
```

## ![Running](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/play-icon.png) Running
By default after installation application configuration is set to 
_local_ based on `src/config/environments/local.json` file.
Local server can by run by command:

```javascript
grunt serve
```

## ![Building](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/upload-icon.png) Building
Building tasks should be done automatically by CI jobs, but it is possible to locally 
create production version of code. Depending on selected configuration the build 
will optionally include source maps allowing to debug the code.

```javascript
grunt build--[development|staging|production]
```

**Important!** During building process is included `src/config/environments/build.json` configuration. 
To make it work locally update values to the suitable ones.

Then run in order to test working app in browser:

```javascript
grunt serve--build
```

## ![Releasing](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/cloud-icon.png) Releasing
Releasing tasks should be done automatically by CI jobs, but it is possible to do it manually. 
As an effect previously built production code will be zipped and put on Nexus repository depending 
on selected release configuration. 

```javascript
grunt release--[development|staging|production]
```


## ![Testing](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/laboratory-icon.png) Testing
You can run multiple type of test on your local environment:

* E2E _(via. Protractor)_

	```javascript
	grunt test:e2e
	```

* Unit _(via. Jasmine)_

	```javascript
	grunt test:unit
	```

* Code Coverage (via. Istanbul)

	```javascript
	grunt coverage
	```

To run all tests simply type:
```javascript
grunt test
```

## ![Guidelines](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/favourite-2-icon.png) Guidelines

Before contributing please read following documents:

* [Code style guide] (https://gitlab.neoteric.eu/frontend/neo-container/wikis/guidlines)
* [Commit message format](https://gitlab.neoteric.eu/frontend/neo-container/wikis/commit-message) 



## ![ChangeLog](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/announcement-icon.png) Changelog

To check changes and migration guides between versions see 
[changelog](https://gitlab.neoteric.eu/frontend/neo-container/blob/master/CHANGELOG.md)


## ![Reference](https://gitlab.neoteric.eu/frontend/neo-container/wikis/assets/info-icon.png) Reference
Additional documentation available on 
[wiki](https://gitlab.neoteric.eu/frontend/neo-container/wikis/home)

