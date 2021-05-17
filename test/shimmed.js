'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.parseFloat.length, 1, 'Number.parseFloat has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.parseFloat.name, 'parseFloat', 'Number.parseFloat has name "parseFloat"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'parseFloat'), 'Number.parseFloat is not enumerable');
		et.end();
	});

	t.test('is the same object as the global parseFloat', function (st) {
		// fixed in WebKit nightly in https://bugs.webkit.org/show_bug.cgi?id=143799#add_comment
		st.equal(Number.parseFloat, parseFloat);
		st.end();
	});

	runTests(Number.parseFloat, t);

	t.end();
});
