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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************!*\
  !*** ./node_modules/framework7-vue/utils/utils.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 111);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 114);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ 124);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = {
  noUndefinedProps: function noUndefinedProps(obj) {
    var o = {};
    (0, _keys2.default)(obj).forEach(function (key) {
      if (typeof obj[key] !== 'undefined') o[key] = obj[key];
    });
    return o;
  },
  isTrueProp: function isTrueProp(val) {
    return val === true || val === '';
  },
  isStringProp: function isStringProp(val) {
    return typeof val === 'string' && val !== '';
  },
  isObject: function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  now: function now() {
    return Date.now();
  },
  extend: function extend() {
    var deep = true;
    var to = void 0;
    var from = void 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'boolean') {
      var _args = (0, _slicedToArray3.default)(args, 2);

      deep = _args[0];
      to = _args[1];

      args.splice(0, 2);
      from = args;
    } else {
      var _args2 = (0, _slicedToArray3.default)(args, 1);

      to = _args2[0];

      args.splice(0, 1);
      from = args;
    }
    for (var i = 0; i < from.length; i += 1) {
      var nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = (0, _keys2.default)(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (!deep) {
              to[nextKey] = nextSource[nextKey];
            } else if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
  flattenArray: function flattenArray() {
    var arr = [];

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (arg) {
      if (Array.isArray(arg)) arr.push.apply(arr, (0, _toConsumableArray3.default)(Utils.flattenArray.apply(Utils, (0, _toConsumableArray3.default)(arg))));else arr.push(arg);
    });
    return arr;
  },
  classNames: function classNames() {
    var classes = [];

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    args.forEach(function (arg) {
      if ((typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg)) === 'object' && arg.constructor === Object) {
        (0, _keys2.default)(arg).forEach(function (key) {
          if (arg[key]) classes.push(key);
        });
      } else if (arg) classes.push(arg);
    });
    return classes.join(' ');
  }
};
exports.default = Utils;

/***/ }),
/* 1 */
/*!****************************************************************************!*\
  !*** ./node_modules/framework7-vue/runtime-helpers/vue-component-props.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (component) {
  var props = {};
  var $props = component.$props;
  (0, _keys2.default)($props).forEach(function (propKey) {
    if (typeof $props[propKey] !== 'undefined') props[propKey] = $props[propKey];
  });

  var children = [];
  (0, _keys2.default)(component.$slots).forEach(function (slotName) {
    children.push.apply(children, (0, _toConsumableArray3.default)(component.$slots[slotName]));
  });
  props.children = children;

  return props;
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 93), __esModule: true };

/***/ }),
/* 3 */
/*!*****************************************************!*\
  !*** ./node_modules/framework7-vue/utils/mixins.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 46);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _utils = __webpack_require__(/*! ./utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mixins = {
  colorProps: {
    color: String,
    colorTheme: String,
    textColor: String,
    bgColor: String,
    borderColor: String,
    rippleColor: String,
    themeDark: Boolean
  },
  colorClasses: function colorClasses(props) {
    var _ref;

    var color = props.color,
        colorTheme = props.colorTheme,
        textColor = props.textColor,
        bgColor = props.bgColor,
        borderColor = props.borderColor,
        rippleColor = props.rippleColor,
        themeDark = props.themeDark;


    return _ref = {
      'theme-dark': themeDark
    }, (0, _defineProperty3.default)(_ref, 'color-' + color, color), (0, _defineProperty3.default)(_ref, 'color-theme-' + colorTheme, colorTheme), (0, _defineProperty3.default)(_ref, 'text-color-' + textColor, textColor), (0, _defineProperty3.default)(_ref, 'bg-color-' + bgColor, bgColor), (0, _defineProperty3.default)(_ref, 'border-color-' + borderColor, borderColor), (0, _defineProperty3.default)(_ref, 'ripple-color-' + rippleColor, rippleColor), _ref;
  },

  linkIconProps: {
    icon: String,
    iconMaterial: String,
    iconIon: String,
    iconFa: String,
    iconF7: String,
    iconIfMd: String,
    iconIfIos: String,
    iconIos: String,
    iconMd: String,
    iconColor: String,
    iconSize: [String, Number]
  },
  linkRouterProps: {
    back: Boolean,
    external: Boolean,
    force: Boolean,
    animate: {
      type: Boolean,
      default: undefined
    },
    ignoreCache: Boolean,
    pageName: String,
    reloadCurrent: Boolean,
    reloadAll: Boolean,
    reloadPrevious: Boolean,
    routeTabId: String,
    view: String
  },
  linkRouterAttrs: function linkRouterAttrs(props) {
    var force = props.force,
        reloadCurrent = props.reloadCurrent,
        reloadPrevious = props.reloadPrevious,
        reloadAll = props.reloadAll,
        animate = props.animate,
        ignoreCache = props.ignoreCache,
        routeTabId = props.routeTabId,
        view = props.view;


    var dataAnimate = void 0;
    if ('animate' in props && typeof animate !== 'undefined') {
      dataAnimate = animate.toString();
    }

    return {
      'data-force': force || undefined,
      'data-reload-current': reloadCurrent || undefined,
      'data-reload-all': reloadAll || undefined,
      'data-reload-previous': reloadPrevious || undefined,
      'data-animate': dataAnimate,
      'data-ignore-cache': ignoreCache || undefined,
      'data-route-tab-id': routeTabId || undefined,
      'data-view': _utils2.default.isStringProp(view) ? view : undefined
    };
  },
  linkRouterClasses: function linkRouterClasses(props) {
    var back = props.back,
        linkBack = props.linkBack,
        external = props.external;


    return {
      back: back || linkBack,
      external: external
    };
  },

  linkActionsProps: {
    searchbarEnable: [Boolean, String],
    searchbarDisable: [Boolean, String],

    searchbarClear: [Boolean, String],
    searchbarToggle: [Boolean, String],

    // Panel
    panelOpen: [Boolean, String],
    panelClose: [Boolean, String],

    // Popup
    popupOpen: [Boolean, String],
    popupClose: [Boolean, String],

    // Actions
    actionsOpen: [Boolean, String],
    actionsClose: [Boolean, String],

    // Popover
    popoverOpen: [Boolean, String],
    popoverClose: [Boolean, String],

    // Login Screen
    loginScreenOpen: [Boolean, String],
    loginScreenClose: [Boolean, String],

    // Picker
    sheetOpen: [Boolean, String],
    sheetClose: [Boolean, String],

    // Sortable
    sortableEnable: [Boolean, String],
    sortableDisable: [Boolean, String],
    sortableToggle: [Boolean, String]
  },
  linkActionsAttrs: function linkActionsAttrs(props) {
    var searchbarEnable = props.searchbarEnable,
        searchbarDisable = props.searchbarDisable,
        searchbarClear = props.searchbarClear,
        searchbarToggle = props.searchbarToggle,
        panelOpen = props.panelOpen,
        panelClose = props.panelClose,
        popupOpen = props.popupOpen,
        popupClose = props.popupClose,
        actionsOpen = props.actionsOpen,
        actionsClose = props.actionsClose,
        popoverOpen = props.popoverOpen,
        popoverClose = props.popoverClose,
        loginScreenOpen = props.loginScreenOpen,
        loginScreenClose = props.loginScreenClose,
        sheetOpen = props.sheetOpen,
        sheetClose = props.sheetClose,
        sortableEnable = props.sortableEnable,
        sortableDisable = props.sortableDisable,
        sortableToggle = props.sortableToggle;


    return {
      'data-searchbar': _utils2.default.isStringProp(searchbarEnable) && searchbarEnable || _utils2.default.isStringProp(searchbarDisable) && searchbarDisable || _utils2.default.isStringProp(searchbarClear) && searchbarClear || _utils2.default.isStringProp(searchbarToggle) && searchbarToggle || undefined,
      'data-panel': _utils2.default.isStringProp(panelOpen) && panelOpen || _utils2.default.isStringProp(panelClose) && panelClose || undefined,
      'data-popup': _utils2.default.isStringProp(popupOpen) && popupOpen || _utils2.default.isStringProp(popupClose) && popupClose || undefined,
      'data-actions': _utils2.default.isStringProp(actionsOpen) && actionsOpen || _utils2.default.isStringProp(actionsClose) && actionsClose || undefined,
      'data-popover': _utils2.default.isStringProp(popoverOpen) && popoverOpen || _utils2.default.isStringProp(popoverClose) && popoverClose || undefined,
      'data-sheet': _utils2.default.isStringProp(sheetOpen) && sheetOpen || _utils2.default.isStringProp(sheetClose) && sheetClose || undefined,
      'data-login-screen': _utils2.default.isStringProp(loginScreenOpen) && loginScreenOpen || _utils2.default.isStringProp(loginScreenClose) && loginScreenClose || undefined,
      'data-sortable': _utils2.default.isStringProp(sortableEnable) && sortableEnable || _utils2.default.isStringProp(sortableDisable) && sortableDisable || _utils2.default.isStringProp(sortableToggle) && sortableToggle || undefined
    };
  },
  linkActionsClasses: function linkActionsClasses(props) {
    var searchbarEnable = props.searchbarEnable,
        searchbarDisable = props.searchbarDisable,
        searchbarClear = props.searchbarClear,
        searchbarToggle = props.searchbarToggle,
        panelOpen = props.panelOpen,
        panelClose = props.panelClose,
        popupOpen = props.popupOpen,
        popupClose = props.popupClose,
        actionsClose = props.actionsClose,
        actionsOpen = props.actionsOpen,
        popoverOpen = props.popoverOpen,
        popoverClose = props.popoverClose,
        loginScreenOpen = props.loginScreenOpen,
        loginScreenClose = props.loginScreenClose,
        sheetOpen = props.sheetOpen,
        sheetClose = props.sheetClose,
        sortableEnable = props.sortableEnable,
        sortableDisable = props.sortableDisable,
        sortableToggle = props.sortableToggle;


    return {
      'searchbar-enable': searchbarEnable || searchbarEnable === '',
      'searchbar-disable': searchbarDisable || searchbarDisable === '',
      'searchbar-clear': searchbarClear || searchbarClear === '',
      'searchbar-toggle': searchbarToggle || searchbarToggle === '',
      'panel-close': _utils2.default.isTrueProp(panelClose) || panelClose,
      'panel-open': panelOpen || panelOpen === '',
      'popup-close': _utils2.default.isTrueProp(popupClose) || popupClose,
      'popup-open': popupOpen || popupOpen === '',
      'actions-close': _utils2.default.isTrueProp(actionsClose) || actionsClose,
      'actions-open': actionsOpen || actionsOpen === '',
      'popover-close': _utils2.default.isTrueProp(popoverClose) || popoverClose,
      'popover-open': popoverOpen || popoverOpen === '',
      'sheet-close': _utils2.default.isTrueProp(sheetClose) || sheetClose,
      'sheet-open': sheetOpen || sheetOpen === '',
      'login-screen-close': _utils2.default.isTrueProp(loginScreenClose) || loginScreenClose,
      'login-screen-open': loginScreenOpen || loginScreenOpen === '',
      'sortable-enable': _utils2.default.isTrueProp(sortableEnable) || sortableEnable,
      'sortable-disable': _utils2.default.isTrueProp(sortableDisable) || sortableDisable,
      'sortable-toggle': sortableToggle === true || typeof sortableToggle === 'string' && sortableToggle.length
    };
  }
};
exports.default = Mixins;

/***/ }),
/* 4 */
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ 99);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 5 */
/*!*************************************************************************************!*\
  !*** ./node_modules/framework7-vue/runtime-helpers/vue-component-dispatch-event.js ***!
  \*************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (component, events) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var self = component;
  events.split(' ').forEach(function (event) {
    self.$emit.apply(self, [event].concat(args));
  });
};

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 39)('wks');
var uid = __webpack_require__(/*! ./_uid */ 27);
var Symbol = __webpack_require__(/*! ./_global */ 9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/*!*************************************************************!*\
  !*** ./node_modules/vue-loader/lib/component-normalizer.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 16);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 51);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 54);
var defined = __webpack_require__(/*! ./_defined */ 36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 9);
var core = __webpack_require__(/*! ./_core */ 6);
var ctx = __webpack_require__(/*! ./_ctx */ 50);
var hide = __webpack_require__(/*! ./_hide */ 15);
var has = __webpack_require__(/*! ./_has */ 12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 10);
var createDesc = __webpack_require__(/*! ./_property-desc */ 23);
module.exports = __webpack_require__(/*! ./_descriptors */ 11) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 22);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 137), __esModule: true };

/***/ }),
/* 20 */
/*!*************************************************!*\
  !*** ./node_modules/framework7-vue/utils/f7.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ./utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _events = __webpack_require__(/*! ./events */ 25);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f7 = {
  instance: null,
  Framework7: null,
  init: function init(rootEl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var routes = arguments[2];

    var f7Params = _utils2.default.extend({}, params, {
      root: rootEl
    });
    if (routes && routes.length && !f7Params.routes) f7Params.routes = routes;

    f7.instance = new f7.Framework7(f7Params);
    if (f7.instance.initialized) {
      _events2.default.emit('ready', f7.instance);
    } else {
      f7.instance.on('init', function () {
        _events2.default.emit('ready', f7.instance);
      });
    }
  },
  ready: function ready(callback) {
    if (!callback) return;
    if (f7.instance) callback(f7.instance);else {
      _events2.default.once('ready', callback);
    }
  },

  routers: {
    views: [],
    tabs: [],
    modals: null
  }
};

exports.default = f7;

/***/ }),
/* 21 */
/*!********************************************************************************!*\
  !*** ./node_modules/framework7-vue/runtime-helpers/vue-component-set-state.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (component, updater, callback) {
  var self = component;
  var newState = void 0;
  if (typeof updater === 'function') {
    newState = updater(self.state, self.props);
  } else {
    newState = updater;
  }
  (0, _keys2.default)(newState).forEach(function (key) {
    self.$set(self.state, key, newState[key]);
  });
  if (typeof callback === 'function') callback();
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 23 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 53);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 40);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 25 */
/*!*****************************************************!*\
  !*** ./node_modules/framework7-vue/utils/events.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventsEmitter = {
  listeners: {},
  on: function on(events, handler) {
    events.split(' ').forEach(function (event) {
      if (!eventsEmitter.listeners[event]) eventsEmitter.listeners[event] = [];
      eventsEmitter.listeners[event].unshift(handler);
    });
  },
  off: function off(events, handler) {
    events.split(' ').forEach(function (event) {
      if (!eventsEmitter.listeners[event]) return;
      if (typeof handler === 'undefined') {
        eventsEmitter.listeners[event] = [];
      } else {
        eventsEmitter.listeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler) {
            eventsEmitter.listeners[event].splice(index, 1);
          }
        });
      }
    });
  },
  once: function once(events, handler) {
    if (typeof handler !== 'function') return;
    function onceHandler() {
      handler.apply(undefined, arguments);
      eventsEmitter.off(events, onceHandler);
    }
    eventsEmitter.on(events, onceHandler);
  },
  emit: function emit(events) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    events.split(' ').forEach(function (event) {
      if (eventsEmitter.listeners && eventsEmitter.listeners[event]) {
        var handlers = [];
        eventsEmitter.listeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(undefined, (0, _toConsumableArray3.default)(args));
        });
      }
    });
  }
};

exports.default = eventsEmitter;

/***/ }),
/* 26 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 27 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 101)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 56)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 31 */
/*!******************************************************************************************!*\
  !*** ./node_modules/framework7-vue/runtime-helpers/vue-component-transform-jsx-props.js ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  if (!props) return props;
  var nestedPropsKeys = 'style class domProps slot key ref attrs on props'.split(' ');
  (0, _keys2.default)(props).forEach(function (key) {
    if (key === 'className') {
      props.class = props.className;
      delete props.className;
      return;
    } else if (key === 'dangerouslySetInnerHTML') {
      if (!props.domProps) props.domProps = {};
      props.domProps.innerHTML = props[key];
      if (props.domProps.innerHTML && props.domProps.innerHTML.__html) {
        props.domProps.innerHTML = props.domProps.innerHTML.__html;
      }
      delete props.dangerouslySetInnerHTML;
      return;
    } else if (key.match(/^on?([A-Z])/)) {
      if (!props.on) props.on = {};
      var newKey = key.replace(/(^on?)([A-Z])/, function (found, first, second) {
        return second.toLowerCase();
      });
      props.on[newKey] = props[key];
      delete props[key];
      return;
    }
    if (nestedPropsKeys.indexOf(key) >= 0) {
      return;
    }
    if (!props.attrs) {
      props.attrs = {};
    }
    if (!props.attrs[key]) {
      props.attrs[key] = props[key];
      delete props[key];
    }
  });

  return props;
};

/***/ }),
/* 32 */
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 33), __webpack_require__(/*! ./../../timers-browserify/main.js */ 77).setImmediate))

/***/ }),
/* 33 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 38 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 39)('keys');
var uid = __webpack_require__(/*! ./_uid */ 27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 39 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 6);
var global = __webpack_require__(/*! ./_global */ 9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 26) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 40 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 41 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 42 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 10).f;
var has = __webpack_require__(/*! ./_has */ 12);
var TAG = __webpack_require__(/*! ./_wks */ 7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 43 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 117);
var global = __webpack_require__(/*! ./_global */ 9);
var hide = __webpack_require__(/*! ./_hide */ 15);
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 44 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 7);


/***/ }),
/* 45 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 9);
var core = __webpack_require__(/*! ./_core */ 6);
var LIBRARY = __webpack_require__(/*! ./_library */ 26);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 44);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 46 */
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 139);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 47 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/badge.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-badge',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'badge', _mixins2.default.colorClasses(props));
    return _h('span', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 48 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/icon.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-icon',
  props: (0, _assign2.default)({
    id: [String, Number],
    material: String,
    f7: String,
    ion: String,
    fa: String,
    icon: String,
    ifMd: String,
    ifIos: String,
    ios: String,
    md: String,
    tooltip: String,
    size: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style;

    return _h('i', {
      ref: 'el',
      style: _utils2.default.extend({
        fontSize: self.sizeComputed
      }, style),
      class: self.classes,
      attrs: {
        id: id
      }
    }, [self.iconTextComputed, this.$slots['default']]);
  },


  watch: {
    'props.tooltip': function watchTooltip(newText) {
      var self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    var tooltip = self.props.tooltip;

    if (!tooltip) return;
    self.$f7ready(function (f7) {
      self.f7Tooltip = f7.tooltip.create({
        targetEl: el,
        text: tooltip
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  },


  computed: {
    sizeComputed: function sizeComputed() {
      var self = this;
      var size = self.props.size;

      if (typeof size === 'number' || parseFloat(size) === size * 1) {
        size = size + 'px';
      }

      return size;
    },
    iconTextComputed: function iconTextComputed() {
      var self = this;
      var _self$props = self.props,
          material = _self$props.material,
          f7 = _self$props.f7,
          ifMd = _self$props.ifMd,
          ifIos = _self$props.ifIos,
          md = _self$props.md,
          ios = _self$props.ios;

      var text = material || f7;
      var mdIcon = ifMd || md;
      var iosIcon = ifIos || ios;

      if (mdIcon && self.$theme.md && (mdIcon.indexOf('material:') >= 0 || mdIcon.indexOf('f7:') >= 0)) {
        text = mdIcon.split(':')[1];
      } else if (iosIcon && self.$theme.ios && (iosIcon.indexOf('material:') >= 0 || iosIcon.indexOf('f7:') >= 0)) {
        text = iosIcon.split(':')[1];
      }

      return text;
    },
    classes: function classes() {
      var classes = {
        icon: true
      };
      var self = this;
      var props = self.props;
      var ifMd = props.ifMd,
          ifIos = props.ifIos,
          material = props.material,
          f7 = props.f7,
          fa = props.fa,
          ion = props.ion,
          icon = props.icon,
          md = props.md,
          ios = props.ios,
          className = props.className;

      var mdIcon = ifMd || md;
      var iosIcon = ifIos || ios;

      if (mdIcon || iosIcon) {
        var parts = (self.$theme.md ? mdIcon : iosIcon).split(':');
        var prop = parts[0];
        var value = parts[1];

        if (prop === 'material' || prop === 'fa' || prop === 'f7') {
          classes.fa = prop === 'fa';
          classes['material-icons'] = prop === 'material';
          classes['f7-icons'] = prop === 'f7';
        }

        if (prop === 'fa' || prop === 'ion') {
          classes[prop + '-' + value] = true;
        }

        if (prop === 'icon') {
          classes[value] = true;
        }
      } else {
        classes = {
          icon: true,
          'material-icons': material,
          'f7-icons': f7,
          fa: fa
        };
        if (ion) classes['ion-' + ion] = true;
        if (fa) classes['fa-' + fa] = true;
        if (icon) classes[icon] = true;
      }

      return _utils2.default.classNames(className, classes, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 49 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/link.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _badge = __webpack_require__(/*! ./badge */ 47);

var _badge2 = _interopRequireDefault(_badge);

var _icon = __webpack_require__(/*! ./icon */ 48);

var _icon2 = _interopRequireDefault(_icon);

var _vueComponentTransformJsxProps = __webpack_require__(/*! ../runtime-helpers/vue-component-transform-jsx-props.js */ 31);

var _vueComponentTransformJsxProps2 = _interopRequireDefault(_vueComponentTransformJsxProps);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-link',
  props: (0, _assign2.default)({
    id: [String, Number],
    noLinkClass: Boolean,
    noFastClick: Boolean,
    noFastclick: Boolean,
    text: String,
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    tabbarLabel: Boolean,
    iconOnly: Boolean,
    badge: [String, Number],
    badgeColor: [String],
    iconBadge: [String, Number],
    href: {
      type: [String, Boolean],
      default: '#'
    },
    target: String,
    tooltip: String,
    smartSelect: Boolean,
    smartSelectParams: Object
  }, _mixins2.default.colorProps, _mixins2.default.linkIconProps, _mixins2.default.linkRouterProps, _mixins2.default.linkActionsProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        isTabbarLabel: props.tabbarLabel
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var text = props.text,
        badge = props.badge,
        badgeColor = props.badgeColor,
        iconOnly = props.iconOnly,
        iconBadge = props.iconBadge,
        icon = props.icon,
        iconColor = props.iconColor,
        iconSize = props.iconSize,
        iconMaterial = props.iconMaterial,
        iconIon = props.iconIon,
        iconFa = props.iconFa,
        iconF7 = props.iconF7,
        iconIfMd = props.iconIfMd,
        iconIfIos = props.iconIfIos,
        iconMd = props.iconMd,
        iconIos = props.iconIos,
        id = props.id,
        style = props.style;

    var defaultSlots = self.$slots.default;
    var iconEl = void 0;
    var textEl = void 0;
    var badgeEl = void 0;
    var iconBadgeEl = void 0;

    if (text) {
      if (badge) badgeEl = _h(_badge2.default, {
        attrs: {
          color: badgeColor
        }
      }, [badge]);
      textEl = _h('span', {
        class: self.state.isTabbarLabel ? 'tabbar-label' : ''
      }, [text, badgeEl]);
    }

    var mdThemeIcon = iconIfMd || iconMd;
    var iosThemeIcon = iconIfIos || iconIos;

    if (icon || iconMaterial || iconIon || iconFa || iconF7 || mdThemeIcon || iosThemeIcon) {
      if (iconBadge) {
        iconBadgeEl = _h(_badge2.default, {
          attrs: {
            color: badgeColor
          }
        }, [iconBadge]);
      }

      iconEl = _h(_icon2.default, {
        attrs: {
          material: iconMaterial,
          f7: iconF7,
          fa: iconFa,
          ion: iconIon,
          icon: icon,
          md: mdThemeIcon,
          ios: iosThemeIcon,
          color: iconColor,
          size: iconSize
        }
      }, [iconBadgeEl]);
    }

    if (iconOnly || !text && defaultSlots && defaultSlots.length === 0 || !text && !defaultSlots) {
      self.iconOnlyComputed = true;
    } else {
      self.iconOnlyComputed = false;
    }

    return _h('a', (0, _vueComponentTransformJsxProps2.default)((0, _assign2.default)({
      ref: 'el',
      style: style,
      class: self.classes
    }, self.attrs, {
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    })), [iconEl, textEl, defaultSlots]);
  },


  watch: {
    'props.tooltip': function watchTooltip(newText) {
      var self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    var _self$props = self.props,
        tabbarLabel = _self$props.tabbarLabel,
        tabLink = _self$props.tabLink,
        tooltip = _self$props.tooltip,
        smartSelect = _self$props.smartSelect,
        smartSelectParams = _self$props.smartSelectParams;

    var isTabbarLabel = false;

    if (tabbarLabel || (tabLink || tabLink === '') && self.$$(el).parents('.tabbar-labels').length) {
      isTabbarLabel = true;
    }

    self.setState({
      isTabbarLabel: isTabbarLabel
    });
    self.$f7ready(function (f7) {
      if (smartSelect) {
        var ssParams = _utils2.default.extend({
          el: el
        }, smartSelectParams || {});
        self.f7SmartSelect = f7.smartSelect.create(ssParams);
      }

      if (tooltip) {
        self.f7Tooltip = f7.tooltip.create({
          targetEl: el,
          text: tooltip
        });
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.f7SmartSelect && self.f7SmartSelect.destroy) {
      self.f7SmartSelect.destroy();
    }

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  },


  computed: {
    attrs: function attrs() {
      var self = this;
      var props = self.props;
      var href = props.href,
          target = props.target,
          tabLink = props.tabLink;

      var hrefComputed = href;
      if (href === true) hrefComputed = '#';
      if (href === false) hrefComputed = undefined;
      return _utils2.default.extend({
        href: hrefComputed,
        target: target,
        'data-tab': _utils2.default.isStringProp(tabLink) && tabLink || undefined
      }, _mixins2.default.linkRouterAttrs(props), _mixins2.default.linkActionsAttrs(props));
    },
    classes: function classes() {
      var self = this;
      var props = self.props;
      var noFastclick = props.noFastclick,
          noFastClick = props.noFastClick,
          tabLink = props.tabLink,
          tabLinkActive = props.tabLinkActive,
          noLinkClass = props.noLinkClass,
          smartSelect = props.smartSelect,
          className = props.className;

      return _utils2.default.classNames(className, {
        link: !(noLinkClass || self.state.isTabbarLabel),
        'icon-only': self.iconOnlyComputed,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'no-fastclick': noFastclick || noFastClick,
        'smart-select': smartSelect
      }, _mixins2.default.colorClasses(props), _mixins2.default.linkRouterClasses(props), _mixins2.default.linkActionsClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  methods: {
    onClick: function onClick(event) {
      var self = this;

      if (self.props.smartSelect && self.f7SmartSelect) {
        self.f7SmartSelect.open();
      }

      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    },
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  }
};

/***/ }),
/* 50 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 95);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 51 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 11) && !__webpack_require__(/*! ./_fails */ 17)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 52)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 52 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 22);
var document = __webpack_require__(/*! ./_global */ 9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 53 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 12);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 97)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 38)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 37);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 56 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 26);
var $export = __webpack_require__(/*! ./_export */ 14);
var redefine = __webpack_require__(/*! ./_redefine */ 57);
var hide = __webpack_require__(/*! ./_hide */ 15);
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 102);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 42);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 105);
var ITERATOR = __webpack_require__(/*! ./_wks */ 7)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 57 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 15);


/***/ }),
/* 58 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 16);
var dPs = __webpack_require__(/*! ./_object-dps */ 103);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 40);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 38)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 52)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 104).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 59 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 60);
var ITERATOR = __webpack_require__(/*! ./_wks */ 7)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
module.exports = __webpack_require__(/*! ./_core */ 6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 60 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 35);
var TAG = __webpack_require__(/*! ./_wks */ 7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 61 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 28);
var createDesc = __webpack_require__(/*! ./_property-desc */ 23);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 34);
var has = __webpack_require__(/*! ./_has */ 12);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 51);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 62 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 14);
var core = __webpack_require__(/*! ./_core */ 6);
var fails = __webpack_require__(/*! ./_fails */ 17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 63 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 53);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 40).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 64 */
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/routable-modals.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _f = __webpack_require__(/*! ../utils/f7 */ 20);

var _f2 = _interopRequireDefault(_f);

var _events = __webpack_require__(/*! ../utils/events */ 25);

var _events2 = _interopRequireDefault(_events);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-routable-modals',

  data: function data() {
    var state = function () {
      return {
        modals: []
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    return _h('div', {
      ref: 'el',
      class: 'framework7-modals'
    }, [this.state.modals.map(function (modal) {
      var ModalComponent = modal.component;
      {
        return _h(ModalComponent, {
          key: modal.id,
          props: modal.props
        });
      }
    })]);
  },
  updated: function updated() {
    var self = this;
    if (!self.routerData) return;
    _events2.default.emit('modalsRouterDidUpdate', self.routerData);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (!self.routerData) return;
    _f2.default.routers.modals = null;
    self.routerData = null;
    delete self.routerData;
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    self.setState({
      modals: []
    });
    self.routerData = {
      el: el,
      component: self
    };
    _f2.default.routers.modals = self.routerData;
  },


  methods: {
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  }
};

/***/ }),
/* 65 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/card-content.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-card-content',
  props: (0, _assign2.default)({
    id: [String, Number],
    padding: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var id = props.id,
        className = props.className,
        style = props.style,
        padding = props.padding;

    var classes = _utils2.default.classNames(className, 'card-content', {
      'card-content-padding': padding
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 66 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/card-footer.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-card-footer',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'card-footer', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 67 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/card-header.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-card-header',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'card-header', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 68 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/input.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _toggle = __webpack_require__(/*! ./toggle */ 69);

var _toggle2 = _interopRequireDefault(_toggle);

var _range = __webpack_require__(/*! ./range */ 70);

var _range2 = _interopRequireDefault(_range);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-input',
  props: (0, _assign2.default)({
    type: String,
    name: String,
    value: [String, Number, Array],
    defaultValue: [String, Number, Array],
    placeholder: String,
    id: [String, Number],
    inputId: [String, Number],
    size: [String, Number],
    accept: [String, Number],
    autocomplete: [String],
    autocorrect: [String],
    autocapitalize: [String],
    spellcheck: [String],
    autofocus: Boolean,
    autosave: String,
    checked: Boolean,
    disabled: Boolean,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    multiple: Boolean,
    readonly: Boolean,
    required: Boolean,
    inputStyle: [String, Object],
    pattern: String,
    validate: [Boolean, String],
    tabindex: [String, Number],
    resizable: Boolean,
    clearButton: Boolean,
    noFormStoreData: Boolean,
    noStoreData: Boolean,
    ignoreStoreData: Boolean,
    errorMessage: String,
    errorMessageForce: Boolean,
    info: String,
    wrap: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var type = props.type,
        name = props.name,
        value = props.value,
        defaultValue = props.defaultValue,
        placeholder = props.placeholder,
        id = props.id,
        inputId = props.inputId,
        size = props.size,
        accept = props.accept,
        autocomplete = props.autocomplete,
        autocorrect = props.autocorrect,
        autocapitalize = props.autocapitalize,
        spellcheck = props.spellcheck,
        autofocus = props.autofocus,
        autosave = props.autosave,
        checked = props.checked,
        disabled = props.disabled,
        max = props.max,
        min = props.min,
        step = props.step,
        maxlength = props.maxlength,
        minlength = props.minlength,
        multiple = props.multiple,
        readonly = props.readonly,
        required = props.required,
        inputStyle = props.inputStyle,
        pattern = props.pattern,
        validate = props.validate,
        tabindex = props.tabindex,
        resizable = props.resizable,
        clearButton = props.clearButton,
        errorMessage = props.errorMessage,
        errorMessageForce = props.errorMessageForce,
        info = props.info,
        wrap = props.wrap,
        style = props.style,
        className = props.className,
        noStoreData = props.noStoreData,
        noFormStoreData = props.noFormStoreData,
        ignoreStoreData = props.ignoreStoreData;

    var inputEl = void 0;

    var createInput = function createInput(tag, children) {
      var InputTag = tag;
      var needsValue = type !== 'file';
      var needsType = tag === 'input';
      var inputClassName = _utils2.default.classNames(type === 'textarea' && resizable && 'resizable', !wrap && className, (noFormStoreData || noStoreData || ignoreStoreData) && 'no-store-data', errorMessage && errorMessageForce && 'input-invalid');
      var input = void 0;
      {
        input = _h(InputTag, {
          ref: 'inputEl',
          style: inputStyle,
          class: inputClassName,
          domProps: {
            value: needsValue ? value : undefined,
            checked: checked,
            disabled: disabled,
            readOnly: readonly,
            multiple: multiple,
            required: required
          },
          on: {
            focus: self.onFocusBound,
            blur: self.onBlurBound,
            input: self.onInputBound,
            change: self.onChangeBound
          },
          attrs: {
            name: name,
            type: needsType ? type : undefined,
            placeholder: placeholder,
            id: inputId,
            size: size,
            accept: accept,
            autocomplete: autocomplete,
            autocorrect: autocorrect,
            autocapitalize: autocapitalize,
            spellcheck: spellcheck,
            autofocus: autofocus,
            autoSave: autosave,
            max: max,
            maxlength: maxlength,
            min: min,
            minlength: minlength,
            step: step,
            pattern: pattern,
            validate: typeof validate === 'string' && validate.length ? validate : undefined,
            'data-validate': validate === true || validate === '' ? true : undefined,
            tabindex: tabindex,
            'data-error-message': errorMessageForce ? undefined : errorMessage
          }
        }, [children]);
      }
      return input;
    };

    var _self$$slots = self.$slots,
        slotsDefault = _self$$slots.default,
        slotsInfo = _self$$slots.info;


    if (type === 'select' || type === 'textarea' || type === 'file') {
      if (type === 'select') {
        inputEl = createInput('select', slotsDefault);
      } else if (type === 'file') {
        inputEl = createInput('input');
      } else {
        inputEl = createInput('textarea');
      }
    } else if (slotsDefault && slotsDefault.length > 0 || !type) {
      inputEl = slotsDefault;
    } else if (type === 'toggle') {
      inputEl = _h(_toggle2.default, {
        on: {
          change: self.onChangeBound
        },
        attrs: {
          checked: checked,
          readonly: readonly,
          name: name,
          value: value,
          disabled: disabled,
          id: inputId
        }
      });
    } else if (type === 'range') {
      inputEl = _h(_range2.default, {
        on: {
          rangeChange: self.onChangeBound
        },
        attrs: {
          value: value,
          disabled: disabled,
          min: min,
          max: max,
          step: step,
          name: name,
          id: inputId,
          input: true
        }
      });
    } else {
      inputEl = createInput('input');
    }

    if (wrap) {
      var wrapClasses = _utils2.default.classNames(className, 'item-input-wrap', _mixins2.default.colorClasses(props));
      return _h('div', {
        ref: 'wrapEl',
        class: wrapClasses,
        style: style,
        attrs: {
          id: id
        }
      }, [inputEl, errorMessage && errorMessageForce && _h('div', {
        class: 'item-input-error-message'
      }, [errorMessage]), clearButton && _h('span', {
        class: 'input-clear-button'
      }), (info || slotsInfo && slotsInfo.length) && _h('div', {
        class: 'item-input-info'
      }, [info, this.$slots['info']])]);
    }

    return inputEl;
  },


  watch: {
    'props.value': function watchValue() {
      var self = this;
      var type = self.props.type;

      if (type === 'range' || type === 'toggle') return;
      if (!self.$f7) return;
      self.updateInputOnDidUpdate = true;
    }
  },

  created: function created() {
    var self = this;
    self.onFocusBound = self.onFocus.bind(self);
    self.onBlurBound = self.onBlur.bind(self);
    self.onInputBound = self.onInput.bind(self);
    self.onChangeBound = self.onChange.bind(self);
    self.onTextareaResizeBound = self.onTextareaResize.bind(self);
    self.onInputNotEmptyBound = self.onInputNotEmpty.bind(self);
    self.onInputEmptyBound = self.onInputEmpty.bind(self);
    self.onInputClearBound = self.onInputClear.bind(self);
  },
  mounted: function mounted() {
    var self = this;
    self.$f7ready(function (f7) {
      var _self$props = self.props,
          validate = _self$props.validate,
          resizable = _self$props.resizable,
          type = _self$props.type,
          clearButton = _self$props.clearButton,
          value = _self$props.value,
          defaultValue = _self$props.defaultValue;

      if (type === 'range' || type === 'toggle') return;
      var inputEl = self.$refs.inputEl;
      if (!inputEl) return;
      inputEl.addEventListener('input:notempty', self.onInputNotEmptyBound, false);

      if (type === 'textarea' && resizable) {
        inputEl.addEventListener('textarea:resze', self.onTextareaResizeBound, false);
      }

      if (clearButton) {
        inputEl.addEventListener('input:empty', self.onInputEmptyBound, false);
        inputEl.addEventListener('input:clear', self.onInputClearBound, false);
      }

      f7.input.checkEmptyState(inputEl);

      if ((validate || validate === '') && (typeof value !== 'undefined' && value !== null && value !== '' || typeof defaultValue !== 'undefined' && defaultValue !== null && defaultValue !== '')) {
        setTimeout(function () {
          f7.input.validate(inputEl);
        }, 0);
      }

      if (resizable) {
        f7.input.resizeTextarea(inputEl);
      }
    });
  },
  updated: function updated() {
    var self = this;
    var _self$props2 = self.props,
        validate = _self$props2.validate,
        resizable = _self$props2.resizable;

    var f7 = self.$f7;
    if (!f7) return;

    if (self.updateInputOnDidUpdate) {
      var inputEl = self.$refs.inputEl;
      if (!inputEl) return;
      self.updateInputOnDidUpdate = false;
      f7.input.checkEmptyState(inputEl);

      if (validate) {
        f7.input.validate(inputEl);
      }

      if (resizable) {
        f7.input.resizeTextarea(inputEl);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var _self$props3 = self.props,
        type = _self$props3.type,
        resizable = _self$props3.resizable,
        clearButton = _self$props3.clearButton;

    if (type === 'range' || type === 'toggle') return;
    var inputEl = self.$refs.inputEl;
    if (!inputEl) return;
    inputEl.removeEventListener('input:notempty', self.onInputNotEmptyBound, false);

    if (type === 'textarea' && resizable) {
      inputEl.removeEventListener('textarea:resze', self.onTextareaResizeBound, false);
    }

    if (clearButton) {
      inputEl.removeEventListener('input:empty', self.onInputEmptyBound, false);
      inputEl.removeEventListener('input:clear', self.onInputClearBound, false);
    }
  },


  methods: {
    onTextareaResize: function onTextareaResize(event) {
      this.dispatchEvent('textarea:resize textareaResize', event);
    },
    onInputNotEmpty: function onInputNotEmpty(event) {
      this.dispatchEvent('input:notempty inputNotEmpty', event);
    },
    onInputEmpty: function onInputEmpty(event) {
      this.dispatchEvent('input:empty inputEmpty', event);
    },
    onInputClear: function onInputClear(event) {
      this.dispatchEvent('input:clear inputClear', event);
    },
    onInput: function onInput(event) {
      this.dispatchEvent('input', event);
    },
    onFocus: function onFocus(event) {
      this.dispatchEvent('focus', event);
    },
    onBlur: function onBlur(event) {
      this.dispatchEvent('blur', event);
    },
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 69 */
/*!**********************************************************!*\
  !*** ./node_modules/framework7-vue/components/toggle.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-toggle',
  props: (0, _assign2.default)({
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    checked: Boolean,
    defaultChecked: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String,
    value: [String, Number, Array]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        disabled = props.disabled,
        id = props.id,
        style = props.style,
        name = props.name,
        readonly = props.readonly,
        checked = props.checked,
        defaultChecked = props.defaultChecked,
        value = props.value;

    var labelClasses = _utils2.default.classNames('toggle', className, {
      disabled: disabled
    }, _mixins2.default.colorClasses(props));
    var inputEl = void 0;
    {
      inputEl = _h('input', {
        domProps: {
          disabled: disabled,
          readOnly: readonly,
          value: value,
          checked: checked
        },
        on: {
          change: self.onChange.bind(self)
        },
        attrs: {
          type: 'checkbox',
          name: name
        }
      });
    }
    return _h('label', {
      ref: 'el',
      style: style,
      class: labelClasses,
      attrs: {
        id: id
      }
    }, [inputEl, _h('span', {
      class: 'toggle-icon'
    })]);
  },


  watch: {
    'props.checked': function watchChecked(newValue) {
      var self = this;
      if (!self.f7Toggle) return;
      self.f7Toggle.checked = newValue;
    }
  },

  mounted: function mounted() {
    var self = this;
    if (!self.props.init) return;
    self.$f7ready(function (f7) {
      self.f7Toggle = f7.toggle.create({
        el: self.$refs.el,
        on: {
          change: function change(toggle) {
            var checked = toggle.checked;
            self.dispatchEvent('toggle:change toggleChange', checked);
          }
        }
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Toggle && self.f7Toggle.destroy && self.f7Toggle.$el) self.f7Toggle.destroy();
  },


  methods: {
    toggle: function toggle() {
      var self = this;
      if (self.f7Toggle && self.f7Toggle.toggle) self.f7Toggle.toggle();
    },
    onChange: function onChange(event) {
      var self = this;
      self.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 70 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/range.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-range',
  props: (0, _assign2.default)({
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    value: {
      type: [Number, Array, String],
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    label: {
      type: Boolean,
      default: false
    },
    dual: {
      type: Boolean,
      default: false
    },
    name: String,
    inputId: String,
    input: Boolean,
    disabled: Boolean,
    draggableBar: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var _self$props = self.props,
        id = _self$props.id,
        disabled = _self$props.disabled,
        className = _self$props.className,
        style = _self$props.style,
        input = _self$props.input,
        inputId = _self$props.inputId,
        name = _self$props.name;

    var classes = _utils2.default.classNames(className, 'range-slider', {
      disabled: disabled
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [input && _h('input', {
      attrs: {
        type: 'range',
        name: name,
        id: inputId
      }
    }), this.$slots['default']]);
  },


  watch: {
    'props.value': function watchValue(newValue) {
      var self = this;
      if (!self.f7Range) return;
      self.f7Range.setValue(newValue);
    }
  },

  mounted: function mounted() {
    var self = this;
    self.$f7ready(function (f7) {
      if (!self.props.init) return;
      var props = self.props;
      var value = props.value,
          min = props.min,
          max = props.max,
          step = props.step,
          label = props.label,
          dual = props.dual,
          draggableBar = props.draggableBar;

      self.f7Range = f7.range.create(_utils2.default.noUndefinedProps({
        el: self.$refs.el,
        value: value,
        min: min,
        max: max,
        step: step,
        label: label,
        dual: dual,
        draggableBar: draggableBar,
        on: {
          change: function change(range, val) {
            self.dispatchEvent('range:change rangeChange', val);
          },
          changed: function changed(range, val) {
            self.dispatchEvent('range:changed rangeChanged', val);
          }
        }
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Range && self.f7Range.destroy) self.f7Range.destroy();
  },


  methods: {
    setValue: function setValue(newValue) {
      var self = this;
      if (self.f7Range && self.f7Range.setValue) self.f7Range.setValue(newValue);
    },
    getValue: function getValue() {
      var self = this;

      if (self.f7Range && self.f7Range.getValue) {
        return self.f7Range.getValue();
      }

      return undefined;
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 71 */
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-item-content.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _badge = __webpack_require__(/*! ./badge */ 47);

var _badge2 = _interopRequireDefault(_badge);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-item-content',
  props: (0, _assign2.default)({
    id: [String, Number],
    title: [String, Number],
    text: [String, Number],
    media: String,
    subtitle: [String, Number],
    header: [String, Number],
    footer: [String, Number],
    after: [String, Number],
    badge: [String, Number],
    badgeColor: String,
    mediaList: Boolean,
    mediaItem: Boolean,
    itemInput: Boolean,
    itemInputWithInfo: Boolean,
    inlineLabel: Boolean,
    checkbox: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    radio: Boolean,
    name: String,
    value: [String, Number, Array],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean
  }, _mixins2.default.colorProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        hasInput: false,
        hasInlineLabel: false,
        hasInputInfo: false,
        hasInputErrorMessage: false
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        className = props.className,
        style = props.style,
        radio = props.radio,
        checkbox = props.checkbox,
        value = props.value,
        name = props.name,
        checked = props.checked,
        defaultChecked = props.defaultChecked,
        readonly = props.readonly,
        disabled = props.disabled,
        required = props.required,
        media = props.media,
        header = props.header,
        footer = props.footer,
        title = props.title,
        subtitle = props.subtitle,
        text = props.text,
        after = props.after,
        badge = props.badge,
        mediaList = props.mediaList,
        mediaItem = props.mediaItem,
        badgeColor = props.badgeColor,
        itemInput = props.itemInput,
        inlineLabel = props.inlineLabel,
        itemInputWithInfo = props.itemInputWithInfo;

    var hasInput = itemInput || self.state.hasInput;
    var hasInlineLabel = inlineLabel || self.state.hasInlineLabel;
    var hasInputInfo = itemInputWithInfo || self.state.hasInputInfo;
    var hasInputErrorMessage = self.state.hasInputErrorMessage;
    var slotsContentStart = [];
    var slotsContent = [];
    var slotsContentEnd = [];
    var slotsInnerStart = [];
    var slotsInner = [];
    var slotsInnerEnd = [];
    var slotsAfterStart = [];
    var slotsAfter = [];
    var slotsAfterEnd = [];
    var slotsMedia = [];
    var slotsBeforeTitle = [];
    var slotsTitle = [];
    var slotsAfterTitle = [];
    var slotsSubtitle = [];
    var slotsText = [];
    var slotsHeader = [];
    var slotsFooter = [];
    var titleEl = void 0;
    var afterWrapEl = void 0;
    var afterEl = void 0;
    var badgeEl = void 0;
    var innerEl = void 0;
    var titleRowEl = void 0;
    var subtitleEl = void 0;
    var textEl = void 0;
    var mediaEl = void 0;
    var inputEl = void 0;
    var inputIconEl = void 0;
    var headerEl = void 0;
    var footerEl = void 0;
    var slots = self.$slots.default;
    var flattenSlots = [];

    if (slots && slots.length) {
      slots.forEach(function (slot) {
        if (Array.isArray(slot)) flattenSlots.push.apply(flattenSlots, (0, _toConsumableArray3.default)(slot));else flattenSlots.push(slot);
      });
    }

    flattenSlots.forEach(function (child) {
      if (typeof child === 'undefined') return;
      {
        var tag = child.tag;

        if (tag && tag.indexOf('f7-input') >= 0) {
          hasInput = true;
          if (child.data && child.data.info) hasInputInfo = true;
          if (child.data && child.data.errorMessage && child.data.errorMessageForce) hasInputErrorMessage = true;
        }

        if (tag && tag.indexOf('f7-label') >= 0) {
          if (child.data && child.data.inline) hasInlineLabel = true;
        }
      }
      var slotName = void 0;
      slotName = child.data ? child.data.slot : undefined;
      if (!slotName || slotName === 'inner') slotsInner.push(child);
      if (slotName === 'content-start') slotsContentStart.push(child);
      if (slotName === 'content') slotsContent.push(child);
      if (slotName === 'content-end') slotsContentEnd.push(child);
      if (slotName === 'after-start') slotsAfterStart.push(child);
      if (slotName === 'after') slotsAfter.push(child);
      if (slotName === 'after-end') slotsAfterEnd.push(child);
      if (slotName === 'media') slotsMedia.push(child);
      if (slotName === 'inner-start') slotsInnerStart.push(child);
      if (slotName === 'inner-end') slotsInnerEnd.push(child);
      if (slotName === 'before-title') slotsBeforeTitle.push(child);
      if (slotName === 'title') slotsTitle.push(child);
      if (slotName === 'after-title') slotsAfterTitle.push(child);
      if (slotName === 'subtitle') slotsSubtitle.push(child);
      if (slotName === 'text') slotsText.push(child);
      if (slotName === 'header') slotsHeader.push(child);
      if (slotName === 'footer') slotsFooter.push(child);
    });

    if (radio || checkbox) {
      {
        inputEl = _h('input', {
          ref: 'inputEl',
          domProps: {
            checked: checked,
            readonly: readonly,
            disabled: disabled,
            required: required,
            value: value
          },
          attrs: {
            name: name,
            type: radio ? 'radio' : 'checkbox'
          }
        });
      }
      inputIconEl = _h('i', {
        class: 'icon icon-' + (radio ? 'radio' : 'checkbox')
      });
    }

    if (media || slotsMedia.length) {
      var mediaImgEl = void 0;

      if (media) {
        mediaImgEl = _h('img', {
          attrs: {
            src: media
          }
        });
      }

      mediaEl = _h('div', {
        class: 'item-media'
      }, [mediaImgEl, slotsMedia]);
    }

    var isMedia = mediaItem || mediaList;

    if (header || slotsHeader.length) {
      headerEl = _h('div', {
        class: 'item-header'
      }, [header, slotsHeader]);
    }

    if (footer || slotsFooter.length) {
      footerEl = _h('div', {
        class: 'item-footer'
      }, [footer, slotsFooter]);
    }

    if (title || slotsTitle.length || !isMedia && headerEl || !isMedia && footerEl) {
      titleEl = _h('div', {
        class: 'item-title'
      }, [!isMedia && headerEl, title, slotsTitle, !isMedia && footerEl]);
    }

    if (subtitle || slotsSubtitle.length) {
      subtitleEl = _h('div', {
        class: 'item-subtitle'
      }, [subtitle, slotsSubtitle]);
    }

    if (text || slotsText.length) {
      textEl = _h('div', {
        class: 'item-text'
      }, [text, slotsText]);
    }

    if (after || badge || slotsAfter.length) {
      if (after) {
        afterEl = _h('span', [after]);
      }

      if (badge) {
        badgeEl = _h(_badge2.default, {
          attrs: {
            color: badgeColor
          }
        }, [badge]);
      }

      afterWrapEl = _h('div', {
        class: 'item-after'
      }, [slotsAfterStart, afterEl, badgeEl, slotsAfter, slotsAfterEnd]);
    }

    if (isMedia) {
      titleRowEl = _h('div', {
        class: 'item-title-row'
      }, [slotsBeforeTitle, titleEl, slotsAfterTitle, afterWrapEl]);
      innerEl = _h('div', {
        ref: 'innerEl',
        class: 'item-inner'
      }, [slotsInnerStart, headerEl, titleRowEl, subtitleEl, textEl, slotsInner, footerEl, slotsInnerEnd]);
    } else {
      innerEl = _h('div', {
        ref: 'innerEl',
        class: 'item-inner'
      }, [slotsInnerStart, slotsBeforeTitle, titleEl, slotsAfterTitle, afterWrapEl, slotsInner, slotsInnerEnd]);
    }

    var ItemContentTag = checkbox || radio ? 'label' : 'div';
    var classes = _utils2.default.classNames(className, 'item-content', {
      'item-checkbox': checkbox,
      'item-radio': radio,
      'item-input': hasInput,
      'inline-label': hasInlineLabel,
      'item-input-with-info': hasInputInfo,
      'item-input-with-error-message': hasInputErrorMessage,
      'item-input-invalid': hasInputErrorMessage
    }, _mixins2.default.colorClasses(props));
    return _h(ItemContentTag, {
      ref: 'el',
      style: style,
      class: classes,
      on: {
        click: self.onClickBound
      },
      attrs: {
        id: id
      }
    }, [slotsContentStart, inputEl, inputIconEl, mediaEl, innerEl, slotsContent, slotsContentEnd]);
  },
  created: function created() {
    var self = this;
    self.onClickBound = self.onClick.bind(self);
    self.onChangeBound = self.onChange.bind(self);
  },
  beforeMount: function beforeMount() {
    this.checkHasInputState();
  },
  beforeUpdate: function beforeUpdate() {
    this.checkHasInputState();
  },
  mounted: function mounted() {
    var self = this;
    var _self$$refs = self.$refs,
        innerEl = _self$$refs.innerEl,
        inputEl = _self$$refs.inputEl;


    if (inputEl) {
      inputEl.addEventListener('change', self.onChangeBound);
    }

    if (!innerEl) return;
    var $innerEl = self.$$(innerEl);
    var $labelEl = $innerEl.children('.item-title.item-label');
    var $inputWrapEl = $innerEl.children('.item-input-wrap');
    var hasInlineLabel = $labelEl.hasClass('item-label-inline');
    var hasInput = $inputWrapEl.length > 0;
    var hasInputInfo = $inputWrapEl.children('.item-input-info').length > 0;
    var hasInputErrorMessage = $inputWrapEl.children('.item-input-error-message').length > 0;

    if (!self.hasInlineLabelSet && hasInlineLabel !== self.state.hasInlineLabel) {
      self.setState({
        hasInlineLabel: hasInlineLabel
      });
    }

    if (!self.hasInputSet && hasInput !== self.state.hasInput) {
      self.setState({
        hasInput: hasInput
      });
    }

    if (!self.hasInputInfoSet && hasInputInfo !== self.state.hasInputInfo) {
      self.setState({
        hasInputInfo: hasInputInfo
      });
    }

    if (!self.hasInputErrorMessageSet && hasInputErrorMessage !== self.state.hasInputErrorMessage) {
      self.setState({
        hasInputErrorMessage: hasInputErrorMessage
      });
    }
  },
  updated: function updated() {
    var self = this;
    var innerEl = self.$refs.innerEl;
    if (!innerEl) return;
    var $innerEl = self.$$(innerEl);
    var $labelEl = $innerEl.children('.item-title.item-label');
    var $inputWrapEl = $innerEl.children('.item-input-wrap');
    var hasInlineLabel = $labelEl.hasClass('item-label-inline');
    var hasInput = $inputWrapEl.length > 0;
    var hasInputInfo = $inputWrapEl.children('.item-input-info').length > 0;
    var hasInputErrorMessage = $inputWrapEl.children('.item-input-error-message').length > 0;

    if (hasInlineLabel !== self.state.hasInlineLabel) {
      self.setState({
        hasInlineLabel: hasInlineLabel
      });
    }

    if (hasInput !== self.state.hasInput) {
      self.setState({
        hasInput: hasInput
      });
    }

    if (hasInputInfo !== self.state.hasInputInfo) {
      self.setState({
        hasInputInfo: hasInputInfo
      });
    }

    if (!self.hasInputErrorMessageSet && hasInputErrorMessage !== self.state.hasInputErrorMessage) {
      self.setState({
        hasInputErrorMessage: hasInputErrorMessage
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var inputEl = self.$refs.inputEl;


    if (inputEl) {
      inputEl.removeEventListener('change', self.onChangeBound);
    }
  },


  methods: {
    checkHasInputState: function checkHasInputState() {
      var self = this;
      var props = self.props;
      var itemInput = props.itemInput,
          inlineLabel = props.inlineLabel,
          itemInputWithInfo = props.itemInputWithInfo;

      var hasInput = itemInput || self.state.hasInput;
      var hasInlineLabel = inlineLabel || self.state.hasInlineLabel;
      var hasInputInfo = itemInputWithInfo || self.state.hasInputInfo;
      var hasInputErrorMessage = self.state.hasInputErrorMessage;

      if (hasInput && !self.state.hasInput) {
        self.hasInputSet = true;
        self.setState({
          hasInput: hasInput
        });
      } else if (!hasInput) {
        self.hasInputSet = false;
      }

      if (hasInputInfo && !self.state.hasInputInfo) {
        self.hasInputInfoSet = true;
        self.setState({
          hasInputInfo: hasInputInfo
        });
      } else if (!hasInputInfo) {
        self.hasInputInfoSet = false;
      }

      if (hasInputErrorMessage && !self.state.hasInputErrorMessage) {
        self.hasInputErrorMessageSet = true;
        self.setState({
          hasInputErrorMessage: hasInputErrorMessage
        });
      } else if (!hasInputInfo) {
        self.hasInputErrorMessageSet = false;
      }

      if (hasInlineLabel && !self.state.hasInlineLabel) {
        self.hasInlineLabelSet = true;
        self.setState({
          hasInlineLabel: hasInlineLabel
        });
      } else if (!hasInlineLabel) {
        self.hasInlineLabelSet = false;
      }
    },
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    },
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 72 */
/*!************************************************************!*\
  !*** ./node_modules/framework7-vue/components/nav-left.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _link = __webpack_require__(/*! ./link */ 49);

var _link2 = _interopRequireDefault(_link);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-nav-left',
  props: (0, _assign2.default)({
    id: [String, Number],
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkForce: Boolean,
    sliding: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var backLink = props.backLink,
        backLinkUrl = props.backLinkUrl,
        backLinkForce = props.backLinkForce,
        sliding = props.sliding,
        className = props.className,
        style = props.style,
        id = props.id;

    var linkEl = void 0;

    if (backLink) {
      linkEl = _h(_link2.default, {
        class: backLink === true || backLink && this.$theme.md ? 'icon-only' : undefined,
        on: {
          click: this.onBackClick.bind(this)
        },
        attrs: {
          href: backLinkUrl || '#',
          back: true,
          icon: 'icon-back',
          force: backLinkForce || undefined,
          text: backLink !== true && !this.$theme.md ? backLink : undefined
        }
      });
    }

    var classes = _utils2.default.classNames(className, 'left', {
      sliding: sliding
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [linkEl, this.$slots['default']]);
  },


  methods: {
    onBackClick: function onBackClick(event) {
      this.dispatchEvent('back-click backClick click:back clickBack', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 73 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/nav-title.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-nav-title',
  props: (0, _assign2.default)({
    id: [String, Number],
    title: String,
    subtitle: String,
    sliding: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var title = props.title,
        subtitle = props.subtitle,
        id = props.id,
        style = props.style,
        sliding = props.sliding,
        className = props.className;

    var subtitleEl = void 0;

    if (self.subtitle) {
      subtitleEl = _h('span', {
        class: 'subtitle'
      }, [subtitle]);
    }

    var classes = _utils2.default.classNames(className, 'title', {
      sliding: sliding
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default'] || [title, subtitleEl]]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 74 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/page-content.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-page-content',
  props: (0, _assign2.default)({
    id: [String, Number],
    tab: Boolean,
    tabActive: Boolean,
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true
    },
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
    messagesContent: Boolean,
    loginScreen: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var ptr = props.ptr,
        ptrPreloader = props.ptrPreloader,
        infinite = props.infinite,
        infinitePreloader = props.infinitePreloader,
        id = props.id,
        style = props.style,
        ptrDistance = props.ptrDistance,
        infiniteDistance = props.infiniteDistance,
        infiniteTop = props.infiniteTop;

    var ptrEl = void 0;
    var infiniteEl = void 0;

    if (ptr && ptrPreloader) {
      ptrEl = _h('div', {
        class: 'ptr-preloader'
      }, [_h('div', {
        class: 'preloader'
      }), _h('div', {
        class: 'ptr-arrow'
      })]);
    }

    if (infinite && infinitePreloader) {
      infiniteEl = _h('div', {
        class: 'preloader infinite-scroll-preloader'
      });
    }

    return _h('div', {
      style: style,
      class: self.classes,
      ref: 'el',
      attrs: {
        id: id,
        'data-ptr-distance': ptrDistance || undefined,
        'data-infinite-distance': infiniteDistance || undefined
      }
    }, [ptrEl, infiniteTop ? infiniteEl : self.$slots.default, infiniteTop ? self.$slots.default : infiniteEl]);
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var className = props.className,
          tab = props.tab,
          tabActive = props.tabActive,
          ptr = props.ptr,
          infinite = props.infinite,
          infiniteTop = props.infiniteTop,
          hideBarsOnScroll = props.hideBarsOnScroll,
          hideNavbarOnScroll = props.hideNavbarOnScroll,
          hideToolbarOnScroll = props.hideToolbarOnScroll,
          messagesContent = props.messagesContent,
          loginScreen = props.loginScreen;

      return _utils2.default.classNames(className, 'page-content', {
        tab: tab,
        'tab-active': tabActive,
        'ptr-content': ptr,
        'infinite-scroll-content': infinite,
        'infinite-scroll-top': infiniteTop,
        'hide-bars-on-scroll': hideBarsOnScroll,
        'hide-navbar-on-scroll': hideNavbarOnScroll,
        'hide-toolbar-on-scroll': hideToolbarOnScroll,
        'messages-content': messagesContent,
        'login-screen-content': loginScreen
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    var _self$props = self.props,
        ptr = _self$props.ptr,
        infinite = _self$props.infinite,
        tab = _self$props.tab;

    self.onPtrPullStart = self.onPtrPullStart.bind(self);
    self.onPtrPullMove = self.onPtrPullMove.bind(self);
    self.onPtrPullEnd = self.onPtrPullEnd.bind(self);
    self.onPtrRefresh = self.onPtrRefresh.bind(self);
    self.onPtrDone = self.onPtrDone.bind(self);
    self.onInfinite = self.onInfinite.bind(self);
    self.onTabShow = self.onTabShow.bind(self);
    self.onTabHide = self.onTabHide.bind(self);

    if (ptr) {
      el.addEventListener('ptr:pullstart', self.onPtrPullStart);
      el.addEventListener('ptr:pullmove', self.onPtrPullMove);
      el.addEventListener('ptr:pullend', self.onPtrPullEnd);
      el.addEventListener('ptr:refresh', self.onPtrRefresh);
      el.addEventListener('ptr:done', self.onPtrDone);
    }

    if (infinite) {
      el.addEventListener('infinite', self.onInfinite);
    }

    if (tab) {
      el.addEventListener('tab:show', self.onTabShow);
      el.addEventListener('tab:hide', self.onTabHide);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;
    el.removeEventListener('ptr:pullstart', self.onPtrPullStart);
    el.removeEventListener('ptr:pullmove', self.onPtrPullMove);
    el.removeEventListener('ptr:pullend', self.onPtrPullEnd);
    el.removeEventListener('ptr:refresh', self.onPtrRefresh);
    el.removeEventListener('ptr:done', self.onPtrDone);
    el.removeEventListener('infinite', self.onInfinite);
    el.removeEventListener('tab:show', self.onTabShow);
    el.removeEventListener('tab:hide', self.onTabHide);
  },


  methods: {
    onPtrPullStart: function onPtrPullStart(event) {
      this.dispatchEvent('ptr:pullstart ptrPullStart', event);
    },
    onPtrPullMove: function onPtrPullMove(event) {
      this.dispatchEvent('ptr:pullmove ptrPullMove', event);
    },
    onPtrPullEnd: function onPtrPullEnd(event) {
      this.dispatchEvent('ptr:pullend ptrPullEnd', event);
    },
    onPtrRefresh: function onPtrRefresh(event) {
      var done = event.detail;
      this.dispatchEvent('ptr:refresh ptrRefresh', event, done);
    },
    onPtrDone: function onPtrDone(event) {
      this.dispatchEvent('ptr:done ptrDone', event);
    },
    onInfinite: function onInfinite(event) {
      this.dispatchEvent('infinite', event);
    },
    onTabShow: function onTabShow(event) {
      this.dispatchEvent('tab:show tabShow', event);
    },
    onTabHide: function onTabHide(event) {
      this.dispatchEvent('tab:hide tabHide', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 75 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 76 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ 32);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(/*! ./main.vue */ 80);

var _main2 = _interopRequireDefault(_main);

var _storage = __webpack_require__(/*! ./assets/vuex/storage.js */ 227);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init Vue App


// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
exports.default = new _vue2.default({
  // Root Element
  el: '#app',
  store: _storage2.default,
  render: function render(c) {
    return c('app');
  },
  components: {
    app: _main2.default
  }
});

// Import Vuex Storage
// Import Vue

/***/ }),
/* 77 */
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ 78);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 33)))

/***/ }),
/* 78 */
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 33), __webpack_require__(/*! ./../process/browser.js */ 79)))

/***/ }),
/* 79 */
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 80 */
/*!**********************!*\
  !*** ./src/main.vue ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../node_modules/vue-loader/lib/selector?type=script&index=0!./main.vue */ 81),
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-44d00cc0","hasScoped":false}!../node_modules/vue-loader/lib/selector?type=template&index=0!./main.vue */ 226),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44d00cc0", Component.options)
  } else {
    hotAPI.reload("data-v-44d00cc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/main.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = __webpack_require__(/*! ./routes.js */ 82);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = 'auto'; //
//
//
//
//
//

// Import Routes...

if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

exports.default = {
    data: function data() {
        return {
            f7params: {
                theme: theme,
                routes: _routes2.default,
                id: 'io.framework7.testapp'
            }
        };
    }
};

/***/ }),
/* 82 */
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  path: '/',
  component: __webpack_require__(/*! ./assets/vue/pages/home.vue */ 83)
}, {
  path: '/about/',
  component: __webpack_require__(/*! ./assets/vue/pages/about.vue */ 86)
}, {
  path: '/form/',
  component: __webpack_require__(/*! ./assets/vue/pages/form.vue */ 89)
}, {
  path: '/dynamic-route/blog/:blogId/post/:postId/',
  component: __webpack_require__(/*! ./assets/vue/pages/dynamic-route.vue */ 211)
}, {
  path: '/panel-left/',
  component: __webpack_require__(/*! ./assets/vue/pages/panel-left.vue */ 214)
}, {
  path: '/color-themes/',
  component: __webpack_require__(/*! ./assets/vue/pages/color-themes.vue */ 217)
}, {
  path: '/chat/',
  component: __webpack_require__(/*! ./assets/vue/pages/chat.vue */ 220)
}, {
  path: '/vuex/',
  component: __webpack_require__(/*! ./assets/vue/pages/vuex.vue */ 223)
}];

/***/ }),
/* 83 */
/*!***************************************!*\
  !*** ./src/assets/vue/pages/home.vue ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./home.vue */ 84),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-9cab42f0","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./home.vue */ 85),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9cab42f0", Component.options)
  } else {
    hotAPI.reload("data-v-9cab42f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/home.vue ***!
  \****************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 85 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9cab42f0","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/home.vue ***!
  \**************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', [_c('f7-nav-left', [_c('f7-link', {
    staticClass: "panel-open",
    attrs: {
      "open-panel": "left",
      "icon": "fa fa-bars"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Framework7-Vue")]), _vm._v(" "), _c('f7-nav-right', [_c('f7-link', {
    staticClass: "searchbar-enable",
    attrs: {
      "data-searchbar": ".searchbar-components",
      "icon": "fa fa-search"
    }
  })], 1), _vm._v(" "), _c('f7-searchbar', {
    staticClass: "searchbar-components",
    attrs: {
      "search-container": ".components-list",
      "search-in": "a",
      "expandable": ""
    }
  })], 1), _vm._v(" "), _c('f7-block-title', [_vm._v("Introduction")]), _vm._v(" "), _c('f7-block', {
    attrs: {
      "inner": ""
    }
  }, [_c('p', [_vm._v("This is template for Framework7 v2, Vue and Phonegap.")])]), _vm._v(" "), _c('f7-block-title', {
    staticClass: "searchbar-found"
  }, [_vm._v("Links")]), _vm._v(" "), _c('f7-list', {
    staticClass: "components-list searchbar-found"
  }, [_c('f7-list-item', {
    attrs: {
      "link": "/about/",
      "title": "About",
      "panel-close": ""
    }
  }, [_c('f7-icon', {
    attrs: {
      "slot": "media",
      "ios": "f7:info",
      "md": "material:info"
    },
    slot: "media"
  })], 1), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/form/",
      "title": "Form",
      "panel-close": ""
    }
  }, [_c('f7-icon', {
    attrs: {
      "slot": "media",
      "icon": "fa fa-vcard-o fa-fw"
    },
    slot: "media"
  })], 1), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/dynamic-route/blog/11/post/23/",
      "title": "Dynamic Route",
      "panel-close": ""
    }
  }, [_c('f7-icon', {
    attrs: {
      "slot": "media",
      "icon": "fa fa-rss fa-fw"
    },
    slot: "media"
  })], 1), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/chat/",
      "title": "Chat",
      "panel-close": ""
    }
  }, [_c('f7-icon', {
    attrs: {
      "slot": "media",
      "icon": "fa fa-user fa-fw"
    },
    slot: "media"
  })], 1), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/vuex/",
      "title": "Vuex",
      "panel-close": ""
    }
  }, [_c('f7-icon', {
    attrs: {
      "slot": "media",
      "icon": "fa fa-battery fa-fw"
    },
    slot: "media"
  })], 1)], 1), _vm._v(" "), _c('f7-list', {
    staticClass: "searchbar-not-found"
  }, [_c('f7-list-item', {
    attrs: {
      "title": "Nothing found"
    }
  })], 1), _vm._v(" "), _c('f7-block-title', {
    staticClass: "searchbar-hide-on-search"
  }, [_vm._v("Themes")]), _vm._v(" "), _c('f7-list', {
    staticClass: "searchbar-hide-on-search"
  }, [_c('f7-list-item', {
    attrs: {
      "title": "iOS Theme",
      "external": "",
      "link": "./index.html?theme=ios"
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Material (MD) Theme",
      "external": "",
      "link": "./index.html?theme=md"
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Color Themes",
      "link": "/color-themes/"
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Github",
      "external": "",
      "link": "https://github.com/kevinqqnj"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9cab42f0", module.exports)
  }
}

/***/ }),
/* 86 */
/*!****************************************!*\
  !*** ./src/assets/vue/pages/about.vue ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./about.vue */ 87),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-8fb24998","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./about.vue */ 88),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] about.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8fb24998", Component.options)
  } else {
    hotAPI.reload("data-v-8fb24998", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/about.vue ***!
  \*****************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 88 */
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8fb24998","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/about.vue ***!
  \***************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "About F7",
      "back-link": "Back",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block-title', [_vm._v("Welcome to Framework7")]), _vm._v(" "), _c('f7-block', {
    attrs: {
      "strong": ""
    }
  }, [_c('p', [_vm._v("Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).")]), _vm._v(" "), _c('p', [_vm._v("The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your imagination or offer ways of any solutions somehow. Framework7 gives you freedom!")]), _vm._v(" "), _c('p', [_vm._v("Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to bring the best experience and simplicity.")]), _vm._v(" "), _c('p', [_vm._v("Framework7 is definitely for you if you decide to build iOS and Android hybrid app (PhoneGap) or web app that looks like and feels as great native iOS or Android (Material) apps.")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8fb24998", module.exports)
  }
}

/***/ }),
/* 89 */
/*!***************************************!*\
  !*** ./src/assets/vue/pages/form.vue ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./form.vue */ 90),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2a3e0826","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./form.vue */ 210),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a3e0826", Component.options)
  } else {
    hotAPI.reload("data-v-2a3e0826", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/form.vue ***!
  \****************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framework7Vue = __webpack_require__(/*! framework7-vue */ 91);

exports.default = {
  components: {
    f7Navbar: _framework7Vue.f7Navbar,
    f7Page: _framework7Vue.f7Page,
    f7BlockTitle: _framework7Vue.f7BlockTitle
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 91 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/framework7-vue.esm.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.f7Views = exports.f7View = exports.f7Toolbar = exports.f7Toggle = exports.f7Tabs = exports.f7Tab = exports.f7Swiper = exports.f7SwiperSlide = exports.f7SwipeoutButton = exports.f7SwipeoutActions = exports.f7Subnavbar = exports.f7Stepper = exports.f7Statusbar = exports.f7Sheet = exports.f7Segmented = exports.f7Searchbar = exports.f7Row = exports.f7RoutableModals = exports.f7Range = exports.f7Radio = exports.f7Progressbar = exports.f7Preloader = exports.f7Popup = exports.f7Popover = exports.f7PhotoBrowser = exports.f7Panel = exports.f7Page = exports.f7PageContent = exports.f7Navbar = exports.f7NavTitle = exports.f7NavRight = exports.f7NavLeft = exports.f7Messages = exports.f7MessagesTitle = exports.f7Messagebar = exports.f7MessagebarSheet = exports.f7MessagebarSheetItem = exports.f7MessagebarSheetImage = exports.f7MessagebarAttachments = exports.f7MessagebarAttachment = exports.f7Message = exports.f7LoginScreen = exports.f7LoginScreenTitle = exports.f7List = exports.f7ListItem = exports.f7ListItemRow = exports.f7ListItemContent = exports.f7ListItemCell = exports.f7ListIndex = exports.f7ListGroup = exports.f7ListButton = exports.f7Link = exports.f7Label = exports.f7Input = exports.f7Icon = exports.f7Gauge = exports.f7Fab = exports.f7FabButtons = exports.f7FabButton = exports.f7Col = exports.f7Chip = exports.f7Checkbox = exports.f7Card = exports.f7CardHeader = exports.f7CardFooter = exports.f7CardContent = exports.f7Button = exports.f7Block = exports.f7BlockTitle = exports.f7BlockHeader = exports.f7BlockFooter = exports.f7Badge = exports.f7App = exports.f7Actions = exports.f7ActionsLabel = exports.f7ActionsGroup = exports.f7ActionsButton = exports.f7Accordion = exports.f7AccordionToggle = exports.f7AccordionItem = exports.f7AccordionContent = undefined;

var _accordionContent = __webpack_require__(/*! ./components/accordion-content */ 92);

var _accordionContent2 = _interopRequireDefault(_accordionContent);

var _accordionItem = __webpack_require__(/*! ./components/accordion-item */ 142);

var _accordionItem2 = _interopRequireDefault(_accordionItem);

var _accordionToggle = __webpack_require__(/*! ./components/accordion-toggle */ 143);

var _accordionToggle2 = _interopRequireDefault(_accordionToggle);

var _accordion = __webpack_require__(/*! ./components/accordion */ 144);

var _accordion2 = _interopRequireDefault(_accordion);

var _actionsButton = __webpack_require__(/*! ./components/actions-button */ 145);

var _actionsButton2 = _interopRequireDefault(_actionsButton);

var _actionsGroup = __webpack_require__(/*! ./components/actions-group */ 146);

var _actionsGroup2 = _interopRequireDefault(_actionsGroup);

var _actionsLabel = __webpack_require__(/*! ./components/actions-label */ 147);

var _actionsLabel2 = _interopRequireDefault(_actionsLabel);

var _actions = __webpack_require__(/*! ./components/actions */ 148);

var _actions2 = _interopRequireDefault(_actions);

var _app = __webpack_require__(/*! ./components/app */ 149);

var _app2 = _interopRequireDefault(_app);

var _badge = __webpack_require__(/*! ./components/badge */ 47);

var _badge2 = _interopRequireDefault(_badge);

var _blockFooter = __webpack_require__(/*! ./components/block-footer */ 150);

var _blockFooter2 = _interopRequireDefault(_blockFooter);

var _blockHeader = __webpack_require__(/*! ./components/block-header */ 151);

var _blockHeader2 = _interopRequireDefault(_blockHeader);

var _blockTitle = __webpack_require__(/*! ./components/block-title */ 152);

var _blockTitle2 = _interopRequireDefault(_blockTitle);

var _block = __webpack_require__(/*! ./components/block */ 153);

var _block2 = _interopRequireDefault(_block);

var _button = __webpack_require__(/*! ./components/button */ 154);

var _button2 = _interopRequireDefault(_button);

var _cardContent = __webpack_require__(/*! ./components/card-content */ 65);

var _cardContent2 = _interopRequireDefault(_cardContent);

var _cardFooter = __webpack_require__(/*! ./components/card-footer */ 66);

var _cardFooter2 = _interopRequireDefault(_cardFooter);

var _cardHeader = __webpack_require__(/*! ./components/card-header */ 67);

var _cardHeader2 = _interopRequireDefault(_cardHeader);

var _card = __webpack_require__(/*! ./components/card */ 155);

var _card2 = _interopRequireDefault(_card);

var _checkbox = __webpack_require__(/*! ./components/checkbox */ 156);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _chip = __webpack_require__(/*! ./components/chip */ 157);

var _chip2 = _interopRequireDefault(_chip);

var _col = __webpack_require__(/*! ./components/col */ 158);

var _col2 = _interopRequireDefault(_col);

var _fabButton = __webpack_require__(/*! ./components/fab-button */ 159);

var _fabButton2 = _interopRequireDefault(_fabButton);

var _fabButtons = __webpack_require__(/*! ./components/fab-buttons */ 160);

var _fabButtons2 = _interopRequireDefault(_fabButtons);

var _fab = __webpack_require__(/*! ./components/fab */ 161);

var _fab2 = _interopRequireDefault(_fab);

var _gauge = __webpack_require__(/*! ./components/gauge */ 162);

var _gauge2 = _interopRequireDefault(_gauge);

var _icon = __webpack_require__(/*! ./components/icon */ 48);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(/*! ./components/input */ 68);

var _input2 = _interopRequireDefault(_input);

var _label = __webpack_require__(/*! ./components/label */ 163);

var _label2 = _interopRequireDefault(_label);

var _link = __webpack_require__(/*! ./components/link */ 49);

var _link2 = _interopRequireDefault(_link);

var _listButton = __webpack_require__(/*! ./components/list-button */ 164);

var _listButton2 = _interopRequireDefault(_listButton);

var _listGroup = __webpack_require__(/*! ./components/list-group */ 165);

var _listGroup2 = _interopRequireDefault(_listGroup);

var _listIndex = __webpack_require__(/*! ./components/list-index */ 166);

var _listIndex2 = _interopRequireDefault(_listIndex);

var _listItemCell = __webpack_require__(/*! ./components/list-item-cell */ 167);

var _listItemCell2 = _interopRequireDefault(_listItemCell);

var _listItemContent = __webpack_require__(/*! ./components/list-item-content */ 71);

var _listItemContent2 = _interopRequireDefault(_listItemContent);

var _listItemRow = __webpack_require__(/*! ./components/list-item-row */ 168);

var _listItemRow2 = _interopRequireDefault(_listItemRow);

var _listItem = __webpack_require__(/*! ./components/list-item */ 169);

var _listItem2 = _interopRequireDefault(_listItem);

var _list = __webpack_require__(/*! ./components/list */ 170);

var _list2 = _interopRequireDefault(_list);

var _loginScreenTitle = __webpack_require__(/*! ./components/login-screen-title */ 171);

var _loginScreenTitle2 = _interopRequireDefault(_loginScreenTitle);

var _loginScreen = __webpack_require__(/*! ./components/login-screen */ 172);

var _loginScreen2 = _interopRequireDefault(_loginScreen);

var _message = __webpack_require__(/*! ./components/message */ 173);

var _message2 = _interopRequireDefault(_message);

var _messagebarAttachment = __webpack_require__(/*! ./components/messagebar-attachment */ 174);

var _messagebarAttachment2 = _interopRequireDefault(_messagebarAttachment);

var _messagebarAttachments = __webpack_require__(/*! ./components/messagebar-attachments */ 175);

var _messagebarAttachments2 = _interopRequireDefault(_messagebarAttachments);

var _messagebarSheetImage = __webpack_require__(/*! ./components/messagebar-sheet-image */ 176);

var _messagebarSheetImage2 = _interopRequireDefault(_messagebarSheetImage);

var _messagebarSheetItem = __webpack_require__(/*! ./components/messagebar-sheet-item */ 177);

var _messagebarSheetItem2 = _interopRequireDefault(_messagebarSheetItem);

var _messagebarSheet = __webpack_require__(/*! ./components/messagebar-sheet */ 178);

var _messagebarSheet2 = _interopRequireDefault(_messagebarSheet);

var _messagebar = __webpack_require__(/*! ./components/messagebar */ 179);

var _messagebar2 = _interopRequireDefault(_messagebar);

var _messagesTitle = __webpack_require__(/*! ./components/messages-title */ 180);

var _messagesTitle2 = _interopRequireDefault(_messagesTitle);

var _messages = __webpack_require__(/*! ./components/messages */ 181);

var _messages2 = _interopRequireDefault(_messages);

var _navLeft = __webpack_require__(/*! ./components/nav-left */ 72);

var _navLeft2 = _interopRequireDefault(_navLeft);

var _navRight = __webpack_require__(/*! ./components/nav-right */ 182);

var _navRight2 = _interopRequireDefault(_navRight);

var _navTitle = __webpack_require__(/*! ./components/nav-title */ 73);

var _navTitle2 = _interopRequireDefault(_navTitle);

var _navbar = __webpack_require__(/*! ./components/navbar */ 183);

var _navbar2 = _interopRequireDefault(_navbar);

var _pageContent = __webpack_require__(/*! ./components/page-content */ 74);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _page = __webpack_require__(/*! ./components/page */ 184);

var _page2 = _interopRequireDefault(_page);

var _panel = __webpack_require__(/*! ./components/panel */ 185);

var _panel2 = _interopRequireDefault(_panel);

var _photoBrowser = __webpack_require__(/*! ./components/photo-browser */ 186);

var _photoBrowser2 = _interopRequireDefault(_photoBrowser);

var _popover = __webpack_require__(/*! ./components/popover */ 187);

var _popover2 = _interopRequireDefault(_popover);

var _popup = __webpack_require__(/*! ./components/popup */ 188);

var _popup2 = _interopRequireDefault(_popup);

var _preloader = __webpack_require__(/*! ./components/preloader */ 189);

var _preloader2 = _interopRequireDefault(_preloader);

var _progressbar = __webpack_require__(/*! ./components/progressbar */ 190);

var _progressbar2 = _interopRequireDefault(_progressbar);

var _radio = __webpack_require__(/*! ./components/radio */ 191);

var _radio2 = _interopRequireDefault(_radio);

var _range = __webpack_require__(/*! ./components/range */ 70);

var _range2 = _interopRequireDefault(_range);

var _routableModals = __webpack_require__(/*! ./components/routable-modals */ 64);

var _routableModals2 = _interopRequireDefault(_routableModals);

var _row = __webpack_require__(/*! ./components/row */ 192);

var _row2 = _interopRequireDefault(_row);

var _searchbar = __webpack_require__(/*! ./components/searchbar */ 193);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _segmented = __webpack_require__(/*! ./components/segmented */ 194);

var _segmented2 = _interopRequireDefault(_segmented);

var _sheet = __webpack_require__(/*! ./components/sheet */ 195);

var _sheet2 = _interopRequireDefault(_sheet);

var _statusbar = __webpack_require__(/*! ./components/statusbar */ 196);

var _statusbar2 = _interopRequireDefault(_statusbar);

var _stepper = __webpack_require__(/*! ./components/stepper */ 197);

var _stepper2 = _interopRequireDefault(_stepper);

var _subnavbar = __webpack_require__(/*! ./components/subnavbar */ 198);

var _subnavbar2 = _interopRequireDefault(_subnavbar);

var _swipeoutActions = __webpack_require__(/*! ./components/swipeout-actions */ 199);

var _swipeoutActions2 = _interopRequireDefault(_swipeoutActions);

var _swipeoutButton = __webpack_require__(/*! ./components/swipeout-button */ 200);

var _swipeoutButton2 = _interopRequireDefault(_swipeoutButton);

var _swiperSlide = __webpack_require__(/*! ./components/swiper-slide */ 201);

var _swiperSlide2 = _interopRequireDefault(_swiperSlide);

var _swiper = __webpack_require__(/*! ./components/swiper */ 202);

var _swiper2 = _interopRequireDefault(_swiper);

var _tab = __webpack_require__(/*! ./components/tab */ 203);

var _tab2 = _interopRequireDefault(_tab);

var _tabs = __webpack_require__(/*! ./components/tabs */ 204);

var _tabs2 = _interopRequireDefault(_tabs);

var _toggle = __webpack_require__(/*! ./components/toggle */ 69);

var _toggle2 = _interopRequireDefault(_toggle);

var _toolbar = __webpack_require__(/*! ./components/toolbar */ 205);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _view = __webpack_require__(/*! ./components/view */ 206);

var _view2 = _interopRequireDefault(_view);

var _views = __webpack_require__(/*! ./components/views */ 207);

var _views2 = _interopRequireDefault(_views);

var _plugin = __webpack_require__(/*! ./utils/plugin */ 208);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Framework7 Vue 3.4.0
 * Build full featured iOS & Android apps using Framework7 & Vue
 * http://framework7.io/vue/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2018
 */

exports.f7AccordionContent = _accordionContent2.default;
exports.f7AccordionItem = _accordionItem2.default;
exports.f7AccordionToggle = _accordionToggle2.default;
exports.f7Accordion = _accordion2.default;
exports.f7ActionsButton = _actionsButton2.default;
exports.f7ActionsGroup = _actionsGroup2.default;
exports.f7ActionsLabel = _actionsLabel2.default;
exports.f7Actions = _actions2.default;
exports.f7App = _app2.default;
exports.f7Badge = _badge2.default;
exports.f7BlockFooter = _blockFooter2.default;
exports.f7BlockHeader = _blockHeader2.default;
exports.f7BlockTitle = _blockTitle2.default;
exports.f7Block = _block2.default;
exports.f7Button = _button2.default;
exports.f7CardContent = _cardContent2.default;
exports.f7CardFooter = _cardFooter2.default;
exports.f7CardHeader = _cardHeader2.default;
exports.f7Card = _card2.default;
exports.f7Checkbox = _checkbox2.default;
exports.f7Chip = _chip2.default;
exports.f7Col = _col2.default;
exports.f7FabButton = _fabButton2.default;
exports.f7FabButtons = _fabButtons2.default;
exports.f7Fab = _fab2.default;
exports.f7Gauge = _gauge2.default;
exports.f7Icon = _icon2.default;
exports.f7Input = _input2.default;
exports.f7Label = _label2.default;
exports.f7Link = _link2.default;
exports.f7ListButton = _listButton2.default;
exports.f7ListGroup = _listGroup2.default;
exports.f7ListIndex = _listIndex2.default;
exports.f7ListItemCell = _listItemCell2.default;
exports.f7ListItemContent = _listItemContent2.default;
exports.f7ListItemRow = _listItemRow2.default;
exports.f7ListItem = _listItem2.default;
exports.f7List = _list2.default;
exports.f7LoginScreenTitle = _loginScreenTitle2.default;
exports.f7LoginScreen = _loginScreen2.default;
exports.f7Message = _message2.default;
exports.f7MessagebarAttachment = _messagebarAttachment2.default;
exports.f7MessagebarAttachments = _messagebarAttachments2.default;
exports.f7MessagebarSheetImage = _messagebarSheetImage2.default;
exports.f7MessagebarSheetItem = _messagebarSheetItem2.default;
exports.f7MessagebarSheet = _messagebarSheet2.default;
exports.f7Messagebar = _messagebar2.default;
exports.f7MessagesTitle = _messagesTitle2.default;
exports.f7Messages = _messages2.default;
exports.f7NavLeft = _navLeft2.default;
exports.f7NavRight = _navRight2.default;
exports.f7NavTitle = _navTitle2.default;
exports.f7Navbar = _navbar2.default;
exports.f7PageContent = _pageContent2.default;
exports.f7Page = _page2.default;
exports.f7Panel = _panel2.default;
exports.f7PhotoBrowser = _photoBrowser2.default;
exports.f7Popover = _popover2.default;
exports.f7Popup = _popup2.default;
exports.f7Preloader = _preloader2.default;
exports.f7Progressbar = _progressbar2.default;
exports.f7Radio = _radio2.default;
exports.f7Range = _range2.default;
exports.f7RoutableModals = _routableModals2.default;
exports.f7Row = _row2.default;
exports.f7Searchbar = _searchbar2.default;
exports.f7Segmented = _segmented2.default;
exports.f7Sheet = _sheet2.default;
exports.f7Statusbar = _statusbar2.default;
exports.f7Stepper = _stepper2.default;
exports.f7Subnavbar = _subnavbar2.default;
exports.f7SwipeoutActions = _swipeoutActions2.default;
exports.f7SwipeoutButton = _swipeoutButton2.default;
exports.f7SwiperSlide = _swiperSlide2.default;
exports.f7Swiper = _swiper2.default;
exports.f7Tab = _tab2.default;
exports.f7Tabs = _tabs2.default;
exports.f7Toggle = _toggle2.default;
exports.f7Toolbar = _toolbar2.default;
exports.f7View = _view2.default;
exports.f7Views = _views2.default;
exports.default = _plugin2.default;

/***/ }),
/* 92 */
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/accordion-content.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),
  name: 'f7-accordion-content',

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'accordion-item-content', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 93 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 94);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Object.assign;


/***/ }),
/* 94 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 96) });


/***/ }),
/* 95 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 96 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ 24);
var gOPS = __webpack_require__(/*! ./_object-gops */ 41);
var pIE = __webpack_require__(/*! ./_object-pie */ 28);
var toObject = __webpack_require__(/*! ./_to-object */ 29);
var IObject = __webpack_require__(/*! ./_iobject */ 54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 97 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var toLength = __webpack_require__(/*! ./_to-length */ 55);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 98);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 98 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 37);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 99 */
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 100), __esModule: true };

/***/ }),
/* 100 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 30);
__webpack_require__(/*! ../../modules/es6.array.from */ 106);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Array.from;


/***/ }),
/* 101 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 37);
var defined = __webpack_require__(/*! ./_defined */ 36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 102 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 58);
var descriptor = __webpack_require__(/*! ./_property-desc */ 23);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 42);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 15)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 103 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 10);
var anObject = __webpack_require__(/*! ./_an-object */ 16);
var getKeys = __webpack_require__(/*! ./_object-keys */ 24);

module.exports = __webpack_require__(/*! ./_descriptors */ 11) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 104 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 105 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 12);
var toObject = __webpack_require__(/*! ./_to-object */ 29);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 38)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 106 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ 50);
var $export = __webpack_require__(/*! ./_export */ 14);
var toObject = __webpack_require__(/*! ./_to-object */ 29);
var call = __webpack_require__(/*! ./_iter-call */ 107);
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 108);
var toLength = __webpack_require__(/*! ./_to-length */ 55);
var createProperty = __webpack_require__(/*! ./_create-property */ 109);
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 59);

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 110)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 107 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ 16);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 108 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
var ITERATOR = __webpack_require__(/*! ./_wks */ 7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 109 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ 10);
var createDesc = __webpack_require__(/*! ./_property-desc */ 23);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 110 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ 7)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 111 */
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 112), __esModule: true };

/***/ }),
/* 112 */
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 113);
var $Object = __webpack_require__(/*! ../../modules/_core */ 6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 113 */
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 61).f;

__webpack_require__(/*! ./_object-sap */ 62)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 114 */
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 115);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 121);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 115 */
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 116), __esModule: true };

/***/ }),
/* 116 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 43);
__webpack_require__(/*! ../modules/es6.string.iterator */ 30);
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 120);


/***/ }),
/* 117 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 118);
var step = __webpack_require__(/*! ./_iter-step */ 119);
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 56)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 118 */
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 120 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ 60);
var ITERATOR = __webpack_require__(/*! ./_wks */ 7)('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ 18);
module.exports = __webpack_require__(/*! ./_core */ 6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 121 */
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 122), __esModule: true };

/***/ }),
/* 122 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 43);
__webpack_require__(/*! ../modules/es6.string.iterator */ 30);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 123);


/***/ }),
/* 123 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 16);
var get = __webpack_require__(/*! ./core.get-iterator-method */ 59);
module.exports = __webpack_require__(/*! ./_core */ 6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 124 */
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 125);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 127);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 125 */
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 126), __esModule: true };

/***/ }),
/* 126 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 30);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 43);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 44).f('iterator');


/***/ }),
/* 127 */
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 128), __esModule: true };

/***/ }),
/* 128 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 129);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 134);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 135);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 136);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Symbol;


/***/ }),
/* 129 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 9);
var has = __webpack_require__(/*! ./_has */ 12);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 11);
var $export = __webpack_require__(/*! ./_export */ 14);
var redefine = __webpack_require__(/*! ./_redefine */ 57);
var META = __webpack_require__(/*! ./_meta */ 130).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 17);
var shared = __webpack_require__(/*! ./_shared */ 39);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 42);
var uid = __webpack_require__(/*! ./_uid */ 27);
var wks = __webpack_require__(/*! ./_wks */ 7);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 44);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 45);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 131);
var isArray = __webpack_require__(/*! ./_is-array */ 132);
var anObject = __webpack_require__(/*! ./_an-object */ 16);
var isObject = __webpack_require__(/*! ./_is-object */ 22);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 34);
var createDesc = __webpack_require__(/*! ./_property-desc */ 23);
var _create = __webpack_require__(/*! ./_object-create */ 58);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 133);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 61);
var $DP = __webpack_require__(/*! ./_object-dp */ 10);
var $keys = __webpack_require__(/*! ./_object-keys */ 24);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 63).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 28).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 41).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 26)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 130 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 27)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 22);
var has = __webpack_require__(/*! ./_has */ 12);
var setDesc = __webpack_require__(/*! ./_object-dp */ 10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 131 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 24);
var gOPS = __webpack_require__(/*! ./_object-gops */ 41);
var pIE = __webpack_require__(/*! ./_object-pie */ 28);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 132 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 133 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 13);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 63).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 134 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 135 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 45)('asyncIterator');


/***/ }),
/* 136 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 45)('observable');


/***/ }),
/* 137 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ 138);
module.exports = __webpack_require__(/*! ../../modules/_core */ 6).Object.keys;


/***/ }),
/* 138 */
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ 29);
var $keys = __webpack_require__(/*! ./_object-keys */ 24);

__webpack_require__(/*! ./_object-sap */ 62)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 139 */
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 140), __esModule: true };

/***/ }),
/* 140 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 141);
var $Object = __webpack_require__(/*! ../../modules/_core */ 6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 141 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 11), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 10).f });


/***/ }),
/* 142 */
/*!******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/accordion-item.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-accordion-item',
  props: (0, _assign2.default)({
    id: [String, Number],
    opened: Boolean
  }, _mixins2.default.colorProps),

  mounted: function mounted() {
    var self = this;
    var el = self.$el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('accordion:open', self.onOpenBound);
    el.addEventListener('accordion:opened', self.onOpenedBound);
    el.addEventListener('accordion:close', self.onCloseBound);
    el.addEventListener('accordion:closed', self.onClosedBound);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$el;
    if (!el) return;
    el.removeEventListener('accordion:open', self.onOpenBound);
    el.removeEventListener('accordion:opened', self.onOpenedBound);
    el.removeEventListener('accordion:close', self.onCloseBound);
    el.removeEventListener('accordion:closed', self.onClosedBound);
  },
  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        opened = props.opened;

    var classes = _utils2.default.classNames(className, 'accordion-item', {
      'accordion-item-opened': opened
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('accordionOpen accordion:open', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('accordionOpened accordion:opened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('accordionClose accordion:close', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('accordionClosed accordion:closed', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 143 */
/*!********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/accordion-toggle.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),
  name: 'f7-accordion-toggle',

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'accordion-item-toggle', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 144 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/accordion.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),
  name: 'f7-accordion',

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'accordion-list', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 145 */
/*!******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/actions-button.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-actions-button',
  props: (0, _assign2.default)({
    id: [String, Number],
    bold: Boolean,
    close: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        className = props.className,
        style = props.style,
        bold = props.bold;

    var mediaEl = void 0;

    if (self.$slots.media && self.$slots.media.length) {
      mediaEl = _h('div', {
        class: 'actions-button-media'
      }, [this.$slots['media']]);
    }

    var classes = _utils2.default.classNames(className, {
      'actions-button': true,
      'actions-button-bold': bold
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      ref: 'el',
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [mediaEl, _h('div', {
      class: 'actions-button-text'
    }, [this.$slots['default']])]);
  },


  methods: {
    onClick: function onClick(event) {
      var self = this;
      var $$ = self.$$;
      var el = self.$refs.el;

      if (self.props.close && self.$f7 && el) {
        self.$f7.actions.close($$(el).parents('.actions-modal'));
      }

      self.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 146 */
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/actions-group.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-actions-group',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'actions-group', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 147 */
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/actions-label.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-actions-label',
  props: (0, _assign2.default)({
    id: [String, Number],
    bold: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        bold = props.bold;

    var classes = _utils2.default.classNames(className, 'actions-label', {
      'actions-button-bold': bold
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 148 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/components/actions.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-actions',
  props: (0, _assign2.default)({
    id: [String, Number],
    opened: Boolean,
    grid: Boolean,
    convertToPopover: Boolean,
    forceToPopover: Boolean,
    target: [String, Object],
    closeByBackdropClick: Boolean,
    closeByOutsideClick: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        grid = props.grid;

    var classes = _utils2.default.classNames(className, 'actions-modal', {
      'actions-grid': grid
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      ref: 'el',
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.f7Actions) return;

      if (opened) {
        self.f7Actions.open();
      } else {
        self.f7Actions.close();
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('actions:open', self.onOpenBound);
    el.addEventListener('actions:opened', self.onOpenedBound);
    el.addEventListener('actions:close', self.onCloseBound);
    el.addEventListener('actions:closed', self.onClosedBound);
    var props = self.props;
    var grid = props.grid,
        target = props.target,
        convertToPopover = props.convertToPopover,
        forceToPopover = props.forceToPopover,
        opened = props.opened,
        closeByBackdropClick = props.closeByBackdropClick,
        closeByOutsideClick = props.closeByOutsideClick;

    var actionsParams = {
      el: self.$refs.el,
      grid: grid
    };
    if (target) actionsParams.targetEl = target;
    {
      if (typeof self.$options.propsData.convertToPopover !== 'undefined') actionsParams.convertToPopover = convertToPopover;
      if (typeof self.$options.propsData.forceToPopover !== 'undefined') actionsParams.forceToPopover = forceToPopover;
      if (typeof self.$options.propsData.closeByBackdropClick !== 'undefined') actionsParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof self.$options.propsData.closeByOutsideClick !== 'undefined') actionsParams.closeByOutsideClick = closeByOutsideClick;
    }
    self.$f7ready(function () {
      self.f7Actions = self.$f7.actions.create(actionsParams);

      if (opened) {
        self.f7Actions.open(false);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Actions) self.f7Actions.destroy();
    var el = self.$el;
    if (!el) return;
    el.removeEventListener('actions:open', self.onOpenBound);
    el.removeEventListener('actions:opened', self.onOpenedBound);
    el.removeEventListener('actions:close', self.onCloseBound);
    el.removeEventListener('actions:closed', self.onClosedBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('actions:open actionsOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('actions:opened actionsOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('actions:close actionsClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('actions:closed actionsClosed', event);
    },
    open: function open(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.actions.open(self.$refs.el, animate);
    },
    close: function close(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.actions.close(self.$refs.el, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 149 */
/*!*******************************************************!*\
  !*** ./node_modules/framework7-vue/components/app.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _f = __webpack_require__(/*! ../utils/f7 */ 20);

var _f2 = _interopRequireDefault(_f);

var _routableModals = __webpack_require__(/*! ./routable-modals */ 64);

var _routableModals2 = _interopRequireDefault(_routableModals);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-app',
  props: (0, _assign2.default)({
    id: [String, Number],
    params: Object,
    routes: Array
  }, _mixins2.default.colorProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        modals: []
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className;

    var classes = _utils2.default.classNames(className, 'framework7-root', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id || 'framework7-root'
      }
    }, [this.$slots['default'], _h(_routableModals2.default)]);
  },
  mounted: function mounted() {
    var self = this;
    var _self$props = self.props,
        _self$props$params = _self$props.params,
        params = _self$props$params === undefined ? {} : _self$props$params,
        routes = _self$props.routes;

    var el = self.$refs.el;
    var parentEl = el.parentNode;

    if (parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
      parentEl.style.height = '100%';
    }

    _f2.default.init(el, params, routes);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 150 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/block-footer.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-block-footer',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'block-footer', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 151 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/block-header.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-block-header',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'block-header', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 152 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/block-title.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-block-title',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'block-title', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 153 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/block.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-block',
  props: (0, _assign2.default)({
    id: [String, Number],
    inset: Boolean,
    tabletInset: Boolean,
    strong: Boolean,
    tabs: Boolean,
    tab: Boolean,
    tabActive: Boolean,
    accordionList: Boolean,
    noHairlines: Boolean,
    noHairlinesMd: Boolean,
    noHairlinesIos: Boolean
  }, _mixins2.default.colorProps),

  mounted: function mounted() {
    var el = this.$el;
    if (!el) return;
    this.onTabShowBound = this.onTabShow.bind(this);
    this.onTabHideBound = this.onTabHide.bind(this);
    el.addEventListener('tab:show', this.onTabShowBound);
    el.addEventListener('tab:hide', this.onTabHideBound);
  },
  beforeDestroy: function beforeDestroy() {
    var el = this.$el;
    if (!el) return;
    el.removeEventListener('tab:show', this.onTabShowBound);
    el.removeEventListener('tab:hide', this.onTabHideBound);
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        inset = props.inset,
        strong = props.strong,
        accordionList = props.accordionList,
        tabletInset = props.tabletInset,
        tabs = props.tabs,
        tab = props.tab,
        tabActive = props.tabActive,
        noHairlines = props.noHairlines,
        noHairlinesIos = props.noHairlinesIos,
        noHairlinesMd = props.noHairlinesMd,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'block', {
      inset: inset,
      'block-strong': strong,
      'accordion-list': accordionList,
      'tablet-inset': tabletInset,
      tabs: tabs,
      tab: tab,
      'tab-active': tabActive,
      'no-hairlines': noHairlines,
      'no-hairlines-md': noHairlinesMd,
      'no-hairlines-ios': noHairlinesIos
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  methods: {
    onTabShow: function onTabShow(event) {
      this.dispatchEvent('tabShow tab:show', event);
    },
    onTabHide: function onTabHide(event) {
      this.dispatchEvent('tabHide tab:hide', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 154 */
/*!**********************************************************!*\
  !*** ./node_modules/framework7-vue/components/button.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _icon = __webpack_require__(/*! ./icon */ 48);

var _icon2 = _interopRequireDefault(_icon);

var _vueComponentTransformJsxProps = __webpack_require__(/*! ../runtime-helpers/vue-component-transform-jsx-props.js */ 31);

var _vueComponentTransformJsxProps2 = _interopRequireDefault(_vueComponentTransformJsxProps);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-button',
  props: (0, _assign2.default)({
    id: [String, Number],
    noFastclick: Boolean,
    noFastClick: Boolean,
    text: String,
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    href: {
      type: [String, Boolean],
      default: '#'
    },
    target: String,
    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    big: Boolean,
    bigMd: Boolean,
    bigIos: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    raised: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    tooltip: String
  }, _mixins2.default.colorProps, _mixins2.default.linkIconProps, _mixins2.default.linkRouterProps, _mixins2.default.linkActionsProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var iconEl = void 0;
    var textEl = void 0;
    var props = self.props;
    var text = props.text,
        icon = props.icon,
        iconMaterial = props.iconMaterial,
        iconIon = props.iconIon,
        iconFa = props.iconFa,
        iconF7 = props.iconF7,
        iconIfMd = props.iconIfMd,
        iconIfIos = props.iconIfIos,
        iconMd = props.iconMd,
        iconIos = props.iconIos,
        iconColor = props.iconColor,
        iconSize = props.iconSize,
        id = props.id,
        style = props.style;


    if (text) {
      textEl = _h('span', [text]);
    }

    var mdThemeIcon = iconIfMd || iconMd;
    var iosThemeIcon = iconIfIos || iconIos;

    if (icon || iconMaterial || iconIon || iconFa || iconF7 || mdThemeIcon || iosThemeIcon) {
      iconEl = _h(_icon2.default, {
        attrs: {
          material: iconMaterial,
          ion: iconIon,
          fa: iconFa,
          f7: iconF7,
          icon: icon,
          md: mdThemeIcon,
          ios: iosThemeIcon,
          color: iconColor,
          size: iconSize
        }
      });
    }

    return _h('a', (0, _vueComponentTransformJsxProps2.default)((0, _assign2.default)({
      ref: 'el',
      style: style,
      class: self.classes
    }, self.attrs, {
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    })), [iconEl, textEl, this.$slots['default']]);
  },


  computed: {
    attrs: function attrs() {
      var self = this;
      var props = self.props;
      var href = props.href,
          target = props.target,
          tabLink = props.tabLink;

      var hrefComputed = href;
      if (href === true) hrefComputed = '#';
      if (href === false) hrefComputed = undefined;
      return _utils2.default.extend({
        href: hrefComputed,
        target: target,
        'data-tab': _utils2.default.isStringProp(tabLink) && tabLink || undefined
      }, _mixins2.default.linkRouterAttrs(props), _mixins2.default.linkActionsAttrs(props));
    },
    classes: function classes() {
      var self = this;
      var props = self.props;
      var noFastclick = props.noFastclick,
          noFastClick = props.noFastClick,
          tabLink = props.tabLink,
          tabLinkActive = props.tabLinkActive,
          round = props.round,
          roundIos = props.roundIos,
          roundMd = props.roundMd,
          fill = props.fill,
          fillIos = props.fillIos,
          fillMd = props.fillMd,
          big = props.big,
          bigIos = props.bigIos,
          bigMd = props.bigMd,
          small = props.small,
          smallIos = props.smallIos,
          smallMd = props.smallMd,
          raised = props.raised,
          active = props.active,
          outline = props.outline,
          disabled = props.disabled,
          className = props.className;

      return _utils2.default.classNames(className, 'button', {
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'no-fastclick': noFastclick || noFastClick,
        'button-round': round,
        'button-round-ios': roundIos,
        'button-round-md': roundMd,
        'button-fill': fill,
        'button-fill-ios': fillIos,
        'button-fill-md': fillMd,
        'button-big': big,
        'button-big-ios': bigIos,
        'button-big-md': bigMd,
        'button-small': small,
        'button-small-ios': smallIos,
        'button-small-md': smallMd,
        'button-raised': raised,
        'button-active': active,
        'button-outline': outline,
        disabled: disabled
      }, _mixins2.default.colorClasses(props), _mixins2.default.linkRouterClasses(props), _mixins2.default.linkActionsClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  watch: {
    'props.tooltip': function watchTooltip(newText) {
      var self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },

  mounted: function mounted() {
    var self = this;
    var tooltip = self.props.tooltip;

    if (!tooltip) return;
    self.$f7ready(function (f7) {
      self.f7Tooltip = f7.tooltip.create({
        targetEl: self.$refs.el,
        text: tooltip
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  }
};

/***/ }),
/* 155 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/card.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _cardHeader = __webpack_require__(/*! ./card-header */ 67);

var _cardHeader2 = _interopRequireDefault(_cardHeader);

var _cardContent = __webpack_require__(/*! ./card-content */ 65);

var _cardContent2 = _interopRequireDefault(_cardContent);

var _cardFooter = __webpack_require__(/*! ./card-footer */ 66);

var _cardFooter2 = _interopRequireDefault(_cardFooter);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-card',
  props: (0, _assign2.default)({
    id: [String, Number],
    title: [String, Number],
    content: [String, Number],
    footer: [String, Number],
    outline: Boolean,
    padding: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        title = props.title,
        content = props.content,
        footer = props.footer,
        padding = props.padding,
        outline = props.outline;

    var headerEl = void 0;
    var contentEl = void 0;
    var footerEl = void 0;
    var classes = _utils2.default.classNames(className, 'card', {
      'card-outline': outline
    }, _mixins2.default.colorClasses(props));

    if (title || self.$slots && self.$slots.header) {
      headerEl = _h(_cardHeader2.default, [title, this.$slots['header']]);
    }

    if (content || self.$slots && self.$slots.content) {
      contentEl = _h(_cardContent2.default, {
        attrs: {
          padding: padding
        }
      }, [content, this.$slots['content']]);
    }

    if (footer || self.$slots && self.$slots.footer) {
      footerEl = _h(_cardFooter2.default, [footer, this.$slots['footer']]);
    }

    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [headerEl, contentEl, footerEl, this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 156 */
/*!************************************************************!*\
  !*** ./node_modules/framework7-vue/components/checkbox.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-checkbox',
  props: (0, _assign2.default)({
    id: [String, Number],
    checked: Boolean,
    name: [Number, String],
    value: [Number, String, Boolean],
    disabled: Boolean,
    readonly: Boolean,
    defaultChecked: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var name = props.name,
        value = props.value,
        disabled = props.disabled,
        readonly = props.readonly,
        checked = props.checked,
        defaultChecked = props.defaultChecked,
        id = props.id,
        style = props.style;

    var inputEl = void 0;
    {
      inputEl = _h('input', {
        domProps: {
          value: value,
          disabled: disabled,
          readonly: readonly,
          checked: checked
        },
        on: {
          change: self.onChange.bind(self)
        },
        attrs: {
          type: 'checkbox',
          name: name
        }
      });
    }

    var iconEl = _h('i', {
      class: 'icon-checkbox'
    });

    return _h('label', {
      style: style,
      class: self.classes,
      attrs: {
        id: id
      }
    }, [inputEl, iconEl, this.$slots['default']]);
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var className = props.className,
          disabled = props.disabled;

      return _utils2.default.classNames(className, {
        checkbox: true,
        disabled: disabled
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 157 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/chip.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-chip',
  props: (0, _assign2.default)({
    id: [String, Number],
    media: String,
    text: [String, Number],
    deleteable: Boolean,
    mediaBgColor: String,
    mediaTextColor: String,
    outline: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var media = props.media,
        text = props.text,
        deleteable = props.deleteable,
        className = props.className,
        id = props.id,
        style = props.style,
        mediaTextColor = props.mediaTextColor,
        mediaBgColor = props.mediaBgColor,
        outline = props.outline;

    var mediaEl = void 0;
    var labelEl = void 0;
    var deleteEl = void 0;

    if (media || self.$slots && self.$slots.media) {
      var mediaClasses = _utils2.default.classNames('chip-media', mediaTextColor && 'text-color-' + mediaTextColor, mediaBgColor && 'bg-color-' + mediaBgColor);
      mediaEl = _h('div', {
        class: mediaClasses
      }, [media || this.$slots['media']]);
    }

    if (text || self.$slots && self.$slots.text) {
      labelEl = _h('div', {
        class: 'chip-label'
      }, [text, this.$slots['text']]);
    }

    if (deleteable) {
      deleteEl = _h('a', {
        class: 'chip-delete',
        on: {
          click: self.onDeleteClick.bind(self)
        },
        attrs: {
          href: '#'
        }
      });
    }

    var classes = _utils2.default.classNames(className, 'chip', {
      'chip-outline': outline
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [mediaEl, labelEl, deleteEl]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    onDeleteClick: function onDeleteClick(event) {
      this.dispatchEvent('delete', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 158 */
/*!*******************************************************!*\
  !*** ./node_modules/framework7-vue/components/col.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 46);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-col',
  props: (0, _assign2.default)({
    id: [String, Number],
    tag: {
      type: String,
      default: 'div'
    },
    width: {
      type: [Number, String],
      default: 'auto'
    },
    tabletWidth: {
      type: [Number, String]
    },
    desktopWidth: {
      type: [Number, String]
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _Utils$classNames;

    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        tag = props.tag,
        width = props.width,
        tabletWidth = props.tabletWidth,
        desktopWidth = props.desktopWidth;

    var ColTag = tag;
    var classes = _utils2.default.classNames(className, (_Utils$classNames = {
      col: width === 'auto'
    }, (0, _defineProperty3.default)(_Utils$classNames, 'col-' + width, width !== 'auto'), (0, _defineProperty3.default)(_Utils$classNames, 'tablet-' + tabletWidth, tabletWidth), (0, _defineProperty3.default)(_Utils$classNames, 'desktop-' + desktopWidth, desktopWidth), _Utils$classNames), _mixins2.default.colorClasses(props));
    return _h(ColTag, {
      style: style,
      class: classes,
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 159 */
/*!**************************************************************!*\
  !*** ./node_modules/framework7-vue/components/fab-button.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-fab-button',
  props: (0, _assign2.default)({
    id: [String, Number],
    fabClose: Boolean,
    label: String,
    target: String,
    tooltip: String
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        fabClose = props.fabClose,
        label = props.label,
        target = props.target;

    var classes = _utils2.default.classNames(className, {
      'fab-close': fabClose,
      'fab-label-button': label
    }, _mixins2.default.colorClasses(props));
    var labelEl = void 0;

    if (label) {
      labelEl = _h('span', {
        class: 'fab-label'
      }, [label]);
    }

    return _h('a', {
      style: style,
      class: classes,
      on: {
        click: this.onClick.bind(this)
      },
      attrs: {
        id: id,
        target: target
      }
    }, [this.$slots['default'], labelEl]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  watch: {
    'props.tooltip': function watchTooltip(newText) {
      var self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },

  mounted: function mounted() {
    var self = this;
    var tooltip = self.props.tooltip;

    if (!tooltip) return;
    self.$f7ready(function (f7) {
      self.f7Tooltip = f7.tooltip.create({
        targetEl: self.$refs.el,
        text: tooltip
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 160 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/fab-buttons.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-fab-buttons',
  props: (0, _assign2.default)({
    id: [String, Number],
    position: {
      type: String,
      default: 'top'
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        position = props.position;

    var classes = _utils2.default.classNames(className, 'fab-buttons', 'fab-buttons-' + position, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 161 */
/*!*******************************************************!*\
  !*** ./node_modules/framework7-vue/components/fab.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-fab',
  props: (0, _assign2.default)({
    id: [String, Number],
    morphTo: String,
    href: [Boolean, String],
    target: String,
    text: String,
    position: {
      type: String,
      default: 'right-bottom'
    },
    tooltip: String
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        morphTo = props.morphTo,
        initialHref = props.href,
        position = props.position,
        text = props.text,
        target = props.target;

    var href = initialHref;
    if (href === true) href = '#';
    if (href === false) href = undefined;
    var linkChildren = [];
    var rootChildren = [];
    var _self$$slots = self.$slots,
        linkSlots = _self$$slots.link,
        defaultSlots = _self$$slots.default,
        rootSlots = _self$$slots.root,
        textSlots = _self$$slots.text;


    if (defaultSlots) {
      for (var i = 0; i < defaultSlots.length; i += 1) {
        var child = defaultSlots[i];
        var isRoot = void 0;
        {
          if (child.tag && child.tag.indexOf('fab-buttons') >= 0) isRoot = true;
        }
        if (isRoot) rootChildren.push(child);else linkChildren.push(child);
      }
    }

    var textEl = void 0;

    if (text || textSlots && textSlots.length) {
      textEl = _h('div', {
        class: 'fab-text'
      }, [text || textSlots]);
    }

    var linkEl = void 0;

    if (linkChildren.length || linkSlots && linkSlots.length) {
      linkEl = _h('a', {
        key: 'f7-fab-link',
        on: {
          click: self.onClick.bind(self)
        },
        attrs: {
          target: target,
          href: href
        }
      }, [linkChildren, textEl, linkSlots]);
    }

    var classes = _utils2.default.classNames(className, 'fab', 'fab-' + position, {
      'fab-morph': morphTo,
      'fab-extended': typeof textEl !== 'undefined'
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id,
        'data-morph-to': morphTo
      }
    }, [linkEl, rootChildren, rootSlots]);
  },


  methods: {
    onClick: function onClick(event) {
      var self = this;
      self.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  watch: {
    'props.tooltip': function watchTooltip(newText) {
      var self = this;
      if (!newText || !self.f7Tooltip) return;
      self.f7Tooltip.setText(newText);
    }
  },

  mounted: function mounted() {
    var self = this;
    var tooltip = self.props.tooltip;

    if (!tooltip) return;
    self.$f7ready(function (f7) {
      self.f7Tooltip = f7.tooltip.create({
        targetEl: self.$refs.el,
        text: tooltip
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.f7Tooltip && self.f7Tooltip.destroy) {
      self.f7Tooltip.destroy();
      self.f7Tooltip = null;
      delete self.f7Tooltip;
    }
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 162 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/gauge.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    id: [String, Number],
    type: {
      type: String,
      default: 'circle'
    },
    value: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 200
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    borderBgColor: {
      type: String,
      default: '#eeeeee'
    },
    borderColor: {
      type: String,
      default: '#000000'
    },
    borderWidth: {
      type: [Number, String],
      default: 10
    },
    valueText: [Number, String],
    valueTextColor: {
      type: String,
      default: '#000000'
    },
    valueFontSize: {
      type: [Number, String],
      default: 31
    },
    valueFontWeight: {
      type: [Number, String],
      default: 500
    },
    labelText: String,
    labelTextColor: {
      type: String,
      default: '#888888'
    },
    labelFontSize: {
      type: [Number, String],
      default: 14
    },
    labelFontWeight: {
      type: [Number, String],
      default: 400
    }
  },
  name: 'f7-gauge',

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        type = props.type,
        value = props.value,
        size = props.size,
        bgColor = props.bgColor,
        borderBgColor = props.borderBgColor,
        borderColor = props.borderColor,
        borderWidth = props.borderWidth,
        valueText = props.valueText,
        valueTextColor = props.valueTextColor,
        valueFontSize = props.valueFontSize,
        valueFontWeight = props.valueFontWeight,
        labelText = props.labelText,
        labelTextColor = props.labelTextColor,
        labelFontSize = props.labelFontSize,
        labelFontWeight = props.labelFontWeight;

    var classes = _utils2.default.classNames(className, 'gauge');
    var semiCircle = type === 'semicircle';
    var radius = size / 2 - borderWidth / 2;
    var length = 2 * Math.PI * radius;
    var progress = Math.max(Math.min(value, 1), 0);
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [_h('svg', {
      class: 'gauge-svg',
      attrs: {
        width: size + 'px',
        height: (semiCircle ? size / 2 : size) + 'px',
        viewBox: '0 0 ' + size + ' ' + (semiCircle ? size / 2 : size)
      }
    }, [semiCircle && _h('path', {
      class: 'gauge-back-semi',
      attrs: {
        d: 'M' + (size - borderWidth / 2) + ',' + size / 2 + ' a1,1 0 0,0 -' + (size - borderWidth) + ',0',
        stroke: borderBgColor,
        'stroke-width': borderWidth,
        fill: bgColor || 'none'
      }
    }), semiCircle && _h('path', {
      class: 'gauge-front-semi',
      attrs: {
        d: 'M' + (size - borderWidth / 2) + ',' + size / 2 + ' a1,1 0 0,0 -' + (size - borderWidth) + ',0',
        stroke: borderColor,
        'stroke-width': borderWidth,
        'stroke-dasharray': length / 2,
        'stroke-dashoffset': length / 2 * (1 + progress),
        fill: borderBgColor ? 'none' : bgColor || 'none'
      }
    }), !semiCircle && borderBgColor && _h('circle', {
      class: 'gauge-back-circle',
      attrs: {
        stroke: borderBgColor,
        'stroke-width': borderWidth,
        fill: bgColor || 'none',
        cx: size / 2,
        cy: size / 2,
        r: radius
      }
    }), !semiCircle && _h('circle', {
      class: 'gauge-front-circle',
      attrs: {
        transform: 'rotate(-90 ' + size / 2 + ' ' + size / 2 + ')',
        stroke: borderColor,
        'stroke-width': borderWidth,
        'stroke-dasharray': length,
        'stroke-dashoffset': length * (1 - progress),
        fill: borderBgColor ? 'none' : bgColor || 'none',
        cx: size / 2,
        cy: size / 2,
        r: radius
      }
    }), valueText && _h('text', {
      class: 'gauge-value-text',
      attrs: {
        x: '50%',
        y: semiCircle ? '100%' : '50%',
        'font-weight': valueFontWeight,
        'font-size': valueFontSize,
        fill: valueTextColor,
        dy: semiCircle ? labelText ? -labelFontSize - 15 : -5 : 0,
        'text-anchor': 'middle',
        'dominant-baseline': !semiCircle ? 'middle' : null
      }
    }, [valueText]), labelText && _h('text', {
      class: 'gauge-label-text',
      attrs: {
        x: '50%',
        y: semiCircle ? '100%' : '50%',
        'font-weight': labelFontWeight,
        'font-size': labelFontSize,
        fill: labelTextColor,
        dy: semiCircle ? -5 : valueText ? valueFontSize / 2 + 10 : 0,
        'text-anchor': 'middle',
        'dominant-baseline': !semiCircle ? 'middle' : null
      }
    }, [labelText])])]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 163 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/label.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-label',
  props: (0, _assign2.default)({
    id: [String, Number],
    floating: Boolean,
    inline: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var inline = props.inline,
        id = props.id,
        style = props.style,
        className = props.className,
        floating = props.floating;

    var classes = _utils2.default.classNames(className, 'item-title', {
      'item-label-inline': inline,
      'item-label': !floating,
      'item-floating-label': floating
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 164 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-button.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentTransformJsxProps = __webpack_require__(/*! ../runtime-helpers/vue-component-transform-jsx-props.js */ 31);

var _vueComponentTransformJsxProps2 = _interopRequireDefault(_vueComponentTransformJsxProps);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-button',
  props: (0, _assign2.default)({
    id: [String, Number],
    noFastclick: Boolean,
    noFastClick: Boolean,
    title: [String, Number],
    text: [String, Number],
    tabLink: [Boolean, String],
    tabLinkActive: Boolean,
    link: [Boolean, String],
    href: [Boolean, String],
    target: String
  }, _mixins2.default.colorProps, _mixins2.default.linkRouterProps, _mixins2.default.linkActionsProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        title = props.title,
        text = props.text;

    return _h('li', {
      style: style,
      class: className,
      attrs: {
        id: id
      }
    }, [_h('a', (0, _vueComponentTransformJsxProps2.default)((0, _assign2.default)({
      class: self.classes
    }, self.attrs, {
      on: {
        click: self.onClick.bind(self)
      }
    })), [this.$slots['default'] || [title || text]])]);
  },


  computed: {
    attrs: function attrs() {
      var self = this;
      var props = self.props;
      var link = props.link,
          href = props.href,
          target = props.target,
          tabLink = props.tabLink;

      return _utils2.default.extend({
        href: typeof link === 'boolean' && typeof href === 'boolean' ? '#' : link || href,
        target: target,
        'data-tab': _utils2.default.isStringProp(tabLink) && tabLink
      }, _mixins2.default.linkRouterAttrs(props), _mixins2.default.linkActionsAttrs(props));
    },
    classes: function classes() {
      var self = this;
      var props = self.props;
      var noFastclick = props.noFastclick,
          noFastClick = props.noFastClick,
          tabLink = props.tabLink,
          tabLinkActive = props.tabLinkActive;

      return _utils2.default.classNames({
        'item-link': true,
        'list-button': true,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'no-fastclick': noFastclick || noFastClick
      }, _mixins2.default.colorClasses(props), _mixins2.default.linkRouterClasses(props), _mixins2.default.linkActionsClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 165 */
/*!**************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-group.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-group',
  props: (0, _assign2.default)({
    id: [String, Number],
    mediaList: Boolean,
    sortable: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        mediaList = props.mediaList,
        sortable = props.sortable;

    var classes = _utils2.default.classNames(className, 'list-group', {
      'media-list': mediaList,
      sortable: sortable
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [_h('ul', [this.$slots['default']])]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 166 */
/*!**************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-index.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-index',
  props: (0, _assign2.default)({
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    listEl: [String, Object],
    indexes: {
      type: [String, Array],
      default: 'auto'
    },
    scrollList: {
      type: Boolean,
      default: true
    },
    label: {
      type: Boolean,
      default: false
    },
    iosItemHeight: {
      type: Number,
      default: 14
    },
    mdItemHeight: {
      type: Number,
      default: 14
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'list-index', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.props.init) return;

    if (this.f7ListIndex && this.f7ListIndex.destroy) {
      this.f7ListIndex.destroy();
    }
  },
  mounted: function mounted() {
    var self = this;
    if (!self.props.init) return;
    self.$f7ready(function (f7) {
      var el = self.$refs.el;
      var _self$props = self.props,
          listEl = _self$props.listEl,
          indexes = _self$props.indexes,
          iosItemHeight = _self$props.iosItemHeight,
          mdItemHeight = _self$props.mdItemHeight,
          scrollList = _self$props.scrollList,
          label = _self$props.label;

      self.f7ListIndex = f7.listIndex.create({
        el: el,
        listEl: listEl,
        indexes: indexes,
        iosItemHeight: iosItemHeight,
        mdItemHeight: mdItemHeight,
        scrollList: scrollList,
        label: label,
        on: {
          select: function select(index, itemContent, itemIndex) {
            self.dispatchEvent('listindex:select listIndexSelect', itemContent, itemIndex);
          }
        }
      });
    });
  },


  watch: {
    'props.indexes': function watchIndexes() {
      if (!this.f7ListIndex) return;
      this.f7ListIndex.params.indexes = this.indexes;
      this.update();
    }
  },
  methods: {
    update: function update() {
      if (!this.f7ListIndex) return;
      this.f7ListIndex.update();
    },
    scrollListToIndex: function scrollListToIndex(indexContent) {
      if (!this.f7ListIndex) return;
      this.f7ListIndex.scrollListToIndex(indexContent);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 167 */
/*!******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-item-cell.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-item-cell',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'item-cell', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 168 */
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-item-row.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-item-row',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'item-row', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 169 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/list-item.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _listItemContent = __webpack_require__(/*! ./list-item-content */ 71);

var _listItemContent2 = _interopRequireDefault(_listItemContent);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentTransformJsxProps = __webpack_require__(/*! ../runtime-helpers/vue-component-transform-jsx-props.js */ 31);

var _vueComponentTransformJsxProps2 = _interopRequireDefault(_vueComponentTransformJsxProps);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list-item',
  props: (0, _assign2.default)({
    id: [String, Number],
    title: [String, Number],
    text: [String, Number],
    media: String,
    subtitle: [String, Number],
    header: [String, Number],
    footer: [String, Number],
    link: [Boolean, String],
    target: String,
    noFastclick: Boolean,
    noFastClick: Boolean,
    after: [String, Number],
    badge: [String, Number],
    badgeColor: String,
    mediaItem: Boolean,
    mediaList: Boolean,
    divider: Boolean,
    groupTitle: Boolean,
    swipeout: Boolean,
    swipeoutOpened: Boolean,
    sortable: Boolean,
    accordionItem: Boolean,
    accordionItemOpened: Boolean,
    smartSelect: Boolean,
    smartSelectParams: Object,
    noChevron: Boolean,
    chevronCenter: Boolean,
    checkbox: Boolean,
    radio: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    name: String,
    value: [String, Number, Array],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    itemInput: Boolean,
    itemInputWithInfo: Boolean,
    inlineLabel: Boolean
  }, _mixins2.default.colorProps, _mixins2.default.linkRouterProps, _mixins2.default.linkActionsProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        isMedia: props.mediaItem || props.mediaList,
        isSortable: props.sortable,
        isSimple: false
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var linkEl = void 0;
    var itemContentEl = void 0;
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className,
        title = props.title,
        text = props.text,
        media = props.media,
        subtitle = props.subtitle,
        header = props.header,
        footer = props.footer,
        link = props.link,
        href = props.href,
        target = props.target,
        noFastclick = props.noFastclick,
        noFastClick = props.noFastClick,
        after = props.after,
        badge = props.badge,
        badgeColor = props.badgeColor,
        mediaItem = props.mediaItem,
        mediaList = props.mediaList,
        divider = props.divider,
        groupTitle = props.groupTitle,
        swipeout = props.swipeout,
        accordionItem = props.accordionItem,
        accordionItemOpened = props.accordionItemOpened,
        smartSelect = props.smartSelect,
        checkbox = props.checkbox,
        radio = props.radio,
        checked = props.checked,
        defaultChecked = props.defaultChecked,
        name = props.name,
        value = props.value,
        readonly = props.readonly,
        required = props.required,
        disabled = props.disabled,
        itemInput = props.itemInput,
        itemInputWithInfo = props.itemInputWithInfo,
        inlineLabel = props.inlineLabel,
        sortable = props.sortable,
        noChevron = props.noChevron,
        chevronCenter = props.chevronCenter;

    var isMedia = mediaItem || mediaList || self.state.isMedia;
    var isSortable = sortable || self.state.isSortable;
    var isSimple = self.state.isSimple;

    if (!isSimple) {
      var needsEvents = !(link || href || accordionItem || smartSelect);
      itemContentEl = _h(_listItemContent2.default, {
        on: needsEvents ? {
          click: self.onClickBound,
          change: self.onChangeBound
        } : undefined,
        attrs: {
          title: title,
          text: text,
          media: media,
          subtitle: subtitle,
          after: after,
          header: header,
          footer: footer,
          badge: badge,
          badgeColor: badgeColor,
          mediaList: isMedia,
          accordionItem: accordionItem,
          checkbox: checkbox,
          checked: checked,
          defaultChecked: defaultChecked,
          radio: radio,
          name: name,
          value: value,
          readonly: readonly,
          required: required,
          disabled: disabled,
          itemInput: itemInput,
          itemInputWithInfo: itemInputWithInfo,
          inlineLabel: inlineLabel
        }
      }, [this.$slots['content-start'], this.$slots['content'], this.$slots['content-end'], this.$slots['media'], this.$slots['inner-start'], this.$slots['inner'], this.$slots['inner-end'], this.$slots['after-start'], this.$slots['after'], this.$slots['after-end'], this.$slots['header'], this.$slots['footer'], this.$slots['before-title'], this.$slots['title'], this.$slots['after-title'], this.$slots['subtitle'], this.$slots['text'], swipeout || accordionItem ? null : self.$slots.default]);

      if (link || href || accordionItem || smartSelect) {
        var linkAttrs = _utils2.default.extend({
          href: link === true || accordionItem || smartSelect ? '#' : link || href,
          target: target
        }, _mixins2.default.linkRouterAttrs(props), _mixins2.default.linkActionsAttrs(props));
        var linkClasses = _utils2.default.classNames({
          'item-link': true,
          'no-fastclick': noFastclick || noFastClick,
          'smart-select': smartSelect
        }, _mixins2.default.linkRouterClasses(props), _mixins2.default.linkActionsClasses(props));
        linkEl = _h('a', (0, _vueComponentTransformJsxProps2.default)((0, _assign2.default)({
          class: linkClasses
        }, linkAttrs, {
          on: {
            click: self.onClick.bind(self)
          }
        })), [itemContentEl]);
      }
    }

    var liClasses = _utils2.default.classNames(className, {
      'item-divider': divider,
      'list-group-title': groupTitle,
      'media-item': isMedia,
      swipeout: swipeout,
      'accordion-item': accordionItem,
      'accordion-item-opened': accordionItemOpened,
      disabled: disabled && !(radio || checkbox),
      'no-chevron': noChevron,
      'chevron-center': chevronCenter
    }, _mixins2.default.colorClasses(props));

    if (divider || groupTitle) {
      return _h('li', {
        ref: 'el',
        style: style,
        class: liClasses,
        attrs: {
          id: id
        }
      }, [_h('span', [this.$slots['default'] || [title]])]);
    }

    if (isSimple) {
      return _h('li', {
        ref: 'el',
        style: style,
        class: liClasses,
        attrs: {
          id: id
        }
      }, [title, this.$slots['default']]);
    }

    var linkItemEl = link || href || smartSelect || accordionItem ? linkEl : itemContentEl;
    return _h('li', {
      ref: 'el',
      style: style,
      class: liClasses,
      attrs: {
        id: id
      }
    }, [this.$slots['root-start'], swipeout ? _h('div', {
      class: 'swipeout-content'
    }, [linkItemEl]) : linkItemEl, isSortable && _h('div', {
      class: 'sortable-handler'
    }), (swipeout || accordionItem) && self.$slots.default, this.$slots['root'], this.$slots['root-end']]);
  },


  watch: {
    'props.swipeoutOpened': function watchSwipeoutOpened(opened) {
      var self = this;
      if (!self.props.swipeout) return;
      var el = self.$refs.el;

      if (opened) {
        self.$f7.swipeout.open(el);
      } else {
        self.$f7.swipeout.close(el);
      }
    }
  },

  created: function created() {
    var self = this;
    self.onClickBound = self.onClick.bind(self);
    self.onChangeBound = self.onChange.bind(self);
    self.onSwipeoutOpenBound = self.onSwipeoutOpen.bind(self);
    self.onSwipeoutOpenedBound = self.onSwipeoutOpened.bind(self);
    self.onSwipeoutCloseBound = self.onSwipeoutClose.bind(self);
    self.onSwipeoutClosedBound = self.onSwipeoutClosed.bind(self);
    self.onSwipeoutDeleteBound = self.onSwipeoutDelete.bind(self);
    self.onSwipeoutDeletedBound = self.onSwipeoutDeleted.bind(self);
    self.onSwipeoutBound = self.onSwipeout.bind(self);
    self.onAccOpenBound = self.onAccOpen.bind(self);
    self.onAccOpenedBound = self.onAccOpened.bind(self);
    self.onAccCloseBound = self.onAccClose.bind(self);
    self.onAccClosedBound = self.onAccClosed.bind(self);
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.$listEl = self.$$(el).parents('.list, .list-group').eq(0);

    if (self.$listEl.length) {
      self.setState({
        isMedia: self.$listEl.hasClass('media-list'),
        isSimple: self.$listEl.hasClass('simple-list'),
        isSortable: self.$listEl.hasClass('sortable')
      });
    }

    var _self$props = self.props,
        swipeout = _self$props.swipeout,
        swipeoutOpened = _self$props.swipeoutOpened,
        accordionItem = _self$props.accordionItem,
        smartSelect = _self$props.smartSelect,
        smartSelectParams = _self$props.smartSelectParams;


    if (swipeout) {
      el.addEventListener('swipeout:open', self.onSwipeoutOpenBound);
      el.addEventListener('swipeout:opened', self.onSwipeoutOpenedBound);
      el.addEventListener('swipeout:close', self.onSwipeoutCloseBound);
      el.addEventListener('swipeout:closed', self.onSwipeoutClosedBound);
      el.addEventListener('swipeout:delete', self.onSwipeoutDeleteBound);
      el.addEventListener('swipeout:deleted', self.onSwipeoutDeletedBound);
      el.addEventListener('swipeout', self.onSwipeoutBound);
    }

    if (accordionItem) {
      el.addEventListener('accordion:open', self.onAccOpenBound);
      el.addEventListener('accordion:opened', self.onAccOpenedBound);
      el.addEventListener('accordion:close', self.onAccCloseBound);
      el.addEventListener('accordion:closed', self.onAccClosedBound);
    }

    self.$f7ready(function (f7) {
      if (smartSelect) {
        var ssParams = _utils2.default.extend({
          el: el.querySelector('a.smart-select')
        }, smartSelectParams || {});
        self.f7SmartSelect = f7.smartSelect.create(ssParams);
      }

      if (swipeoutOpened) {
        f7.swipeout.open(el);
      }
    });
  },
  updated: function updated() {
    var self = this;
    var $listEl = self.$listEl;

    if (!$listEl || $listEl && $listEl.length === 0) return;
    var isMedia = $listEl.hasClass('media-list');
    var isSimple = $listEl.hasClass('simple-list');
    var isSortable = $listEl.hasClass('sortable');

    if (isMedia !== self.state.isMedia) {
      self.setState({
        isMedia: isMedia
      });
    }

    if (isSimple !== self.state.isSimple) {
      self.setState({
        isSimple: isSimple
      });
    }

    if (isSortable !== self.state.isSortable) {
      self.setState({
        isSortable: isSortable
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;
    var _self$props2 = self.props,
        swipeout = _self$props2.swipeout,
        accordionItem = _self$props2.accordionItem,
        smartSelect = _self$props2.smartSelect;


    if (el) {
      if (swipeout) {
        el.removeEventListener('swipeout:open', self.onSwipeoutOpenBound);
        el.removeEventListener('swipeout:opened', self.onSwipeoutOpenedBound);
        el.removeEventListener('swipeout:close', self.onSwipeoutCloseBound);
        el.removeEventListener('swipeout:closed', self.onSwipeoutClosedBound);
        el.removeEventListener('swipeout:delete', self.onSwipeoutDeleteBound);
        el.removeEventListener('swipeout:deleted', self.onSwipeoutDeletedBound);
        el.removeEventListener('swipeout', self.onSwipeoutBound);
      }

      if (accordionItem) {
        el.removeEventListener('accordion:open', self.onAccOpenBound);
        el.removeEventListener('accordion:opened', self.onAccOpenedBound);
        el.removeEventListener('accordion:close', self.onAccCloseBound);
        el.removeEventListener('accordion:closed', self.onAccClosedBound);
      }
    }

    if (smartSelect && self.f7SmartSelect) {
      self.f7SmartSelect.destroy();
    }
  },


  methods: {
    onClick: function onClick(event) {
      var self = this;

      if (event.target.tagName.toLowerCase() !== 'input') {
        self.dispatchEvent('click', event);
      }
    },
    onSwipeoutDeleted: function onSwipeoutDeleted(event) {
      this.dispatchEvent('swipeout:deleted swipeoutDeleted', event);
    },
    onSwipeoutDelete: function onSwipeoutDelete(event) {
      this.dispatchEvent('swipeout:delete swipeoutDelete', event);
    },
    onSwipeoutClose: function onSwipeoutClose(event) {
      this.dispatchEvent('swipeout:close swipeoutClose', event);
    },
    onSwipeoutClosed: function onSwipeoutClosed(event) {
      this.dispatchEvent('swipeout:closed swipeoutClosed', event);
    },
    onSwipeoutOpen: function onSwipeoutOpen(event) {
      this.dispatchEvent('swipeout:open swipeoutOpen', event);
    },
    onSwipeoutOpened: function onSwipeoutOpened(event) {
      this.dispatchEvent('swipeout:opened swipeoutOpened', event);
    },
    onSwipeout: function onSwipeout(event) {
      this.dispatchEvent('swipeout', event);
    },
    onAccClose: function onAccClose(event) {
      this.dispatchEvent('accordion:close accordionClose', event);
    },
    onAccClosed: function onAccClosed(event) {
      this.dispatchEvent('accordion:closed accordionClosed', event);
    },
    onAccOpen: function onAccOpen(event) {
      this.dispatchEvent('accordion:open accordionOpen', event);
    },
    onAccOpened: function onAccOpened(event) {
      this.dispatchEvent('accordion:opened accordionOpened', event);
    },
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    onInput: function onInput(event) {
      this.dispatchEvent('input', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    },
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 170 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/list.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-list',
  props: (0, _assign2.default)({
    id: [String, Number],
    inset: Boolean,
    tabletInset: Boolean,
    mediaList: Boolean,
    sortable: Boolean,
    sortableEnabled: Boolean,
    accordionList: Boolean,
    contactsList: Boolean,
    simpleList: Boolean,
    linksList: Boolean,
    noHairlines: Boolean,
    noHairlinesBetween: Boolean,
    noHairlinesMd: Boolean,
    noHairlinesBetweenMd: Boolean,
    noHairlinesIos: Boolean,
    noHairlinesBetweenIos: Boolean,
    noChevron: Boolean,
    chevronCenter: Boolean,
    tab: Boolean,
    tabActive: Boolean,
    form: Boolean,
    formStoreData: Boolean,
    inlineLabels: Boolean,
    virtualList: Boolean,
    virtualListParams: Object
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        form = props.form;
    var _self$$slots = self.$slots,
        slotsList = _self$$slots.list,
        slotsDefault = _self$$slots.default;

    var rootChildrenBeforeList = [];
    var rootChildrenAfterList = [];
    var ulChildren = slotsList || [];
    var flattenSlots = _utils2.default.flattenArray(slotsDefault);
    var wasUlChild = false;
    flattenSlots.forEach(function (child) {
      if (typeof child === 'undefined') return;
      var tag = void 0;
      {
        tag = child.tag;
      }

      if (!tag && 'vue' === 'react' || tag && !(tag === 'li' || tag === 'F7ListItem' || tag === 'F7ListButton' || tag.indexOf('list-item') >= 0 || tag.indexOf('list-button') >= 0 || tag.indexOf('f7-list-item') >= 0 || tag.indexOf('f7-list-button') >= 0)) {
        if (wasUlChild) rootChildrenAfterList.push(child);else rootChildrenBeforeList.push(child);
      } else if (tag) {
        wasUlChild = true;
        ulChildren.push(child);
      }
    });
    var ListTag = form ? 'form' : 'div';

    if (ulChildren.length > 0) {
      return _h(ListTag, {
        ref: 'el',
        style: style,
        class: self.classes,
        attrs: {
          id: id
        }
      }, [self.$slots['before-list'], rootChildrenBeforeList, _h('ul', [ulChildren]), self.$slots['after-list'], rootChildrenAfterList]);
    } else {
      return _h(ListTag, {
        ref: 'el',
        style: style,
        class: self.classes,
        attrs: {
          id: id
        }
      }, [self.$slots['before-list'], rootChildrenBeforeList, self.$slots['after-list'], rootChildrenAfterList]);
    }
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var inset = props.inset,
          tabletInset = props.tabletInset,
          mediaList = props.mediaList,
          simpleList = props.simpleList,
          linksList = props.linksList,
          sortable = props.sortable,
          accordionList = props.accordionList,
          contactsList = props.contactsList,
          virtualList = props.virtualList,
          sortableEnabled = props.sortableEnabled,
          tab = props.tab,
          tabActive = props.tabActive,
          noHairlines = props.noHairlines,
          noHairlinesIos = props.noHairlinesIos,
          noHairlinesMd = props.noHairlinesMd,
          noHairlinesBetween = props.noHairlinesBetween,
          noHairlinesBetweenIos = props.noHairlinesBetweenIos,
          noHairlinesBetweenMd = props.noHairlinesBetweenMd,
          formStoreData = props.formStoreData,
          inlineLabels = props.inlineLabels,
          className = props.className,
          noChevron = props.noChevron,
          chevronCenter = props.chevronCenter;

      return _utils2.default.classNames(className, 'list', {
        inset: inset,
        'tablet-inset': tabletInset,
        'media-list': mediaList,
        'simple-list': simpleList,
        'links-list': linksList,
        sortable: sortable,
        'accordion-list': accordionList,
        'contacts-list': contactsList,
        'virtual-list': virtualList,
        'sortable-enabled': sortableEnabled,
        tab: tab,
        'tab-active': tabActive,
        'no-hairlines': noHairlines,
        'no-hairlines-between': noHairlinesBetween,
        'no-hairlines-md': noHairlinesMd,
        'no-hairlines-between-md': noHairlinesBetweenMd,
        'no-hairlines-ios': noHairlinesIos,
        'no-hairlines-between-ios': noHairlinesBetweenIos,
        'form-store-data': formStoreData,
        'inline-labels': inlineLabels,
        'no-chevron': noChevron,
        'chevron-center': chevronCenter
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },

  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;

    if (el) {
      el.removeEventListener('sortable:enable', self.onSortableEnableBound);
      el.removeEventListener('sortable:disable', self.onSortableDisableBound);
      el.removeEventListener('sortable:sort', self.onSortableSortBound);
      el.removeEventListener('tab:show', self.onTabShowBound);
      el.removeEventListener('tab:hide', self.onTabHideBound);
    }

    if (!(self.virtualList && self.f7VirtualList)) return;
    if (self.f7VirtualList.destroy) self.f7VirtualList.destroy();
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    var _self$props = self.props,
        virtualList = _self$props.virtualList,
        virtualListParams = _self$props.virtualListParams;


    if (el) {
      self.onSortableEnableBound = self.onSortableEnable.bind(self);
      self.onSortableDisableBound = self.onSortableDisable.bind(self);
      self.onSortableSortBound = self.onSortableSort.bind(self);
      self.onTabShowBound = self.onTabShow.bind(self);
      self.onTabHideBound = self.onTabHide.bind(self);
      el.addEventListener('sortable:enable', self.onSortableEnableBound);
      el.addEventListener('sortable:disable', self.onSortableDisableBound);
      el.addEventListener('sortable:sort', self.onSortableSortBound);
      el.addEventListener('tab:show', self.onTabShowBound);
      el.addEventListener('tab:hide', self.onTabHideBound);
    }

    if (!virtualList) return;
    self.$f7ready(function (f7) {
      var $$ = self.$$;
      var $el = $$(el);
      var templateScript = $el.find('script');
      var template = templateScript.html();

      if (!template && templateScript.length > 0) {
        template = templateScript[0].outerHTML;
        template = /\<script type="text\/template7"\>(.*)<\/script>/.exec(template)[1];
      }

      var vlParams = virtualListParams || {};
      if (!template && !vlParams.renderItem && !vlParams.itemTemplate && !vlParams.renderExternal) return;
      if (template) template = self.$t7.compile(template);
      self.f7VirtualList = f7.virtualList.create(_utils2.default.extend({
        el: el,
        itemTemplate: template,
        on: {
          itemBeforeInsert: function itemBeforeInsert(itemEl, item) {
            var vl = this;
            self.dispatchEvent('virtual:itembeforeinsert virtualItemBeforeInsert', vl, itemEl, item);
          },
          beforeClear: function beforeClear(fragment) {
            var vl = this;
            self.dispatchEvent('virtual:beforeclear virtualBeforeClear', vl, fragment);
          },
          itemsBeforeInsert: function itemsBeforeInsert(fragment) {
            var vl = this;
            self.dispatchEvent('virtual:itemsbeforeinsert virtualItemsBeforeInsert', vl, fragment);
          },
          itemsAfterInsert: function itemsAfterInsert(fragment) {
            var vl = this;
            self.dispatchEvent('virtual:itemsafterinsert virtualItemsAfterInsert', vl, fragment);
          }
        }
      }, vlParams));
    });
  },


  methods: {
    onSortableEnable: function onSortableEnable(event) {
      this.dispatchEvent('sortable:enable sortableEnable', event);
    },
    onSortableDisable: function onSortableDisable(event) {
      this.dispatchEvent('sortable:disable sortableDisable', event);
    },
    onSortableSort: function onSortableSort(event) {
      var sortData = event.detail;
      this.dispatchEvent('sortable:sort sortableSort', event, sortData);
    },
    onTabShow: function onTabShow(event) {
      this.dispatchEvent('tab:show tabShow', event);
    },
    onTabHide: function onTabHide(event) {
      this.dispatchEvent('tab:hide tabHide', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 171 */
/*!**********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/login-screen-title.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-login-screen-title',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'login-screen-title', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 172 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/login-screen.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-login-screen',
  props: (0, _assign2.default)({
    id: [String, Number],
    opened: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'login-screen', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.f7LoginScreen) return;

      if (opened) {
        self.f7LoginScreen.open();
      } else {
        self.f7LoginScreen.close();
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('loginscreen:open', self.onOpenBound);
    el.addEventListener('loginscreen:opened', self.onOpenedBound);
    el.addEventListener('loginscreen:close', self.onCloseBound);
    el.addEventListener('loginscreen:closed', self.onClosedBound);
    self.$f7ready(function () {
      self.f7LoginScreen = self.$f7.loginScreen.create({
        el: el
      });

      if (self.props.opened) {
        self.f7LoginScreen.open(false);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;
    if (self.f7LoginScreen) self.f7LoginScreen.destroy();
    if (!el) return;
    el.removeEventListener('loginscreen:open', self.onOpenBound);
    el.removeEventListener('loginscreen:opened', self.onOpenedBound);
    el.removeEventListener('loginscreen:close', self.onCloseBound);
    el.removeEventListener('loginscreen:closed', self.onClosedBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('loginscreen:open loginScreenOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('loginscreen:opened loginScreenOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('loginscreen:close loginScreenClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('loginscreen:closed loginScreenClosed', event);
    },
    open: function open(animate) {
      var self = this;
      var el = self.$refs.el;
      if (!self.$f7 || !el) return undefined;
      return self.$f7.loginScreen.open(el, animate);
    },
    close: function close(animate) {
      var self = this;
      var el = self.$refs.el;
      if (!self.$f7 || !el) return undefined;
      return self.$f7.loginScreen.close(el, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 173 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/components/message.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-message',
  props: (0, _assign2.default)({
    id: [String, Number],
    text: String,
    name: String,
    avatar: String,
    type: {
      type: String,
      default: 'sent'
    },
    image: String,
    header: String,
    footer: String,
    textHeader: String,
    textFooter: String,
    first: Boolean,
    last: Boolean,
    tail: Boolean,
    sameName: Boolean,
    sameHeader: Boolean,
    sameFooter: Boolean,
    sameAvatar: Boolean,
    typing: Boolean
  }, _mixins2.default.colorProps),

  created: function created() {
    this.onClickBound = this.onClick.bind(this);
    this.onNameClickBound = this.onNameClick.bind(this);
    this.onTextClickBound = this.onTextClick.bind(this);
    this.onAvatarClickBound = this.onAvatarClick.bind(this);
    this.onHeaderClickBound = this.onHeaderClick.bind(this);
    this.onFooterClickBound = this.onFooterClick.bind(this);
    this.onBubbleClickBound = this.onBubbleClick.bind(this);
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var text = props.text,
        name = props.name,
        avatar = props.avatar,
        image = props.image,
        header = props.header,
        footer = props.footer,
        textHeader = props.textHeader,
        textFooter = props.textFooter,
        typing = props.typing,
        id = props.id,
        style = props.style;
    var _self$$slots = self.$slots,
        slotsStart = _self$$slots.start,
        slotsEnd = _self$$slots.end,
        slotsDefault = _self$$slots.default,
        slotsContentStart = _self$$slots['content-start'],
        slotsContentEnd = _self$$slots['content-end'],
        slotsAvatar = _self$$slots.avatar,
        slotsName = _self$$slots.name,
        slotsHeader = _self$$slots.header,
        slotsFooter = _self$$slots.footer,
        slotsImage = _self$$slots.image,
        slotsText = _self$$slots.text,
        slotsTextHeader = _self$$slots['text-header'],
        slotsTextFooter = _self$$slots['text-footer'],
        slotsBubbleStart = _self$$slots['bubble-start'],
        slotsBubbleEnd = _self$$slots['bubble-end'];

    return _h('div', {
      style: style,
      class: self.classes,
      on: {
        click: self.onClickBound
      },
      attrs: {
        id: id
      }
    }, [slotsStart, (avatar || slotsAvatar) && _h('div', {
      class: 'message-avatar',
      style: {
        backgroundImage: avatar && 'url(' + avatar + ')'
      },
      on: {
        click: self.onAvatarClickBound
      }
    }, [slotsAvatar]), _h('div', {
      class: 'message-content'
    }, [slotsContentStart, (slotsName || name) && _h('div', {
      class: 'message-name',
      on: {
        click: self.onNameClickBound
      }
    }, [slotsName || name]), (slotsHeader || header) && _h('div', {
      class: 'message-header',
      on: {
        click: self.onHeaderClickBound
      }
    }, [slotsHeader || header]), _h('div', {
      class: 'message-bubble',
      on: {
        click: self.onBubbleClickBound
      }
    }, [slotsBubbleStart, (slotsImage || image) && _h('div', {
      class: 'message-image'
    }, [slotsImage || _h('img', {
      attrs: {
        src: image
      }
    })]), (slotsTextHeader || textHeader) && _h('div', {
      class: 'message-text-header'
    }, [slotsTextHeader || textHeader]), (slotsText || text || typing) && _h('div', {
      class: 'message-text',
      on: {
        click: self.onTextClickBound
      }
    }, [slotsText || text, typing && _h('div', {
      class: 'message-typing-indicator'
    }, [_h('div'), _h('div'), _h('div')])]), (slotsTextFooter || textFooter) && _h('div', {
      class: 'message-text-footer'
    }, [slotsTextFooter || textFooter]), slotsBubbleEnd, slotsDefault]), (slotsFooter || footer) && _h('div', {
      class: 'message-footer',
      on: {
        click: self.onFooterClickBound
      }
    }, [slotsFooter || footer]), slotsContentEnd]), slotsEnd]);
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var type = props.type,
          typing = props.typing,
          first = props.first,
          last = props.last,
          tail = props.tail,
          sameName = props.sameName,
          sameHeader = props.sameHeader,
          sameFooter = props.sameFooter,
          sameAvatar = props.sameAvatar,
          className = props.className;

      return _utils2.default.classNames(className, 'message', {
        'message-sent': type === 'sent',
        'message-received': type === 'received',
        'message-typing': typing,
        'message-first': first,
        'message-last': last,
        'message-tail': tail,
        'message-same-name': sameName,
        'message-same-header': sameHeader,
        'message-same-footer': sameFooter,
        'message-same-avatar': sameAvatar
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    onNameClick: function onNameClick(event) {
      this.dispatchEvent('click:name clickName', event);
    },
    onTextClick: function onTextClick(event) {
      this.dispatchEvent('click:text clickText', event);
    },
    onAvatarClick: function onAvatarClick(event) {
      this.dispatchEvent('click:avatar clickAvatar', event);
    },
    onHeaderClick: function onHeaderClick(event) {
      this.dispatchEvent('click:header clickHeader', event);
    },
    onFooterClick: function onFooterClick(event) {
      this.dispatchEvent('click:footer clickFooter', event);
    },
    onBubbleClick: function onBubbleClick(event) {
      this.dispatchEvent('click:bubble clickBubble', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 174 */
/*!*************************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar-attachment.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar-attachment',
  props: (0, _assign2.default)({
    id: [String, Number],
    image: String,
    deletable: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  created: function created() {
    this.onClickBound = this.onClick.bind(this);
    this.onDeleteClickBound = this.onDeleteClick.bind(this);
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var deletable = props.deletable,
        image = props.image,
        className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messagebar-attachment', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      on: {
        click: self.onClickBound
      },
      attrs: {
        id: id
      }
    }, [image && _h('img', {
      attrs: {
        src: image
      }
    }), deletable && _h('span', {
      class: 'messagebar-attachment-delete',
      on: {
        click: self.onDeleteClickBound
      }
    }), this.$slots['default']]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('attachment:click attachmentClick', event);
    },
    onDeleteClick: function onDeleteClick(event) {
      this.dispatchEvent('attachment:delete attachmentDelete', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 175 */
/*!**************************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar-attachments.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar-attachments',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messagebar-attachments', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 176 */
/*!**************************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar-sheet-image.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar-sheet-image',
  props: (0, _assign2.default)({
    id: [String, Number],
    image: String,
    checked: Boolean
  }, _mixins2.default.colorProps),

  created: function created() {
    this.onChangeBound = this.onChange.bind(this);
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var image = props.image,
        checked = props.checked,
        id = props.id,
        className = props.className,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messagebar-sheet-image', 'checkbox', _mixins2.default.colorClasses(props));
    var styles = _utils2.default.extend({
      backgroundImage: image && 'url(' + image + ')'
    }, style || {});
    var inputEl = void 0;
    {
      inputEl = _h('input', {
        domProps: {
          checked: checked
        },
        on: {
          change: self.onChangeBound
        },
        attrs: {
          type: 'checkbox'
        }
      });
    }
    return _h('label', {
      class: classes,
      style: styles,
      attrs: {
        id: id
      }
    }, [inputEl, _h('i', {
      class: 'icon icon-checkbox'
    }), this.$slots['default']]);
  },


  methods: {
    onChange: function onChange(event) {
      if (this.props.checked) this.dispatchEvent('checked', event);else this.dispatchEvent('unchecked', event);
      this.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 177 */
/*!*************************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar-sheet-item.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar-sheet-item',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messagebar-sheet-item', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 178 */
/*!********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar-sheet.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar-sheet',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messagebar-sheet', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 179 */
/*!**************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messagebar.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _input = __webpack_require__(/*! ./input */ 68);

var _input2 = _interopRequireDefault(_input);

var _link = __webpack_require__(/*! ./link */ 49);

var _link2 = _interopRequireDefault(_link);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messagebar',
  props: (0, _assign2.default)({
    id: [String, Number],
    sheetVisible: Boolean,
    attachmentsVisible: Boolean,
    top: Boolean,
    resizable: {
      type: Boolean,
      default: true
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    topOffset: {
      type: Number,
      default: 0
    },
    maxHeight: Number,
    resizePage: Boolean,
    sendLink: String,
    value: [String, Number, Array],
    disabled: Boolean,
    readonly: Boolean,
    name: String,
    placeholder: {
      type: String,
      default: 'Message'
    },
    init: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  created: function created() {
    this.onChangeBound = this.onChange.bind(this);
    this.onInputBound = this.onInput.bind(this);
    this.onFocusBound = this.onFocus.bind(this);
    this.onBlurBound = this.onBlur.bind(this);
    this.onClickBound = this.onClick.bind(this);
    this.onDeleteAttachmentBound = this.onDeleteAttachment.bind(this);
    this.onClickAttachmentBound = this.onClickAttachment.bind(this);
    this.onResizePageBound = this.onResizePage.bind(this);
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var _self$props = self.props,
        placeholder = _self$props.placeholder,
        disabled = _self$props.disabled,
        name = _self$props.name,
        readonly = _self$props.readonly,
        resizable = _self$props.resizable,
        value = _self$props.value,
        sendLink = _self$props.sendLink,
        id = _self$props.id,
        style = _self$props.style;
    var _self$$slots = self.$slots,
        slotsDefault = _self$$slots.default,
        slotsBeforeInner = _self$$slots['before-inner'],
        slotsAfterInner = _self$$slots['after-inner'],
        slotsSendLink = _self$$slots['send-link'],
        slotsInnerStart = _self$$slots['inner-start'],
        slotsInnerEnd = _self$$slots['inner-end'],
        slotsBeforeArea = _self$$slots['before-area'],
        slotsAfterArea = _self$$slots['after-area'];

    var innerEndEls = [];
    var messagebarAttachmentsEl = void 0;
    var messagebarSheetEl = void 0;

    if (slotsDefault) {
      slotsDefault.forEach(function (child) {
        if (typeof child === 'undefined') return;
        var tag = void 0;
        tag = child.tag;

        if (tag && (tag.indexOf('messagebar-attachments') >= 0 || tag === 'F7MessagebarAttachments' || tag === 'f7-messagebar-attachments')) {
          messagebarAttachmentsEl = child;
        } else if (tag && (tag.indexOf('messagebar-sheet') >= 0 || tag === 'F7MessagebarSheet' || tag === 'f7-messagebar-sheet')) {
          messagebarSheetEl = child;
        } else {
          innerEndEls.push(child);
        }
      });
    }

    return _h('div', {
      ref: 'el',
      style: style,
      class: self.classes,
      attrs: {
        id: id
      }
    }, [slotsBeforeInner, _h('div', {
      class: 'toolbar-inner'
    }, [slotsInnerStart, _h('div', {
      class: 'messagebar-area'
    }, [slotsBeforeArea, messagebarAttachmentsEl, _h(_input2.default, {
      ref: 'area',
      on: {
        input: self.onInputBound,
        change: self.onChangeBound,
        focus: self.onFocusBound,
        blur: self.onBlurBound
      },
      attrs: {
        type: 'textarea',
        wrap: false,
        placeholder: placeholder,
        disabled: disabled,
        name: name,
        readonly: readonly,
        resizable: resizable,
        value: value
      }
    }), slotsAfterArea]), (sendLink && sendLink.length > 0 || slotsSendLink) && _h(_link2.default, {
      on: {
        click: self.onClickBound
      }
    }, [slotsSendLink || sendLink]), slotsInnerEnd, innerEndEls]), slotsAfterInner, messagebarSheetEl]);
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var className = props.className,
          attachmentsVisible = props.attachmentsVisible,
          sheetVisible = props.sheetVisible;

      return _utils2.default.classNames(className, 'toolbar', 'messagebar', {
        'messagebar-attachments-visible': attachmentsVisible,
        'messagebar-sheet-visible': sheetVisible
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  watch: {
    'props.sheetVisible': function watchSheetVisible() {
      var self = this;
      if (!self.props.resizable || !self.f7Messagebar) return;
      self.updateSheetVisible = true;
    },
    'props.attachmentsVisible': function watchAttachmentsVisible() {
      var self = this;
      if (!self.props.resizable || !self.f7Messagebar) return;
      self.updateAttachmentsVisible = true;
    }
  },

  mounted: function mounted() {
    var self = this;
    var _self$props2 = self.props,
        init = _self$props2.init,
        top = _self$props2.top,
        resizePage = _self$props2.resizePage,
        bottomOffset = _self$props2.bottomOffset,
        topOffset = _self$props2.topOffset,
        maxHeight = _self$props2.maxHeight;

    if (!init) return;
    var el = self.$refs.el;
    if (!el) return;
    el.addEventListener('messagebar:attachmentdelete', self.onDeleteAttachmentBound);
    el.addEventListener('messagebar:attachmentclick', self.onClickAttachmentBound);
    el.addEventListener('messagebar:resizepage', self.onResizePageBound);
    var params = _utils2.default.noUndefinedProps({
      el: el,
      top: top,
      resizePage: resizePage,
      bottomOffset: bottomOffset,
      topOffset: topOffset,
      maxHeight: maxHeight
    });
    self.$f7ready(function () {
      self.f7Messagebar = self.$f7.messagebar.create(params);
    });
  },
  updated: function updated() {
    var self = this;
    if (!self.f7Messagebar) return;
    var _self$props3 = self.props,
        sheetVisible = _self$props3.sheetVisible,
        attachmentsVisible = _self$props3.attachmentsVisible;


    if (self.updateSheetVisible) {
      self.updateSheetVisible = false;
      self.f7Messagebar.sheetVisible = sheetVisible;
      self.f7Messagebar.resizePage();
    }

    if (self.updateAttachmentsVisible) {
      self.updateAttachmentsVisible = false;
      self.f7Messagebar.attachmentsVisible = attachmentsVisible;
      self.f7Messagebar.resizePage();
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Messagebar && self.f7Messagebar.destroy) self.f7Messagebar.destroy();
    var el = self.$refs.el;
    if (!el) return;
    el.removeEventListener('messagebar:attachmentdelete', self.onDeleteAttachmentBound);
    el.removeEventListener('messagebar:attachmentclick', self.onClickAttachmentBound);
    el.removeEventListener('messagebar:resizepage', self.onResizePageBound);
  },


  methods: {
    clear: function clear() {
      var _f7Messagebar;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar = this.f7Messagebar).clear.apply(_f7Messagebar, arguments);
    },
    getValue: function getValue() {
      var _f7Messagebar2;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar2 = this.f7Messagebar).getValue.apply(_f7Messagebar2, arguments);
    },
    setValue: function setValue() {
      var _f7Messagebar3;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar3 = this.f7Messagebar).setValue.apply(_f7Messagebar3, arguments);
    },
    setPlaceholder: function setPlaceholder() {
      var _f7Messagebar4;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar4 = this.f7Messagebar).setPlaceholder.apply(_f7Messagebar4, arguments);
    },
    resize: function resize() {
      var _f7Messagebar5;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar5 = this.f7Messagebar).resizePage.apply(_f7Messagebar5, arguments);
    },
    focus: function focus() {
      var _f7Messagebar6;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar6 = this.f7Messagebar).focus.apply(_f7Messagebar6, arguments);
    },
    blur: function blur() {
      var _f7Messagebar7;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar7 = this.f7Messagebar).blur.apply(_f7Messagebar7, arguments);
    },
    attachmentsShow: function attachmentsShow() {
      var _f7Messagebar8;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar8 = this.f7Messagebar).attachmentsShow.apply(_f7Messagebar8, arguments);
    },
    attachmentsHide: function attachmentsHide() {
      var _f7Messagebar9;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar9 = this.f7Messagebar).attachmentsHide.apply(_f7Messagebar9, arguments);
    },
    attachmentsToggle: function attachmentsToggle() {
      var _f7Messagebar10;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar10 = this.f7Messagebar).attachmentsToggle.apply(_f7Messagebar10, arguments);
    },
    sheetShow: function sheetShow() {
      var _f7Messagebar11;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar11 = this.f7Messagebar).sheetShow.apply(_f7Messagebar11, arguments);
    },
    sheetHide: function sheetHide() {
      var _f7Messagebar12;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar12 = this.f7Messagebar).sheetHide.apply(_f7Messagebar12, arguments);
    },
    sheetToggle: function sheetToggle() {
      var _f7Messagebar13;

      if (!this.f7Messagebar) return undefined;
      return (_f7Messagebar13 = this.f7Messagebar).sheetToggle.apply(_f7Messagebar13, arguments);
    },
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    onInput: function onInput(event) {
      this.dispatchEvent('input', event);
    },
    onFocus: function onFocus(event) {
      this.dispatchEvent('focus', event);
    },
    onBlur: function onBlur(event) {
      this.dispatchEvent('blur', event);
    },
    onClick: function onClick(event) {
      var self = this;
      var value = void 0;
      {
        value = self.$refs.area.$refs.inputEl.value;
      }
      var clear = self.f7Messagebar ? function () {
        self.f7Messagebar.clear();
      } : function () {};
      this.dispatchEvent('submit', value, clear);
      this.dispatchEvent('send', value, clear);
      this.dispatchEvent('click', event);
    },
    onDeleteAttachment: function onDeleteAttachment(event) {
      this.dispatchEvent('messagebar:attachmentdelete messagebarAttachmentDelete', event);
    },
    onClickAttachment: function onClickAttachment(event) {
      this.dispatchEvent('messagebar:attachmentclick messagebarAttachmentClick', event);
    },
    onResizePage: function onResizePage(event) {
      this.dispatchEvent('messagebar:resizepage messagebarResizePage', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 180 */
/*!******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messages-title.js ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messages-title',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'messages-title', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 181 */
/*!************************************************************!*\
  !*** ./node_modules/framework7-vue/components/messages.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-messages',
  props: (0, _assign2.default)({
    id: [String, Number],
    autoLayout: {
      type: Boolean,
      default: false
    },
    messages: {
      type: Array,

      default: function _default() {
        return [];
      }
    },
    newMessagesFirst: {
      type: Boolean,
      default: false
    },
    scrollMessages: {
      type: Boolean,
      default: true
    },
    scrollMessagesOnEdge: {
      type: Boolean,
      default: true
    },
    firstMessageRule: Function,
    lastMessageRule: Function,
    tailMessageRule: Function,
    sameNameMessageRule: Function,
    sameHeaderMessageRule: Function,
    sameFooterMessageRule: Function,
    sameAvatarMessageRule: Function,
    customClassMessageRule: Function,
    renderMessage: Function,
    init: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className;

    var classes = _utils2.default.classNames(className, 'messages', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },
  beforeUpdate: function beforeUpdate() {
    var self = this;
    if (!self.props.init) return;
    var el = self.$refs.el;
    if (!el) return;
    var children = el.children;
    if (!children) return;

    for (var i = 0; i < children.length; i += 1) {
      children[i].classList.add('message-appeared');
    }
  },
  updated: function updated() {
    var self = this;
    var _self$props = self.props,
        init = _self$props.init,
        autoLayout = _self$props.autoLayout,
        scrollMessages = _self$props.scrollMessages;

    if (!init) return;
    var el = self.$refs.el;
    if (!el) return;
    var children = el.children;
    if (!children) return;

    for (var i = 0; i < children.length; i += 1) {
      if (!children[i].classList.contains('message-appeared')) {
        children[i].classList.add('message-appear-from-bottom');
      }
    }

    if (self.f7Messages && self.f7Messages.layout && autoLayout) {
      self.f7Messages.layout();
    }

    if (self.f7Messages && self.f7Messages.scroll && scrollMessages) {
      self.f7Messages.scroll();
    }
  },
  mounted: function mounted() {
    var self = this;
    var _self$props2 = self.props,
        init = _self$props2.init,
        autoLayout = _self$props2.autoLayout,
        messages = _self$props2.messages,
        newMessagesFirst = _self$props2.newMessagesFirst,
        scrollMessages = _self$props2.scrollMessages,
        scrollMessagesOnEdge = _self$props2.scrollMessagesOnEdge,
        firstMessageRule = _self$props2.firstMessageRule,
        lastMessageRule = _self$props2.lastMessageRule,
        tailMessageRule = _self$props2.tailMessageRule,
        sameNameMessageRule = _self$props2.sameNameMessageRule,
        sameHeaderMessageRule = _self$props2.sameHeaderMessageRule,
        sameFooterMessageRule = _self$props2.sameFooterMessageRule,
        sameAvatarMessageRule = _self$props2.sameAvatarMessageRule,
        customClassMessageRule = _self$props2.customClassMessageRule,
        renderMessage = _self$props2.renderMessage;

    if (!init) return;
    self.$f7ready(function (f7) {
      self.f7Messages = f7.messages.create(_utils2.default.noUndefinedProps({
        el: self.$refs.el,
        autoLayout: autoLayout,
        messages: messages,
        newMessagesFirst: newMessagesFirst,
        scrollMessages: scrollMessages,
        scrollMessagesOnEdge: scrollMessagesOnEdge,
        firstMessageRule: firstMessageRule,
        lastMessageRule: lastMessageRule,
        tailMessageRule: tailMessageRule,
        sameNameMessageRule: sameNameMessageRule,
        sameHeaderMessageRule: sameHeaderMessageRule,
        sameFooterMessageRule: sameFooterMessageRule,
        sameAvatarMessageRule: sameAvatarMessageRule,
        customClassMessageRule: customClassMessageRule,
        renderMessage: renderMessage
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.f7Messages && this.f7Messages.destroy) this.f7Messages.destroy();
  },


  methods: {
    renderMessages: function renderMessages(messagesToRender, method) {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.renderMessages(messagesToRender, method);
    },
    layout: function layout() {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.layout();
    },
    scroll: function scroll(duration, scrollTop) {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.scroll(duration, scrollTop);
    },
    clear: function clear() {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.clear();
    },
    removeMessage: function removeMessage(messageToRemove, layout) {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.removeMessage(messageToRemove, layout);
    },
    removeMessages: function removeMessages(messagesToRemove, layout) {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.removeMessages(messagesToRemove, layout);
    },
    addMessage: function addMessage() {
      var _f7Messages;

      if (!this.f7Messages) return undefined;
      return (_f7Messages = this.f7Messages).addMessage.apply(_f7Messages, arguments);
    },
    addMessages: function addMessages() {
      var _f7Messages2;

      if (!this.f7Messages) return undefined;
      return (_f7Messages2 = this.f7Messages).addMessages.apply(_f7Messages2, arguments);
    },
    showTyping: function showTyping(message) {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.showTyping(message);
    },
    hideTyping: function hideTyping() {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.hideTyping();
    },
    destroy: function destroy() {
      if (!this.f7Messages) return undefined;
      return this.f7Messages.destroy();
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 182 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/nav-right.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-nav-right',
  props: (0, _assign2.default)({
    id: [String, Number],
    sliding: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        sliding = props.sliding;

    var classes = _utils2.default.classNames(className, 'right', {
      sliding: sliding
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 183 */
/*!**********************************************************!*\
  !*** ./node_modules/framework7-vue/components/navbar.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _navLeft = __webpack_require__(/*! ./nav-left */ 72);

var _navLeft2 = _interopRequireDefault(_navLeft);

var _navTitle = __webpack_require__(/*! ./nav-title */ 73);

var _navTitle2 = _interopRequireDefault(_navTitle);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-navbar',
  props: (0, _assign2.default)({
    id: [String, Number],
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkForce: Boolean,
    sliding: {
      type: Boolean,
      default: true
    },
    title: String,
    subtitle: String,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    inner: {
      type: Boolean,
      default: true
    },
    innerClass: String,
    innerClassName: String
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var backLink = props.backLink,
        backLinkUrl = props.backLinkUrl,
        backLinkForce = props.backLinkForce,
        sliding = props.sliding,
        title = props.title,
        subtitle = props.subtitle,
        inner = props.inner,
        innerClass = props.innerClass,
        innerClassName = props.innerClassName,
        className = props.className,
        id = props.id,
        style = props.style,
        hidden = props.hidden,
        noShadow = props.noShadow,
        noHairline = props.noHairline;

    var innerEl = void 0;
    var leftEl = void 0;
    var titleEl = void 0;

    if (inner) {
      if (backLink) {
        leftEl = _h(_navLeft2.default, {
          on: {
            backClick: self.onBackClick.bind(self)
          },
          attrs: {
            backLink: backLink,
            backLinkUrl: backLinkUrl,
            backLinkForce: backLinkForce
          }
        });
      }

      if (title || subtitle) {
        titleEl = _h(_navTitle2.default, {
          attrs: {
            title: title,
            subtitle: subtitle
          }
        });
      }

      innerEl = _h('div', {
        ref: 'inner',
        class: _utils2.default.classNames('navbar-inner', innerClass, innerClassName, {
          sliding: sliding
        })
      }, [leftEl, titleEl, this.$slots['default']]);
    }

    var classes = _utils2.default.classNames(className, 'navbar', {
      'navbar-hidden': hidden,
      'no-shadow': noShadow,
      'no-hairline': noHairline
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['before-inner'], innerEl, this.$slots['after-inner']]);
  },
  updated: function updated() {
    var self = this;
    if (!self.$f7) return;
    var el = self.$refs.el;

    if (el && el.children && el.children.length) {
      self.$f7.navbar.size(el);
    } else if (self.$refs.inner) {
      self.$f7.navbar.size(self.$refs.inner);
    }
  },


  methods: {
    hide: function hide(animate) {
      var self = this;
      if (!self.$f7) return;
      self.$f7.navbar.hide(self.$refs.el, animate);
    },
    show: function show(animate) {
      var self = this;
      if (!self.$f7) return;
      self.$f7.navbar.show(self.$refs.el, animate);
    },
    size: function size() {
      var self = this;
      if (!self.$f7) return;
      self.$f7.navbar.size(self.$refs.el);
    },
    onBackClick: function onBackClick(event) {
      this.dispatchEvent('back-click backClick click:back clickBack', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 184 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/page.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _pageContent = __webpack_require__(/*! ./page-content */ 74);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-page',
  props: (0, _assign2.default)({
    id: [String, Number],
    name: String,
    stacked: Boolean,
    withSubnavbar: Boolean,
    subnavbar: Boolean,
    noNavbar: Boolean,
    noToolbar: Boolean,
    tabs: Boolean,
    pageContent: {
      type: Boolean,
      default: true
    },
    noSwipeback: Boolean,
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true
    },
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
    messagesContent: Boolean,
    loginScreen: Boolean
  }, _mixins2.default.colorProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        hasSubnavbar: false
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        name = props.name,
        pageContent = props.pageContent,
        messagesContent = props.messagesContent,
        ptr = props.ptr,
        ptrDistance = props.ptrDistance,
        ptrPreloader = props.ptrPreloader,
        infinite = props.infinite,
        infiniteDistance = props.infiniteDistance,
        infinitePreloader = props.infinitePreloader,
        infiniteTop = props.infiniteTop,
        hideBarsOnScroll = props.hideBarsOnScroll,
        hideNavbarOnScroll = props.hideNavbarOnScroll,
        hideToolbarOnScroll = props.hideToolbarOnScroll,
        loginScreen = props.loginScreen,
        className = props.className,
        stacked = props.stacked,
        tabs = props.tabs,
        subnavbar = props.subnavbar,
        withSubnavbar = props.withSubnavbar,
        noNavbar = props.noNavbar,
        noToolbar = props.noToolbar,
        noSwipeback = props.noSwipeback;

    var fixedList = [];
    var staticList = [];
    var needsPageContent = pageContent;
    var _self$$slots = self.$slots,
        slotsStatic = _self$$slots.static,
        slotsFixed = _self$$slots.fixed,
        slotsDefault = _self$$slots.default;

    var fixedTags = void 0;
    fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index'.split(' ');
    var hasSubnavbar = void 0;
    var hasMessages = void 0;
    hasMessages = self.$options.propsData.messagesContent;

    if (slotsDefault) {
      slotsDefault.forEach(function (child) {
        if (typeof child === 'undefined') return;
        var isFixedTag = false;
        {
          var tag = child.tag;

          if (!tag) {
            if (needsPageContent) staticList.push(child);
            return;
          }

          if (tag.indexOf('subnavbar') >= 0) hasSubnavbar = true;
          if (typeof hasMessages === 'undefined' && tag.indexOf('messages') >= 0) hasMessages = true;

          for (var j = 0; j < fixedTags.length; j += 1) {
            if (tag.indexOf(fixedTags[j]) >= 0) {
              isFixedTag = true;
            }
          }
        }

        if (needsPageContent) {
          if (isFixedTag) fixedList.push(child);else staticList.push(child);
        }
      });
    }

    var classes = _utils2.default.classNames(className, 'page', {
      stacked: stacked,
      tabs: tabs,
      'page-with-subnavbar': subnavbar || withSubnavbar || hasSubnavbar,
      'no-navbar': noNavbar,
      'no-toolbar': noToolbar,
      'no-swipeback': noSwipeback
    }, _mixins2.default.colorClasses(props));

    if (!needsPageContent) {
      return _h('div', {
        ref: 'el',
        style: style,
        class: classes,
        attrs: {
          id: id,
          'data-name': name
        }
      }, [slotsFixed, slotsStatic, slotsDefault]);
    }

    var pageContentEl = _h(_pageContent2.default, {
      attrs: {
        ptr: ptr,
        ptrDistance: ptrDistance,
        ptrPreloader: ptrPreloader,
        infinite: infinite,
        infiniteTop: infiniteTop,
        infiniteDistance: infiniteDistance,
        infinitePreloader: infinitePreloader,
        hideBarsOnScroll: hideBarsOnScroll,
        hideNavbarOnScroll: hideNavbarOnScroll,
        hideToolbarOnScroll: hideToolbarOnScroll,
        messagesContent: messagesContent || hasMessages,
        loginScreen: loginScreen
      }
    }, [slotsStatic, staticList]);

    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id,
        'data-name': name
      }
    }, [fixedList, slotsFixed, pageContentEl]);
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    var _self$props = self.props,
        ptr = _self$props.ptr,
        infinite = _self$props.infinite;

    self.onPtrPullStart = self.onPtrPullStart.bind(self);
    self.onPtrPullMove = self.onPtrPullMove.bind(self);
    self.onPtrPullEnd = self.onPtrPullEnd.bind(self);
    self.onPtrRefresh = self.onPtrRefresh.bind(self);
    self.onPtrDone = self.onPtrDone.bind(self);
    self.onInfinite = self.onInfinite.bind(self);
    self.onPageMounted = self.onPageMounted.bind(self);
    self.onPageInit = self.onPageInit.bind(self);
    self.onPageReinit = self.onPageReinit.bind(self);
    self.onPageBeforeIn = self.onPageBeforeIn.bind(self);
    self.onPageBeforeOut = self.onPageBeforeOut.bind(self);
    self.onPageAfterOut = self.onPageAfterOut.bind(self);
    self.onPageAfterIn = self.onPageAfterIn.bind(self);
    self.onPageBeforeRemove = self.onPageBeforeRemove.bind(self);

    if (ptr) {
      el.addEventListener('ptr:pullstart', self.onPtrPullStart);
      el.addEventListener('ptr:pullmove', self.onPtrPullMove);
      el.addEventListener('ptr:pullend', self.onPtrPullEnd);
      el.addEventListener('ptr:refresh', self.onPtrRefresh);
      el.addEventListener('ptr:done', self.onPtrDone);
    }

    if (infinite) {
      el.addEventListener('infinite', self.onInfinite);
    }

    el.addEventListener('page:mounted', self.onPageMounted);
    el.addEventListener('page:init', self.onPageInit);
    el.addEventListener('page:reinit', self.onPageReinit);
    el.addEventListener('page:beforein', self.onPageBeforeIn);
    el.addEventListener('page:beforeout', self.onPageBeforeOut);
    el.addEventListener('page:afterout', self.onPageAfterOut);
    el.addEventListener('page:afterin', self.onPageAfterIn);
    el.addEventListener('page:beforeremove', self.onPageBeforeRemove);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;
    el.removeEventListener('ptr:pullstart', self.onPtrPullStart);
    el.removeEventListener('ptr:pullmove', self.onPtrPullMove);
    el.removeEventListener('ptr:pullend', self.onPtrPullEnd);
    el.removeEventListener('ptr:refresh', self.onPtrRefresh);
    el.removeEventListener('ptr:done', self.onPtrDone);
    el.removeEventListener('infinite', self.onInfinite);
    el.removeEventListener('page:mounted', self.onPageMounted);
    el.removeEventListener('page:init', self.onPageInit);
    el.removeEventListener('page:reinit', self.onPageReinit);
    el.removeEventListener('page:beforein', self.onPageBeforeIn);
    el.removeEventListener('page:beforeout', self.onPageBeforeOut);
    el.removeEventListener('page:afterout', self.onPageAfterOut);
    el.removeEventListener('page:afterin', self.onPageAfterIn);
    el.removeEventListener('page:beforeremove', self.onPageBeforeRemove);
  },


  methods: {
    onPtrPullStart: function onPtrPullStart(event) {
      this.dispatchEvent('ptr:pullstart ptrPullStart', event);
    },
    onPtrPullMove: function onPtrPullMove(event) {
      this.dispatchEvent('ptr:pullmove ptrPullMove', event);
    },
    onPtrPullEnd: function onPtrPullEnd(event) {
      this.dispatchEvent('ptr:pullend ptrPullEnd', event);
    },
    onPtrRefresh: function onPtrRefresh(event) {
      var done = event.detail;
      this.dispatchEvent('ptr:refresh ptrRefresh', event, done);
    },
    onPtrDone: function onPtrDone(event) {
      this.dispatchEvent('ptr:done ptrDone', event);
    },
    onInfinite: function onInfinite(event) {
      this.dispatchEvent('infinite', event);
    },
    onPageMounted: function onPageMounted(event) {
      var page = event.detail;
      this.dispatchEvent('page:mounted pageMounted', event, page);
    },
    onPageInit: function onPageInit(event) {
      var page = event.detail;
      this.dispatchEvent('page:init pageInit', event, page);
    },
    onPageReinit: function onPageReinit(event) {
      var page = event.detail;
      this.dispatchEvent('page:reinit pageReinit', event, page);
    },
    onPageBeforeIn: function onPageBeforeIn(event) {
      var page = event.detail;
      this.dispatchEvent('page:beforein pageBeforeIn', event, page);
    },
    onPageBeforeOut: function onPageBeforeOut(event) {
      var page = event.detail;
      this.dispatchEvent('page:beforeout pageBeforeOut', event, page);
    },
    onPageAfterOut: function onPageAfterOut(event) {
      var page = event.detail;
      this.dispatchEvent('page:afterout pageAfterOut', event, page);
    },
    onPageAfterIn: function onPageAfterIn(event) {
      var page = event.detail;
      this.dispatchEvent('page:afterin pageAfterIn', event, page);
    },
    onPageBeforeRemove: function onPageBeforeRemove(event) {
      var page = event.detail;
      this.dispatchEvent('page:beforeremove pageBeforeRemove', event, page);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 185 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/panel.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ 46);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-panel',
  props: (0, _assign2.default)({
    id: [String, Number],
    side: String,
    effect: String,
    cover: Boolean,
    reveal: Boolean,
    left: Boolean,
    right: Boolean,
    opened: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var id = props.id,
        style = props.style;

    return _h('div', {
      ref: 'el',
      style: style,
      class: this.classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    classes: function classes() {
      var _Utils$classNames;

      var self = this;
      var props = self.props;
      var left = props.left,
          reveal = props.reveal,
          className = props.className,
          opened = props.opened;
      var side = props.side,
          effect = props.effect;

      side = side || (left ? 'left' : 'right');
      effect = effect || (reveal ? 'reveal' : 'cover');
      return _utils2.default.classNames(className, 'panel', (_Utils$classNames = {
        'panel-active': opened
      }, (0, _defineProperty3.default)(_Utils$classNames, 'panel-' + side, side), (0, _defineProperty3.default)(_Utils$classNames, 'panel-' + effect, effect), _Utils$classNames), _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },
  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.$f7) return;
      var side = self.props.side || (self.props.left ? 'left' : 'right');

      if (opened) {
        self.$f7.panel.open(side);
      } else {
        self.$f7.panel.open(side);
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    var _self$props = self.props,
        side = _self$props.side,
        effect = _self$props.effect,
        opened = _self$props.opened,
        left = _self$props.left,
        reveal = _self$props.reveal;

    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    self.onBackdropClickBound = self.onBackdropClick.bind(self);
    self.onPanelSwipeBound = self.onPanelSwipe.bind(self);
    self.onPanelSwipeOpenBound = self.onPanelSwipeOpen.bind(self);
    self.onBreakpointBound = self.onBreakpoint.bind(self);

    if (el) {
      el.addEventListener('panel:open', self.onOpenBound);
      el.addEventListener('panel:opened', self.onOpenedBound);
      el.addEventListener('panel:close', self.onCloseBound);
      el.addEventListener('panel:closed', self.onClosedBound);
      el.addEventListener('panel:backdrop-click', self.onBackdropClickBound);
      el.addEventListener('panel:swipe', self.onPanelSwipeBound);
      el.addEventListener('panel:swipeopen', self.onPanelSwipeOpenBound);
      el.addEventListener('panel:breakpoint', self.onBreakpointBound);
    }

    self.$f7ready(function () {
      var $ = self.$$;
      if (!$) return;

      if ($('.panel-backdrop').length === 0) {
        $('<div class="panel-backdrop"></div>').insertBefore(el);
      }

      self.f7Panel = self.$f7.panel.create({
        el: el
      });
    });

    if (opened) {
      el.style.display = 'block';
    }

    var $ = self.$$;
    if (!$) return;
    var panelSide = side || (left ? 'left' : 'right');
    var panelEffect = effect || (reveal ? 'reveal' : 'cover');

    if (opened) {
      $('html').addClass('with-panel-' + panelSide + '-' + panelEffect);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Panel) self.f7Panel.destroy();
    var el = self.$refs.el;
    if (!el) return;
    el.removeEventListener('panel:open', self.onOpenBound);
    el.removeEventListener('panel:opened', self.onOpenedBound);
    el.removeEventListener('panel:close', self.onCloseBound);
    el.removeEventListener('panel:closed', self.onClosedBound);
    el.removeEventListener('panel:backdrop-click', self.onBackdropClickBound);
    el.removeEventListener('panel:swipe', self.onPanelSwipeBound);
    el.removeEventListener('panel:swipeopen', self.onPanelSwipeOpenBound);
    el.removeEventListener('panel:breakpoint', self.onBreakpointBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('panel:open panelOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('panel:opened panelOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('panel:close panelClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('panel:closed panelClosed', event);
    },
    onBackdropClick: function onBackdropClick(event) {
      this.dispatchEvent('panel:backdrop-click panelBackdropClick', event);
    },
    onPanelSwipe: function onPanelSwipe(event) {
      this.dispatchEvent('panel:swipe panelSwipe', event);
    },
    onPanelSwipeOpen: function onPanelSwipeOpen(event) {
      this.dispatchEvent('panel:swipeopen panelSwipeOpen', event);
    },
    onBreakpoint: function onBreakpoint(event) {
      this.dispatchEvent('panel:breakpoint panelBreakpoint', event);
    },
    open: function open(animate) {
      var self = this;
      if (!self.$f7) return;
      var side = self.props.side || (self.props.left ? 'left' : 'right');
      self.$f7.panel.open(side, animate);
    },
    close: function close(animate) {
      var self = this;
      if (!self.$f7) return;
      var side = self.props.side || (self.props.left ? 'left' : 'right');
      self.$f7.panel.close(side, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 186 */
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/photo-browser.js ***!
  \*****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-photo-browser',
  props: {
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    params: Object,
    photos: Array,
    exposition: {
      type: Boolean,
      default: true
    },
    expositionHideCaptions: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    navbar: {
      type: Boolean,
      default: true
    },
    toolbar: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String
    },
    captionsTheme: {
      type: String
    },
    iconsColor: {
      type: String
    },
    swipeToClose: {
      type: Boolean,
      default: true
    },
    backLinkText: {
      type: String
    },
    navbarOfText: {
      type: String
    },
    swiper: {
      type: Object
    },
    url: {
      type: String
    },
    routableModals: {
      type: Boolean,
      default: true
    },
    virtualSlides: {
      type: Boolean,
      default: true
    },
    view: [String, Object],
    renderNavbar: Function,
    renderToolbar: Function,
    renderCaption: Function,
    renderObject: Function,
    renderLazyPhoto: Function,
    renderPhoto: Function,
    renderPage: Function,
    renderPopup: Function,
    renderStandalone: Function
  },

  render: function render() {
    var _h = this.$createElement;
    return null;
  },


  watch: {
    'props.photos': function watchPhotos(newValue) {
      var self = this;
      var pb = self.f7PhotoBrowser;
      if (!pb) return;
      self.f7PhotoBrowser.photos = newValue;

      if (pb.opened && pb.swiper) {
        pb.swiper.update();
      }
    }
  },

  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7PhotoBrowser && self.f7PhotoBrowser.destroy) self.f7PhotoBrowser.destroy();
  },
  mounted: function mounted() {
    var self = this;
    if (!self.props.init) return;
    self.$f7ready(function (f7) {
      var params = void 0;
      if (typeof self.props.params !== 'undefined') params = self.props.params;else params = (0, _assign2.default)({}, self.props);
      (0, _keys2.default)(params).forEach(function (param) {
        if (typeof params[param] === 'undefined' || params[param] === '') delete params[param];
      });
      params = _utils2.default.extend({}, params, {
        on: {
          open: function open() {
            self.dispatchEvent('photobrowser:open photoBrowserOpen');
          },
          close: function close() {
            self.dispatchEvent('photobrowser:close photoBrowserClose');
          },
          opened: function opened() {
            self.dispatchEvent('photobrowser:opened photoBrowserOpened');
          },
          closed: function closed() {
            self.dispatchEvent('photobrowser:closed photoBrowserClosed');
          },
          swipeToClose: function swipeToClose() {
            self.dispatchEvent('photobrowser:swipetoclose photoBrowserSwipeToClose');
          }
        }
      });
      self.f7PhotoBrowser = f7.photoBrowser.create(params);
    });
  },


  methods: {
    open: function open(index) {
      return this.f7PhotoBrowser.open(index);
    },
    close: function close() {
      return this.f7PhotoBrowser.close();
    },
    expositionToggle: function expositionToggle() {
      return this.f7PhotoBrowser.expositionToggle();
    },
    expositionEnable: function expositionEnable() {
      return this.f7PhotoBrowser.expositionEnable();
    },
    expositionDisable: function expositionDisable() {
      return this.f7PhotoBrowser.expositionDisable();
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 187 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/components/popover.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-popover',
  props: (0, _assign2.default)({
    id: [String, Number],
    opened: Boolean,
    target: [String, Object],
    closeByBackdropClick: Boolean,
    closeByOutsideClick: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'popover', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [_h('div', {
      class: 'popover-angle'
    }), _h('div', {
      class: 'popover-inner'
    }, [this.$slots['default']])]);
  },


  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.f7Popover) return;

      if (opened) {
        self.f7Popover.open();
      } else {
        self.f7Popover.close();
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('popover:open', self.onOpenBound);
    el.addEventListener('popover:opened', self.onOpenedBound);
    el.addEventListener('popover:close', self.onCloseBound);
    el.addEventListener('popover:closed', self.onClosedBound);
    var props = self.props;
    var target = props.target,
        opened = props.opened,
        closeByBackdropClick = props.closeByBackdropClick,
        closeByOutsideClick = props.closeByOutsideClick;

    var popoverParams = {
      el: el
    };
    if (target) popoverParams.targetEl = target;
    {
      if (typeof self.$options.propsData.closeByBackdropClick !== 'undefined') popoverParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof self.$options.propsData.closeByOutsideClick !== 'undefined') popoverParams.closeByOutsideClick = closeByOutsideClick;
    }
    self.$f7ready(function () {
      self.f7Popover = self.$f7.popover.create(popoverParams);

      if (opened && target) {
        self.f7Popover.open(target, false);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Popover) self.f7Popover.destroy();
    var el = self.$refs.el;
    if (!el) return;
    el.removeEventListener('popover:open', self.onOpenBound);
    el.removeEventListener('popover:opened', self.onOpenedBound);
    el.removeEventListener('popover:close', self.onCloseBound);
    el.removeEventListener('popover:closed', self.onClosedBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('popover:open popoverOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('popover:opened popoverOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('popover:close popoverClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('popover:closed popoverClosed', event);
    },
    open: function open(target, animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.popover.open(self.$refs.el, target, animate);
    },
    close: function close(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.sheet.close(self.$refs.el, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 188 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/popup.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-popup',
  props: (0, _assign2.default)({
    id: [String, Number],
    tabletFullscreen: Boolean,
    opened: Boolean,
    closeByBackdropClick: Boolean,
    backdrop: Boolean,
    animate: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        tabletFullscreen = props.tabletFullscreen;

    var classes = _utils2.default.classNames(className, 'popup', {
      'popup-tablet-fullscreen': tabletFullscreen
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.f7Popup) return;

      if (opened) {
        self.f7Popup.open();
      } else {
        self.f7Popup.close();
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('popup:open', self.onOpenBound);
    el.addEventListener('popup:opened', self.onOpenedBound);
    el.addEventListener('popup:close', self.onCloseBound);
    el.addEventListener('popup:closed', self.onClosedBound);
    var props = self.props;
    var closeByBackdropClick = props.closeByBackdropClick,
        backdrop = props.backdrop,
        animate = props.animate;

    var popupParams = {
      el: el
    };
    {
      if (typeof self.$options.propsData.closeByBackdropClick !== 'undefined') popupParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof self.$options.propsData.animate !== 'undefined') popupParams.animate = animate;
      if (typeof self.$options.propsData.backdrop !== 'undefined') popupParams.backdrop = backdrop;
    }
    self.$f7ready(function () {
      self.f7Popup = self.$f7.popup.create(popupParams);

      if (self.props.opened) {
        self.f7Popup.open(false);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Popup) self.f7Popup.destroy();
    var el = self.$refs.el;
    if (!el) return;
    el.removeEventListener('popup:open', self.onOpenBound);
    el.removeEventListener('popup:opened', self.onOpenedBound);
    el.removeEventListener('popup:close', self.onCloseBound);
    el.removeEventListener('popup:closed', self.onClosedBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('popup:open popupOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('popup:opened popupOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('popup:close popupClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('popup:closed popupClosed', event);
    },
    open: function open(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.popup.open(self.$refs.el, animate);
    },
    close: function close(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.popup.close(self.$refs.el, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 189 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/preloader.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-preloader',
  props: (0, _assign2.default)({
    id: [String, Number],
    size: [Number, String]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var sizeComputed = self.sizeComputed;

    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className;

    var preloaderStyle = {};

    if (sizeComputed) {
      preloaderStyle.width = sizeComputed + 'px';
      preloaderStyle.height = sizeComputed + 'px';
    }

    if (style) _utils2.default.extend(preloaderStyle, style || {});
    var innerEl = void 0;

    if (self.$theme.md) {
      innerEl = _h('span', {
        class: 'preloader-inner'
      }, [_h('span', {
        class: 'preloader-inner-gap'
      }), _h('span', {
        class: 'preloader-inner-left'
      }, [_h('span', {
        class: 'preloader-inner-half-circle'
      })]), _h('span', {
        class: 'preloader-inner-right'
      }, [_h('span', {
        class: 'preloader-inner-half-circle'
      })])]);
    }

    var classes = _utils2.default.classNames(className, 'preloader', _mixins2.default.colorClasses(props));
    return _h('span', {
      style: preloaderStyle,
      class: classes,
      attrs: {
        id: id
      }
    }, [innerEl]);
  },


  computed: {
    sizeComputed: function sizeComputed() {
      var s = this.props.size;

      if (s && typeof s === 'string' && s.indexOf('px') >= 0) {
        s = s.replace('px', '');
      }

      return s;
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 190 */
/*!***************************************************************!*\
  !*** ./node_modules/framework7-vue/components/progressbar.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-progressbar',
  props: (0, _assign2.default)({
    id: [String, Number],
    progress: Number,
    infinite: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var progress = props.progress,
        id = props.id,
        style = props.style,
        infinite = props.infinite,
        className = props.className;

    var transformStyle = {
      transform: progress ? 'translate3d(' + (-100 + progress) + '%, 0, 0)' : '',
      WebkitTransform: progress ? 'translate3d(' + (-100 + progress) + '%, 0, 0)' : ''
    };
    var classes = _utils2.default.classNames(className, 'progressbar', {
      'progressbar-infinite': infinite
    }, _mixins2.default.colorClasses(props));
    return _h('span', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id,
        'data-progress': progress
      }
    }, [_h('span', {
      style: transformStyle
    })]);
  },


  methods: {
    set: function set(progress, speed) {
      var self = this;
      if (!self.$f7) return;
      self.$f7.progressbar.set(self.$refs.el, progress, speed);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 191 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/radio.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-radio',
  props: (0, _assign2.default)({
    id: [String, Number],
    checked: Boolean,
    name: [Number, String],
    value: [Number, String, Boolean],
    disabled: Boolean,
    readonly: Boolean,
    defaultChecked: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var name = props.name,
        value = props.value,
        disabled = props.disabled,
        readonly = props.readonly,
        checked = props.checked,
        defaultChecked = props.defaultChecked,
        id = props.id,
        style = props.style,
        className = props.className;

    var inputEl = void 0;
    {
      inputEl = _h('input', {
        domProps: {
          value: value,
          disabled: disabled,
          readonly: readonly,
          checked: checked
        },
        on: {
          change: self.onChange.bind(self)
        },
        attrs: {
          type: 'radio',
          name: name
        }
      });
    }

    var iconEl = _h('i', {
      class: 'icon-radio'
    });

    var classes = _utils2.default.classNames(className, 'radio', {
      disabled: disabled
    }, _mixins2.default.colorClasses(props));
    return _h('label', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [inputEl, iconEl, this.$slots['default']]);
  },


  methods: {
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 192 */
/*!*******************************************************!*\
  !*** ./node_modules/framework7-vue/components/row.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-row',
  props: (0, _assign2.default)({
    id: [String, Number],
    noGap: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        tag = props.tag,
        noGap = props.noGap;

    var RowTag = tag;
    var classes = _utils2.default.classNames(className, 'row', {
      'no-gap': noGap
    }, _mixins2.default.colorClasses(props));
    return _h(RowTag, {
      style: style,
      class: classes,
      on: {
        click: self.onClick.bind(self)
      },
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 193 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/searchbar.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 19);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-searchbar',
  props: (0, _assign2.default)({
    id: [String, Number],
    noShadow: Boolean,
    noHairline: Boolean,
    form: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    disableButton: {
      type: Boolean,
      default: true
    },
    disableButtonText: {
      type: String,
      default: 'Cancel'
    },
    clearButton: {
      type: Boolean,
      default: true
    },
    expandable: Boolean,
    searchContainer: [String, Object],
    searchIn: {
      type: String,
      default: '.item-title'
    },
    searchItem: {
      type: String,
      default: 'li'
    },
    foundEl: {
      type: [String, Object],
      default: '.searchbar-found'
    },
    notFoundEl: {
      type: [String, Object],
      default: '.searchbar-not-found'
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    backdropEl: [String, Object],
    hideOnEnableEl: {
      type: [String, Object],
      default: '.searchbar-hide-on-enable'
    },
    hideOnSearchEl: {
      type: [String, Object],
      default: '.searchbar-hide-on-search'
    },
    ignore: {
      type: String,
      default: '.searchbar-ignore'
    },
    customSearch: {
      type: Boolean,
      default: false
    },
    removeDiacritics: {
      type: Boolean,
      default: false
    },
    hideDividers: {
      type: Boolean,
      default: true
    },
    hideGroups: {
      type: Boolean,
      default: true
    },
    init: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var clearEl = void 0;
    var disableEl = void 0;
    var props = self.props;
    var placeholder = props.placeholder,
        clearButton = props.clearButton,
        disableButton = props.disableButton,
        disableButtonText = props.disableButtonText,
        form = props.form,
        noShadow = props.noShadow,
        noHairline = props.noHairline,
        expandable = props.expandable,
        className = props.className,
        style = props.style,
        id = props.id;


    if (clearButton) {
      clearEl = _h('span', {
        class: 'input-clear-button',
        on: {
          click: self.onClearButtonClick.bind(self)
        }
      });
    }

    if (disableButton) {
      disableEl = _h('span', {
        class: 'searchbar-disable-button',
        on: {
          click: self.onDisableButtonClick.bind(self)
        }
      }, [disableButtonText]);
    }

    var SearchbarTag = form ? 'form' : 'div';
    var classes = _utils2.default.classNames(className, 'searchbar', {
      'no-shadow': noShadow,
      'no-hairline': noHairline,
      'searchbar-expandable': expandable
    }, _mixins2.default.colorClasses(props));
    return _h(SearchbarTag, {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['before-inner'], _h('div', {
      class: 'searchbar-inner'
    }, [this.$slots['inner-start'], _h('div', {
      class: 'searchbar-input-wrap'
    }, [this.$slots['input-wrap-start'], _h('input', {
      on: {
        input: self.onInput.bind(self),
        change: self.onChange.bind(self),
        focus: self.onFocus.bind(self),
        blur: self.onBlur.bind(self)
      },
      attrs: {
        placeholder: placeholder,
        type: 'search'
      }
    }), _h('i', {
      class: 'searchbar-icon'
    }), clearEl, this.$slots['input-wrap-end']]), disableEl, this.$slots['inner-end'], this.$slots['default']]), this.$slots['after-inner']]);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;

    if (self.props.form && self.$refs.el) {
      self.$refs.el.removeEventListener('submit', self.onSubmitBound, false);
    }

    if (self.f7Searchbar && self.f7Searchbar.destroy) self.f7Searchbar.destroy();
  },
  mounted: function mounted() {
    var self = this;
    var _self$props = self.props,
        init = _self$props.init,
        searchContainer = _self$props.searchContainer,
        searchIn = _self$props.searchIn,
        searchItem = _self$props.searchItem,
        hideOnEnableEl = _self$props.hideOnEnableEl,
        hideOnSearchEl = _self$props.hideOnSearchEl,
        foundEl = _self$props.foundEl,
        notFoundEl = _self$props.notFoundEl,
        backdrop = _self$props.backdrop,
        backdropEl = _self$props.backdropEl,
        disableButton = _self$props.disableButton,
        ignore = _self$props.ignore,
        customSearch = _self$props.customSearch,
        removeDiacritics = _self$props.removeDiacritics,
        hideDividers = _self$props.hideDividers,
        hideGroups = _self$props.hideGroups,
        form = _self$props.form;

    if (!init) return;
    var el = self.$refs.el;

    if (form && el) {
      self.onSubmitBound = self.onSubmit.bind(self);
      el.addEventListener('submit', self.onSubmitBound, false);
    }

    self.$f7ready(function () {
      var params = _utils2.default.noUndefinedProps({
        el: self.$refs.el,
        searchContainer: searchContainer,
        searchIn: searchIn,
        searchItem: searchItem,
        hideOnEnableEl: hideOnEnableEl,
        hideOnSearchEl: hideOnSearchEl,
        foundEl: foundEl,
        notFoundEl: notFoundEl,
        backdrop: backdrop,
        backdropEl: backdropEl,
        disableButton: disableButton,
        ignore: ignore,
        customSearch: customSearch,
        removeDiacritics: removeDiacritics,
        hideDividers: hideDividers,
        hideGroups: hideGroups,
        on: {
          search: function search(searchbar, query, previousQuery) {
            self.dispatchEvent('searchbar:search searchbarSearch', searchbar, query, previousQuery);
          },
          clear: function clear(searchbar, previousQuery) {
            self.dispatchEvent('searchbar:clear searchbarClear', searchbar, previousQuery);
          },
          enable: function enable(searchbar) {
            self.dispatchEvent('searchbar:enable searchbarEnable', searchbar);
          },
          disable: function disable(searchbar) {
            self.dispatchEvent('searchbar:disable searchbarDisable', searchbar);
          }
        }
      });
      (0, _keys2.default)(params).forEach(function (key) {
        if (params[key] === '') {
          delete params[key];
        }
      });
      self.f7Searchbar = self.$f7.searchbar.create(params);
    });
  },


  methods: {
    search: function search(query) {
      if (!this.f7Searchbar) return undefined;
      return this.f7Searchbar.search(query);
    },
    enable: function enable() {
      if (!this.f7Searchbar) return undefined;
      return this.f7Searchbar.enable();
    },
    disable: function disable() {
      if (!this.f7Searchbar) return undefined;
      return this.f7Searchbar.disable();
    },
    toggle: function toggle() {
      if (!this.f7Searchbar) return undefined;
      return this.toggle.disable();
    },
    clear: function clear() {
      if (!this.f7Searchbar) return undefined;
      return this.f7Searchbar.clear();
    },
    onChange: function onChange(event) {
      this.dispatchEvent('change', event);
    },
    onInput: function onInput(event) {
      this.dispatchEvent('input', event);
    },
    onFocus: function onFocus(event) {
      this.dispatchEvent('focus', event);
    },
    onBlur: function onBlur(event) {
      this.dispatchEvent('blur', event);
    },
    onSubmit: function onSubmit(event) {
      this.dispatchEvent('submit', event);
    },
    onClearButtonClick: function onClearButtonClick(event) {
      this.dispatchEvent('click:clear clickClear', event);
    },
    onDisableButtonClick: function onDisableButtonClick(event) {
      this.dispatchEvent('click:disable clickDisable', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 194 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/segmented.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-segmented',
  props: (0, _assign2.default)({
    id: [String, Number],
    raised: Boolean,
    round: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        raised = props.raised,
        round = props.round,
        id = props.id,
        style = props.style,
        tag = props.tag;

    var classNames = _utils2.default.classNames(className, {
      segmented: true,
      'segmented-raised': raised,
      'segmented-round': round
    }, _mixins2.default.colorClasses(props));
    var SegmentedTag = tag;
    return _h(SegmentedTag, {
      style: style,
      class: classNames,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 195 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/sheet.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-sheet',
  props: (0, _assign2.default)({
    id: [String, Number],
    opened: Boolean,
    backdrop: Boolean,
    closeByBackdropClick: Boolean,
    closeByOutsideClick: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var fixedList = [];
    var staticList = [];
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className;

    var fixedTags = void 0;
    fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index'.split(' ');
    var slotsDefault = self.$slots.default;

    if (slotsDefault && slotsDefault.length) {
      slotsDefault.forEach(function (child) {
        if (typeof child === 'undefined') return;
        var isFixedTag = false;
        {
          var tag = child.tag;

          if (!tag) {
            return;
          }

          for (var j = 0; j < fixedTags.length; j += 1) {
            if (tag.indexOf(fixedTags[j]) >= 0) {
              isFixedTag = true;
            }
          }
        }
        if (isFixedTag) fixedList.push(child);else staticList.push(child);
      });
    }

    var innerEl = _h('div', {
      class: 'sheet-modal-inner'
    }, [staticList]);

    var classes = _utils2.default.classNames(className, 'sheet-modal', _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [fixedList, innerEl]);
  },


  watch: {
    'props.opened': function watchOpened(opened) {
      var self = this;
      if (!self.f7Sheet) return;

      if (opened) {
        self.f7Sheet.open();
      } else {
        self.f7Sheet.close();
      }
    }
  },

  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    if (!el) return;
    self.onOpenBound = self.onOpen.bind(self);
    self.onOpenedBound = self.onOpened.bind(self);
    self.onCloseBound = self.onClose.bind(self);
    self.onClosedBound = self.onClosed.bind(self);
    el.addEventListener('sheet:open', self.onOpenBound);
    el.addEventListener('sheet:opened', self.onOpenedBound);
    el.addEventListener('sheet:close', self.onCloseBound);
    el.addEventListener('sheet:closed', self.onClosedBound);
    var props = self.props;
    var opened = props.opened,
        backdrop = props.backdrop,
        closeByBackdropClick = props.closeByBackdropClick,
        closeByOutsideClick = props.closeByOutsideClick;

    var sheetParams = {
      el: self.$refs.el
    };
    var useDefaultBackdrop = void 0;
    {
      useDefaultBackdrop = self.$options.propsData.backdrop === undefined;
      if (typeof self.$options.propsData.closeByBackdropClick !== 'undefined') sheetParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof self.$options.propsData.closeByOutsideClick !== 'undefined') sheetParams.closeByOutsideClick = closeByOutsideClick;
    }
    self.$f7ready(function (f7) {
      if (useDefaultBackdrop) {
        sheetParams.backdrop = f7.params.sheet && f7.params.sheet.backdrop !== undefined ? f7.params.sheet.backdrop : self.$theme.md;
      } else {
        sheetParams.backdrop = backdrop;
      }

      self.f7Sheet = self.$f7.sheet.create(sheetParams);

      if (opened) {
        self.f7Sheet.open(false);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Sheet) self.f7Sheet.destroy();
    var el = self.$el;
    if (!el) return;
    el.removeEventListener('popup:open', self.onOpenBound);
    el.removeEventListener('popup:opened', self.onOpenedBound);
    el.removeEventListener('popup:close', self.onCloseBound);
    el.removeEventListener('popup:closed', self.onClosedBound);
  },


  methods: {
    onOpen: function onOpen(event) {
      this.dispatchEvent('sheet:open sheetOpen', event);
    },
    onOpened: function onOpened(event) {
      this.dispatchEvent('sheet:opened sheetOpened', event);
    },
    onClose: function onClose(event) {
      this.dispatchEvent('sheet:close sheetClose', event);
    },
    onClosed: function onClosed(event) {
      this.dispatchEvent('sheet:closed sheetClosed', event);
    },
    open: function open(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.sheet.open(self.$refs.el, animate);
    },
    close: function close(animate) {
      var self = this;
      if (!self.$f7) return undefined;
      return self.$f7.sheet.close(self.$refs.el, animate);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 196 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/statusbar.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-statusbar',
  props: (0, _assign2.default)({
    id: [String, Number]
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style;

    var classes = _utils2.default.classNames(className, 'statusbar', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 197 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/components/stepper.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-stepper',
  props: (0, _assign2.default)({
    id: [String, Number],
    init: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    formatValue: Function,
    input: {
      type: Boolean,
      default: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputReadonly: {
      type: Boolean,
      default: false
    },
    autorepeat: {
      type: Boolean,
      default: false
    },
    autorepeatDynamic: {
      type: Boolean,
      default: false
    },
    wraps: {
      type: Boolean,
      default: false
    },
    manualInputMode: {
      type: Boolean,
      default: false
    },
    decimalPoint: {
      type: Number,
      default: 4
    },
    buttonsEndInputMode: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    buttonsOnly: Boolean,
    round: Boolean,
    roundMd: Boolean,
    roundIos: Boolean,
    fill: Boolean,
    fillMd: Boolean,
    fillIos: Boolean,
    big: Boolean,
    bigMd: Boolean,
    bigIos: Boolean,
    small: Boolean,
    smallMd: Boolean,
    smallIos: Boolean,
    raised: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var input = props.input,
        buttonsOnly = props.buttonsOnly,
        inputType = props.inputType,
        value = props.value,
        inputReadonly = props.inputReadonly,
        min = props.min,
        max = props.max,
        step = props.step,
        id = props.id,
        style = props.style;

    var inputWrapEl = void 0;
    var valueEl = void 0;

    if (input && !buttonsOnly) {
      var inputEl = void 0;
      {
        inputEl = _h('input', {
          domProps: {
            readOnly: inputReadonly,
            value: value
          },
          on: {
            input: self.onInput.bind(self)
          },
          attrs: {
            type: inputType,
            min: inputType === 'number' ? min : undefined,
            max: inputType === 'number' ? max : undefined,
            step: inputType === 'number' ? step : undefined
          }
        });
      }
      inputWrapEl = _h('div', {
        class: 'stepper-input-wrap'
      }, [inputEl]);
    }

    if (!input && !buttonsOnly) {
      valueEl = _h('div', {
        class: 'stepper-value'
      }, [value]);
    }

    return _h('div', {
      ref: 'el',
      style: style,
      class: self.classes,
      attrs: {
        id: id
      }
    }, [_h('div', {
      class: 'stepper-button-minus',
      on: {
        click: self.onMinusClickBound
      }
    }), inputWrapEl, valueEl, _h('div', {
      class: 'stepper-button-plus',
      on: {
        click: self.onPlusClickBound
      }
    })]);
  },


  computed: {
    classes: function classes() {
      var self = this;
      var props = self.props;
      var round = props.round,
          roundIos = props.roundIos,
          roundMd = props.roundMd,
          fill = props.fill,
          fillIos = props.fillIos,
          fillMd = props.fillMd,
          big = props.big,
          bigIos = props.bigIos,
          bigMd = props.bigMd,
          small = props.small,
          smallIos = props.smallIos,
          smallMd = props.smallMd,
          raised = props.raised,
          disabled = props.disabled;

      return _utils2.default.classNames(self.props.className, 'stepper', {
        disabled: disabled,
        'stepper-round': round,
        'stepper-round-ios': roundIos,
        'stepper-round-md': roundMd,
        'stepper-fill': fill,
        'stepper-fill-ios': fillIos,
        'stepper-fill-md': fillMd,
        'stepper-big': big,
        'stepper-big-ios': bigIos,
        'stepper-big-md': bigMd,
        'stepper-small': small,
        'stepper-small-ios': smallIos,
        'stepper-small-md': smallMd,
        'stepper-raised': raised
      }, _mixins2.default.colorClasses(props));
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },

  created: function created() {
    this.onInputBound = this.onInput.bind(this);
    this.onMinusClickBound = this.onMinusClick.bind(this);
    this.onPlusClickBound = this.onPlusClick.bind(this);
  },
  mounted: function mounted() {
    var self = this;
    if (!self.props.init) return;
    self.$f7ready(function (f7) {
      var _self$props = self.props,
          min = _self$props.min,
          max = _self$props.max,
          value = _self$props.value,
          step = _self$props.step,
          formatValue = _self$props.formatValue,
          autorepeat = _self$props.autorepeat,
          autorepeatDynamic = _self$props.autorepeatDynamic,
          wraps = _self$props.wraps,
          manualInputMode = _self$props.manualInputMode,
          decimalPoint = _self$props.decimalPoint,
          buttonsEndInputMode = _self$props.buttonsEndInputMode;

      var el = self.$refs.el;
      if (!el) return;
      self.f7Stepper = f7.stepper.create(_utils2.default.noUndefinedProps({
        el: el,
        min: min,
        max: max,
        value: value,
        step: step,
        formatValue: formatValue,
        autorepeat: autorepeat,
        autorepeatDynamic: autorepeatDynamic,
        wraps: wraps,
        manualInputMode: manualInputMode,
        decimalPoint: decimalPoint,
        buttonsEndInputMode: buttonsEndInputMode,
        on: {
          change: function change(stepper, newValue) {
            self.dispatchEvent('stepper:change stepperChange', newValue);
          }
        }
      }));
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.props.init) return;

    if (this.f7Stepper && this.f7Stepper.destroy) {
      this.f7Stepper.destroy();
    }
  },


  methods: {
    increment: function increment() {
      if (!this.f7Stepper) return;
      this.f7Stepper.increment();
    },
    decrement: function decrement() {
      if (!this.f7Stepper) return;
      this.f7Stepper.decrement();
    },
    setValue: function setValue(newValue) {
      var self = this;
      if (self.f7Stepper && self.f7Stepper.setValue) self.f7Stepper.setValue(newValue);
    },
    getValue: function getValue() {
      var self = this;

      if (self.f7Stepper && self.f7Stepper.getValue) {
        return self.f7Stepper.getValue();
      }

      return undefined;
    },
    onInput: function onInput(event) {
      var stepper = this.f7Stepper;
      this.dispatchEvent('input', event, stepper);
    },
    onMinusClick: function onMinusClick(event) {
      var stepper = this.f7Stepper;
      this.dispatchEvent('stepper:minusclick stepperMinusClick', event, stepper);
    },
    onPlusClick: function onPlusClick(event) {
      var stepper = this.f7Stepper;
      this.dispatchEvent('stepper:plusclick stepperPlusClick', event, stepper);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  }
};

/***/ }),
/* 198 */
/*!*************************************************************!*\
  !*** ./node_modules/framework7-vue/components/subnavbar.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-subnavbar',
  props: (0, _assign2.default)({
    id: [String, Number],
    sliding: Boolean,
    title: String,
    inner: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var inner = props.inner,
        title = props.title,
        style = props.style,
        id = props.id,
        className = props.className,
        sliding = props.sliding;

    var classes = _utils2.default.classNames(className, 'subnavbar', {
      sliding: sliding
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      class: classes,
      style: style,
      attrs: {
        id: id
      }
    }, [inner ? _h('div', {
      class: 'subnavbar-inner'
    }, [title && _h('div', {
      class: 'title'
    }, [title]), this.$slots['default']]) : this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 199 */
/*!********************************************************************!*\
  !*** ./node_modules/framework7-vue/components/swipeout-actions.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-swipeout-actions',
  props: (0, _assign2.default)({
    id: [String, Number],
    left: Boolean,
    right: Boolean,
    side: String
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var left = props.left,
        right = props.right,
        side = props.side,
        className = props.className,
        id = props.id,
        style = props.style;

    var sideComputed = side;

    if (!sideComputed) {
      if (left) sideComputed = 'left';
      if (right) sideComputed = 'right';
    }

    var classes = _utils2.default.classNames(className, 'swipeout-actions-' + sideComputed, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 200 */
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-vue/components/swipeout-button.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-swipeout-button',
  props: (0, _assign2.default)({
    id: [String, Number],
    text: String,
    confirmText: String,
    overswipe: Boolean,
    close: Boolean,
    delete: Boolean,
    href: String
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        overswipe = props.overswipe,
        deleteProp = props.delete,
        close = props.close,
        href = props.href,
        confirmText = props.confirmText,
        text = props.text;

    var classes = _utils2.default.classNames(className, {
      'swipeout-overswipe': overswipe,
      'swipeout-delete': deleteProp,
      'swipeout-close': close
    }, _mixins2.default.colorClasses(props));
    return _h('a', {
      style: style,
      class: classes,
      on: {
        click: this.onClick.bind(this)
      },
      attrs: {
        href: href || '#',
        id: id,
        'data-confirm': confirmText || undefined
      }
    }, [this.$slots['default'] || [text]]);
  },


  methods: {
    onClick: function onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 201 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/components/swiper-slide.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-swiper-slide',
  props: {
    id: [String, Number],
    zoom: Boolean
  },

  render: function render() {
    var _h = this.$createElement;
    var props = this.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        zoom = props.zoom;

    var classes = _utils2.default.classNames(className, 'swiper-slide');
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [zoom ? _h('div', {
      class: 'swiper-zoom-container'
    }, [this.$slots['default']]) : this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 202 */
/*!**********************************************************!*\
  !*** ./node_modules/framework7-vue/components/swiper.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-swiper',
  props: (0, _assign2.default)({
    id: [String, Number],
    params: Object,
    pagination: Boolean,
    scrollbar: Boolean,
    navigation: Boolean,
    init: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className;

    var paginationEl = void 0;
    var scrollbarEl = void 0;
    var buttonNextEl = void 0;
    var buttonPrevEl = void 0;

    if (self.paginationComputed) {
      paginationEl = _h('div', {
        ref: 'paginationEl',
        class: 'swiper-pagination'
      });
    }

    if (self.scrollbarComputed) {
      scrollbarEl = _h('div', {
        ref: 'scrollbarEl',
        class: 'swiper-scrollbar'
      });
    }

    if (self.navigationComputed) {
      buttonNextEl = _h('div', {
        ref: 'nextEl',
        class: 'swiper-button-next'
      });
      buttonPrevEl = _h('div', {
        ref: 'prevEl',
        class: 'swiper-button-prev'
      });
    }

    var classes = _utils2.default.classNames(className, 'swiper-container', _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      ref: 'el',
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['before-wrapper'], _h('div', {
      class: 'swiper-wrapper'
    }, [this.$slots['default']]), paginationEl, scrollbarEl, buttonPrevEl, buttonNextEl, this.$slots['after-wrapper']]);
  },


  computed: {
    paginationComputed: function paginationComputed() {
      var self = this;
      var _self$props = self.props,
          pagination = _self$props.pagination,
          params = _self$props.params;


      if (pagination === true || params && params.pagination && !params.pagination.el) {
        return true;
      }

      return false;
    },
    scrollbarComputed: function scrollbarComputed() {
      var self = this;
      var _self$props2 = self.props,
          scrollbar = _self$props2.scrollbar,
          params = _self$props2.params;


      if (scrollbar === true || params && params.scrollbar && !params.scrollbar.el) {
        return true;
      }

      return false;
    },
    navigationComputed: function navigationComputed() {
      var self = this;
      var _self$props3 = self.props,
          navigation = _self$props3.navigation,
          params = _self$props3.params;


      if (navigation === true || params && params.navigation && !params.navigation.nextEl && !params.navigation.prevEl) {
        return true;
      }

      return false;
    },
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  },

  updated: function updated() {
    var self = this;

    if (!self.initialUpdate) {
      self.initialUpdate = true;
      return;
    }

    if (self.swiper && self.swiper.update) self.swiper.update();
  },
  mounted: function mounted() {
    var self = this;
    if (!self.props.init) return;
    self.$f7ready(function (f7) {
      var newParams = {
        pagination: {},
        navigation: {},
        scrollbar: {}
      };
      var _self$props4 = self.props,
          params = _self$props4.params,
          pagination = _self$props4.pagination,
          navigation = _self$props4.navigation,
          scrollbar = _self$props4.scrollbar;

      if (params) _utils2.default.extend(newParams, params);
      if (pagination && !newParams.pagination.el) newParams.pagination.el = self.$refs.paginationEl;

      if (navigation && !newParams.navigation.nextEl && !newParams.navigation.prevEl) {
        newParams.navigation.nextEl = self.$refs.nextEl;
        newParams.navigation.prevEl = self.$refs.prevEl;
      }

      if (scrollbar && !newParams.scrollbar.el) newParams.scrollbar.el = self.$refs.scrollbarEl;
      self.swiper = f7.swiper.create(self.$refs.el, newParams);
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (!self.props.init) return;
    if (self.swiper && self.swiper.destroy) self.swiper.destroy();
  }
};

/***/ }),
/* 203 */
/*!*******************************************************!*\
  !*** ./node_modules/framework7-vue/components/tab.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _events = __webpack_require__(/*! ../utils/events */ 25);

var _events2 = _interopRequireDefault(_events);

var _f = __webpack_require__(/*! ../utils/f7 */ 20);

var _f2 = _interopRequireDefault(_f);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-tab',
  props: (0, _assign2.default)({
    id: [String, Number],
    tabActive: Boolean
  }, _mixins2.default.colorProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        tabContent: null
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var tabActive = props.tabActive,
        id = props.id,
        className = props.className,
        style = props.style;

    var tabContent = self.state.tabContent;
    var classes = _utils2.default.classNames(className, 'tab', {
      'tab-active': tabActive
    }, _mixins2.default.colorClasses(props));
    var TabContent = void 0;
    if (tabContent) TabContent = tabContent.component;
    {
      return _h('div', {
        style: style,
        ref: 'el',
        class: classes,
        attrs: {
          id: id
        }
      }, [tabContent ? _h(TabContent, {
        key: tabContent.id,
        props: tabContent.props
      }) : this.$slots['default']]);
    }
  },
  created: function created() {
    this.onTabShowBound = this.onTabShow.bind(this);
    this.onTabHideBound = this.onTabHide.bind(this);
  },
  updated: function updated() {
    var self = this;
    if (!self.routerData) return;
    _events2.default.emit('tabRouterDidUpdate', self.routerData);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;

    if (el) {
      el.removeEventListener('tab:show', self.onTabShowBound);
      el.removeEventListener('tab:hide', self.onTabHideBound);
    }

    if (!self.routerData) return;
    _f2.default.routers.tabs.splice(_f2.default.routers.tabs.indexOf(self.routerData), 1);
    self.routerData = null;
    delete self.routerData;
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;

    if (el) {
      el.addEventListener('tab:show', self.onTabShowBound);
      el.addEventListener('tab:hide', self.onTabHideBound);
    }

    self.setState({
      tabContent: null
    });
    self.$f7ready(function () {
      self.routerData = {
        el: el,
        component: self
      };
      _f2.default.routers.tabs.push(self.routerData);
    });
  },


  methods: {
    show: function show(animate) {
      if (!this.$f7) return;
      this.$f7.tab.show(this.$refs.el, animate);
    },
    onTabShow: function onTabShow(event) {
      this.dispatchEvent('tab:show tabShow', event);
    },
    onTabHide: function onTabHide(event) {
      this.dispatchEvent('tab:hide tabHide', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    },
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 204 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/tabs.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-tabs',
  props: (0, _assign2.default)({
    id: [String, Number],
    animated: Boolean,
    swipeable: Boolean,
    routable: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var animated = props.animated,
        swipeable = props.swipeable,
        id = props.id,
        style = props.style,
        className = props.className,
        routable = props.routable;

    var classes = _utils2.default.classNames(className, {
      'tabs-animated-wrap': animated,
      'tabs-swipeable-wrap': swipeable,
      'tabs-routable': routable
    }, _mixins2.default.colorClasses(props));

    if (animated || swipeable) {
      return _h('div', {
        style: style,
        class: classes,
        attrs: {
          id: id
        }
      }, [_h('div', {
        class: 'tabs'
      }, [this.$slots['default']])]);
    }

    return _h('div', {
      style: style,
      class: _utils2.default.classNames('tabs', classes),
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 205 */
/*!***********************************************************!*\
  !*** ./node_modules/framework7-vue/components/toolbar.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-toolbar',
  props: (0, _assign2.default)({
    id: [String, Number],
    bottomMd: Boolean,
    tabbar: Boolean,
    labels: Boolean,
    scrollable: Boolean,
    hidden: Boolean,
    noShadow: Boolean,
    noHairline: Boolean,
    inner: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        className = props.className,
        inner = props.inner,
        bottomMd = props.bottomMd,
        tabbar = props.tabbar,
        labels = props.labels,
        scrollable = props.scrollable,
        hidden = props.hidden,
        noShadow = props.noShadow,
        noHairline = props.noHairline;

    var classes = _utils2.default.classNames(className, 'toolbar', {
      'toolbar-bottom-md': bottomMd,
      tabbar: tabbar,
      'tabbar-labels': labels,
      'tabbar-scrollable': scrollable,
      'toolbar-hidden': hidden,
      'no-shadow': noShadow,
      'no-hairline': noHairline
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      ref: 'el',
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['before-inner'], inner ? _h('div', {
      class: 'toolbar-inner'
    }, [this.$slots['default']]) : this.$slots['default'], this.$slots['after-inner']]);
  },
  updated: function updated() {
    var self = this;

    if (self.props.tabbar && self.$f7) {
      self.$f7.toolbar.setHighlight(self.$refs.el);
    }
  },
  mounted: function mounted() {
    var self = this;
    self.$f7ready(function (f7) {
      if (self.props.tabbar) f7.toolbar.setHighlight(self.$refs.el);
    });
  },


  methods: {
    hide: function hide(animate) {
      var self = this;
      if (!self.$f7) return;
      self.$f7.toolbar.hide(this.$refs.el, animate);
    },
    show: function show(animate) {
      var self = this;
      if (!self.$f7) return;
      self.$f7.toolbar.show(this.$refs.el, animate);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 206 */
/*!********************************************************!*\
  !*** ./node_modules/framework7-vue/components/view.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _f = __webpack_require__(/*! ../utils/f7 */ 20);

var _f2 = _interopRequireDefault(_f);

var _events = __webpack_require__(/*! ../utils/events */ 25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentSetState = __webpack_require__(/*! ../runtime-helpers/vue-component-set-state.js */ 21);

var _vueComponentSetState2 = _interopRequireDefault(_vueComponentSetState);

var _vueComponentDispatchEvent = __webpack_require__(/*! ../runtime-helpers/vue-component-dispatch-event.js */ 5);

var _vueComponentDispatchEvent2 = _interopRequireDefault(_vueComponentDispatchEvent);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-view',
  props: (0, _assign2.default)({
    id: [String, Number],
    tab: Boolean,
    tabActive: Boolean,
    name: String,
    router: Boolean,
    linksView: [Object, String],
    url: String,
    main: Boolean,
    stackPages: Boolean,
    xhrCache: String,
    xhrCacheIgnore: Array,
    xhrCacheIgnoreGetParameters: Boolean,
    xhrCacheDuration: Number,
    preloadPreviousPage: Boolean,
    allowDuplicateUrls: Boolean,
    reloadPages: Boolean,
    removeElements: Boolean,
    removeElementsWithTimeout: Boolean,
    removeElementsTimeout: Number,
    restoreScrollTopOnBack: Boolean,
    iosSwipeBack: Boolean,
    iosSwipeBackAnimateShadow: Boolean,
    iosSwipeBackAnimateOpacity: Boolean,
    iosSwipeBackActiveArea: Number,
    iosSwipeBackThreshold: Number,
    pushState: Boolean,
    pushStateRoot: String,
    pushStateAnimate: Boolean,
    pushStateAnimateOnLoad: Boolean,
    pushStateSeparator: String,
    pushStateOnLoad: Boolean,
    animate: Boolean,
    iosDynamicNavbar: Boolean,
    iosSeparateDynamicNavbar: Boolean,
    iosAnimateNavbarBackIcon: Boolean,
    materialPageLoadDelay: Number,
    passRouteQueryToRequest: Boolean,
    passRouteParamsToRequest: Boolean,
    routes: Array,
    routesAdd: Array,
    routesBeforeEnter: [Function, Array],
    routesBeforeLeave: [Function, Array],
    init: {
      type: Boolean,
      default: true
    }
  }, _mixins2.default.colorProps),

  data: function data() {
    var props = (0, _vueComponentProps2.default)(this);

    var state = function () {
      return {
        pages: []
      };
    }();

    return {
      state: state
    };
  },
  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var id = props.id,
        style = props.style,
        tab = props.tab,
        main = props.main,
        tabActive = props.tabActive,
        className = props.className;

    var classes = _utils2.default.classNames(className, 'view', {
      'view-main': main,
      'tab-active': tabActive,
      tab: tab
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      ref: 'el',
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default'], self.state.pages.map(function (page) {
      var PageComponent = page.component;
      {
        return _h(PageComponent, {
          key: page.id,
          props: page.props
        });
      }
    })]);
  },
  created: function created() {
    var self = this;
    self.onSwipeBackMoveBound = self.onSwipeBackMove.bind(self);
    self.onSwipeBackBeforeChangeBound = self.onSwipeBackBeforeChange.bind(self);
    self.onSwipeBackAfterChangeBound = self.onSwipeBackAfterChange.bind(self);
    self.onSwipeBackBeforeResetBound = self.onSwipeBackBeforeReset.bind(self);
    self.onSwipeBackAfterResetBound = self.onSwipeBackAfterReset.bind(self);
    self.onTabShowBound = self.onTabShow.bind(self);
    self.onTabHideBound = self.onTabHide.bind(self);
    self.onViewInitBound = self.onViewInit.bind(self);
  },
  mounted: function mounted() {
    var self = this;
    var el = self.$refs.el;
    el.addEventListener('swipeback:move', self.onSwipeBackMoveBound);
    el.addEventListener('swipeback:beforechange', self.onSwipeBackBeforeChangeBound);
    el.addEventListener('swipeback:afterchange', self.onSwipeBackAfterChangeBound);
    el.addEventListener('swipeback:beforereset', self.onSwipeBackBeforeResetBound);
    el.addEventListener('swipeback:afterreset', self.onSwipeBackAfterResetBound);
    el.addEventListener('tab:show', self.onTabShowBound);
    el.addEventListener('tab:hide', self.onTabHideBound);
    el.addEventListener('view:init', self.onViewInitBound);
    self.setState({
      pages: []
    });
    self.$f7ready(function (f7Instance) {
      self.routerData = {
        el: el,
        component: self,
        instance: null
      };
      _f2.default.routers.views.push(self.routerData);
      if (!self.props.init) return;
      self.routerData.instance = f7Instance.views.create(el, _utils2.default.noUndefinedProps(self.$options.propsData || {}));
      self.f7View = self.routerData.instance;
    });
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    var el = self.$refs.el;
    el.removeEventListener('swipeback:move', self.onSwipeBackMoveBound);
    el.removeEventListener('swipeback:beforechange', self.onSwipeBackBeforeChangeBound);
    el.removeEventListener('swipeback:afterchange', self.onSwipeBackAfterChangeBound);
    el.removeEventListener('swipeback:beforereset', self.onSwipeBackBeforeResetBound);
    el.removeEventListener('swipeback:afterreset', self.onSwipeBackAfterResetBound);
    el.removeEventListener('tab:show', self.onTabShowBound);
    el.removeEventListener('tab:hide', self.onTabHideBound);
    el.removeEventListener('view:init', self.onViewInitBound);
    if (!self.props.init) return;
    if (self.f7View && self.f7View.destroy) self.f7View.destroy();
    _f2.default.routers.views.splice(_f2.default.routers.views.indexOf(self.routerData), 1);
    self.routerData = null;
    delete self.routerData;
  },
  updated: function updated() {
    var self = this;
    if (!self.routerData) return;
    _events2.default.emit('viewRouterDidUpdate', self.routerData);
  },


  methods: {
    onViewInit: function onViewInit(event) {
      var self = this;
      var view = event.detail;
      self.dispatchEvent('view:init viewInit', event, view);

      if (!self.props.init) {
        self.routerData.instance = view;
        self.f7View = self.routerData.instance;
      }
    },
    onSwipeBackMove: function onSwipeBackMove(event) {
      var swipeBackData = event.detail;
      this.dispatchEvent('swipeback:move swipeBackMove', event, swipeBackData);
    },
    onSwipeBackBeforeChange: function onSwipeBackBeforeChange(event) {
      var swipeBackData = event.detail;
      this.dispatchEvent('swipeback:beforechange swipeBackBeforeChange', event, swipeBackData);
    },
    onSwipeBackAfterChange: function onSwipeBackAfterChange(event) {
      var swipeBackData = event.detail;
      this.dispatchEvent('swipeback:afterchange swipeBackAfterChange', event, swipeBackData);
    },
    onSwipeBackBeforeReset: function onSwipeBackBeforeReset(event) {
      var swipeBackData = event.detail;
      this.dispatchEvent('swipeback:beforereset swipeBackBeforeReset', event, swipeBackData);
    },
    onSwipeBackAfterReset: function onSwipeBackAfterReset(event) {
      var swipeBackData = event.detail;
      this.dispatchEvent('swipeback:afterreset swipeBackAfterReset', event, swipeBackData);
    },
    onTabShow: function onTabShow(event) {
      this.dispatchEvent('tab:show tabShow', event);
    },
    onTabHide: function onTabHide(event) {
      this.dispatchEvent('tab:hide tabHide', event);
    },
    dispatchEvent: function dispatchEvent(events) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _vueComponentDispatchEvent2.default.apply(undefined, [this, events].concat((0, _toConsumableArray3.default)(args)));
    },
    setState: function setState(updater, callback) {
      (0, _vueComponentSetState2.default)(this, updater, callback);
    }
  },
  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 207 */
/*!*********************************************************!*\
  !*** ./node_modules/framework7-vue/components/views.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 2);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(/*! ../utils/utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

var _mixins = __webpack_require__(/*! ../utils/mixins */ 3);

var _mixins2 = _interopRequireDefault(_mixins);

var _vueComponentProps = __webpack_require__(/*! ../runtime-helpers/vue-component-props.js */ 1);

var _vueComponentProps2 = _interopRequireDefault(_vueComponentProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'f7-views',
  props: (0, _assign2.default)({
    id: [String, Number],
    tabs: Boolean
  }, _mixins2.default.colorProps),

  render: function render() {
    var _h = this.$createElement;
    var self = this;
    var props = self.props;
    var className = props.className,
        id = props.id,
        style = props.style,
        tabs = props.tabs;

    var classes = _utils2.default.classNames(className, 'views', {
      tabs: tabs
    }, _mixins2.default.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id
      }
    }, [this.$slots['default']]);
  },


  computed: {
    props: function props() {
      return (0, _vueComponentProps2.default)(this);
    }
  }
};

/***/ }),
/* 208 */
/*!*****************************************************!*\
  !*** ./node_modules/framework7-vue/utils/plugin.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ 32);

var _vue2 = _interopRequireDefault(_vue);

var _componentsRouter = __webpack_require__(/*! ./components-router */ 209);

var _componentsRouter2 = _interopRequireDefault(_componentsRouter);

var _f = __webpack_require__(/*! ./f7 */ 20);

var _f2 = _interopRequireDefault(_f);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-underscore-dangle: "off" */
var Plugin = {
  name: 'phenomePlugin',
  install: function install() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var Framework7 = this;
    _f2.default.Framework7 = Framework7;

    var Extend = params.Vue || _vue2.default; // eslint-disable-line


    // Define protos
    Object.defineProperty(Extend.prototype, '$f7', {
      get: function get() {
        return _f2.default.instance;
      }
    });

    var $theme = {};
    var theme = params.theme;

    if (theme === 'md') $theme.md = true;
    if (theme === 'ios') $theme.ios = true;
    if (!theme || theme === 'auto') {
      $theme.ios = !!(Framework7.Device || Framework7.device).ios;
      $theme.md = !(Framework7.Device || Framework7.device).ios;
    }
    Object.defineProperty(Extend.prototype, '$theme', {
      get: function get() {
        return {
          ios: _f2.default.instance ? _f2.default.instance.theme === 'ios' : $theme.ios,
          md: _f2.default.instance ? _f2.default.instance.theme === 'md' : $theme.md
        };
      }
    });

    function f7ready(callback) {
      _f2.default.ready(callback);
    }
    Extend.prototype.Dom7 = Framework7.$;
    Extend.prototype.$$ = Framework7.$;
    Extend.prototype.$device = Framework7.device;
    Extend.prototype.$request = Framework7.request;
    Extend.prototype.$utils = Framework7.utils;
    Extend.prototype.$f7ready = f7ready;
    Extend.prototype.$f7Ready = f7ready;

    Object.defineProperty(Extend.prototype, '$f7route', {
      get: function get() {
        var self = this;
        if (self.props && self.props.f7route) return self.props.f7route;
        if (self.f7route) return self.f7route;
        if (self._f7route) return self._f7route;

        var route = void 0;
        // eslint-disable-next-line
        if (true) {
          var parent = self;
          while (parent && !route) {
            if (parent._f7route) route = parent._f7route;
            parent = parent.$parent;
          }
        }
        return route;
      },
      set: function set(value) {
        var self = this;
        self._f7route = value;
      }
    });
    Object.defineProperty(Extend.prototype, '$f7router', {
      get: function get() {
        var self = this;
        if (self.props && self.props.f7router) return self.props.f7router;
        if (self.f7router) return self.f7router;
        if (self._f7router) return self._f7router;

        var router = void 0;
        // eslint-disable-next-line
        if (true) {
          var parent = self;
          while (parent && !router) {
            if (parent._f7router) router = parent._f7router;else if (parent.f7View) {
              router = parent.f7View.router;
            } else if (parent.$refs && parent.$refs.el && parent.$refs.el.f7View) {
              router = parent.$refs.el.f7View.router;
            }
            parent = parent.$parent;
          }
        }
        return router;
      },
      set: function set(value) {
        var self = this;
        self._f7router = value;
      }
    });

    // Extend F7 Router
    Framework7.Router.use(_componentsRouter2.default);
  }
};

exports.default = Plugin;

/***/ }),
/* 209 */
/*!****************************************************************!*\
  !*** ./node_modules/framework7-vue/utils/components-router.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _f = __webpack_require__(/*! ./f7 */ 20);

var _f2 = _interopRequireDefault(_f);

var _events = __webpack_require__(/*! ./events */ 25);

var _events2 = _interopRequireDefault(_events);

var _utils = __webpack_require__(/*! ./utils */ 0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerComponentIdCounter = 0; /* eslint no-underscore-dangle: "off" */
exports.default = {
  proto: {
    pageComponentLoader: function pageComponentLoader(routerEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      var el = routerEl;
      var routerComponent = void 0;
      _f2.default.routers.views.forEach(function (data) {
        if (data.el && data.el === routerEl) {
          routerComponent = data.component;
        }
      });

      if (!routerComponent || !routerComponent.state.pages) {
        reject();
        return;
      }

      var id = _utils2.default.now() + '_' + (routerComponentIdCounter += 1);
      var pageData = {
        component: component,
        id: id,
        props: _utils2.default.extend({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      routerComponent.$f7router = router;
      routerComponent.$f7route = options.route;

      var resolved = void 0;
      function onDidUpdate(componentRouterData) {
        if (componentRouterData.component !== routerComponent || resolved) return;
        _events2.default.off('viewRouterDidUpdate', onDidUpdate);

        var pageEl = el.children[el.children.length - 1];
        pageData.el = pageEl;

        resolve(pageEl);
        resolved = true;
      }

      _events2.default.on('viewRouterDidUpdate', onDidUpdate);

      routerComponent.state.pages.push(pageData);
      routerComponent.setState({ pages: routerComponent.state.pages });
    },
    removePage: function removePage($pageEl) {
      if (!$pageEl) return;
      var router = this;
      var routerComponent = void 0;
      _f2.default.routers.views.forEach(function (data) {
        if (data.el && data.el === router.el) {
          routerComponent = data.component;
        }
      });

      var pageEl = void 0;
      if ('length' in $pageEl) {
        // Dom7
        if ($pageEl.length === 0) return;
        pageEl = $pageEl[0];
      } else {
        pageEl = $pageEl;
      }
      if (!pageEl) return;

      var pageComponentFound = void 0;
      routerComponent.state.pages.forEach(function (page, index) {
        if (page.el === pageEl) {
          pageComponentFound = true;
          routerComponent.state.pages.splice(index, 1);
          routerComponent.setState({ pages: routerComponent.state.pages });
        }
      });
      if (!pageComponentFound) {
        pageEl.parentNode.removeChild(pageEl);
      }
    },
    tabComponentLoader: function tabComponentLoader(tabEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      if (!tabEl) reject();

      var tabsComponent = void 0;
      _f2.default.routers.tabs.forEach(function (tabData) {
        if (tabData.el && tabData.el === tabEl) {
          tabsComponent = tabData.component;
        }
      });
      if (!tabsComponent) {
        reject();
        return;
      }

      var id = _utils2.default.now() + '_' + (routerComponentIdCounter += 1);
      var tabContent = {
        id: id,
        component: component,
        props: _utils2.default.extend({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };

      tabsComponent.$f7router = router;
      tabsComponent.$f7route = options.route;

      var resolved = void 0;
      function onDidUpdate(componentRouterData) {
        if (componentRouterData.component !== tabsComponent || resolved) return;
        _events2.default.off('tabRouterDidUpdate', onDidUpdate);

        var tabContentEl = tabEl.children[0];
        resolve(tabContentEl);

        resolved = true;
      }

      _events2.default.on('tabRouterDidUpdate', onDidUpdate);

      tabsComponent.setState({ tabContent: tabContent });
    },
    removeTabContent: function removeTabContent(tabEl) {
      if (!tabEl) return;

      var tabComponent = void 0;
      _f2.default.routers.tabs.forEach(function (tabData) {
        if (tabData.el && tabData.el === tabEl) {
          tabComponent = tabData.component;
        }
      });
      var hasComponent = !!tabComponent.state.tabContent;
      if (!tabComponent || !hasComponent) {
        tabEl.innerHTML = ''; // eslint-disable-line
        return;
      }
      tabComponent.setState({ tabContent: null });
    },
    modalComponentLoader: function modalComponentLoader(rootEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      var modalsComponent = _f2.default.routers.modals && _f2.default.routers.modals.component;
      var modalsComponentEl = _f2.default.routers.modals && _f2.default.routers.modals.el;

      if (!modalsComponent || !modalsComponent.state.modals) {
        reject();
        return;
      }

      var id = _utils2.default.now() + '_' + (routerComponentIdCounter += 1);
      var modalData = {
        component: component,
        id: id,
        props: _utils2.default.extend({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      modalsComponent.$f7router = router;
      modalsComponent.$f7route = options.route;

      var resolved = void 0;
      function onDidUpdate(componentRouterData) {
        if (componentRouterData.component !== modalsComponent || resolved) return;
        _events2.default.off('modalsRouterDidUpdate', onDidUpdate);

        var modalEl = modalsComponentEl.children[modalsComponentEl.children.length - 1];
        modalData.el = modalEl;

        resolve(modalEl);
        resolved = true;
      }

      _events2.default.on('modalsRouterDidUpdate', onDidUpdate);

      modalsComponent.state.modals.push(modalData);
      modalsComponent.setState({ modals: modalsComponent.state.modals });
    },
    removeModal: function removeModal(modalEl) {
      var modalsComponent = _f2.default.routers.modals && _f2.default.routers.modals.component;
      if (!modalsComponent) return;

      var modalDataToRemove = void 0;
      modalsComponent.state.modals.forEach(function (modalData) {
        if (modalData.el === modalEl) modalDataToRemove = modalData;
      });

      modalsComponent.state.modals.splice(modalsComponent.state.modals.indexOf(modalDataToRemove), 1);
      modalsComponent.setState({ modals: modalsComponent.state.modals });
    }
  }
};

/***/ }),
/* 210 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2a3e0826","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/form.vue ***!
  \**************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Form components",
      "back-link": "Back"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "block block-strong"
  }, [_c('p', [_vm._v("With forms storage it is easy to store and parse form data, especially on Ajax loaded pages. All you need to make it work is to add \"form-store-data\" class to your <form> and Framework7 will store form data with every input change. And the most awesome part is that when you load this page again Framework7 will parse this data and fill all form fields automatically!")]), _vm._v(" "), _c('p', [_vm._v("Just try to fill the form below and then go to any other page, or even you may close this site, and when you return here form fields will have kept your data.")])]), _vm._v(" "), _c('form', {
    staticClass: "list form-store-data",
    attrs: {
      "id": "demo-form"
    }
  }, [_c('ul', [_c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "name",
      "type": "text",
      "placeholder": "Your name"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-clear-button"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "password",
      "type": "password",
      "placeholder": "Your password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-clear-button"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("E-mail")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "email",
      "type": "email",
      "placeholder": "Your e-mail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-clear-button"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("URL")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "url",
      "type": "url",
      "placeholder": "URL"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-clear-button"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Phone")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "phone",
      "type": "tel",
      "placeholder": "Your phone number"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-clear-button"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Gender")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('select', {
    attrs: {
      "name": "gender",
      "placeholder": "Please choose..."
    }
  }, [_c('option', {
    attrs: {
      "value": "Male"
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Female"
    }
  }, [_vm._v("Female")])])])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Birthday")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "birthday",
      "type": "date",
      "value": "2014-04-30",
      "placeholder": "Please choose..."
    }
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Date time")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('input', {
    attrs: {
      "name": "date",
      "type": "datetime-local",
      "placeholder": "Please choose..."
    }
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("Range")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('div', {
    staticClass: "range-slider range-slider-init",
    attrs: {
      "data-label": "true"
    }
  }, [_c('input', {
    attrs: {
      "name": "range",
      "type": "range",
      "value": "50",
      "min": "0",
      "max": "100",
      "step": "1"
    }
  })])])])]), _vm._v(" "), _c('li', {
    staticClass: "item-content item-input"
  }, [_c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title item-label"
  }, [_vm._v("About you")]), _vm._v(" "), _c('div', {
    staticClass: "item-input-wrap"
  }, [_c('textarea', {
    staticClass: "resizable",
    attrs: {
      "name": "bio",
      "placeholder": "Bio"
    }
  })])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a3e0826", module.exports)
  }
}

/***/ }),
/* 211 */
/*!************************************************!*\
  !*** ./src/assets/vue/pages/dynamic-route.vue ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./dynamic-route.vue */ 212),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1b93ece2","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./dynamic-route.vue */ 213),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/dynamic-route.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dynamic-route.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b93ece2", Component.options)
  } else {
    hotAPI.reload("data-v-1b93ece2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 212 */
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/dynamic-route.vue ***!
  \*************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 213 */
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b93ece2","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/dynamic-route.vue ***!
  \***********************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Dynamic Route",
      "back-link": "Back",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block', {
    attrs: {
      "inner": ""
    }
  }, [_c('ul', [_c('li', [_c('b', [_vm._v("Url:")]), _vm._v(" " + _vm._s(_vm.$f7route.url))]), _vm._v(" "), _c('li', [_c('b', [_vm._v("Path:")]), _vm._v(" " + _vm._s(_vm.$f7route.path))]), _vm._v(" "), _c('li', [_c('b', [_vm._v("Hash:")]), _vm._v(" " + _vm._s(_vm.$f7route.hash))]), _vm._v(" "), _c('li', [_c('b', [_vm._v("Params:")]), _vm._v(" "), _c('ul', _vm._l((_vm.$f7route.params), function(value, key) {
    return _c('li', {
      key: 'param-' + key
    }, [_c('b', [_vm._v(_vm._s(key) + ":")]), _vm._v(" " + _vm._s(value))])
  }))]), _vm._v(" "), _c('li', [_c('b', [_vm._v("Query:")]), _vm._v(" "), _c('ul', _vm._l((_vm.$f7route.query), function(value, key) {
    return _c('li', {
      key: 'query-' + key
    }, [_c('b', [_vm._v(_vm._s(key) + ":")]), _vm._v(" " + _vm._s(value))])
  }))]), _vm._v(" "), _c('li', [_c('b', [_vm._v("Route:")]), _vm._v(" " + _vm._s(_vm.$f7route.route))])])]), _vm._v(" "), _c('f7-block', {
    attrs: {
      "inner": ""
    }
  }, [_c('f7-link', {
    on: {
      "click": function($event) {
        _vm.$f7router.back()
      }
    }
  }, [_vm._v("Go back via Router API")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b93ece2", module.exports)
  }
}

/***/ }),
/* 214 */
/*!*********************************************!*\
  !*** ./src/assets/vue/pages/panel-left.vue ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./panel-left.vue */ 215),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2cd87ace","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./panel-left.vue */ 216),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/panel-left.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] panel-left.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cd87ace", Component.options)
  } else {
    hotAPI.reload("data-v-2cd87ace", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 215 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/panel-left.vue ***!
  \**********************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),
/* 216 */
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2cd87ace","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/panel-left.vue ***!
  \********************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-block-title', [_vm._v("Left Panel")]), _vm._v(" "), _c('f7-block', [_c('p', [_vm._v("This is a left side panel. You can close it by clicking outsite or on this link: "), _c('f7-link', {
    attrs: {
      "panel-close": ""
    }
  }, [_vm._v("close me")]), _vm._v(". You can put here anything.")], 1)]), _vm._v(" "), _c('f7-block-title', [_vm._v("Main View Navigation")]), _vm._v(" "), _c('f7-list', [_c('f7-list-item', {
    attrs: {
      "link": "/about/",
      "title": "About",
      "panel-close": ""
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/form/",
      "title": "Form",
      "panel-close": ""
    }
  })], 1), _vm._v(" "), _c('f7-block', [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.")]), _vm._v(" "), _c('p', [_vm._v("Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2cd87ace", module.exports)
  }
}

/***/ }),
/* 217 */
/*!***********************************************!*\
  !*** ./src/assets/vue/pages/color-themes.vue ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./color-themes.vue */ 218),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-316420c6","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./color-themes.vue */ 219),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/color-themes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] color-themes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-316420c6", Component.options)
  } else {
    hotAPI.reload("data-v-316420c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 218 */
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/color-themes.vue ***!
  \************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    var colors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'gray', 'black'];
    return {
      colors: colors,
      colorsAmount: colors.length
    };
  },

  methods: {
    setLayoutTheme: function setLayoutTheme(theme) {
      var self = this;
      var app = self.$f7;
      app.root.removeClass('theme-dark theme-light').addClass('theme-' + theme);
    },
    setColorTheme: function setColorTheme(color) {
      var self = this;
      var app = self.$f7;
      var currentColorClass = app.root[0].className.match(/color-theme-([a-z]*)/);
      if (currentColorClass) app.root.removeClass(currentColorClass[0]);
      app.root.addClass('color-theme-' + color);
    }
  }
};

/***/ }),
/* 219 */
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-316420c6","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/color-themes.vue ***!
  \**********************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Color Themes",
      "back-link": "Back"
    }
  }), _vm._v(" "), _c('f7-block-title', [_vm._v("Layout Themes")]), _vm._v(" "), _c('f7-block', [_c('p', [_vm._v("Framework7 comes with 2 main layout themes: Light (default) and Dark:")]), _vm._v(" "), _c('f7-row', [_c('f7-col', {
    staticClass: "bg-color-white",
    staticStyle: {
      "cursor": "pointer",
      "padding": "30px",
      "border": "1px solid rgba(0,0,0,0.1)"
    },
    attrs: {
      "width": "50"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setLayoutTheme('light')
      }
    }
  }), _vm._v(" "), _c('f7-col', {
    staticClass: "bg-color-black",
    staticStyle: {
      "cursor": "pointer",
      "padding": "30px",
      "border": "1px solid rgba(255,255,255,0.1)"
    },
    attrs: {
      "width": "50"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setLayoutTheme('dark')
      }
    }
  })], 1)], 1), _vm._v(" "), _c('f7-block-title', [_vm._v("Choose Color Theme")]), _vm._v(" "), _c('f7-block', [_c('p', [_vm._v("Framework7 comes with " + _vm._s(_vm.colorsAmount) + " color themes set.")]), _vm._v(" "), _c('f7-row', [_vm._l((_vm.colors), function(color) {
    return _c('f7-col', {
      key: color,
      attrs: {
        "width": "33"
      }
    }, [_c('f7-button', {
      staticStyle: {
        "margin-bottom": "1em",
        "text-transform": "capitalize"
      },
      attrs: {
        "fill": "",
        "round": "",
        "raised": "",
        "color": color
      },
      on: {
        "click": function($event) {
          _vm.setColorTheme(color)
        }
      }
    }, [_vm._v("\n          " + _vm._s(color) + "\n        ")])], 1)
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "33"
    }
  })], 2)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-316420c6", module.exports)
  }
}

/***/ }),
/* 220 */
/*!***************************************!*\
  !*** ./src/assets/vue/pages/chat.vue ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./chat.vue */ 221),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-24521881","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./chat.vue */ 222),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/chat.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] chat.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24521881", Component.options)
  } else {
    hotAPI.reload("data-v-24521881", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 221 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/chat.vue ***!
  \****************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      attachments: [],
      sheetVisible: false,
      messagesData: [{
        type: 'sent',
        text: 'Hi, Kate'
      }, {
        type: 'sent',
        text: 'How are you?'
      }, {
        name: 'Kate',
        type: 'received',
        text: 'Hi, I am good!',
        avatar: 'http://lorempixel.com/100/100/people/9'
      }, {
        name: 'Blue Ninja',
        type: 'received',
        text: 'Hi there, I am also fine, thanks! And how are you?',
        avatar: 'http://lorempixel.com/100/100/people/7'
      }, {
        type: 'sent',
        text: 'Hey, Blue Ninja! Glad to see you ;)'
      }, {
        type: 'sent',
        text: 'Hey, look, cutest kitten ever!'
      }, {
        type: 'sent',
        image: 'http://lorempixel.com/200/260/cats/4/'

      }, {
        name: 'Kate',
        type: 'received',
        text: 'Nice!',
        avatar: 'http://lorempixel.com/100/100/people/9'
      }, {
        name: 'Kate',
        type: 'received',
        text: 'Like it very much!',
        avatar: 'http://lorempixel.com/100/100/people/9'
      }, {
        name: 'Blue Ninja',
        type: 'received',
        text: 'Awesome!',
        avatar: 'http://lorempixel.com/100/100/people/7'
      }],
      images: ['http://lorempixel.com/300/300/cats/1/', 'http://lorempixel.com/200/300/cats/2/', 'http://lorempixel.com/400/300/cats/3/', 'http://lorempixel.com/300/150/cats/4/', 'http://lorempixel.com/150/300/cats/5/', 'http://lorempixel.com/300/300/cats/6/', 'http://lorempixel.com/300/300/cats/7/', 'http://lorempixel.com/200/300/cats/8/', 'http://lorempixel.com/400/300/cats/9/', 'http://lorempixel.com/300/150/cats/10/'],
      people: [{
        name: 'Kate Johnson',
        avatar: 'http://lorempixel.com/100/100/people/9'
      }, {
        name: 'Blue Ninja',
        avatar: 'http://lorempixel.com/100/100/people/7'
      }],
      answers: ['Yes!', 'No', 'Hm...', 'I am not sure', 'And what about you?', 'May be ;)', 'Lorem ipsum dolor sit amet, consectetur', 'What?', 'Are you sure?', 'Of course', 'Need to think about it', 'Amazing!!!'],
      responseInProgress: false
    };
  },

  // Resize page when attachments or sheet become visible
  watch: {
    attachmentsVisible: function attachmentsVisible() {
      var self = this;
      self.$nextTick(function () {
        self.messagebar.resizePage();
      });
    },
    sheetVisible: function sheetVisible() {
      var self = this;
      self.$nextTick(function () {
        self.messagebar.resizePage();
      });
    }
  },
  computed: {
    attachmentsVisible: function attachmentsVisible() {
      var self = this;
      return self.attachments.length > 0;
    },
    placeholder: function placeholder() {
      var self = this;
      return self.attachments.length > 0 ? 'Add comment or Send' : 'Message';
    }
  },
  methods: {
    isFirstMessage: function isFirstMessage(message, index) {
      var self = this;
      var previousMessage = self.messagesData[index - 1];
      if (message.isTitle) return false;
      if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
      return false;
    },
    isLastMessage: function isLastMessage(message, index) {
      var self = this;
      var nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
      return false;
    },
    isTailMessage: function isTailMessage(message, index) {
      var self = this;
      var nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
      return false;
    },
    sheetToggle: function sheetToggle() {
      var self = this;
      self.sheetVisible = !self.sheetVisible;
    },
    deleteAttachment: function deleteAttachment(image) {
      var self = this;
      var index = self.attachments.indexOf(image);
      self.attachments.splice(index, 1)[0]; // eslint-disable-line
    },
    handleAttachment: function handleAttachment(e) {
      var self = this;
      var index = self.$$(e.target).parents('label.checkbox').index();
      var image = self.images[index];
      if (e.target.checked) {
        // Add to attachments
        self.attachments.unshift(image);
      } else {
        // Remove from attachments
        self.attachments.splice(self.attachments.indexOf(image), 1);
      }
    },
    sendMessage: function sendMessage() {
      var _self$messagesData;

      var self = this;
      var text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();
      var messagesToSend = [];
      self.attachments.forEach(function (attachment) {
        messagesToSend.push({
          image: attachment
        });
      });
      if (text.trim().length) {
        messagesToSend.push({
          text: text
        });
      }
      // Reset attachments
      self.attachments = [];
      // Hide sheet
      self.sheetVisible = false;
      // Clear area
      self.messagebar.clear();
      // Focus area
      if (text.length) self.messagebar.focus();
      // Send message
      (_self$messagesData = self.messagesData).push.apply(_self$messagesData, messagesToSend);

      // Mock response
      if (self.responseInProgress) return;
      self.responseInProgress = true;
      setTimeout(function () {
        var answer = self.answers[Math.floor(Math.random() * self.answers.length)];
        var person = self.people[Math.floor(Math.random() * self.people.length)];
        self.messages.showTyping({
          header: person.name + ' is typing',
          avatar: person.avatar
        });
        setTimeout(function () {
          self.messagesData.push({
            text: answer,
            type: 'received',
            name: person.name,
            avatar: person.avatar
          });
          self.messages.hideTyping();
          self.responseInProgress = false;
        }, 4000);
      }, 1000);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$f7ready(function (f7) {
      var self = _this;
      self.messagebar = self.$refs.messagebar.f7Messagebar;
      self.messages = self.$refs.messages.f7Messages;
    });
  }
};

/***/ }),
/* 222 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24521881","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/chat.vue ***!
  \**************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Messsages",
      "back-link": "Back"
    }
  }), _vm._v(" "), _c('f7-messagebar', {
    ref: "messagebar",
    attrs: {
      "placeholder": _vm.placeholder,
      "attachmentsVisible": _vm.attachmentsVisible,
      "sheetVisible": _vm.sheetVisible
    }
  }, [_c('f7-link', {
    attrs: {
      "slot": "inner-start",
      "icon-if-ios": "f7:camera_fill",
      "icon-if-md": "f7:camera_alt"
    },
    on: {
      "click": _vm.sheetToggle
    },
    slot: "inner-start"
  }), _vm._v(" "), _c('f7-link', {
    attrs: {
      "slot": "inner-end",
      "icon-if-ios": "f7:arrow_up_fill",
      "icon-if-md": "material:send"
    },
    on: {
      "click": _vm.sendMessage
    },
    slot: "inner-end"
  }), _vm._v(" "), _c('f7-messagebar-attachments', _vm._l((_vm.attachments), function(image, index) {
    return _c('f7-messagebar-attachment', {
      key: index,
      attrs: {
        "image": image
      },
      on: {
        "attachment:delete": function($event) {
          _vm.deleteAttachment(image)
        }
      }
    })
  })), _vm._v(" "), _c('f7-messagebar-sheet', _vm._l((_vm.images), function(image, index) {
    return _c('f7-messagebar-sheet-image', {
      key: index,
      attrs: {
        "image": image,
        "checked": _vm.attachments.indexOf(image) >= 0
      },
      on: {
        "change": _vm.handleAttachment
      }
    })
  }))], 1), _vm._v(" "), _c('f7-messages', {
    ref: "messages"
  }, [_c('f7-messages-title', [_c('b', [_vm._v("Sunday, Feb 9,")]), _vm._v(" 12:58")]), _vm._v(" "), _vm._l((_vm.messagesData), function(message, index) {
    return _c('f7-message', {
      key: index,
      attrs: {
        "type": message.type,
        "text": message.text,
        "image": message.image,
        "name": message.name,
        "avatar": message.avatar,
        "first": _vm.isFirstMessage(message, index),
        "last": _vm.isLastMessage(message, index),
        "tail": _vm.isTailMessage(message, index)
      }
    })
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24521881", module.exports)
  }
}

/***/ }),
/* 223 */
/*!***************************************!*\
  !*** ./src/assets/vue/pages/vuex.vue ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ 8)(
  /* script */
  __webpack_require__(/*! !babel-loader?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./vuex.vue */ 224),
  /* template */
  __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-de75a04a","hasScoped":false}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./vuex.vue */ 225),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jaime/Documents/everest/app/src/assets/vue/pages/vuex.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vuex.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-de75a04a", Component.options)
  } else {
    hotAPI.reload("data-v-de75a04a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 224 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"presets":["env"],"plugins":["transform-object-rest-spread"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/assets/vue/pages/vuex.vue ***!
  \****************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(/*! vuex */ 75);

exports.default = {
  computed: _extends({}, (0, _vuex.mapState)({
    user: function user(state) {
      return state.user;
    }
  })),
  methods: _extends({
    loginAction: function loginAction() {
      var self = this;
      // Set new user into storage
      self.userLogged({ name: "User", id: "#1" });
    }
  }, (0, _vuex.mapActions)(['userLogged']))
};

/***/ }),
/* 225 */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-de75a04a","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/assets/vue/pages/vuex.vue ***!
  \**************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "About F7",
      "back-link": "Back",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block-title', [_vm._v(_vm._s(_vm.user.name ? "You are already logged" : "Please login"))]), _vm._v(" "), _c('f7-list', [(_vm.user.name) ? _c('f7-list-group', [_c('f7-list-item', [_vm._v("ID: " + _vm._s(_vm.user.id))]), _vm._v(" "), _c('f7-list-item', [_vm._v("Username: " + _vm._s(_vm.user.name))])], 1) : _vm._e()], 1), _vm._v(" "), _c('f7-list', [_c('f7-list-button', {
    attrs: {
      "color": "blue"
    },
    on: {
      "click": _vm.loginAction
    }
  }, [_vm._v("Login Button")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-de75a04a", module.exports)
  }
}

/***/ }),
/* 226 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-44d00cc0","hasScoped":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/main.vue ***!
  \*********************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_vm._v("\n  hola\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44d00cc0", module.exports)
  }
}

/***/ }),
/* 227 */
/*!************************************!*\
  !*** ./src/assets/vuex/storage.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ 32);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(/*! vuex */ 75);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

exports.default = new _vuex2.default.Store({
  state: {
    user: {}
  },

  actions: {
    userLogged: function userLogged(_ref, user) {
      var commit = _ref.commit;

      commit('USER_LOGGED', user);
    }
  },

  mutations: {
    USER_LOGGED: function USER_LOGGED(state, user) {
      state.user = user;
    }
  }
});

/***/ })
/******/ ]);