import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/style.scss');

let { name } = require('./js/logic');

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez',
};

const element = (
	<h1>
		Hello, {name}!
	</h1>
);

ReactDOM.render(element, document.getElementById('root'));
