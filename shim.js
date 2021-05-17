'use strict';

var define = require('define-properties');

module.exports = function shimMathParseFloat() {
	define(Number, { parseFloat: parseFloat });
	return parseFloat;
};
