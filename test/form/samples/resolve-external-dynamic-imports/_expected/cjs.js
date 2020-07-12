'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var myExternal = require('external');

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

var myExternal__default = _interopDefault(myExternal);

function _interopNamespace(e) {
	if (e && e.__esModule) { return e; } else {
		var n = {};
		if (e) {
			Object.keys(e).forEach(function (k) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			});
		}
		n['default'] = e;
		return n;
	}
}

const test = () => myExternal__default.default;

const someDynamicImport = () => Promise.resolve().then(function () { return _interopNamespace(require('external')); });

exports.someDynamicImport = someDynamicImport;
exports.test = test;
