

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');

console.log(words[2]);


let obj = {
	name: 'Jonh',
	age: 29
};

let {...ag} = obj;

/* console.log(name); */
console.log(ag);


let arr = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
/* let newArr = []; */

let [title, n3, ...rest] = arr;

/* console.log(title, n3);
console.log(rest.length); */

let newArr = [];
newArr = [title, n3];

console.log(newArr);

let method1 = JSON.parse(JSON.stringify(obj));

const obj1 = {
	g: 4,
	meth: function wew(a, b) {
		return a + b;
	}
};

const obj2 = {
	a: 2,
	b: 5,
	c: {
		d: '2',
		e: ['Jonh', 'Smith']
	}

};

let obj3 = Object.assign({}, obj1);

let obj4 = JSON.parse(JSON.stringify(obj2));

let obj5 = 
/* obj3.c.d = 4;
obj3.meth(false); */

console.log(obj1);
/* console.log(obj2); */
console.log(obj3);


console.log(obj3.meth(3, 5));

let user = {};
[user.name, user.surname] = 'Ilya Kantor'.split(' ');

console.log(typeof(user.name)); // Ilya
/* alert(user.surname); */ // Kantor