import callBind from 'call-bind';

import getPolyfill from 'number.parsefloat/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'number.parsefloat/polyfill';
export { default as implementation } from 'number.parsefloat/implementation';
export { default as shim } from 'number.parsefloat/shim';
