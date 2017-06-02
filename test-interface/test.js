//let { addClass } = require('./test_logic');

function addClass(el, newClass) {
	if (el.className.indexOf(newClass) === -1) {
		el.className += newClass;
	}
}

mocha.setup('bdd');
var assert = chai.assert;

describe('addClass', function() {
	it('should add class into element', function() {
		var element = document.getElementById('heading');

		addClass(element, 'test-class');

		assert.equal(element.className, 'test-class');
	});

	it('should not add a class which already exists in element');
});

mocha.run();
