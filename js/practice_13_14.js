const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let area = 0;
	let volume = 0;

	data.shops.forEach(shop => {
		area += shop.width * shop.length;
	});

	volume = data.height * area;
	/* console.log(area);
	console.log(volume);
	console.log(volume * data.moneyPer1m3); */
	if (data.budget - (volume * data.moneyPer1m3) >= 0) {
		return 'Бюджета достаточно';
	} else {
		let minus = (volume * data.moneyPer1m3) - data.budget;
		return `Бюджета недостаточно -${minus}`;
	}
}

isBudgetEnough(shoppingMallData);

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
	arr.sort();
	let a = [], b = [], c = [], rest = [];

	for (let i = 0; i < arr.length; i++) {
		if(i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	}
	return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);

console.log(sortStudentsByGroups(students));

