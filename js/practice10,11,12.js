'use strict';

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(plan) {
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function (language) {
			str += `${language.toUpperCase( ) } `;
		});

		return str;    
	}
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let newPlan = '';
	const {programmingLangs} = plan.skills;

	for (let keyPlan in programmingLangs) {
		newPlan += `Язык ${keyPlan} изучен на ${programmingLangs [keyPlan]}\n`;
	}
	return newPlan;
}

console.log(showProgrammingLangs(personalPlanPeter));



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length === 0) {
		'Семья пуста';
	} else {
		let str = 'Семья состоит из:';
		for (let i of arr) {
			str += ` ${i}`;
		}
		return str;
	}

}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
    
	});

}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';
const num = 10;

function reverse(str) {
	if (typeof(str) !== 'string') {
		return 'Ошибка!';
	}
	const newStr = str.split('').reverse().join('');
	return newStr;
}

console.log(reverse(num));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const totalCurse = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {

	/*  let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    }); */

    
	if (arr.length == 0) {
		return 'Нет доступных валют';
	}
	let str = 'Доступные валюты: \n';
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== missingCurr)
			str += `${arr[i]}\n`;
	}
	return str;
}

availableCurr(...baseCurrencies, ...additionalCurrencies, 'USD');