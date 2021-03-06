[![GitHub version](https://badge.fury.io/gh/vladotesanovic%2FngSemantic.png)](http://badge.fury.io/gh/vladotesanovic%2FngSemantic)
[![Dependency Status](https://david-dm.org/vladotesanovic/ngSemantic.svg)](https://david-dm.org/vladotesanovic/ngSemantic)
[![Build Status](https://travis-ci.org/vladotesanovic/ngSemantic.svg?branch=master)](https://travis-ci.org/vladotesanovic/ngSemantic)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)

# Angular2 & Semantic UI
<p align="center">
  <img src="http://i.imgur.com/SCTxyan.jpg" alt="Angular 2"/><br/>
  <a href="http://www.angular.io" target="_blank">Angular2</a> - <a href="http://semantic-ui.com" target="_blank">Semantic UI</a> 
</p>

## Live demo
<a href="https://ng-semantic.herokuapp.com" target="_blank">ng-semantic.herokuapp.com</a>

## Important!
<ul>
   <li>Angular 2 version: beta.13</li>
   <li>There is no bundled version yet.</li>
</ul>
        
## Installation
```bash
npm install ng-semantic --save
```

Semantic UI ( minified versions of css and js ) must be loaded in index.html

```html
<link rel="stylesheet" type="text/css" href="path/to/semantic.min.css">

<script src="path/to/jquery-2.1.4.min.js"></script>
<script src="path/to/semantic.min.js"></script>
```

Configure SystemJS loader:
```javascript
System.config({
    defaultJSExtensions: true,
    paths: {
        // REQUIRED BY ANGULAR 2 ( CHANGE PATH )
        'rxjs/operator/*' : 'vendor/rxjs/operator/*.js',
    },
    map: {
        // IF YOU ARE NOT ABLE TO LOAD FROM node_modules
        // you must copy ng-semantic from /node_modules/ng-semantic 
        // ( files: semantic.js, semantic.d.ts and folder: ng-semantic )
        // and set path to it
        'ng-semantic/semantic': 'path/to/ng-semantic/semantic.js'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
```
        
## Development
```bash
git clone https://github.com/vladotesanovic/ngSemantic.git
cd ngSemantic

# install dependencies
npm install

# build local files
npm run build

# local development server
npm run demo
```

## Components

  - sm-button
  - sm-loader
  - sm-header
  - sm-message
  - sm-popup
  - sm-segment
  - sm-modal
  - sm-sidebar
  - sm-dimmer
  - sm-flag
  - sm-input
  - sm-checkbox
  - sm-textarea
  - sm-form
  - sm-progress
  - sm-card
  - sm-tabs & sm-tab
  - sm-list
  - sm-item
  - sm-dir-tooltip
  - sm-dir-popup
  - sm-dir-sidebar
  - sm-dir-dimmer
  - sm-dir-modal
   
## Licence 

MIT License