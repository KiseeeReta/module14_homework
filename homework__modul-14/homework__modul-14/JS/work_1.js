
//==================================Задача №1 Преобразовать XML в JS-объект и вывести его в консоль =====================================

const parser = new DOMParser();                                    // создаю экземпляр класса DOMParser. Он позволит парсить XML.
                                                                   // ниже XML, который буду парсить (строковый тип)
const xmlString = `
<list>
<student1>
	<name lang="en">
		<first>Ivan</first>
		<second>Ivanov</second>
	</name>
	<age>35</age>
	<prof>teacher</prof>
</student1>
<student2>
	<name lang="ru">
		<first>Петр</first>
		<second>Петров</second>
	</name>
	<age>58</age>
	<prof>driver</prof>
</student2>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");      // вызываю метод в котором первое значение это XML, второе это тип данных

const listNode = xmlDOM.querySelector("list");

const student1Node = listNode.querySelector("student1");
const name1Node = student1Node.querySelector("name");
const first1Node = name1Node.querySelector("first");
const second1Node = name1Node.querySelector("second");
const age1Node = student1Node.querySelector("age");
const prof1Node = student1Node.querySelector("prof");
const lang1Attr = name1Node.getAttribute('lang');

const student2Node = listNode.querySelector("student2");
const name2Node = student2Node.querySelector("name");
const first2Node = name2Node.querySelector("first");
const second2Node = name2Node.querySelector("second");
const age2Node = student2Node.querySelector("age");
const prof2Node = student2Node.querySelector("prof");
const lang2Attr = name2Node.getAttribute('lang');

const list = [{
	student_1: {
		name: first1Node.textContent +" "+ second1Node.textContent,
		age: Number(age1Node.textContent),
		prof: prof1Node.textContent,
		lang: lang1Attr,
	},
	student_2: {
		name: first2Node.textContent +" "+ second2Node.textContent,
		age: Number(age2Node.textContent),
		prof: prof2Node.textContent,
		lang: lang2Attr,
	},
}];
console.log('list', list);