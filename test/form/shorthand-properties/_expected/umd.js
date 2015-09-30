(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(this, function () { 'use strict';

	function bar$1 () {
		return 'main-bar';
	}

	function bar () {
		return 'foo-bar';
	}

	var foo = {
		bar,
		baz: bar$1
	};

	assert.equal( bar$1(), 'main-bar' );
	assert.equal( foo.bar(), 'foo-bar' );

}));
