'use strict';

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
}

showFirstMessage('Hello World!!!');
console.log(num);
/* 
console.log(calc(4, 3));
console.log(calc(7, 2));
console.log(calc(3, 8));

function calc (a, b) {
	return (a + b);
} */



function ret() {
	let num = 60;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log('Hello');
};

logger();

/* const calc = (a, b) => {return a + b };
const another = (a, b) => a + b; */

const calc = (a, b) => {
	console.log(calc);
	return a + b;
};


const usdCurr = 26;
const eurCurr = 32.555;
const discount = 0.9;

function convert (amount, curr) {
	/* console.log(curr * amount); */
	return (curr * 
        amount);
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);

/* promotion(convert(500, usdCurr)); */
promotion(res);
/* convert(500, usdCurr);
convert(500, eurCurr); */

function test () {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done');
}

test();

function doNothing() {}
console.log(doNothing() === undefined);

// Упражнения по написанию кода номер 6

function sayHello (name) {
	return `Привет, ${name}`;
}

sayHello();
console.log(sayHello('Anton'));

function returnNeighboringNumbers(num) {
	/* return [num - 1, num, num + 1]; */
	let arr = [];
    
	for (let i = 1; i <=3; i++) {
		if (Number.isInteger(num) && i == 1) {
			arr [i-1] = num - 1; 
		} else if (Number.isInteger(num) && i == 2 ) {
			arr [i-1] = num;
		} else if (Number.isInteger(num) && i == 3 ) {
			arr [i-1] = num + 1;
			/* continue; */
		}/*  else {
			arr = console.log('Введите целое число');
			break;
		} */
	}
	return arr;
}

returnNeighboringNumbers();

console.log(returnNeighboringNumbers(8));

function getMathResult(a, b) {
	if (typeof(b) !== 'number' || b <= 0) {
		return a;
	}

	let result = '';

	for (let i = 1; i <= b; i++) {
		if (i === b) {
			result += `${i * a}`;
		} else {
			result += `${i * a}---`;
		}
	}
	return result;
}

getMathResult();
console.log(getMathResult(3,5));



