'use strict';

let incr = 10, //оператор присваивания
	decr = 10; //оператор присваивания
    
incr++; //постфиксная форма. сначала возвращает старое 
//значение а после изменяет
decr--;//постфиксная форма. сначала возвращает старое 
//значение а после изменяет

++incr; //префиксная форма
--decr; //префиксная форма

console.log(5%2); //оператор остаток от деления 2х чисел

console.log(2*4 == 8); //оператор равенства
console.log(2*4 == '8'); //оператор равенства
console.log(2*4 === '8'); //оператор строго равенства
console.log(2 + 2 * 2 !== '6');

/* &&  *///логический оператор "и" работает когда два и обелеле являются правдивыми
/* || */ //логический оператор "или" когда хотябы один правдивый

const isChecked = false;
const isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || !isClose); // ! оператор отрицания. меняет 
//занчение на противоположное

