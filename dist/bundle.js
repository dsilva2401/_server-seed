/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path='../typings/index.d.ts' />
	"use strict";
	var index_ts_1 = __webpack_require__(1);
	var app = {};
	app.core = index_ts_1.default;
	console.log(index_ts_1.default.libs);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = app;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_ts_1 = __webpack_require__(2);
	var index_ts_2 = __webpack_require__(3);
	// Init core object
	var core = {};
	// Setup libs
	index_ts_2.setup(core);
	// Setup definitions
	index_ts_1.setup(core);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = core;


/***/ },
/* 2 */
/***/ function(module, exports) {

	// import personSetup from './Person.ts';
	"use strict";
	function setup(core) {
	    // Init definitoins
	    var definitions = {};
	    // Setup definitions
	    // personSetup(definitions);
	    // Export definitions
	    core.definitions = definitions;
	}
	exports.setup = setup;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fs = __webpack_require__(4);
	function setup(core) {
	    // Init definitoins
	    var libs = {};
	    // Setup libs
	    libs.fs = fs;
	    // Export libs
	    core.libs = libs;
	}
	exports.setup = setup;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);