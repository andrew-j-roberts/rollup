(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('external1'), require('external2')) :
	typeof define === 'function' && define.amd ? define(['external1', 'external2'], factory) :
	(global = global || self, global.bundle = factory(global.external1, global.external2));
}(this, (function (external1, external2) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	external2 = _interopDefault(external2);

	console.log(external1.foo);

	return external2;

})));
