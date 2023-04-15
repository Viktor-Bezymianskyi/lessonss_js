'use strict';

/* const obj = new Object(); */

const options = {
	name: 'test',
	width: 1024,
	heigth: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function(){
		console.log('test');
	}
};

/* options.makeTest();
console.log(Object.keys(options).length); */


const {border, bg} = options.colors;
console.log(border);

/* console.log(options['colors']['border']); */

/* delete options.name; */
/* 
console.log(options); */
let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеете значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Свойства ${key} имеете значение ${options[key]}`);
		counter++;
	}
	
}

console.log(counter);





