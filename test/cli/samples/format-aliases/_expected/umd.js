(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('external')) :
	typeof define === 'function' && define.amd ? define(['exports', 'external'], factory) :
	(global = global || self, factory(global.bundle = {}, global.external));
}(this, (function (exports, external) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	external = _interopDefault(external);

	console.log('main');

	exports.value = external;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
