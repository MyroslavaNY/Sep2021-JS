// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function aboutMin(a,b,c) {
//     if (a<=b && a<=c){
//         console.log(a);
//     }
//     else if (b<=a &&b<=c){
//         console.log(b);
//     }
//     else if (c<=a && c<=b){
//         console.log(c)
//     }
//
// }
// aboutMin(7,15,33);
// aboutMin(34, 23,12)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function aboutMax(a,b,c) {
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
// aboutMax(4,6,2);
// aboutMax(3,2,5)
// - створити функцію яка повертає найбільше число з масиву


// function aboutNumMax() {
//     let maxNum = [0];
//     for (let argument of arguments) {
//         if (argument>=maxNum){
//             maxNum=argument;
//         }
//
//     }
//     console.log(maxNum)
// }
// aboutNumMax(2,5,7,9,22,3,112,46)
// - створити функцію яка повертає найменьше число з масиву
// function aboutNumMin() {
//     let minNum = [0];
//     for (let argument of arguments) {
//         if (argument<=minNum){
//             minNum=argument;
//         }
//     }
//     console.log(minNum);
//         return minNum;
//
// }
// aboutNumMin(6,33,7,2,68,55,3,56,31, -8)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function summNum(arguments) {
//     let summ = 0;
//     for (let argument of arguments) {
//         summ=summ+argument;
//
//     }
//     return summ;
// }
// let summ1 = summNum(3,5,7,9,12);
// console.log(summ1)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function aboutMathMean(arr) {
//     let sum=0;
//     let mathMean=sum/arr.length;
//     for (const item of arr) {
//         sum =sum+item;
//     }
//     return mathMean;
// }
// aboutMathMean(6,5,2,5,4)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function numMinMax() {
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
//
// }
// numMinMax(6,3,5,88,12,45);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function numRandom(arr){
//     for (let i=0; i<100; i++) {
//         arr[i] = Math.round(Math.random()*100);
//
//             }
//     return arr;
// }
// numRandom(20)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function numLim(arr,limit) {
//
//   for (let i=0; i<limit; i++){
//         arr[i]= Math.round(Math.random()*limit);
//
//   }
//  return arr;
// }
// numLim(30,20)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function printNewMas(arr) {
//     let newMas =[];
//     for (let item = arr.length-1; item>=0; item--) {
//         let newArr = arr[item];
//         newMas.push(newArr);
//     }
//     return newMas;
// }
// printNewMas(8,3,5,9,1)
