/* Разница между объектами и массивами и 
неочевидные синтаксические возможности */

/* const arr = [1, 2, 3]; */
/* const arrObj = {
	0: 2;,
	1: 2,
	2: 3 
}; */
const arr = ['a', 'b', 'c'];
const arrObj = {
	0: 'a',
	1: 'b',
	2: 'c' 
};

const b = 'b';

/* arrObj.b = '1234'; */
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);
/* console.log(arr[2]); */

/* const obj = {a: 1, b: 2}; */
const obj = {
	'Anna': 500,
	'Alice': 800
};



