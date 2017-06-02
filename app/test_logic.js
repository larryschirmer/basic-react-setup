function addClass(el, newClass) {
	if (el.className.indexOf(newClass) === -1) {
		el.className += newClass;
	}
}

module.exports = {
	addClass,
};

define(function() {
	return {
		getHello: function() {
			return 'Hello World';
		},
	};
});
