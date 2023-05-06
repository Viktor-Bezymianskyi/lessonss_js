'use srtict';

//defer  загружается в фоном режиме браузером вместе с DOM
//скрипты с таким атрибутом всегда выполняються после полной
//загрузки DOM

const p = document.querySelectorAll('p');
console.log(p);

//async 1) страница не ждет асинхроные скрипты, содержимое просто обрабатывается
// и отображается
//2) DOM контент лоадэд и асинхронные скрипты не ждут друг друга
/* 
const script = document.createElement('script');
script.src  = 'js/closures.js';
// script.async = false; по умолчанию true
document.body.append(script); */


function loadScript(src) {
	const script = document.createElement('script');
	script.src  = src;
	document.body.append(script);
}

loadScript('js/closures.js');