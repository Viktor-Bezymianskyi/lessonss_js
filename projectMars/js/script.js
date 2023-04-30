/* eslint-disable linebreak-style */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...'
		]
	};
	
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		list = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');


	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;
		const favorite = checkbox.checked;

		if (newFilm) {

			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.log('Добавляем любимый фильм');
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, list);
		}
	
		event.target.reset();
	});
	

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			/* item.style.cssText = 'display: none'; */ //мое первое решение рабочее
			item.remove(); //с урока
		});
		
		/* arr.forEach(function (item){
			item.remove();
		}); */
	};

	
	
	
	const makeChanges = () => {
		genre.textContent = 'драма';
	
		poster.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	
	
	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);
			
		films.forEach((film, i) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
				<div class="delete"></div>
			</li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(films, parent);
			});
		});
	}

	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, list);
	
});


