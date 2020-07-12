(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('a'), require('b')) :
	typeof define === 'function' && define.amd ? define(['a', 'b'], factory) :
	(global = global || self, factory(global.thisIsA, global.thisIsB));
}(this, (function (a, b) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	a = _interopDefault(a);
	b = _interopDefault(b);

	console.log(a, b);

})));
