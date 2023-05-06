'use strict';
//события на мобильных устройствах
// touchstart касание
// touchmove палец при касаний начинает двигатся, каждый раз при смещении
// будет срабатывать 
// touchend как только палец оторвался от єлемента
// touchenter ведем пальцем по экрану и наскальзываем на такой элемент
// touchleave после наскальзывание продожается движение
// touchcancel точка соприкосновения больше не регистрируется

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('Start');
		console.log(e.touches);
	});

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();

		console.log('Move');
	});

	box.addEventListener('touchend', (e) => {
		e.preventDefault();

		console.log('End');
	});
});

// touches количество список пальцев что делают
// targetTouches все пальцы которые взаимодействуют с конкретным элементом
// changedTouches список пальцев которые учавствуют в текущем событии
