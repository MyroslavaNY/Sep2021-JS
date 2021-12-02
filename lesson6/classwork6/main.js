// - Дано список імен.
// let n1 = 'Harry..Potter'
// let replaceAll = n1.replaceAll('..', ' ');
// console.log(replaceAll);
// let n2 = 'Ron---Whisley'
// let ns2 = n2.replaceAll('---', ' ');
// console.log(ns2);
// let n3 = 'Hermione__Granger'
// let s = n3.replaceAll('__', ' ');
// console.log(s)
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let norm = (n) => n.replaceAll('---', ' ')
//     .replaceAll('__', ' ')
//     .replaceAll('..', ' ')
// console.log(norm(n2));
//


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = [];
// let randomNum = (s) =>{
//     for (let i = 0; i < s; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
//     return arr;
// }

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randomSort = randomNum(10);
// randomSort.sort((a,b) => a-b);
// console.log(randomSort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let randomEven = randomNum(12);
// randomEven.filter(value => value % 2===0);
// console.log(randomEven)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomStr = randomNum(10);
// randomStr.map(value => value.toString());
// console.log(randomStr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let nums = [11,21,3];
// // let sortNums = (num, direction) =>{
// //     let numsSort = [];
// //     if (direction === 'ascending' ){
// //         numsSort = num.sort((a,b)=>a-b)
// //     }
// //     else if (direction === 'descending'){
// //         numsSort = num.sort((a,b)=> b-a)
// //     }
// //     return numsSort;
// // }
// // console.log(sortNums(nums,'ascending' ))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort
// ((a,b) =>
//     a.monthDuration-b.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration>5));
