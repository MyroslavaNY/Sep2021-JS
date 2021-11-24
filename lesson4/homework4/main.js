//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRect(a,b) {
//     let c=a*b;
//     return c;
// }
// areaRect(4,8);
// console.log(c)
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaR(r) {
//     return Math.PI*r*r;
// }
// areaR(3);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCylinder(h,r) {
//     return 2*Math.PI*r*h;
// }
// sCylinder(5,2)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function print(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function aboutP(text) {
//     document.write(`<p>${text}</>`);
// }
// aboutP('Hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUlLi(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// createUlLi('Hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createLi(text, size) {
//     document.write(`<ul>`);
// for (let i=0; i<size; i++){
//     document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`);
// }
// createLi('seven', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function printArr(arr) {
//     document.write(`<ul>`);
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// printArr([true,4,'sat'])
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function printMas(arr) {
//     for (let item of arr) {
//         document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`);
//     }
// };
// printMas()
