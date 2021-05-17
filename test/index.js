'use strict';

var parseFloat = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(parseFloat, t);

	t.end();
});
