'use strict';


const box = document.getElementById('box');

/* console.log(box); */

const btns = document.getElementsByTagName('button')/* [1] */;

/* console.log(btns[1]); */

const circles = document.getElementsByClassName('circle');

/* console.log(circles[1]); */
const wrapper = document.querySelector('.wrapper');

const hearts = wrapper.querySelectorAll('.heart');

/* hearts.forEach(item => {
	console.log(item);
}); */

const oneHeart = wrapper.querySelector('.heart');

/* console.log(oneHeart); */

/* console.dir(box); */





box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';

/* for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // создание элемента
/* const text = document.createTextNode('Тут был я'); */

div.classList.add('black');

/* document.body.append(div); */

/* document.querySelector('.wrapper').append(div); */

wrapper.append(div);

/* wrapper.prepend(div); */

/* 
hearts[0].before(div);
hearts[0].after(div);

circles[0].remove(); */
/* wrapper.removeChild(hearts[1]); */

hearts[0].replaceWith(circles[0]);
/* wrapper.replaceChild(circles[0], hearts[0]); */

/* wrapper.appendChild(div); */
/* 
wrapper.insertBefore(div, hearts[0]);
 */

div.innerHTML = '<h1>Hello World</h1>';

/* div.textContent = 'Hello'; */

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');









