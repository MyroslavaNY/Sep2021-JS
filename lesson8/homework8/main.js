// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let contentUp = document.getElementById("content")
console.log(contentUp);

let textRules = document.getElementById("rules")
console.log(textRules);

contentUp.innerText = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, iusto.</p>'
textRules.innerText= '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda at distinctio doloribus exercitationem labore laborum officia, ullam unde voluptatibus?</div>'

contentUp.style.background = 'red';
contentUp.style.color = 'blue';
textRules.style.background = 'blue';

let classElements = textRules.getElementsByTagName("class")
console.log(classElements)

let classRules = document.getElementsByClassName("fc_rules")
console.log(classRules);
for (let classRule of classRules) {
    console.log(classRule);
    classRule.style.color = 'red'
}
