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
exports.fix = fix;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var WRAPPER_CLASSNAME = 'text-fitter-wrapper';
var getChildren = function getChildren(element) {
  return element.querySelectorAll('*');
};

var getInnerHeight = function getInnerHeight(element) {
  var height = window.getComputedStyle(element, null).getPropertyValue('height').replace('px', '');
  return parseFloat(height);
};

var isOverflown = function isOverflown(element) {
  var height = getInnerHeight(element);
  var contentHeight = getContentWrapper(element).offsetHeight;
  return contentHeight >= height;
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

var getHeightOfElement = function getHeightOfElement(element) {
  return parseFloat(window.getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
};

var fontSizesAreTooSmall = function fontSizesAreTooSmall(fontSizes) {
  var tooSmall = false;
  fontSizes.forEach(function (fontSize) {
    if (Math.round(fontSize) < 1) tooSmall = true;
  });
  return tooSmall;
};

var setFontSizes = function setFontSizes(elements, fontSizes) {
  elements.forEach(function (el, i) {
    el.style.fontSize = fontSizes[i] + 'px';
  });
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

var getElements = function getElements() {
  var allElements = [].concat(_toConsumableArray(document.getElementsByTagName('*')));
  return allElements.filter(function (el) {
    return el.getAttribute(ATTRIBUTE) !== null;
  });
};

var generateArray = function generateArray(elements) {
  if (elements.constructor.name === 'HTMLCollection') return [].concat(_toConsumableArray(elements));
  return elements;
};

var getContentWrapper = function getContentWrapper(element) {
  return element.querySelectorAll('.' + WRAPPER_CLASSNAME)[0];
};

function fix(els) {
  var enlarge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var elements = generateArray(els);
  if (!elements || elements.length < 1) throw new Error('TextFitter: No elements to adjust text.');
  if (elements.length < 1) return;
  elements.forEach(function (el) {
    var children = getChildren(el);
    el.innerHTML = '<div class="' + WRAPPER_CLASSNAME + '">' + el.innerHTML + '</div>';
    if ((enlarge || isOverflown(el)) && children.length > 0) {
      getContentWrapper(el).style.display = 'inline-block';
      if (!isOverflown(el)) enlargeText(el);
      shrinkText(el);
      getContentWrapper(el).style.display = 'unset';
    }
  });
  var wrapperElements = document.querySelectorAll('.' + WRAPPER_CLASSNAME);
  var wrappers = generateArray(wrapperElements);
  // wrappers.forEach(wrapper => wrapper.style.height= '100%');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);