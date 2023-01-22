
//==================================Задача №4 ===================================
// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
// В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, 
// где первое число — ширина картинки, второе — высота.

const button = document.querySelector('.btn');
const text = document.querySelector(".text");
const resultNode = document.querySelector(".result");

button.addEventListener('click', () => {
	let inputOne = document.querySelector('.inpone').value;
	let inputTwo = document.querySelector('.inptwo').value;
	if ((inputOne >= 100 && inputOne <= 300) && (inputTwo >= 100 && inputTwo <= 300)) {
		fetch(`https://picsum.photos/${inputOne}/${inputTwo}`)
		.then(() => {
			resultNode.innerHTML = `<img src="https://picsum.photos/${inputOne}/${inputTwo}"/>`;
		})
		.catch(() => {
			console.log('error');
		})
	} else {
		text.innerHTML = '«одно из чисел вне диапазона от 100 до 300»';
		setTimeout(reset, 2000);
	}
});

function reset() {
	location.reload();
}