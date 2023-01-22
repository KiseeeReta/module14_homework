
//============================================================Задача №3 ==============================================================

/**Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит
 *  следующее: Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
 *             Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, 
 *             где get-параметр limit — это введённое число.
 */

function useRequest(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log('Статус ответа: ', xhr.status);
		} else {
			const result = JSON.parse(xhr.response);
			if (callback) {
				callback(result);
			}
		}
	};
	xhr.onerror = function() {
		console.log('Ошибка! Статус ответа: ', xhr.status);
	};
	xhr.send();
};

function displayResult(apiData) {
	let cards = '';
	apiData.forEach(item => {
		const cardBlock = `
		<div class="card">
			<img src="${item.download_url}" class="card-image"/>
			<p>${item.author}</p>
		</div>
		`;
		cards = cards + cardBlock;
	});
	resultNode.innerHTML = cards;
}

document.querySelector(".btn-work").onclick = myClick;
const text = document.querySelector(".block-text-work");
const resultNode = document.querySelector(".result-work");

function myClick() {
	let val = document.querySelector(".inp-work").value;
	if (val >= 1 && val <= 10) {
		useRequest('https://picsum.photos/v2/list?' + `limit=${val}`, displayResult);
	} else {
		text.innerHTML = ('«число вне диапазона от 1 до 10»');
		setTimeout(reset, 2000);
	}
}

function reset() {
	location.reload();
}