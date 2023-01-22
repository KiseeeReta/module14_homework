const button = document.querySelector('.btn');
const text = document.querySelector(".text");
const resultNode = document.querySelector(".result");

button.addEventListener('click', () => {
    let page = document.querySelector(".inpone").value;
    let limit = document.querySelector(".inptwo").value;
    if (page > 0 && page < 11 && limit > 0 && limit < 11) {
        let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            let response = JSON.parse(xhr.response);
            let images = ``;
            localStorage.getItem("images", images);
            for (let img of response) {
                images += `<img src="${img.download_url}" width="300px" style="margin: 20px;">`;
            }
            resultNode.innerHTML = images;
            localStorage.setItem("images", JSON.stringify(images));
        }
        xhr.send();
    } else if (page < 1 || page > 10 && limit > 0 && limit < 11) {
		text.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
		setTimeout(reset, 2000);
	} else if (limit < 1 || limit > 10 && page > 0 && page < 11) {
        text.innerHTML = 'Лимит вне диапазона от 1 до 10';
        setTimeout(reset, 2000);
    } else {
        text.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10»';
        setTimeout(reset, 2000);
    }
});

function reset() {
	location.reload();
}