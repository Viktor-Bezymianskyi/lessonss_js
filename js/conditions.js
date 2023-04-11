'use strict';

/* if (4 == 9) {
	console.log('ok');
} else {
	console.log('error');
}

const num = 50;

if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('много');
} else {
	console.log('ok');
}
 */

(num === 50) ? console.log('ok') : console.log('error'); //тернарный аргумент
// 4 + 4 бинарный аргумент
// +'4' унарний аргумент

const num = 50;

switch (num) {
case 49:
	console.log('неверно');
	break;
case 100:
	console.log('неверно');
	break;
case 50:
	console.log('true');
	break;
default:
	console.log('не в этот раз');
	break;
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!');
}


