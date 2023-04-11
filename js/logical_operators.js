/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
	console.log('Yami');
}

console.log((hamburger && fries)); */

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(5 && 2);
console.log(null && 5);
console.log(0 && 'sdasdas');


if (hamburger === 3 && cola === 1 && fries) {
	console.log('Все сыты');
} else {
	console.log('Уходим');
} */

const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 || cola === 1 || fries) {
	console.log('Все сыты');
} else {
	console.log('Уходим');
}

console.log((hamburger === 2 || cola === 1 || fries == 1));

console.log(!0); //true ! логический оператор "не"