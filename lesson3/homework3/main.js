// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [5, 8, 12, 33, 67];
// for (let i = 0;  i < 5; i++){
// console.log(number[i])
// }
// let word = ['one ', 'two ', 'cool ', 'with ', 'first '];
// // for (let i = 0; i<5; i++){
// // console.log(word[i])
// // }
// OR
// for (let w of word){
//     console.log(w)
// }
// let any = [5, 'sun ', true, 8, false];
// for (let i =0; any.length; i++){
//     console.log(any[i])
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let what =[];
// let go = [1,45,7,4,9, 'so', 3,8,3,2,79,5]
// for (let i = 0; i<8; i++){
//     what=go;
//     console.log(what[i])
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i =0; i<6; i++){
//     document.write(`<div>what<div/>`)
// }
// for (let i=1; i<8; i++) {
//     document.write(`<div>day ${i}</div>`)
// }
//
// let i = 0;
// while (i<20){
//     document.write('<div>about</div>');
//     i++;
// }
// let d = 0;
// while (d<=20){
//     d++;
//     let day='day';
//     console.log(day[d]);
//     document.write(`<div>day[d]</div>`);
//
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let num = [7, 3, 45, 31, 22, 12, 56, 2.3, 15, 55]
// for (let n of num){
//     console.log(n)
// }
// let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let s of str){
//     console.log(s)
// }
let any = [1, 'seven', 65, true, 'live', 2, false, 22, 67, 'end'];
// for (let e of any){
//     console.log(e)
// }
// for (let a of any){
//     if (typeof a ==="boolean"){
//         console.log(a)
//     }
// }
// for (let a of any){
//     if (typeof a === "number"){
//         console.log(a)
//     }
// }

// for (let a of any){
//     if (typeof a === "string"){
//         console.log(a)
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


// let zero = [];
// zero[1] = 8;
// zero[0] = 'what';
// zero[2] = true;
// zero[3]= 223;
// zero[4]= 'like';
// zero[5]= false;
// zero[6] = 78;
// zero[7] = 'with';
// zero[8] = 'any';
// zero[9] = 70;
// console.log(zero);
// for (let z of zero){
//     console.log(z)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i<10; i++){
//     console.log(i);
//     document.write(`<div> ${i} </div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let b = 0; b<100; b++){
//     console.log(b);
//     document.write(`<div>${b}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i<=100; i+=2){
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i<=100; i++){
//     if (i%2===0){
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i<=100; i++){
    if (i % 2 != 0){
        console.log(i);
        document.write(`<div>${i}</div>`)
    }
}
