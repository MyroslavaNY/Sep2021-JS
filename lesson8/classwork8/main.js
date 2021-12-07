// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainElement = document.getElementById("main_header");
console.log(mainElement);
mainElement.classList.add("Sep2021");

// b) робить шириниу елементу ul 400px
let ulElements = document.getElementsByTagName("ul");
for (let ulElement of ulElements) {
 console.log(ulElement);
 ulElement.style.width = '400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
 let linkClasses = document.getElementsByClassName("linkList");
 for (let linkClass of linkClasses) {
  linkClass.style.width = '50%';
  console.log(linkClass)
 }

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement =document.getElementsByClassName(`listElement2`);
for (let listElementElement of listElement) {
 console.log(listElementElement.textContent)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName("li")
for (let liElement of liElements) {
 liElement.style.background = "grey";
 console.log(liElement)
}

// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aElements = document.getElementsByTagName("a")
// for (let aElement of aElements) {
//  aElement.classList.add("anchor");
//  console.log(aElement);
//  if (aElement.textContent === 'link3'){
//   aElement.style.fontSize = "40px";
//  }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElement of aElements) {
 aElement.classList.add(aElement.textContent)
 console.log(aElement)}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subElements = document.getElementsByClassName("sub-header");
for (let subElement of subElements) {
 subElement.style.background = prompt('enter color')
 console.log(subElement)
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let subElement of subElements) {
 if (subElement.textContent === "content 2 segment "){
  subElement.style.color = prompt('What color do you want?')
  console.log(subElement)
 }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentElements = document.getElementsByClassName("content_1")
for (let contentElement of contentElements) {
 contentElement.textContent = prompt('Write what you want');
 console.log(contentElement)
}
// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName("p");
for (let pElement of pElements) {
 pElement.style.padding = '20px'
}
console.log(pElements)
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
let classElements = document.getElementsByClassName("text2");
for (let classElement of classElements) {
 classElement.textContent = 'sep-2021';
 console.log(classElement)
}








