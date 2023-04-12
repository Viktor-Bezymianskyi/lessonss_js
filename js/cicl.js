/* eslint-disable for-direction */
'use strict';

let num = 50;

/* while (num <= 55) {
	console.log(num);
	num++;
} */

/* do {
	console.log(num);
	num++;
}
while (num <= 55); */

for (let i = 1; i <= 10; i++) {
	if (i === 6) {
		/* break; */
		continue;
	}
	console.log(i);
}

// Цикл в Цикле, Метки

for (let i = 0; i < 3; i++ ) {
	console.log(i);
	for (let j = 0; j < 3; j++ ) {
		console.log(j);
	}
}

/* *
**
***
****
*****
****** */

let result = '';
const lenth = 7;

for (let i = 1; i < lenth; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';
}

console.log(result);



first: for (let i = 0; i < 3; i++ ) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++ ) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++ ) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}


function firstTask() {
	for ( let i = 5; i <= 10; i++) {
		console.log(i);
	}
	let num = 5;
	while (num <=10){
		console.log(num);
		num++;
	}
    
}

function secondTask() {
	for (let i = 20; i >= 10; i--) {
		if (i == 12) break;
		console.log(i);
	}
}

	let i = 20;
	while (i >= 10){
		if (i == 12) {
			break;
		}
		console.log(i);
		i--;
	}
}

function thirdTask() {
	for (let i = 2; i <=10; i++) {
		console.log(i);
		++i;
	}
	for (let i = 2; i<=10; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}


let i = 2;
while (i <= 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i < 11; i++) {
		arrayOfNumbers[i - 5] = i;
	}
	
	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}

console.log('my user log');


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}
	
	console.log(result);
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

	for (let i = 0; i < data.length; i++) {
		if (typeof(data[i]) === 'number') {
			data[i] *= 2;
			continue;
		} else if (typeof (data[i]) === 'string') {
			data[i] += ' - done';
		}
	}
   
	console.log(data);
    return data;
}

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
		result[i-1] = data[data.length - i]
	}
	console.log(result);
    return result;
}

const lines = 5;
let result = '';


for (let i = 0; i <= lines; i++) {
	for (let j = 0; j <=i; j++) {
		if (j === 0) {
			result += ' '.repeat(lines - i);
			result += '*';
		} else {
			result += '**';
		}
	}
	
	result += '\n';
}

console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j <= lines - i; j++) {
		result += ' ';
	}
	for (let g = 0; g < 2 * i + 1; g++) {
		result += '*';
	}
	
	result += '\n';
}

console.log(result);