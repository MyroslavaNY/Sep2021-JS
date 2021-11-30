// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let nMin = (a,b,c) => {
//     if (a<=b && a<=c){
//     console.log(a)
// }
// else if (b<=a && b<=c){
//     console.log(b)
// }
// else if (c<=a && c<=b){
//     console.log(c)
// }}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let nMax = (a,b,c) => {
//     if (a>=b && a>=c){
//         console.log(a)
//     }
//     else if (b>=a && b>=c){
//         console.log(b)
//     }
//     else if (c>=a && c>=b){
//         console.log(c)
//     }
// }
// - створити функцію яка повертає найбільше число з масиву

// - створити функцію яка повертає найменьше число з масиву
// let masMin = (...arguments )=> {
//     let minMas = [0]
//     for (let argument of arguments) {
//         if (argument< minMas){
//          minMas = argument;
//             console.log(minMas);
//     }
//     }
//     return arguments;
// }
// masMin();

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let masSum = (...arguments) => {
//     let summ = 0;
//     for (let argument of arguments) {
//         summ= summ+argument;
//     }
//     return summ;
// }
// masSum([7,5,9])
// console.log(masSum())

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let aboutMathMean = (arr)=>{
//     let sum=0;
//     let mathMean=sum/arr.length;
//     for (const item of arr) {
//         sum =sum+item;
//     }
//     return mathMean;
// }
// aboutMathMean(6,5,2,5,4)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numMinMax = () => {
//     let min = [0];
//     let max = [0];
//     for (let element of arguments) {
//         if (element>max){
//             max=element;
//             console.log(max);
//         }
//         if (element<min){
//             min=element;
//         }
//     }
//     return min;
// }
// numMinMax();


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let numRandom = (arr) => {
//     for (let i=0; i<100; i++) {
//         arr[i] = Math.round(Math.random()*100);
//         }
//     return arr;
// }
// numRandom()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let numLim = (arr,limit) => {
//   for (let i=0; i<limit; i++){
//         arr[i]= Math.round(Math.random()*limit);
//   }
//  return arr;
// }
// numLim()

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let printNewMas = (arr) => {
//     let newMas =[];
//     for (let item = arr.length-1; item>=0; item--) {
//         let newArr = arr[item];
//         newMas.push(newArr);
//     }
//     return newMas;
// }
// printNewMas()
