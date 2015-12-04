![Neoteric Logo](http://burczu-programator.pl/wp-content/uploads/2015/02/yeoman_io.png)

neoContainer (Angular) 
======

## General guidelines

* [Commit message format](commit-message) 


## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/stop-icon.png) Installation
Project requires having installed:

* [NodeJS](http://nodejs.org/)
* [Node Package Manager](https://www.npmjs.com/)
* [Grunt Command Line Interface](https://github.com/gruntjs/grunt-cli)

After downloading the project form Gitlab repository run command from command line:

```javascript
npm install
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/play-icon.png)  Running
By default after installation application configuration is set to _development_.
Local server can by run by command:

```javascript
grunt serve
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/upload-icon.png)  Deploy
You can locally create production version of code by running:

```javascript
grunt build--[development|staging|production]
```

**Important!** During building process is included `src/config/environments/build.json` configuration. 
To make it work locally update values to the suitable ones.

Then run in order to test working app in browser:

```javascript
grunt serve--build
```

## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/laboratory-icon.png)  Tests
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


## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/announcement-icon.png) ChangeLog

To check changes and migration guides between versions see [changelog](changelog)


## ![](http://icons.iconarchive.com/icons/graphicloads/100-flat/48/info-icon.png)  Reference
Additional documentation available on [Wiki](wiki)

