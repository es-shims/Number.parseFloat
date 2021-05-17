import parseFloat, * as parseFloatModule from 'number.parsefloat';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(parseFloat, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(parseFloatModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = parseFloatModule;
	t.equal(await import('number.parsefloat/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('number.parsefloat/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('number.parsefloat/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
