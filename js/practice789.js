'use strict';

function calculateVolumeAndArea(length) {
	if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
		return console.log('При вычислении произошла ошибка');
	}

	let s = 0,
		v = 0;
	s = 6 * ( length * length);
	v = length * length * length;
	return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

calculateVolumeAndArea(14);

function getCoupeNumber(num) {
	if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0)  {
		return (console.log('Ошибка. Проверьте правильность введенного номера места'));
        
	}
	if (num === 0 || num > 36) {
		return console.log('Таких мест в вагоне не существует');
	}
	return Math.ceil(num / 4);
}

getCoupeNumber(12);


// Место для первой задачи
function getTimeFromMinutes(num) {
	if (typeof (num) !== 'number' || !Number.isInteger(num) || num < 0) {
		return num = 'Ошибка, проверьте данные';
	}
    
	const minute = num % 60;
	const	hour = Math.floor(num / 60);
	let	strhour = '';

	switch (hour) {
	case 0:
		strhour = 'часов';   
		break;
	case 1:
		strhour = 'час';   
		break;    
	case 2: 
	case 3:
	case 4:
		strhour = 'часа';   
		break;
	
	default:
		strhour = 'часов';   
		break;                    
	}
	return `Это ${hour} ${strhour} и ${minute} минут`;
}

getTimeFromMinutes(94);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
		return 0;
	} else {
		return Math.max(a, b, c, d);
	}
}

console.log(findMaxNumber(10, 77, 3, 18));


function fib(num) {
	if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
		return '';
	}

	let result = '',
		first = 0,
		second = 1;
    

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
		} else {
			result += `${first} `;
		}
		let third = first + second;
		first = second;
		second = third;
		
	}
	return result;
}

console.log(fib(15));