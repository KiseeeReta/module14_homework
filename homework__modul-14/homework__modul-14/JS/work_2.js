
//================================== Задача №2---Преобразовать JSON в JS-объект и вывести в консоль ======================================

const jsonString = `
{
	"list": [
		{
			"name": "Petr",
			"age": "20",
			"prof": "mechanic"
		},
		{
			"name": "Vova",
			"age": "60",
			"prof": "pilot"
		}
	]
}
`;
// console.log('jsonString', jsonString);
const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('list', list);
const result = {
	list_1: list[0],
	list_2: list[1],
};
console.log("result", result);
