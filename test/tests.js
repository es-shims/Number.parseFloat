'use strict';

module.exports = function (parseFloat, t) {
	t.test('should work', function (st) {
		st.equal(parseFloat('3.14'), 3.14);
		st.end();
	});
};
