var TextFitter =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getChildren = function getChildren(element) {
  return element.querySelectorAll('*');
};

var isOverflown = function isOverflown(element) {
  // element.scrollHeight
  // element.clientHeight
  console.dir(element.scrollHeight);
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};

var getFontSizeOfElement = function getFontSizeOfElement(element) {
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(style);
};

var calcNewFontSizes = function calcNewFontSizes(elements, multiplier) {
  var ret = [];
  elements.forEach(function (el) {
    return ret.push(getFontSizeOfElement(el) * multiplier);
  });
  return ret;
};

var getContainerSize = function getContainerSize(container) {
  var message = 'The width of the contents with padding: ' + container.scrollWidth + 'px.\n';
  message += 'The height of the contents with padding: ' + container.scrollHeight + 'px.\n';
  alert(message);
};

var getHeightOfElement = function getHeightOfElement(element) {
  return parseFloat(window.getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
};

var shrinkText = function shrinkText(element) {
  var _loop = function _loop() {
    var children = getChildren(element);
    var newFontSizes = calcNewFontSizes(children, 0.99);
    children.forEach(function (el, i) {
      return el.style.fontSize = newFontSizes[i] + 'px';
    });
  };

  while (isOverflown(element)) {
    _loop();
  }
};

var enlargeText = function enlargeText(element) {
  var _loop2 = function _loop2() {
    var children = getChildren(element);
    var newFontSizes = calcNewFontSizes(children, 1.01);
    children.forEach(function (el, i) {
      return el.style.fontSize = newFontSizes[i] + 'px';
    });
  };

  do {
    _loop2();
  } while (!isOverflown(element));
};

var fix = exports.fix = function fix(opts) {
  if (!opts.element) throw new Error('TextFitter: Element to adjust font sizes is not defined.');
  if (!opts.enlarge && !isOverflown(opts.element)) return;
  if (!isOverflown(opts.element)) enlargeText(opts.element);
  shrinkText(opts.element);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);